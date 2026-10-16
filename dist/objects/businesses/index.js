"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.businesses = void 0;
const create_1 = __importDefault(require("./create"));
const get_1 = __importDefault(require("./get"));
const listByLocation_1 = __importDefault(require("./listByLocation"));
const update_1 = __importDefault(require("./update"));
const delete_1 = __importDefault(require("./delete"));
exports.businesses = {
    get: get_1.default,
    listByLocation: listByLocation_1.default,
    create: create_1.default,
    update: update_1.default,
    delete: delete_1.default,
};
//# sourceMappingURL=index.js.map