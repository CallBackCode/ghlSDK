"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.campaigns = void 0;
const add_1 = __importDefault(require("./add"));
const remove_1 = __importDefault(require("./remove"));
const removeAll_1 = __importDefault(require("./removeAll"));
exports.campaigns = {
    add: add_1.default,
    remove: remove_1.default,
    removeAll: removeAll_1.default,
};
//# sourceMappingURL=index.js.map