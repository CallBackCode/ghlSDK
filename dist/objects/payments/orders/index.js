"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orders = void 0;
const fullfillments_1 = require("./fullfillments");
const get_1 = __importDefault(require("./get"));
const list_1 = __importDefault(require("./list"));
exports.orders = {
    get: get_1.default,
    list: list_1.default,
    fullfillments: fullfillments_1.fullfillments,
};
//# sourceMappingURL=index.js.map