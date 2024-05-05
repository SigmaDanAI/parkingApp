import { Repository } from 'typeorm';
import { Entry } from './entry.entity';
import { PaymentHistoryService } from '../paymentHistory/payment-history.service';
import { PaymentHistory } from 'src/paymentHistory/payment-history.entity';
export declare class EntryService {
    private entryRepository;
    private paymentHistoryService;
    constructor(entryRepository: Repository<Entry>, paymentHistoryService: PaymentHistoryService);
    create(entryData: Partial<Entry>): Promise<Entry>;
    findAll(page?: number, limit?: number): Promise<Entry[]>;
    findAllByDate(date: string, page?: number, limit?: number): Promise<PaymentHistory>;
    findOne(id: number): Promise<Entry>;
    update(id: number, entryData: Partial<Entry>): Promise<Entry>;
    remove(id: number): Promise<void>;
}
