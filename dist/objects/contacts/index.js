"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contacts = void 0;
const campaigns_1 = require("../campaigns");
const appointments_1 = require("./appointments");
const followers_1 = require("./followers");
const notes_1 = require("./notes");
const tags_1 = require("./tags");
const tasks_1 = require("./tasks");
const workflows_1 = require("./workflows");
const get_1 = __importDefault(require("./get"));
const search_1 = __importDefault(require("./search"));
const findDuplicates_1 = __importDefault(require("./findDuplicates"));
const create_1 = __importDefault(require("./create"));
const update_1 = __importDefault(require("./update"));
const upsert_1 = __importDefault(require("./upsert"));
const delete_1 = __importDefault(require("./delete"));
exports.contacts = {
    get: get_1.default,
    search: search_1.default,
    findDuplicates: findDuplicates_1.default,
    create: create_1.default,
    update: update_1.default,
    upsert: upsert_1.default,
    delete: delete_1.default,
    tasks: tasks_1.tasks,
    appointments: appointments_1.appointments,
    tags: tags_1.tags,
    notes: notes_1.notes,
    campaigns: campaigns_1.campaigns,
    workflows: workflows_1.workflows,
    followers: followers_1.followers,
};
//# sourceMappingURL=index.js.map