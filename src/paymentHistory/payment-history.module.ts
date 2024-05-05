// payment-history.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentHistory } from './payment-history.entity';
import { PaymentHistoryService } from './payment-history.service';
import { PaymentHistoryController } from './payment-history.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentHistory])],
  controllers: [PaymentHistoryController],
  providers: [PaymentHistoryService],
  exports: [PaymentHistoryService], // Export PaymentHistoryService from here
})
export class PaymentHistoryModule {}