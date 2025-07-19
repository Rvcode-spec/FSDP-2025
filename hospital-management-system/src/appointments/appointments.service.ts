import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Appointment } from './entities/appointment.entity';
import { BookAppointmentDto } from './dto/book-appointment.dto';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectRepository(Appointment)
    private readonly appointmentRepo: Repository<Appointment>,
  ) {}

  async bookAppointment(dto: BookAppointmentDto): Promise<Appointment> {
    try {
      const appointment = this.appointmentRepo.create({
        patientId: dto.patientId,
        slotId: dto.slotId,
        status: 'BOOKED',
      });
      return await this.appointmentRepo.save(appointment);
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new InternalServerErrorException(error.message);
      }
      throw new InternalServerErrorException('Failed to book appointment');
    }
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
