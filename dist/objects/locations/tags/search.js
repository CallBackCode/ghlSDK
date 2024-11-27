"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestUtils_1 = require("../../../contexts/requestUtils");
const baseUrl = "https://services.leadconnectorhq.com/locations";
const search = async (locationId, authToken) => {
    const fetchEvents = async () => {
        const URL = `${baseUrl}/${locationId}/tags`;
        const response = await fetch(URL, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Version: "2021-07-28",
                Authorization: `Bearer ${authToken}`,
            },
        });
        const data = await response.json();
        return data;
    };
    try {
        return await (0, requestUtils_1.withExponentialBackoff)(fetchEvents);
    }
    catch (error) {
        console.error(error);
        return null;
    }
};
exports.default = search;
//# sourceMappingURL=search.js.map