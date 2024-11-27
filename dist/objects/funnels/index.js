"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.funnels = void 0;
const listFunnels_1 = __importDefault(require("./listFunnels"));
const listPages_1 = __importDefault(require("./listPages"));
const countPages_1 = __importDefault(require("./countPages"));
const redirects_1 = require("./redirects");
exports.funnels = {
    listFunnels: listFunnels_1.default,
    listPages: listPages_1.default,
    countPages: countPages_1.default,
    redirects: redirects_1.redirects,
};
//# sourceMappingURL=index.js.map