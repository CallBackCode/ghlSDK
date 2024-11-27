"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.integrations = void 0;
const create_1 = __importDefault(require("./create"));
const search_1 = __importDefault(require("./search"));
exports.integrations = {
    create: create_1.default,
    search: search_1.default,
};
//# sourceMappingURL=index.js.map