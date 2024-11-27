"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.surveys = void 0;
const get_1 = __importDefault(require("./get"));
const getSubmissions_1 = __importDefault(require("./getSubmissions"));
exports.surveys = {
    get: get_1.default,
    getSubmissions: getSubmissions_1.default,
};
//# sourceMappingURL=index.js.map