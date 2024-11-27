"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestUtils_1 = require("../../../contexts/requestUtils");
const baseUrl = "https://services.leadconnectorhq.com/invoices/template";
const search = async (options, authToken) => {
    const { endAt, paymentMode, search, startAt, status, altId, altType, limit, offset, } = options;
    const executeRequest = async () => {
        let params = { altId, altType, limit, offset };
        if (endAt)
            params.endAt = endAt.toString();
        if (paymentMode)
            params.paymentMode = paymentMode.toString();
        if (search)
            params.search = search.toString();
        if (startAt)
            params.startAt = startAt.toString();
        if (status)
            params.status = status.toString();
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