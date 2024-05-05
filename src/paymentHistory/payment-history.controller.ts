// payment-history.controller.ts
import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { PaymentHistoryService } from './payment-history.service';
import { PaymentHistory } from './payment-history.entity';
import { Entry } from 'src/entry/entry.entity';

@Controller('payment-history')
export class PaymentHistoryController {
  constructor(private readonly paymentHistoryService: PaymentHistoryService) {}

  @Get()
  async findAll(): Promise<PaymentHistory[]> {
    return this.paymentHistoryService.findAll();
  }

  @Get(':date')
  async findOnebyDate(@Param('date') date: string): Promise<PaymentHistory> {
    return this.paymentHistoryService.findOneByDate(date);
  }

  @Post()
  async create(@Body() paymentHistoryData: PaymentHistory): Promise<PaymentHistory> {
    return this.paymentHistoryService.create(paymentHistoryData);
  }

  @Put(':date')
  async update(
    @Param('date') date: string,
    @Body() paymentHistoryData: PaymentHistory,
  ): Promise<PaymentHistory> {
    return this.paymentHistoryService.update(date, paymentHistoryData);
  }

  @Post('/total/:date')
  async getTotal(@Param('date') date: string, entries: Entry[]): Promise<PaymentHistory> {
    return this.paymentHistoryService.findOneByDate(date);
  }

}
