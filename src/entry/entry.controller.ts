//src/entry/entry.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete, Query, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { EntryService } from './entry.service';
import { Entry } from './entry.entity';
import { PaymentHistory } from 'src/paymentHistory/payment-history.entity';

@Controller('entries')
export class EntryController {
  constructor(private readonly entryService: EntryService) {}

  @Post()
  async create(@Body() entryData: Partial<Entry>): Promise<Entry> {
    try {
      return await this.entryService.create(entryData);
    } catch (error) {
      throw new HttpException('Error creating entry', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  async findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 50): Promise<Entry[]> {
    return this.entryService.findAll(page, limit);
  }

  @Get('/byDate/:date')
  async findAllByDate(@Param('date') date: string, @Query('page') page: number = 1, @Query('limit') limit: number = 100): Promise<PaymentHistory> {
    return this.entryService.findAllByDate(date, page, limit);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Entry> {
    const entry = await this.entryService.findOne(+id);
    if (!entry) {
      throw new HttpException('Entry not found', HttpStatus.NOT_FOUND);
    }
    return { id: entry.id, licensePlate: entry.licensePlate, entryDateTime: entry.entryDateTime, exitDateTime: entry.exitDateTime, isParked: entry.isParked, total: entry.total }; // Customize response format
  }
  

  @Put(':id')
  async update(@Param('id') id: string, @Body() entryData: Partial<Entry>): Promise<Entry> {
    try {
      return await this.entryService.update(+id, entryData);
    } catch (error) {
      throw new HttpException('Error updating entry', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    try {
      await this.entryService.remove(+id);
    } catch (error) {
      throw new HttpException('Error deleting entry', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
