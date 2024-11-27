"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.locations = void 0;
const customFields_1 = require("./customFields");
const customValues_1 = require("./customValues");
// import { snippets } from "./snippets";
const tags_1 = require("./tags");
const tasks_1 = require("./tasks");
const timezones_1 = require("./timezones");
const get_1 = __importDefault(require("./get"));
const search_1 = __importDefault(require("./search"));
const create_1 = __importDefault(require("./create"));
const update_1 = __importDefault(require("./update"));
const delete_1 = __importDefault(require("./delete"));
exports.locations = {
    get: get_1.default,
    search: search_1.default,
    create: create_1.default,
    update: update_1.default,
    delete: delete_1.default,
    customFields: customFields_1.customFields,
    customValues: customValues_1.customValues,
    // snippets,
    tags: tags_1.tags,
    tasks: tasks_1.tasks,
    timezones: timezones_1.timezones,
};
//# sourceMappingURL=index.js.map