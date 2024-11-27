"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestUtils_1 = require("../../../contexts/requestUtils");
const baseUrl = "https://services.leadconnectorhq.com/calendars/resources";
const search = async (resourceType, options, authToken) => {
    const query = new URLSearchParams(Object.entries(options).reduce((acc, [key, value]) => {
        acc[key] = value.toString();
        return acc;
    }, {})).toString();
    const URL = `${baseUrl}/${resourceType}?${query}`;
    const executeRequest = async () => {
        const response = await fetch(URL, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Version: "2021-04-15",
                Authorization: `Bearer ${authToken}`,
            },
        });
        if (!response.ok) {
            const error = new Error(`Request failed with status ${response.status}`);
            error.response = response;
            throw error;
        }
        return response.json();
    };
    try {
        const data = await (0, requestUtils_1.withExponentialBackoff)(executeRequest);
        return data;
    }
    catch (error) {
        console.error("Failed after retries:", error);
        return null;
    }
};
exports.default = search;
//# sourceMappingURL=search.js.map