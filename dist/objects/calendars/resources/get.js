"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestUtils_1 = require("../../../contexts/requestUtils");
const baseUrl = "https://services.leadconnectorhq.com/calendars/resources";
const get = async (resourceId, resourceType, authToken) => {
    const URL = `${baseUrl}/${resourceType}/${resourceId}`;
    const fetchData = async () => {
        const response = await fetch(URL, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Version: "2021-04-15",
                Authorization: `Bearer ${authToken}`,
            },
        });
        const data = await response.json();
        return data;
    };
    try {
        return await (0, requestUtils_1.withExponentialBackoff)(fetchData);
    }
    catch (error) {
        console.error(error);
        return null;
    }
};
exports.default = get;
//# sourceMappingURL=get.js.map