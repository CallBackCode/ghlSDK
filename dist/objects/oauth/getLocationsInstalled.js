"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestUtils_1 = require("../../contexts/requestUtils");
const baseUrl = "https://services.leadconnectorhq.com/oauth/installedLocations";
const getLocationsInstalled = async (options) => {
    const { companyId, appId, isInstalled, limit, onTrial, planId, query, skip } = options;
    let params = { companyId, appId };
    if (isInstalled)
        params.isInstalled = isInstalled.toString();
    if (limit)
        params.limit = limit.toString();
    if (onTrial)
        params.onTrial = onTrial.toString();
    if (planId)
        params.planId = planId.toString();
    if (skip)
        params.skip = skip.toString();
    if (query)
        params.query = query;
    const URL = `${baseUrl}/` + new URLSearchParams(params);
    const executeRequest = async () => {
        const response = await fetch(URL, {
            method: "GET",
            headers: {
                Version: "2021-07-28",
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
exports.default = getLocationsInstalled;
//# sourceMappingURL=getLocationsInstalled.js.map