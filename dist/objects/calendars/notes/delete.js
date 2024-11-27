"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestUtils_1 = require("../../../contexts/requestUtils");
const baseUrl = "https://services.leadconnectorhq.com/calendars/events";
const del = async (appointmentId, noteId, authToken) => {
    const URL = `${baseUrl}/${appointmentId}/notes/${noteId}`;
    const deleteNote = async () => {
        const response = await fetch(URL, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                Version: "2021-04-15",
                Authorization: `Bearer ${authToken}`,
            },
        });
        const data = await response.json();
        return data;
    };
    try {
        return await (0, requestUtils_1.withExponentialBackoff)(deleteNote);
    }
    catch (error) {
        console.error(error);
        return null;
    }
};
exports.default = del;
//# sourceMappingURL=delete.js.map