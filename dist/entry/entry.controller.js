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
exports.EntryController = void 0;
const common_1 = require("@nestjs/common");
const entry_service_1 = require("./entry.service");
let EntryController = class EntryController {
    constructor(entryService) {
        this.entryService = entryService;
    }
    async create(entryData) {
        try {
            return await this.entryService.create(entryData);
        }
        catch (error) {
            throw new common_1.HttpException('Error creating entry', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findAll(page = 1, limit = 50) {
        return this.entryService.findAll(page, limit);
    }
    async findAllByDate(date, page = 1, limit = 100) {
        console.log("inside findallbydate controller");
        return this.entryService.findAllByDate(date, page, limit);
    }
    async findOne(id) {
        const entry = await this.entryService.findOne(+id);
        if (!entry) {
            throw new common_1.HttpException('Entry not found', common_1.HttpStatus.NOT_FOUND);
        }
        return { id: entry.id, licensePlate: entry.licensePlate, entryDateTime: entry.entryDateTime, exitDateTime: entry.exitDateTime, isParked: entry.isParked, total: entry.total };
    }
    async update(id, entryData) {
        try {
            return await this.entryService.update(+id, entryData);
        }
        catch (error) {
            throw new common_1.HttpException('Error updating entry', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async remove(id) {
        try {
            await this.entryService.remove(+id);
        }
        catch (error) {
            throw new common_1.HttpException('Error deleting entry', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.EntryController = EntryController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/byDate/:date'),
    __param(0, (0, common_1.Param)('date')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "findAllByDate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "remove", null);
exports.EntryController = EntryController = __decorate([
    (0, common_1.Controller)('entries'),
    __metadata("design:paramtypes", [entry_service_1.EntryService])
], EntryController);
//# sourceMappingURL=entry.controller.js.map