"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.objects = void 0;
const get_1 = __importDefault(require("./get"));
const search_1 = __importDefault(require("./search"));
const create_1 = __importDefault(require("./create"));
const update_1 = __importDefault(require("./update"));
const associations_1 = require("./associations");
const records_1 = require("./records");
exports.objects = {
    associations: associations_1.associations,
    records: records_1.records,
    get: get_1.default,
    search: search_1.default,
    create: create_1.default,
    update: update_1.default,
};
//# sourceMappingURL=index.js.map