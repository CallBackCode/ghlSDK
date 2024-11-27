"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.opportunities = void 0;
const followers_1 = require("./followers");
const get_1 = __importDefault(require("./get"));
const search_1 = __importDefault(require("./search"));
const create_1 = __importDefault(require("./create"));
const update_1 = __importDefault(require("./update"));
const updateStatus_1 = __importDefault(require("./updateStatus"));
const upsert_1 = __importDefault(require("./upsert"));
const delete_1 = __importDefault(require("./delete"));
exports.opportunities = {
    get: get_1.default,
    search: search_1.default,
    create: create_1.default,
    update: update_1.default,
    updateStatus: updateStatus_1.default,
    upsert: upsert_1.default,
    delete: delete_1.default,
    followers: followers_1.followers,
};
//# sourceMappingURL=index.js.map