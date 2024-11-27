"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestUtils_1 = require("../../../contexts/requestUtils"); // Assuming this function is defined
const baseUrl = "https://services.leadconnectorhq.com/locations";
const create = async (locationId, options, authToken) => {
    const createAppointment = async () => {
        const URL = `${baseUrl}/${locationId}/customFields`;
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
        const data = await response.json();
        return data;
    };
    try {
        return await (0, requestUtils_1.withExponentialBackoff)(createAppointment);
    }
    catch (error) {
        console.error(error);
        return null;
    }
};
exports.default = create;
//# sourceMappingURL=create.js.map