"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.conversations = void 0;
const emails_1 = require("./emails");
const messages_1 = require("./messages");
const get_1 = __importDefault(require("./get"));
const search_1 = __importDefault(require("./search"));
const create_1 = __importDefault(require("./create"));
const update_1 = __importDefault(require("./update"));
const delete_1 = __importDefault(require("./delete"));
exports.conversations = {
    get: get_1.default,
    search: search_1.default,
    create: create_1.default,
    update: update_1.default,
    delete: delete_1.default,
    emails: emails_1.emails,
    messages: messages_1.messages,
};
//# sourceMappingURL=index.js.map