"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messages = void 0;
const get_1 = __importDefault(require("./get"));
const search_1 = __importDefault(require("./search"));
const send_1 = __importDefault(require("./send"));
const addInbound_1 = __importDefault(require("./addInbound"));
const addExternalOutboundCall_1 = __importDefault(require("./addExternalOutboundCall"));
const cancelScheduled_1 = __importDefault(require("./cancelScheduled"));
const uploadFileAttachments_1 = __importDefault(require("./uploadFileAttachments"));
const updateStatus_1 = __importDefault(require("./updateStatus"));
const getTranscript_1 = __importDefault(require("./getTranscript"));
exports.messages = {
    get: get_1.default,
    search: search_1.default,
    send: send_1.default,
    addInbound: addInbound_1.default,
    addExternalOutboundCall: addExternalOutboundCall_1.default,
    cancelScheduled: cancelScheduled_1.default,
    uploadFileAttachments: uploadFileAttachments_1.default,
    updateStatus: updateStatus_1.default,
    getTranscript: getTranscript_1.default,
};
//# sourceMappingURL=index.js.map