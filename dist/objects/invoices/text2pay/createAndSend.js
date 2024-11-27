"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestUtils_1 = require("../../../contexts/requestUtils");
const baseUrl = "https://services.leadconnectorhq.com/invoices/text2pay";
const createAndSend = async (options, authToken) => {
    const URL = `${baseUrl}`;
    const executeRequest = async () => {
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
exports.default = createAndSend;
//# sourceMappingURL=createAndSend.js.map