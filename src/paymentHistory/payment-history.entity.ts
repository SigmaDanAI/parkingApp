// entry.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PaymentHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  date: string;

  @Column({ default: 0 })
  totalParkedCars: number;

  @Column({ default: 0 })
  totalPaidCars: number;

  @Column({ default: 0 })
  totalWashedCars: number;

  @Column({ type: 'float', default: 0 })
  totalEarnedWashedCars: number;

  @Column({ type: 'float', default: 0 })
  totalEarnedParkedCars: number;
}
