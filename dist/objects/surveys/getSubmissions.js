"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestUtils_1 = require("../../contexts/requestUtils");
const baseUrl = "https://services.leadconnectorhq.com/surveys/submissions";
const getSubmissions = async (options, authToken) => {
    const { locationId, limit, page, startAt, endAt, q, surveyId } = options;
    const fetchEvent = async () => {
        const params = { locationId };
        if (limit)
            params.limit = limit.toString();
        if (page)
            params.page = page.toString();
        if (startAt)
            params.startAt = startAt.toString();
        if (endAt)
            params.endAt = endAt.toString();
        if (q)
            params.q = q.toString();
        if (surveyId)
            params.surveyId = surveyId.toString();
        const URL = `${baseUrl}?` + new URLSearchParams(params);
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
        return await (0, requestUtils_1.withExponentialBackoff)(fetchEvent);
    }
    catch (error) {
        console.error(error);
        return null;
    }
};
exports.default = getSubmissions;
//# sourceMappingURL=getSubmissions.js.map