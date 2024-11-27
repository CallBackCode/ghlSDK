"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProviders = void 0;
const config_1 = require("./config");
const create_1 = __importDefault(require("./create"));
const delete_1 = __importDefault(require("./delete"));
exports.customProviders = {
    create: create_1.default,
    delete: delete_1.default,
    config: config_1.config,
};
//# sourceMappingURL=index.js.map