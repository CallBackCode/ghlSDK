export type OpportunitiesSearchContactResponseSchema = {
    id?: string /** Contact ID */;
    name?: string /** Contact name */;
    companyName?: string /** Company name */;
    email?: string /** Contact email */;
    phone?: string /** Contact phone */;
    tags?: string[] /** Contact tags */;
};
export type OpportunitiesCFResponseSchema = {
    id: string /** Custom field ID */;
    fieldValue: string | object | string[] | object[] /** Custom field value */;
};
export type OpportunitiesSearchResponseSchema = {
    id?: string /** Opportunity ID */;
    name?: string /** Opportunity name */;
    monetaryValue?: number /** Monetary value of the opportunity */;
    pipelineId?: string /** Pipeline ID */;
    pipelineStageId?: string /** Pipeline stage ID */;
    assignedTo?: string /** User ID of the assigned user */;
    status?: string /** Opportunity status */;
    source?: string /** Opportunity source */;
    lastStatusChangeAt?: string /** Last status change timestamp */;
    lastStageChangeAt?: string /** Last stage change timestamp */;
    lastActionDate?: string /** Last action date timestamp */;
    indexVersion?: string /** Index version */;
    createdAt?: string /** Created timestamp */;
    updatedAt?: string /** Updated timestamp */;
    contactId?: string /** Contact ID */;
    locationId?: string /** Location ID */;
    contact?: OpportunitiesSearchContactResponseSchema /** Contact details */;
    notes?: string[] /** Opportunity notes */;
    tasks?: string[] /** Opportunity tasks */;
    calendarEvents?: string[] /** Opportunity calendar events */;
    customFields?: OpportunitiesCFResponseSchema[] /** Opportunity custom fields */;
    followers?: string[] /** Opportunity followers */;
};
export type OpportunitiesSearchMetaSchema = {
    total: number /** Total number of opportunities */;
    nextPageUrl: string /** URL for the next page */;
    startAfterId: string /** ID to start after */;
    startAfter: number /** Timestamp to start after */;
    currentPage: number /** Current page number */;
    nextPage: number /** Next page number */;
    prevPage: number /** Previous page number */;
};
export type OpportunitiesSearchResponseDTO = {
    opportunities: OpportunitiesSearchResponseSchema[];
    meta: OpportunitiesSearchMetaSchema;
    aggregations: object;
};
export type OpportunitiesCreateResponseDTO = {
    opportunity: OpportunitiesSearchResponseSchema;
};
export type OpportunitiesStatusSchema = "open" | "won" | "lost" | "abandoned";
export type OpportunitiesUpdateStatusDTO = {
    status: OpportunitiesStatusSchema;
};
export type OpportunitiesCFInputArraySchema = {
    id: string /** Custom field ID */;
    key: string /** Custom field key */;
    value: string[] /** Custom field value */;
};
export type OpportunitiesCFInputObjectSchema = {
    id: string /** Custom field ID */;
    key: string /** Custom field key */;
    value: object /** Custom field value */;
};
export type OpportunitiesCFInputStringSchema = {
    id: string /** Custom field ID */;
    key: string /** Custom field key */;
    value: string /** Custom field value */;
};
export type OpportunitiesCreateDTO = {
    pipelineId: string /** Pipeline ID */;
    locationId: string /** Location ID */;
    name: string /** Opportunity name */;
    pipelineStageId?: string /** Pipeline stage ID */;
    status: OpportunitiesStatusSchema /** Opportunity status */;
    contactId: string /** Contact ID */;
    monetaryValue?: number /** Monetary value */;
    assignedTo?: string /** User ID of the assigned user */;
    customFields?: Array<OpportunitiesCFInputArraySchema | OpportunitiesCFInputObjectSchema | OpportunitiesCFInputStringSchema>;
};
export type OpportunityUpdateDTO = {
    pipelineId?: string /** Pipeline ID */;
    name?: string /** Opportunity name */;
    pipelineStageId?: string /** Pipeline stage ID */;
    status?: OpportunitiesStatusSchema /** Opportunity status */;
    contactId?: string /** Contact ID */;
    monetaryValue?: number /** Monetary value */;
    assignedTo?: string /** User ID of the assigned user */;
    customFields?: Array<OpportunitiesCFInputArraySchema | OpportunitiesCFInputObjectSchema | OpportunitiesCFInputStringSchema>;
};
export type OpportunitiesUpsertDTO = {
    pipelineId: string /** Pipeline ID */;
    locationId: string /** Location ID */;
    contactId: string /** Contact ID */;
    name?: string /** Opportunity name */;
    pipelineStageId?: string /** Pipeline stage ID */;
    status?: OpportunitiesStatusSchema /** Opportunity status */;
    monetaryValue?: number /** Monetary value */;
    assignedTo?: string /** User ID of the assigned user */;
};
export type OpportunitiesUpsertResponseDTO = {
    opportunity: OpportunitiesSearchResponseSchema /** Opportunity details */;
    new: boolean /** Whether the opportunity is new */;
};
export type OpportunitiesFollowersDTO = {
    followers: string[] /** Array of user IDs */;
};
export type OpportunitiesAddFollowersResponseDTO = {
    followers: string[] /** Array of user IDs */;
    followersAdded: string[] /** Array of user IDs added */;
};
export type OpportunitiesRemoveFollowersResponseDTO = {
    followers: string[] /** Array of user IDs */;
    followersRemoved: string[] /** Array of user IDs removed */;
};
export type OpportunitiesSearchOptions = {
    location_id: string;
    assigned_to?: string;
    campaignId?: string;
    contact_id?: string;
    country?: string;
    date?: string;
    endDate?: string;
    getCalendarEvents?: boolean;
    getNotes?: boolean;
    getTasks?: boolean;
    id?: string;
    limit?: number;
    order?: string;
    page?: number;
    pipeline_id?: string;
    pipeline_stage_id?: string;
    q?: string;
    startAfter?: string;
    startAfterId?: string;
    status?: OpportunitiesStatusSchema | "all";
};
export type OpportunitiesSearchParams = {
    location_id: string;
    assigned_to?: string;
    campaignId?: string;
    contact_id?: string;
    country?: string;
    date?: string;
    endDate?: string;
    getCalendarEvents?: string;
    getNotes?: string;
    getTasks?: string;
    id?: string;
    limit?: string;
    order?: string;
    page?: string;
    pipeline_id?: string;
    pipeline_stage_id?: string;
    q?: string;
    startAfter?: string;
    startAfterId?: string;
    status?: string;
};
