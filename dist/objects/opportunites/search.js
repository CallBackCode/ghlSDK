"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestUtils_1 = require("../../contexts/requestUtils");
const baseUrl = "https://services.leadconnectorhq.com/opportunities/search";
const search = async (options, authToken) => {
    const { location_id, assigned_to, campaignId, contact_id, country, date, endDate, getCalendarEvents, getNotes, getTasks, id, limit, order, page, pipeline_id, pipeline_stage_id, q, startAfter, startAfterId, status, } = options;
    const executeRequest = async () => {
        let params = { location_id };
        if (assigned_to)
            params.assigned_to = assigned_to.toString();
        if (campaignId)
            params.campaignId = campaignId.toString();
        if (limit)
            params.limit = limit.toString();
        if (order)
            params.order = order.toString();
        if (contact_id)
            params.contact_id = contact_id.toString();
        if (country)
            params.country = country.toString();
        if (date)
            params.date = date.toString();
        if (endDate)
            params.endDate = endDate.toString();
        if (getCalendarEvents)
            params.getCalendarEvents = getCalendarEvents.toString();
        if (getNotes)
            params.getNotes = getNotes.toString();
        if (getTasks)
            params.getTasks = getTasks.toString();
        if (id)
            params.id = id.toString();
        if (page)
            params.page = page.toString();
        if (pipeline_id)
            params.pipeline_id = pipeline_id.toString();
        if (pipeline_stage_id)
            params.pipeline_stage_id = pipeline_stage_id.toString();
        if (q)
            params.q = q.toString();
        if (startAfter)
            params.startAfter = startAfter.toString();
        if (startAfterId)
            params.startAfterId = startAfterId.toString();
        if (status)
            params.status = status.toString();
        const URL = `${baseUrl}`;
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
exports.default = search;
//# sourceMappingURL=search.js.map