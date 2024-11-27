"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestUtils_1 = require("../../../contexts/requestUtils");
const baseUrl = "https://services.leadconnectorhq.com/calendars/appointments";
const search = async (appointmentId, options, authToken) => {
    const query = new URLSearchParams(Object.entries(options).reduce((acc, [key, value]) => {
        if (value !== undefined) {
            acc[key] = value.toString();
        }
        return acc;
    }, {})).toString();
    const URL = `${baseUrl}/${appointmentId}/notes?${query}`;
    const fetchNotes = async () => {
        const response = await fetch(URL, {
            method: "GET",
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
        return await (0, requestUtils_1.withExponentialBackoff)(fetchNotes);
    }
    catch (error) {
        console.error(error);
        return null;
    }
};
exports.default = search;
//# sourceMappingURL=search.js.map