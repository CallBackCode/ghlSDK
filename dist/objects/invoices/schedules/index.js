"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schedules = void 0;
const get_1 = __importDefault(require("./get"));
const search_1 = __importDefault(require("./search"));
const create_1 = __importDefault(require("./create"));
const update_1 = __importDefault(require("./update"));
const delete_1 = __importDefault(require("./delete"));
const startSchedule_1 = __importDefault(require("./startSchedule"));
const manageAutoPay_1 = __importDefault(require("./manageAutoPay"));
const cancelScheduled_1 = __importDefault(require("./cancelScheduled"));
exports.schedules = {
    get: get_1.default,
    search: search_1.default,
    create: create_1.default,
    update: update_1.default,
    delete: delete_1.default,
    startSchedule: startSchedule_1.default,
    manageAutoPay: manageAutoPay_1.default,
    cancelScheduled: cancelScheduled_1.default,
};
//# sourceMappingURL=index.js.map