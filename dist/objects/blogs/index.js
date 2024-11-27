"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogs = void 0;
const getAuthors_1 = __importDefault(require("./getAuthors"));
const getCategories_1 = __importDefault(require("./getCategories"));
const checkSlug_1 = __importDefault(require("./checkSlug"));
const create_1 = __importDefault(require("./create"));
const update_1 = __importDefault(require("./update"));
exports.blogs = {
    getAuthors: getAuthors_1.default,
    getCategories: getCategories_1.default,
    checkSlug: checkSlug_1.default,
    create: create_1.default,
    update: update_1.default,
};
//# sourceMappingURL=index.js.map