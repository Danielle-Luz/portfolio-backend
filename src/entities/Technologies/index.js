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
exports.Technologies = void 0;
const typeorm_1 = require("typeorm");
const enums_1 = require("../../enums");
const Projects_1 = require("../Projects");
let Technologies = class Technologies {
};
exports.Technologies = Technologies;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Technologies.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 40 }),
    __metadata("design:type", String)
], Technologies.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: enums_1.Stack,
    }),
    __metadata("design:type", String)
], Technologies.prototype, "stack", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: enums_1.KnowledgeLevel,
        default: enums_1.KnowledgeLevel.BEGINNER,
        nullable: true,
    }),
    __metadata("design:type", String)
], Technologies.prototype, "knowledgeLevel", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Projects_1.Projects, (project) => project.technologies),
    __metadata("design:type", Array)
], Technologies.prototype, "projects", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Technologies.prototype, "iconUrl", void 0);
exports.Technologies = Technologies = __decorate([
    (0, typeorm_1.Entity)()
], Technologies);
