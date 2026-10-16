"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestUtils_1 = require("../../../../contexts/requestUtils");
const baseUrl = "https://services.leadconnectorhq.com/associations/relations";
const getAll = async (params, authToken) => {
    const queryObject = {
        locationId: params.locationId,
        limit: params.limit?.toString() ?? "",
        skip: params.skip?.toString() ?? "",
    };
    if (params.associationIds && params.associationIds.length) {
        queryObject.associationIds = params.associationIds.join(",");
    }
    const URL = `${baseUrl}/${params.recordId}?` + new URLSearchParams(queryObject);
    const executeRequest = async () => {
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
exports.default = getAll;
//# sourceMappingURL=get.js.map