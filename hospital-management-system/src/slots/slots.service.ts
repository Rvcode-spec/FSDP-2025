import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Slot } from './entities/slot.entity';
import { Repository } from 'typeorm';
import { CreateSlotDto } from './dto/create-slot.dto';
import { Doctor } from '../doctors/entities/doctor.entity';

@Injectable()
export class SlotsService {
  constructor(
    @InjectRepository(Slot)
    private slotRepository: Repository<Slot>,

    @InjectRepository(Doctor)
    private doctorRepository: Repository<Doctor>,
  ) {}

  async create(createSlotDto: CreateSlotDto): Promise<Slot> {
    const doctor = await this.doctorRepository.findOne({
      where: { id: 'uuid-string-here' },
    });

    if (!doctor) {
      throw new NotFoundException('Doctor not found');
    }

    const slot = this.slotRepository.create({
      startTime: createSlotDto.startTime,
      endTime: createSlotDto.endTime,
      doctor: doctor, // use fetched doctor object directly
      isAvailable: true,
    });

    return await this.slotRepository.save(slot);
  }

  async findAll(): Promise<Slot[]> {
    return this.slotRepository.find({ relations: ['doctor'] });
  }

  async findAvailableSlotsByDoctor(doctorId: number): Promise<Slot[]> {
    return this.slotRepository.find({
      where: {
        doctor: {
          id: doctorId.toString(), // ✅ convert number to string
        },
        isAvailable: true,
      },
      relations: ['doctor'],
    });
  }

  async markUnavailable(slotId: number) {
    const slot = await this.slotRepository.findOne({ where: { id: slotId } });
    if (!slot) throw new NotFoundException('Slot not found');
    slot.isAvailable = false;
    return this.slotRepository.save(slot);
  }
}
