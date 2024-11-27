"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactions = void 0;
const get_1 = __importDefault(require("./get"));
const search_1 = __importDefault(require("./search"));
exports.transactions = {
    get: get_1.default,
    search: search_1.default,
};
//# sourceMappingURL=index.js.map