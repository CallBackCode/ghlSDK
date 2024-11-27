"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestUtils_1 = require("../../../contexts/requestUtils");
const baseUrl = "https://services.leadconnectorhq.com/calendars/funnels/lookup/redirect";
const del = async (locationId, redirectId, authToken) => {
    const deleteFunnel = async () => {
        const URL = `${baseUrl}/${redirectId}?` + new URLSearchParams({ locationId });
        const response = await fetch(URL, {
            method: "DELETE",
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
        return await (0, requestUtils_1.withExponentialBackoff)(deleteFunnel);
    }
    catch (error) {
        console.error(error);
        return null;
    }
};
exports.default = del;
//# sourceMappingURL=delete.js.map