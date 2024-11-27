"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestUtils_1 = require("../../contexts/requestUtils");
const baseUrl = "https://services.leadconnectorhq.com/products";
const del = async (locationId, productId, authToken) => {
    const deleteProduct = async () => {
        const URL = `${baseUrl}/${productId}?` + new URLSearchParams({ locationId });
        const response = await fetch(URL, {
            method: "DELETE",
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
        return await (0, requestUtils_1.withExponentialBackoff)(deleteProduct);
    }
    catch (error) {
        console.error(error);
        return null;
    }
};
exports.default = del;
//# sourceMappingURL=delete.js.map