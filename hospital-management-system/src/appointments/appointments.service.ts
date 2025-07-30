import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
  BadRequestException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Appointment } from './entities/appointment.entity';
import { BookAppointmentDto } from './dto/book-appointment.dto';
import { Slot } from 'src/slots/entities/slot.entity';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectRepository(Appointment)
    private readonly appointmentRepo: Repository<Appointment>,

    @InjectRepository(Slot)
    private slotRepo: Repository<Slot>,
  ) {}

  async bookAppointment(dto: BookAppointmentDto): Promise<Appointment> {
    const slot = await this.slotRepo.findOne({
      where: { id: dto.slotId },
      relations: ['doctor'],
    });

    if (!slot) throw new NotFoundException('Slot not found');

    // 🧠 Count how many patients already booked this slot
    const bookingsCount = await this.appointmentRepo.count({
      where: { slot: { id: slot.id }, status: 'BOOKED' },
    });

    const limit = slot.doctor.maxBookingsPerSlot;

    if (bookingsCount >= limit) {
      throw new BadRequestException(
        `Slot already booked (${bookingsCount}/${limit})`,
      );
    }

    const appointment = this.appointmentRepo.create({
      slot,
      patient: { id: dto.patientId },
      status: 'BOOKED',
    });

    return this.appointmentRepo.save(appointment);
  }

  async getPatientAppointments(patientId: string): Promise<Appointment[]> {
    try {
      return await this.appointmentRepo.find({ where: { patientId } });
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new InternalServerErrorException(error.message);
      }
      throw new InternalServerErrorException('Failed to fetch appointments');
    }
  }

  async getAllAppointments(): Promise<Appointment[]> {
    try {
      return await this.appointmentRepo.find();
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new InternalServerErrorException(error.message);
      }
      throw new InternalServerErrorException(
        'Failed to fetch all appointments',
      );
    }
  }

  async cancelAppointment(id: string): Promise<Appointment> {
    try {
      const appointment = await this.appointmentRepo.findOne({ where: { id } });
      if (!appointment) {
        throw new NotFoundException('Appointment not found');
      }
      appointment.status = 'CANCELLED';
      return await this.appointmentRepo.save(appointment);
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new InternalServerErrorException(error.message);
      }
      throw new InternalServerErrorException('Failed to cancel appointment');
    }
  }

  async rescheduleAppointment(
    id: string,
    newSlotId: string,
  ): Promise<Appointment> {
    try {
      const appointment = await this.appointmentRepo.findOne({ where: { id } });
      if (!appointment) {
        throw new NotFoundException('Appointment not found');
      }
      appointment.slotId = newSlotId;
      appointment.status = 'RESCHEDULED';
      return await this.appointmentRepo.save(appointment);
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new InternalServerErrorException(error.message);
      }
      throw new InternalServerErrorException(
        'Failed to reschedule appointment',
      );
    }
  }
}
