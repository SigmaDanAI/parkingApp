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
exports.CarWashController = void 0;
const common_1 = require("@nestjs/common");
const car_wash_service_1 = require("./car-wash.service");
const car_wash_entity_1 = require("./car-wash.entity");
let CarWashController = class CarWashController {
    constructor(carWashService) {
        this.carWashService = carWashService;
    }
    async findAll() {
        return this.carWashService.findAll();
    }
    async findOne(id) {
        return this.carWashService.findOne(id);
    }
    async create(carWashData) {
        return this.carWashService.create(carWashData);
    }
    async update(id, carWashData) {
        return this.carWashService.update(id, carWashData);
    }
    async remove(id) {
        return this.carWashService.remove(id);
    }
};
exports.CarWashController = CarWashController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CarWashController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CarWashController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [car_wash_entity_1.CarWash]),
    __metadata("design:returntype", Promise)
], CarWashController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, car_wash_entity_1.CarWash]),
    __metadata("design:returntype", Promise)
], CarWashController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CarWashController.prototype, "remove", null);
exports.CarWashController = CarWashController = __decorate([
    (0, common_1.Controller)('car-wash'),
    __metadata("design:paramtypes", [car_wash_service_1.CarWashService])
], CarWashController);
//# sourceMappingURL=car-wash.controller.js.map