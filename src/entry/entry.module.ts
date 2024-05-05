// entry.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entry } from './entry.entity';
import { EntryService } from './entry.service';
import { EntryController } from './entry.controller';
import { PaymentHistoryModule } from '../paymentHistory/payment-history.module';

@Module({
  imports: [TypeOrmModule.forFeature([Entry]),PaymentHistoryModule,],
  providers: [EntryService],
  controllers: [EntryController],
})
export class EntryModule {}
