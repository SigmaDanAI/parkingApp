import { Repository } from 'typeorm';
import { PaymentHistory } from './payment-history.entity';
import { Entry } from 'src/entry/entry.entity';
export declare class PaymentHistoryService {
    private readonly paymentHistoryRepository;
    constructor(paymentHistoryRepository: Repository<PaymentHistory>);
    findAll(): Promise<PaymentHistory[]>;
    findOneByDate(date: string): Promise<PaymentHistory>;
    create(paymentHistoryData: PaymentHistory): Promise<PaymentHistory>;
    update(date: string, paymentHistoryData: PaymentHistory): Promise<PaymentHistory>;
    getTotal(date: string, entries: Entry[]): Promise<PaymentHistory>;
}
