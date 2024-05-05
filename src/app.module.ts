import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Import TypeOrmModule
import { EntryModule } from './entry/entry.module'; // Import EntryModule
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentHistoryModule } from './paymentHistory/payment-history.module';

const dotenv = require('dotenv');
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    EntryModule,
    PaymentHistoryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule{}
