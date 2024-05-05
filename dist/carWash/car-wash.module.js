"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarWashModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const car_wash_entity_1 = require("./car-wash.entity");
const car_wash_controller_1 = require("./car-wash.controller");
const car_wash_service_1 = require("./car-wash.service");
const payment_history_module_1 = require("../paymentHistory/payment-history.module");
let CarWashModule = class CarWashModule {
};
exports.CarWashModule = CarWashModule;
exports.CarWashModule = CarWashModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([car_wash_entity_1.CarWash]), payment_history_module_1.PaymentHistoryModule],
        controllers: [car_wash_controller_1.CarWashController],
        providers: [car_wash_service_1.CarWashService],
    })
], CarWashModule);
//# sourceMappingURL=car-wash.module.js.map