"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestUtils_1 = require("../../contexts/requestUtils");
const baseUrl = "https://services.leadconnectorhq.com/users";
const listByLocation = async (companyId, locationId, authToken) => {
    const executeRequest = async () => {
        const URL = `${baseUrl}/?` + new URLSearchParams({ companyId, locationId });
        const response = await fetch(URL, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Version: "2021-07-28",
                Authorization: `Bearer ${authToken}`,
            },
        });
        if (!response.ok) {
            let text = await response.text();
            const error = new Error(`Request failed with status ${response.status}. ${text}`);
            error.response = response;
            throw error;
        }
        let data = await response.json();
        return data;
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
exports.default = listByLocation;
//# sourceMappingURL=listByLocation.js.map