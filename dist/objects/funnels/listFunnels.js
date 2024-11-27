"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestUtils_1 = require("../../contexts/requestUtils");
const baseUrl = "https://services.leadconnectorhq.com/funnels/funnel/list";
const listFunnels = async (options, authToken) => {
    const { locationId, limit, offset, category, name, parentId, type } = options;
    const executeRequest = async () => {
        let params = { locationId };
        if (limit)
            params.limit = limit;
        if (offset)
            params.offset = offset;
        if (category)
            params.category = category;
        if (name)
            params.name = name;
        if (parentId)
            params.parentId = parentId;
        if (type)
            params.type = type;
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
exports.default = listFunnels;
//# sourceMappingURL=listFunnels.js.map