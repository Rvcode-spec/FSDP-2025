import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { Patient } from '../../patients/entities/patient.entity';
import { Slot } from '../../slots/entities/slot.entity';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  patientId: string;

  @Column()
  slotId: string;

  @ManyToOne(() => Patient, { eager: true })
  @JoinColumn({ name: 'patientId' })
  patient: Patient;

  @ManyToOne(() => Slot, { eager: true })
  @JoinColumn({ name: 'slotId' })
  slot: Slot;

  @Column({ default: 'BOOKED' })
  status: 'BOOKED' | 'CANCELLED' | 'RESCHEDULED';
}
