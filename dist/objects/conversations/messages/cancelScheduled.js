"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestUtils_1 = require("../../../contexts/requestUtils");
const baseUrl = "https://services.leadconnectorhq.com/conversations/messages";
const cancelScheduled = async (messageId, authToken) => {
    const URL = `${baseUrl}/${messageId}/schedule`;
    const executeRequest = async () => {
        const response = await fetch(URL, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                Version: "2021-04-15",
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
exports.default = cancelScheduled;
//# sourceMappingURL=cancelScheduled.js.map