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
exports.PaymentHistoryController = void 0;
const common_1 = require("@nestjs/common");
const payment_history_service_1 = require("./payment-history.service");
const payment_history_entity_1 = require("./payment-history.entity");
let PaymentHistoryController = class PaymentHistoryController {
    constructor(paymentHistoryService) {
        this.paymentHistoryService = paymentHistoryService;
    }
    async findAll() {
        return this.paymentHistoryService.findAll();
    }
    async findOnebyDate(date) {
        return this.paymentHistoryService.findOneByDate(date);
    }
    async create(paymentHistoryData) {
        return this.paymentHistoryService.create(paymentHistoryData);
    }
    async update(date, paymentHistoryData) {
        return this.paymentHistoryService.update(date, paymentHistoryData);
    }
    async getTotal(date, entries) {
        return this.paymentHistoryService.findOneByDate(date);
    }
};
exports.PaymentHistoryController = PaymentHistoryController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PaymentHistoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':date'),
    __param(0, (0, common_1.Param)('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PaymentHistoryController.prototype, "findOnebyDate", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [payment_history_entity_1.PaymentHistory]),
    __metadata("design:returntype", Promise)
], PaymentHistoryController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':date'),
    __param(0, (0, common_1.Param)('date')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, payment_history_entity_1.PaymentHistory]),
    __metadata("design:returntype", Promise)
], PaymentHistoryController.prototype, "update", null);
__decorate([
    (0, common_1.Post)('/total/:date'),
    __param(0, (0, common_1.Param)('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array]),
    __metadata("design:returntype", Promise)
], PaymentHistoryController.prototype, "getTotal", null);
exports.PaymentHistoryController = PaymentHistoryController = __decorate([
    (0, common_1.Controller)('payment-history'),
    __metadata("design:paramtypes", [payment_history_service_1.PaymentHistoryService])
], PaymentHistoryController);
//# sourceMappingURL=payment-history.controller.js.map