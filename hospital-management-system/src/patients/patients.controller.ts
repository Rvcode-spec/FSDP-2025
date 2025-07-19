import { Controller, Post, Body, Get } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { RegisterPatinetDto } from '../auth/dto/register.patient';

@Controller('patients')
export class PatientsController {
  constructor(private patientsService: PatientsService) {}

  @Post('register')
  register(@Body() dto: RegisterPatinetDto) {
    return this.patientsService.register(dto);
  }

  @Get()
  getAll() {
    return this.patientsService.findAll();
  }
}
