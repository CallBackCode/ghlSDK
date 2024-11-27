"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestUtils_1 = require("../../contexts/requestUtils"); // Assuming this function is defined
const baseUrl = "https://services.leadconnectorhq.com/saas-api/public-api/enable-saas";
const enable = async (locationId, options, authToken) => {
    const execute = async () => {
        const URL = `${baseUrl}/${locationId}`;
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Version: "2021-04-15",
                Authorization: `Bearer ${authToken}`,
                channel: "OAUTH",
                source: "INTEGRATION",
            },
            body: JSON.stringify(options),
        });
        const data = await response.json();
        return data;
    };
    try {
        return await (0, requestUtils_1.withExponentialBackoff)(execute);
    }
    catch (error) {
        console.error(error);
        return null;
    }
};
exports.default = enable;
//# sourceMappingURL=enable.js.map