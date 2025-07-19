import { Controller, Post, Body, Get, Patch, Param } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { RegisterDoctorDto } from '../auth/dto/register.doctro';
import { UpdateDoctorDto } from './dto/update-doctor.dto';

@Controller('doctors')
export class DoctorsController {
  constructor(private doctorsService: DoctorsService) {}

  @Post('register')
  register(@Body() dto: RegisterDoctorDto) {
    return this.doctorsService.register(dto);
  }

  @Patch(':id')
  updateDoctor(@Param('id') id: string, @Body() dto: UpdateDoctorDto) {
    return this.doctorsService.update(id, dto);
  }

  @Get()
  getAll() {
    return this.doctorsService.findAll();
  }
}
