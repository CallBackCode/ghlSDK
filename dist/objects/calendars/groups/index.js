"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarGroups = void 0;
const search_1 = __importDefault(require("./search"));
const create_1 = __importDefault(require("./create"));
const update_1 = __importDefault(require("./update"));
const delete_1 = __importDefault(require("./delete"));
const disable_1 = __importDefault(require("./disable"));
const validateSlug_1 = __importDefault(require("./validateSlug"));
exports.CalendarGroups = {
    search: search_1.default,
    create: create_1.default,
    update: update_1.default,
    delete: delete_1.default,
    disable: disable_1.default,
    validateSlug: validateSlug_1.default,
};
//# sourceMappingURL=index.js.map