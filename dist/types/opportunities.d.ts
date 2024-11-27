export type OpportunitiesSearchContactResponseSchema = {
    id?: string;
    name?: string;
    companyName?: string;
    email?: string;
    phone?: string;
    tags?: string[];
};
export type OpportunitiesCFResponseSchema = {
    id: string;
    fieldValue: string | object | string[] | object[];
};
export type OpportunitiesSearchResponseSchema = {
    id?: string;
    name?: string;
    monetaryValue?: number;
    pipelineId?: string;
    pipelineStageId?: string;
    assignedTo?: string;
    status?: string;
    source?: string;
    lastStatusChangeAt?: string;
    lastStageChangeAt?: string;
    lastActionDate?: string;
    indexVersion?: string;
    createdAt?: string;
    updatedAt?: string;
    contactId?: string;
    locationId?: string;
    contact?: OpportunitiesSearchContactResponseSchema;
    notes?: string[];
    tasks?: string[];
    calendarEvents?: string[];
    customFields?: OpportunitiesCFResponseSchema[];
    followers?: string[];
};
export type OpportunitiesSearchMetaSchema = {
    total: number;
    nextPageUrl: string;
    startAfterId: string;
    startAfter: number;
    currentPage: number;
    nextPage: number;
    prevPage: number;
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
    id: string;
    key: string;
    value: string[];
};
export type OpportunitiesCFInputObjectSchema = {
    id: string;
    key: string;
    value: object;
};
export type OpportunitiesCFInputStringSchema = {
    id: string;
    key: string;
    value: string;
};
export type OpportunitiesCreateDTO = {
    pipelineId: string;
    locationId: string;
    name: string;
    pipelineStageId?: string;
    status: OpportunitiesStatusSchema;
    contactId: string;
    monetaryValue?: number;
    assignedTo?: string;
    customFields?: Array<OpportunitiesCFInputArraySchema | OpportunitiesCFInputObjectSchema | OpportunitiesCFInputStringSchema>;
};
export type OpportunityUpdateDTO = {
    pipelineId?: string;
    name?: string;
    pipelineStageId?: string;
    status?: OpportunitiesStatusSchema;
    contactId?: string;
    monetaryValue?: number;
    assignedTo?: string;
    customFields?: Array<OpportunitiesCFInputArraySchema | OpportunitiesCFInputObjectSchema | OpportunitiesCFInputStringSchema>;
};
export type OpportunitiesUpsertDTO = {
    pipelineId: string;
    locationId: string;
    contactId: string;
    name: string;
    pipelineStageId?: string;
    status?: OpportunitiesStatusSchema;
    monetaryValue?: number;
    assignedTo?: string;
};
export type OpportunitiesUpsertResponseDTO = {
    opportunity: OpportunitiesSearchResponseSchema;
    new: boolean;
};
export type OpportunitiesFollowersDTO = {
    followers: string[];
};
export type OpportunitiesAddFollowersResponseDTO = {
    followers: string[];
    followersAdded: string[];
};
export type OpportunitiesRemoveFollowersResponseDTO = {
    followers: string[];
    followersRemoved: string[];
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
