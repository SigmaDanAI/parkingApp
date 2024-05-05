// entry.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CarWash {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  licensePlate: string;

  @Column({ type: 'timestamp'})
  Date: Date;

  @Column({ default: 0 })
  amountPaidWashedCar: number; 
}
