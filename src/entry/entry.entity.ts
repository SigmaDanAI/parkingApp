// entry.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Entry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  licensePlate: string;

  @Column({ type: 'timestamp', nullable: true})
  entryDateTime: Date;

  @Column({ type: 'timestamp', nullable: true })
  exitDateTime: Date;

  @Column({ default: false })
  isParked: boolean;

  @Column({ type: 'float', default: 0 })
  total: number;
}
