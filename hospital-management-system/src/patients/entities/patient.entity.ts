import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  age: string;

  @Column({ nullable: true })
  gender: string;

  @Column({ unique: true })
  email: string;

  @Column({ default: 'patient' })
  role: string;

  @Column()
  password: string;
}
