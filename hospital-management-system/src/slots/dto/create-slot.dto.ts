import { IsDateString, IsUUID } from 'class-validator';

export class CreateSlotDto {
  @IsDateString()
  startTime: string;

  @IsDateString()
  endTime: string;

  @IsUUID()
  doctorId: string;
}
