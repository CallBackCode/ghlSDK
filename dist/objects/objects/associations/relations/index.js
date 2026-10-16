"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.relations = void 0;
const get_1 = __importDefault(require("./get"));
const create_1 = __importDefault(require("./create"));
const delete_1 = __importDefault(require("./delete"));
exports.relations = {
    get: get_1.default,
    create: create_1.default,
    delete: delete_1.default,
};
//# sourceMappingURL=index.js.map