"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntryModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entry_entity_1 = require("./entry.entity");
const entry_service_1 = require("./entry.service");
const entry_controller_1 = require("./entry.controller");
const payment_history_module_1 = require("../paymentHistory/payment-history.module");
let EntryModule = class EntryModule {
};
exports.EntryModule = EntryModule;
exports.EntryModule = EntryModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entry_entity_1.Entry]), payment_history_module_1.PaymentHistoryModule,],
        providers: [entry_service_1.EntryService],
        controllers: [entry_controller_1.EntryController],
    })
], EntryModule);
//# sourceMappingURL=entry.module.js.map