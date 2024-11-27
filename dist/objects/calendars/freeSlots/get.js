"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestUtils_1 = require("../../../contexts/requestUtils");
const baseUrl = "https://services.leadconnectorhq.com/calendars";
const get = async (calendarId, options, authToken) => {
    const getFreeSlots = async () => {
        let URL = `${baseUrl}/${calendarId}/free-slots`;
        if (options) {
            const params = new URLSearchParams();
            Object.entries(options).forEach(([key, value]) => {
                if (Array.isArray(value)) {
                    value.forEach(val => params.append(key, val));
                }
                else {
                    params.append(key, value);
                }
            });
            URL += `?${params.toString()}`;
        }
        const response = await fetch(URL, {
            method: "GET",
            headers: {
                Version: "2021-07-28",
                Authorization: `Bearer ${authToken}`,
            },
        });
        const data = await response.json();
        return data;
    };
    try {
        return await (0, requestUtils_1.withExponentialBackoff)(getFreeSlots);
    }
    catch (error) {
        console.error(error);
        return null;
    }
};
exports.default = get;
//# sourceMappingURL=get.js.map