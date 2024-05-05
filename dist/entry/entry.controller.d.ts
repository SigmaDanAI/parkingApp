import { EntryService } from './entry.service';
import { Entry } from './entry.entity';
import { PaymentHistory } from 'src/paymentHistory/payment-history.entity';
export declare class EntryController {
    private readonly entryService;
    constructor(entryService: EntryService);
    create(entryData: Partial<Entry>): Promise<Entry>;
    findAll(page?: number, limit?: number): Promise<Entry[]>;
    findAllByDate(date: string, page?: number, limit?: number): Promise<PaymentHistory>;
    findOne(id: string): Promise<Entry>;
    update(id: string, entryData: Partial<Entry>): Promise<Entry>;
    remove(id: string): Promise<void>;
}
