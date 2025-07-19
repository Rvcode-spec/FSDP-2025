import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class PatientSignupDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @MinLength(9)
  password: string;
}
