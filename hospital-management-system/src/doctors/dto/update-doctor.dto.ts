import { PartialType } from '@nestjs/mapped-types';
import { RegisterDoctorDto } from 'src/auth/dto/register-doctor.dto';

export class UpdateDoctorDto extends PartialType(RegisterDoctorDto) {}
