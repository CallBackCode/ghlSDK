"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestUtils_1 = require("../../contexts/requestUtils");
const baseUrl = "https://services.leadconnectorhq.com/emails/builder";
const search = async (options, authToken) => {
    const { locationId, archived, builderVersion, limit, name, offset, originId, parentId, search, sortByDate, templatesOnly, } = options;
    const executeRequest = async () => {
        let params = { locationId };
        if (archived)
            params.archived = archived.toString();
        if (builderVersion)
            params.builderVersion = builderVersion.toString();
        if (limit)
            params.limit = limit.toString();
        if (name)
            params.name = name.toString();
        if (offset)
            params.offset = offset.toString();
        if (originId)
            params.originId = originId.toString();
        if (parentId)
            params.parentId = parentId.toString();
        if (search)
            params.search = search.toString();
        if (sortByDate)
            params.sortByDate = sortByDate.toString();
        if (templatesOnly)
            params.templatesOnly = templatesOnly.toString();
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
exports.default = search;
//# sourceMappingURL=search.js.map