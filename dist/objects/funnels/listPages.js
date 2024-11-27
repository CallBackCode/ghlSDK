"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestUtils_1 = require("../../contexts/requestUtils");
const baseUrl = "https://services.leadconnectorhq.com/funnels/page";
const listPages = async (options, authToken) => {
    const { locationId, funnelId, limit, offset, name } = options;
    const executeRequest = async () => {
        let params = {
            locationId,
            funnelId,
            limit: limit.toString(),
            offset: offset.toString(),
        };
        if (name)
            params.name = name;
        const URL = `${baseUrl}?` + new URLSearchParams(params);
        const response = await fetch(URL, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Version: "2021-07-28",
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
exports.default = listPages;
//# sourceMappingURL=listPages.js.map