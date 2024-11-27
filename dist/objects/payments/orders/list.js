"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestUtils_1 = require("../../../contexts/requestUtils");
const baseUrl = "https://services.leadconnectorhq.com/payments/orders";
const list = async (options, authToken) => {
    const { contactId, endAt, funnelProductIds, limit, locationId, offset, paymentMode, search, startAt, status, altId, altType, } = options;
    const executeRequest = async () => {
        let params = { altId, altType };
        if (contactId)
            params.contactId = contactId.toString();
        if (endAt)
            params.endAt = endAt.toString();
        if (limit)
            params.limit = limit.toString();
        if (funnelProductIds)
            params.funnelProductIds = funnelProductIds.toString();
        if (locationId)
            params.locationId = locationId.toString();
        if (offset)
            params.offset = offset.toString();
        if (paymentMode)
            params.paymentMode = paymentMode.toString();
        if (search)
            params.search = search.toString();
        if (startAt)
            params.startAt = startAt.toString();
        if (status)
            params.status = status.toString();
        const URL = `${baseUrl}?` + new URLSearchParams(params);
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
exports.default = list;
//# sourceMappingURL=list.js.map