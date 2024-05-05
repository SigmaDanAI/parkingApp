// car-wash.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CarWashService } from './car-wash.service';
import { CarWash } from './car-wash.entity';

@Controller('car-wash')
export class CarWashController {
  constructor(private readonly carWashService: CarWashService) {}

  @Get()
  async findAll(): Promise<CarWash[]> {
    return this.carWashService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<CarWash> {
    return this.carWashService.findOne(id);
  }

  @Post()
  async create(@Body() carWashData: CarWash): Promise<CarWash> {
    return this.carWashService.create(carWashData);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() carWashData: CarWash,
  ): Promise<CarWash> {
    return this.carWashService.update(id, carWashData);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.carWashService.remove(id);
  }
}
