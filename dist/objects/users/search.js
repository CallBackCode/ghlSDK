"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestUtils_1 = require("../../contexts/requestUtils");
const baseUrl = "https://services.leadconnectorhq.com/users/search";
const search = async (options, authToken) => {
    const { companyId, enabled2waySync, limit, locationId, query, role, skip, sort, sortDirection, type, ids, } = options;
    const executeRequest = async () => {
        const params = { companyId };
        if (ids)
            params.ids = ids.toString();
        if (enabled2waySync)
            params.enabled2waySync = enabled2waySync.toString();
        if (limit)
            params.limit = limit.toString();
        if (locationId)
            params.locationId = locationId.toString();
        if (query)
            params.query = query.toString();
        if (role)
            params.role = role.toString();
        if (skip)
            params.skip = skip.toString();
        if (sort)
            params.sort = sort.toString();
        if (sortDirection)
            params.sortDirection = sortDirection.toString();
        if (type)
            params.type = type.toString();
        const URL = `${baseUrl}/?` + new URLSearchParams(params);
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
exports.default = search;
//# sourceMappingURL=search.js.map