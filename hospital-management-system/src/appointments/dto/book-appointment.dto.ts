import { IsUUID } from 'class-validator';

export class BookAppointmentDto {
  @IsUUID()
  patientId: string;

  @IsUUID()
  slotId: string;
}
