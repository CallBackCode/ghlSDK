"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoices = void 0;
const templates_1 = require("./templates");
const schedules_1 = require("./schedules");
const text2pay_1 = require("./text2pay");
const get_1 = __importDefault(require("./get"));
const search_1 = __importDefault(require("./search"));
const create_1 = __importDefault(require("./create"));
const update_1 = __importDefault(require("./update"));
const delete_1 = __importDefault(require("./delete"));
const send_1 = __importDefault(require("./send"));
const void_1 = __importDefault(require("./void"));
const recordPayment_1 = __importDefault(require("./recordPayment"));
const generateInvoiceNumber_1 = __importDefault(require("./generateInvoiceNumber"));
exports.invoices = {
    get: get_1.default,
    search: search_1.default,
    create: create_1.default,
    update: update_1.default,
    delete: delete_1.default,
    send: send_1.default,
    void: void_1.default,
    recordPayment: recordPayment_1.default,
    generateInvoiceNumber: generateInvoiceNumber_1.default,
    templates: templates_1.templates,
    schedules: schedules_1.schedules,
    text2pay: text2pay_1.text2pay,
};
//# sourceMappingURL=index.js.map