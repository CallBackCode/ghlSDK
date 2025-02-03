"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.oauth = void 0;
const getAccessToken_1 = __importDefault(require("./getAccessToken"));
const getLocationsInstalled_1 = __importDefault(require("./getLocationsInstalled"));
const getLocationTokenFromCompany_1 = __importDefault(require("./getLocationTokenFromCompany"));
exports.oauth = {
    getAccessToken: getAccessToken_1.default,
    getLocationsInstalled: getLocationsInstalled_1.default,
    getLocationTokenFromCompany: getLocationTokenFromCompany_1.default,
};
//# sourceMappingURL=index.js.map