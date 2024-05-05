// car-wash.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarWash } from './car-wash.entity';
import { CarWashController } from './car-wash.controller';
import { CarWashService } from './car-wash.service';
import { PaymentHistoryModule } from 'src/paymentHistory/payment-history.module';

@Module({
  imports: [TypeOrmModule.forFeature([CarWash]),PaymentHistoryModule],
  controllers: [CarWashController],
  providers: [CarWashService],
})
export class CarWashModule {}
