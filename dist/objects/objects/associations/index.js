"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.associations = void 0;
const get_1 = __importDefault(require("./get"));
const getId_1 = __importDefault(require("./getId"));
const getKeyName_1 = __importDefault(require("./getKeyName"));
const getObjectKey_1 = __importDefault(require("./getObjectKey"));
const create_1 = __importDefault(require("./create"));
const update_1 = __importDefault(require("./update"));
const delete_1 = __importDefault(require("./delete"));
const relations_1 = require("./relations");
exports.associations = {
    relations: relations_1.relations,
    get: get_1.default,
    getId: getId_1.default,
    getKeyName: getKeyName_1.default,
    getObjectKey: getObjectKey_1.default,
    update: update_1.default,
    create: create_1.default,
    delete: delete_1.default,
};
//# sourceMappingURL=index.js.map