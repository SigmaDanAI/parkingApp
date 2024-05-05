// car-wash.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarWash } from './car-wash.entity';

@Injectable()
export class CarWashService {
  constructor(
    @InjectRepository(CarWash)
    private readonly carWashRepository: Repository<CarWash>,
  ) {}

  async findAll(): Promise<CarWash[]> {
    return this.carWashRepository.find();
  }

  async findOne(id: number): Promise<CarWash> {
    const carWash = await this.carWashRepository.findOne({where :{id}});
    if (!carWash) {
      throw new NotFoundException(`CarWash with ID ${id} not found`);
    }
    return carWash;
  }

  async create(carWashData: CarWash): Promise<CarWash> {
    return this.carWashRepository.save(carWashData);
  }

  async update(id: number, carWashData: CarWash): Promise<CarWash> {
    await this.carWashRepository.update(id, carWashData);
    return this.carWashRepository.findOne({where :{id}});
  }

  async remove(id: number): Promise<void> {
    await this.carWashRepository.delete(id);
  }
}
