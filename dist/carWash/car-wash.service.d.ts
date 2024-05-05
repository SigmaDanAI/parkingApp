import { Repository } from 'typeorm';
import { CarWash } from './car-wash.entity';
export declare class CarWashService {
    private readonly carWashRepository;
    constructor(carWashRepository: Repository<CarWash>);
    findAll(): Promise<CarWash[]>;
    findOne(id: number): Promise<CarWash>;
    create(carWashData: CarWash): Promise<CarWash>;
    update(id: number, carWashData: CarWash): Promise<CarWash>;
    remove(id: number): Promise<void>;
}
