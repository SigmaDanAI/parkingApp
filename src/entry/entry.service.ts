//src/entry/entry.service.ts
import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Entry } from './entry.entity';
import { formatDate } from 'src/utility/timeFunction';
import { PaymentHistoryService } from '../paymentHistory/payment-history.service';
import { PaymentHistory } from 'src/paymentHistory/payment-history.entity';
import { chileanDateGenerator } from 'src/utility/chileanTimezoneFunc';
@Injectable()
export class EntryService {
  constructor(
    @InjectRepository(Entry)
    private entryRepository: Repository<Entry>,
    private paymentHistoryService: PaymentHistoryService
  ) {}

  async create(entryData: Partial<Entry>): Promise<Entry> {
    try {
      const entry = await this.entryRepository.create(entryData);
      entry.licensePlate= entry.licensePlate.toUpperCase();
      entry.entryDateTime = chileanDateGenerator();
      console.log(entry.entryDateTime + "chilean date generator");
      entry.isParked = true;
      entry.total = 0;
      const formattedDate= formatDate(entry.entryDateTime);
      await this.paymentHistoryService.findOneByDate(formattedDate);
      return await this.entryRepository.save(entry);
    } catch (error) {
      throw new InternalServerErrorException('Failed to create entry');
    }
  }

  async findAll(page: number = 1, limit: number = 50): Promise<Entry[]> {
    try {
      const skip = (page - 1) * limit;
      const date= formatDate(chileanDateGenerator());
      const entries = await this.entryRepository.createQueryBuilder('entry')
        .where("DATE(entry.entryDateTime) = :date", { date })
        .skip(skip)
        .take(limit)
        .getMany();

      return entries;
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch entries');
    }
  }

  async findAllByDate(date: string, page: number = 1, limit: number = 100): Promise<PaymentHistory> {
    try {
      const skip = (page - 1) * limit;
      const entries = await this.entryRepository.createQueryBuilder('entry')
        .where("DATE(entry.entryDateTime) = :date", { date })
        .skip(skip)
        .take(limit)
        .getMany();
      
      const paymentHistory = await this.paymentHistoryService.findOneByDate(date);
      paymentHistory.totalParkedCars = entries.filter(entry => entry.isParked).length;
      paymentHistory.totalPaidCars = entries.filter(entry => !entry.isParked).length;
      paymentHistory.totalEarnedParkedCars= entries.filter(entry => !entry.isParked).reduce((acc, entry) => acc + entry.total, 0);
      paymentHistory.totalWashedCars = -2; // Placeholder for future implementation
      paymentHistory.totalEarnedWashedCars= -200; // Placeholder for future implementation
      return paymentHistory;
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch payment history by date');
    }
  }

  async findOne(id: number): Promise<Entry> {
    try {
      const entry = await this.entryRepository.findOne({ where: { id } });
      if (!entry) {
        throw new NotFoundException('Entry not found');
      }
      return entry;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to fetch entry');
    }
  }

  async update(id: number, entryData: Partial<Entry>): Promise<Entry> {
    try {
      const entryToUpdate= await this.entryRepository.findOne({ where: { id } });
      if (!entryToUpdate) {
        throw new NotFoundException('Entry not found');
      }
      if(entryToUpdate.isParked===false){
        throw new NotFoundException('Entry is not parked');
      }
      entryToUpdate.exitDateTime = chileanDateGenerator();
      entryToUpdate.isParked = false;
      entryToUpdate.total = entryData.total;

      await this.entryRepository.update(id, entryToUpdate);
      return await this.entryRepository.findOne({ where: { id } });
    } catch (error) {
      throw new InternalServerErrorException('Failed to update entry');
    }
  }

  async remove(id: number): Promise<void> {
    try {
      const result = await this.entryRepository.delete(id);
      if (result.affected === 0) {
        throw new NotFoundException('Entry not found');
      }
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to delete entry');
    }
  }
}
