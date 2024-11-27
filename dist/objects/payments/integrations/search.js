"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestUtils_1 = require("../../../contexts/requestUtils");
const baseUrl = "https://services.leadconnectorhq.com/payments/integrations/provider/whitelabel";
const search = async (options, authToken) => {
    const { altId, altType, limit, offset } = options;
    const executeRequest = async () => {
        let params = { altId, altType };
        if (limit)
            params.limit = limit.toString();
        if (offset)
            params.offset = offset.toString();
        const URL = `${baseUrl}`;
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Version: "2021-07-28",
                Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify(options),
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