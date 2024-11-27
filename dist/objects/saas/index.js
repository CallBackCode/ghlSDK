"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saas = void 0;
const rebilling_1 = require("./rebilling");
const get_1 = __importDefault(require("./get"));
const update_1 = __importDefault(require("./update"));
const enable_1 = __importDefault(require("./enable"));
const disable_1 = __importDefault(require("./disable"));
const pause_1 = __importDefault(require("./pause"));
exports.saas = {
    get: get_1.default,
    update: update_1.default,
    enable: enable_1.default,
    disable: disable_1.default,
    pause: pause_1.default,
    rebilling: rebilling_1.rebilling,
};
//# sourceMappingURL=index.js.map