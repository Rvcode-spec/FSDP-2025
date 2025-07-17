import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class SignupDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @MinLength(9)
  password: string;

  @IsNotEmpty()
  role: 'doctor' | 'patient';
}
