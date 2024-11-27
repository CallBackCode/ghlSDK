"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calendars = void 0;
const create_1 = __importDefault(require("./create"));
const appointments_1 = require("./appointments");
const blocks_1 = require("./blocks");
const groups_1 = require("./groups");
const notes_1 = require("./notes");
const resources_1 = require("./resources");
const freeSlots_1 = require("./freeSlots");
const get_1 = __importDefault(require("./get"));
const search_1 = __importDefault(require("./search"));
const update_1 = __importDefault(require("./update"));
const delete_1 = __importDefault(require("./delete"));
exports.calendars = {
    get: get_1.default,
    search: search_1.default,
    create: create_1.default,
    update: update_1.default,
    delete: delete_1.default,
    freeSlots: freeSlots_1.CalendarSlots,
    groups: groups_1.CalendarGroups,
    appointments: appointments_1.CalendarAppointments,
    notes: notes_1.CalendarAppointmentNotes,
    blocks: blocks_1.CalendarBlocks,
    resources: resources_1.CalendarResources,
};
//# sourceMappingURL=index.js.map