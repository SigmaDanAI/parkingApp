import { CarWashService } from './car-wash.service';
import { CarWash } from './car-wash.entity';
export declare class CarWashController {
    private readonly carWashService;
    constructor(carWashService: CarWashService);
    findAll(): Promise<CarWash[]>;
    findOne(id: number): Promise<CarWash>;
    create(carWashData: CarWash): Promise<CarWash>;
    update(id: number, carWashData: CarWash): Promise<CarWash>;
    remove(id: number): Promise<void>;
}
