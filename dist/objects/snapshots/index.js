"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.snapshots = void 0;
const get_1 = __importDefault(require("./get"));
const getLastPush_1 = __importDefault(require("./getLastPush"));
const getPushByDates_1 = __importDefault(require("./getPushByDates"));
const createShareLink_1 = __importDefault(require("./createShareLink"));
exports.snapshots = {
    get: get_1.default,
    getLastPush: getLastPush_1.default,
    getPushByDates: getPushByDates_1.default,
    createShareLink: createShareLink_1.default,
};
//# sourceMappingURL=index.js.map