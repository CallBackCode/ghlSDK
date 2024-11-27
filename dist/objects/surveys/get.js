"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestUtils_1 = require("../../contexts/requestUtils");
const baseUrl = "https://services.leadconnectorhq.com/surveys";
const get = async (options, authToken) => {
    const { locationId, type, limit, skip } = options;
    const fetchEvent = async () => {
        const params = { locationId };
        if (type)
            params.type = type;
        if (limit)
            params.limit = limit.toString();
        if (skip)
            params.skip = skip.toString();
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
exports.default = get;
//# sourceMappingURL=get.js.map