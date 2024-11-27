"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emails = void 0;
const get_1 = __importDefault(require("./get"));
const cancelScheduled_1 = __importDefault(require("./cancelScheduled"));
exports.emails = {
    get: get_1.default,
    cancelScheduled: cancelScheduled_1.default,
};
//# sourceMappingURL=index.js.map