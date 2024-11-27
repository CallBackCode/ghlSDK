"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestUtils_1 = require("../../../contexts/requestUtils");
const baseUrl = "https://services.leadconnectorhq.com/payments/transactions";
const get = async (transactionId, options, authToken) => {
    const executeRequest = async () => {
        const URL = `${baseUrl}/${transactionId}?` + new URLSearchParams(options);
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
        return await (0, requestUtils_1.withExponentialBackoff)(executeRequest);
    }
    catch (error) {
        console.error(error);
        return null;
    }
};
exports.default = get;
//# sourceMappingURL=get.js.map