import { PaymentHistoryService } from './payment-history.service';
import { PaymentHistory } from './payment-history.entity';
import { Entry } from 'src/entry/entry.entity';
export declare class PaymentHistoryController {
    private readonly paymentHistoryService;
    constructor(paymentHistoryService: PaymentHistoryService);
    findAll(): Promise<PaymentHistory[]>;
    findOnebyDate(date: string): Promise<PaymentHistory>;
    create(paymentHistoryData: PaymentHistory): Promise<PaymentHistory>;
    update(date: string, paymentHistoryData: PaymentHistory): Promise<PaymentHistory>;
    getTotal(date: string, entries: Entry[]): Promise<PaymentHistory>;
}
