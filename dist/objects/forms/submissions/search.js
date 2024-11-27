"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestUtils_1 = require("../../../contexts/requestUtils");
const baseUrl = "https://services.leadconnectorhq.com/forms/submissions";
const search = async (options, authToken) => {
    const { locationId, startAt, endAt, formId, limit, page, q } = options;
    const executeRequest = async () => {
        let params = { locationId };
        if (startAt)
            params.startAt = startAt.toString();
        if (endAt)
            params.endAt = endAt.toString();
        if (formId)
            params.formId = formId.toString();
        if (limit)
            params.limit = limit.toString();
        if (page)
            params.page = page.toString();
        if (q)
            params.q = q.toString();
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