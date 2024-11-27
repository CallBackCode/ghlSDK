"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestUtils_1 = require("../../../contexts/requestUtils");
const baseUrl = "https://services.leadconnectorhq.com/products";
const search = async (productId, options, authToken) => {
    const { locationId, ids, limit, offset } = options;
    const fetchEvents = async () => {
        const params = { locationId };
        if (ids)
            params.ids = ids;
        if (limit)
            params.limit = limit.toString();
        if (offset)
            params.offset = offset.toString();
        const query = new URLSearchParams(params).toString();
        const URL = `${baseUrl}/${productId}/customFields?${query}`;
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
        return await (0, requestUtils_1.withExponentialBackoff)(fetchEvents);
    }
    catch (error) {
        console.error(error);
        return null;
    }
};
exports.default = search;
//# sourceMappingURL=search.js.map