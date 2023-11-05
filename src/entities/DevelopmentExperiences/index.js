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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevelopmentExperiences = void 0;
const typeorm_1 = require("typeorm");
const enums_1 = require("../../enums");
let DevelopmentExperiences = class DevelopmentExperiences {
};
exports.DevelopmentExperiences = DevelopmentExperiences;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DevelopmentExperiences.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], DevelopmentExperiences.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: enums_1.ExperienceType }),
    __metadata("design:type", String)
], DevelopmentExperiences.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, nullable: true, default: "Empresa não informada" }),
    __metadata("design:type", String)
], DevelopmentExperiences.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], DevelopmentExperiences.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date", nullable: true }),
    __metadata("design:type", String)
], DevelopmentExperiences.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date", nullable: true }),
    __metadata("design:type", String)
], DevelopmentExperiences.prototype, "endDate", void 0);
exports.DevelopmentExperiences = DevelopmentExperiences = __decorate([
    (0, typeorm_1.Entity)()
], DevelopmentExperiences);
