"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestUtils_1 = require("../../../contexts/requestUtils");
const baseUrl = "https://services.leadconnectorhq.com/conversations/messages/outbound";
const uploadFileAttachments = async (options, authToken) => {
    const URL = `${baseUrl}`;
    const executeRequest = async () => {
        // Create a FormData object
        const formData = new FormData();
        // Add the fields to the FormData object
        for (const key in options) {
            const value = options[key];
            if (Array.isArray(value)) {
                // Handle arrays (e.g., file attachments)
                value.forEach(item => formData.append(key, item));
            }
            else {
                formData.append(key, value);
            }
        }
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                Accept: "application/json",
                Version: "2021-04-15",
                Authorization: `Bearer ${authToken}`,
            },
            body: formData, // Pass the FormData object as the body
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
exports.default = uploadFileAttachments;
//# sourceMappingURL=uploadFileAttachments.js.map