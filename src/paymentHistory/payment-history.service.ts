// payment-history.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymentHistory } from './payment-history.entity';
import { formatDate, getChileanDateTime } from 'src/utility/timeFunctions';
import { Entry } from 'src/entry/entry.entity';

@Injectable()
export class PaymentHistoryService {
  constructor(
    @InjectRepository(PaymentHistory)
    private readonly paymentHistoryRepository: Repository<PaymentHistory>,
  ) {}

  async findAll(): Promise<PaymentHistory[]> {
    return this.paymentHistoryRepository.find();
  }

  async findOneByDate(date: string): Promise<PaymentHistory> {
    console.log(date + " inside findOneByDate")
    const paymentHistory = await this.paymentHistoryRepository.findOne({where :{date}});
    if (!paymentHistory) {
      const newPaymentHistory= await this.create(new PaymentHistory());
      console.log("created!")
      return newPaymentHistory;
    }
    console.log("found!")
    return paymentHistory;
  }

  async create(paymentHistoryData: PaymentHistory): Promise<PaymentHistory> {
    paymentHistoryData.date = formatDate(getChileanDateTime());
    return this.paymentHistoryRepository.save(paymentHistoryData);
  }

  async update(date: string, paymentHistoryData: PaymentHistory): Promise<PaymentHistory> {
    const paymentHistory = await this.paymentHistoryRepository.findOne({where :{date}});
    if (!paymentHistory) {
      throw new NotFoundException('Payment history not found');
    }
    
    await this.paymentHistoryRepository.update(date, paymentHistoryData);
    return this.paymentHistoryRepository.findOne({where :{date}});
  }

  async getTotal(date: string, entries: Entry[]): Promise<PaymentHistory> {
    const paymentHistory = await this.paymentHistoryRepository.findOne({where :{date}});
    if (!paymentHistory) {
      throw new NotFoundException('Payment history not found');
    }
    
   return paymentHistory;
  }

}