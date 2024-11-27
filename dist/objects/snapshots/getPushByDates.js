"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestUtils_1 = require("../../contexts/requestUtils");
const baseUrl = "https://services.leadconnectorhq.com/snapshots/snapshot-status";
const getPushByDates = async (snapshotId, options, authToken) => {
    const fetchEvent = async () => {
        const URL = `${baseUrl}/${snapshotId}?` + new URLSearchParams(options);
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
        return await (0, requestUtils_1.withExponentialBackoff)(fetchEvent);
    }
    catch (error) {
        console.error(error);
        return null;
    }
};
exports.default = getPushByDates;
//# sourceMappingURL=getPushByDates.js.map