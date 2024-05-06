"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entry_entity_1 = require("./entry.entity");
const timeFunction_1 = require("../utility/timeFunction");
const payment_history_service_1 = require("../paymentHistory/payment-history.service");
const chileanTimezoneFunc_1 = require("../utility/chileanTimezoneFunc");
let EntryService = class EntryService {
    constructor(entryRepository, paymentHistoryService) {
        this.entryRepository = entryRepository;
        this.paymentHistoryService = paymentHistoryService;
    }
    async create(entryData) {
        try {
            const entry = await this.entryRepository.create(entryData);
            entry.licensePlate = entry.licensePlate.toUpperCase();
            entry.entryDateTime = (0, chileanTimezoneFunc_1.chileanDateGenerator)();
            console.log(entry.entryDateTime + "chilean date generator");
            entry.isParked = true;
            entry.total = 0;
            const formattedDate = (0, timeFunction_1.formatDate)(entry.entryDateTime);
            await this.paymentHistoryService.findOneByDate(formattedDate);
            return await this.entryRepository.save(entry);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Failed to create entry');
        }
    }
    async findAll(page = 1, limit = 50) {
        try {
            const skip = (page - 1) * limit;
            const date = (0, timeFunction_1.formatDate)((0, chileanTimezoneFunc_1.chileanDateGenerator)());
            const entries = await this.entryRepository.createQueryBuilder('entry')
                .where("DATE(entry.entryDateTime) = :date", { date })
                .skip(skip)
                .take(limit)
                .getMany();
            return entries;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Failed to fetch entries');
        }
    }
    async findAllByDate(date, page = 1, limit = 100) {
        try {
            const skip = (page - 1) * limit;
            const entries = await this.entryRepository.createQueryBuilder('entry')
                .where("DATE(entry.entryDateTime) = :date", { date })
                .skip(skip)
                .take(limit)
                .getMany();
            const paymentHistory = await this.paymentHistoryService.findOneByDate(date);
            paymentHistory.totalParkedCars = entries.filter(entry => entry.isParked).length;
            paymentHistory.totalPaidCars = entries.filter(entry => !entry.isParked).length;
            paymentHistory.totalEarnedParkedCars = entries.filter(entry => !entry.isParked).reduce((acc, entry) => acc + entry.total, 0);
            paymentHistory.totalWashedCars = -2;
            paymentHistory.totalEarnedWashedCars = -200;
            return paymentHistory;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Failed to fetch payment history by date');
        }
    }
    async findOne(id) {
        try {
            const entry = await this.entryRepository.findOne({ where: { id } });
            if (!entry) {
                throw new common_1.NotFoundException('Entry not found');
            }
            return entry;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('Failed to fetch entry');
        }
    }
    async update(id, entryData) {
        try {
            const entryToUpdate = await this.entryRepository.findOne({ where: { id } });
            if (!entryToUpdate) {
                throw new common_1.NotFoundException('Entry not found');
            }
            if (entryToUpdate.isParked === false) {
                throw new common_1.NotFoundException('Entry is not parked');
            }
            entryToUpdate.exitDateTime = (0, chileanTimezoneFunc_1.chileanDateGenerator)();
            entryToUpdate.isParked = false;
            entryToUpdate.total = entryData.total;
            await this.entryRepository.update(id, entryToUpdate);
            return await this.entryRepository.findOne({ where: { id } });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Failed to update entry');
        }
    }
    async remove(id) {
        try {
            const result = await this.entryRepository.delete(id);
            if (result.affected === 0) {
                throw new common_1.NotFoundException('Entry not found');
            }
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('Failed to delete entry');
        }
    }
};
exports.EntryService = EntryService;
exports.EntryService = EntryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entry_entity_1.Entry)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        payment_history_service_1.PaymentHistoryService])
], EntryService);
//# sourceMappingURL=entry.service.js.map