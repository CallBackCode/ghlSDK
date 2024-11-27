declare enum OpportunityStatus {
    Open = "open",
    Won = "won",
    Lost = "lost",
    Abandoned = "abandoned"
}
export type ContactOpportunityDTO = {
    id: string;
    pipeline_id: string;
    pipeline_stage_id: string;
    monetary_value: number;
    status: OpportunityStatus;
};
type CustomField = {
    id: string;
    value: string;
};
type ChannelDNDSettings = {
    status: string;
    message: string;
    code: string;
};
type DNDSettings = {
    Call: ChannelDNDSettings;
    Email: ChannelDNDSettings;
    SMS: ChannelDNDSettings;
    WhatsApp: ChannelDNDSettings;
    GMB: ChannelDNDSettings;
    FB: ChannelDNDSettings;
};
export type ContactTagsDTO = {
    tags: string[];
};
export type ContactDTO = {
    id?: string;
    phoneLabel?: string;
    country?: string;
    address?: string;
    source?: string;
    type?: string;
    locationId?: string;
    dnd?: boolean;
    state?: string;
    businessName?: string;
    customFields?: CustomField;
    tags?: string[];
    dateAdded?: string;
    additionalEmails?: string[];
    phone?: string;
    companyName?: string;
    additionalPhones?: string[];
    dateUpdated?: string;
    city?: string;
    dateOfBirth?: string;
    firstNameLowerCase?: string;
    lastNameLowerCase?: string;
    email?: string;
    assignedTo?: string;
    followers?: string[];
    validEmail?: boolean;
    dndSettings?: DNDSettings;
    opportunities?: ContactOpportunityDTO;
    postalCode?: string;
    businessId?: string;
    searchAfter?: string[];
};
export type ContactSearchSuccessResponseDTO = {
    contacts: ContactDTO[];
    total: number;
};
export type ContactTaskDTO = {
    id?: string;
    title?: string;
    body?: string;
    assignedTo?: string;
    dueDate?: string;
    completed?: boolean;
    contactId?: string;
};
export type ContactTasksListSuccessfulResponseDTO = {
    tasks: ContactTaskDTO[];
};
export type ContactTaskByIsSuccessfulResponseDTO = {
    task: ContactTaskDTO;
};
export type ContactCreateTaskParamsDTO = {
    title: string;
    body: string;
    dueDate: string;
    completed: boolean;
    assignedTo?: string;
};
export type ContactUpdateTaskBodyDTO = Partial<ContactCreateTaskParamsDTO>;
export type ContactUpdateTaskStatusParamsDTO = {
    completed: boolean;
};
export type ContactGetEventDTO = {
    id?: string;
    calendarId?: string;
    status?: string;
    title?: string;
    appoinmentStatus?: string;
    assignedUserId?: string;
    notes?: string;
    startTime?: string;
    endTime?: string;
    address?: string;
    locationId?: string;
    contactId?: string;
    groupId?: string;
    users?: string[];
    dateAdded?: string;
    dateUpdated?: string;
    assignedResources?: string[];
};
export type ContactGetEventsSuccessfulResponseDTO = {
    events: ContactGetEventDTO[];
};
export type ContactCreateAddTagSuccessfulResponseDTO = string[];
export type ContactCreateDeleteTagSuccessfulResponseDTO = string[];
export type ContactGetNoteDTO = {
    id?: string;
    body?: string;
    userId?: string;
    dateAdded?: string;
    contactId?: string;
};
export type ContactGetNotesListSuccessfulResponseDTO = {
    notes: ContactGetNoteDTO[];
};
export type ContactNotesDTO = {
    body: string;
    userId?: string;
};
export type ContactGetCreateUpdateNoteSuccessfulResponseDto = {
    note: ContactGetNoteDTO;
};
export type ContactBusinessUpdateDTO = {
    locationId: string;
    ids: string[];
    businessId: string;
};
export type ContactBulkUpateResponse = {
    success: boolean;
    ids: string[];
};
declare enum ContactDndStatus {
    Active = "active",
    Inactive = "inactive",
    Permanent = "permanent"
}
export type ContactDndSettingDTO = {
    status: ContactDndStatus;
    message?: string;
    code?: string;
};
export type ContactDndSettingsDTO = {
    Call: ContactDndSettingDTO;
    Email: ContactDndSettingDTO;
    SMS: ContactDndSettingDTO;
    WhatsApp: ContactDndSettingDTO;
    GMB: ContactDndSettingDTO;
    FB: ContactDndSettingDTO;
};
export type ContactCustomFieldDTO = {
    id?: string;
    value?: string;
};
export type ContactAttributionSourceDTO = {
    url: string;
    campaign?: string;
    utmSource?: string;
    utmMedium?: string;
    utmContent?: string;
    referrer?: string;
    campaignId?: string;
    fbclid?: string;
    gclid?: string;
    msclikid?: string;
    dclid?: string;
    fbc?: string;
    fbp?: string;
    fbEventId?: string;
    userAgent?: string;
    ip?: string;
    medium?: string;
    mediumId?: string;
};
export type ContactGetByIdDTO = ContactDTO;
export type ContactByIdSuccessfulResponseDTO = {
    contact: ContactDTO;
};
export type ContactCustomFieldsInputArrayDTO = {
    id: string;
    key?: string;
    field_value?: string[];
};
export type ContactCustomFieldsInputObjectDTO = {
    id: string;
    key?: string;
    field_value?: object;
};
export type ContactCustomFieldsInputStringDTO = {
    id: string;
    key?: string;
    field_value?: string;
};
export type ContactInboundDndSettingDTO = {
    status: string;
    message: string;
};
export type ContactInboundDndSettingsDTO = {
    all: ContactInboundDndSettingDTO;
};
export interface ContactCreateDTO extends ContactCreateSuccessfulResponseSchema {
    locationId: string;
}
type ContactCreateSuccessfulResponseSchema = {
    id?: string;
    dateAdded?: string;
    dateUpdated?: string;
    deleted?: boolean;
    tags?: string[][];
    type?: string;
    customFields?: CustomField[];
    locationId?: string;
    firstName?: string;
    firstNameLowerCase?: string;
    lastName?: string;
    lastNameLowerCase?: string;
    fullNameLowerCase?: string;
    email?: string;
    emailLowerCase?: string;
    bounceEmail?: boolean;
    unsubscribeEmail?: boolean;
    dnd?: boolean;
    dndSettings?: DNDSettings;
    phone?: string;
    address1?: string;
    city?: string;
    state?: string;
    country?: string;
    postalCode?: string;
    website?: string;
    source?: string;
    companyName?: string;
    dateOfBirth?: string;
    birthMonth?: number;
    birthDay?: number;
    lastSessionActivityAt?: string;
    offers?: string[];
    products?: string[];
    businessId?: string;
    assignedTo?: string;
};
export type ContactCreateSuccessfulResponseDTO = {
    contact: ContactCreateSuccessfulResponseSchema;
};
export type ContactUpdateDTO = {
    firstName?: string;
    lastName?: string;
    name?: string;
    email?: string;
    phone?: string;
    address1?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    website?: string;
    timezone?: string;
    dnd?: boolean;
    dndSettings?: DNDSettings;
    inboundDndSettings?: ContactInboundDndSettingsDTO;
    tags?: string[];
    customFields?: Array<ContactCustomFieldsInputStringDTO | ContactCustomFieldsInputArrayDTO | ContactCustomFieldsInputObjectDTO>;
    source?: string;
    country?: string;
    assignedTo?: string;
};
export interface ContactCreateSchema extends ContactUpdateDTO {
    companyName?: string;
}
export type ContactUpdateSuccessfulResponseSchema = {
    id?: string;
    locationId?: string;
    name?: string;
    fullNameLowerCase?: string;
    firstName?: string;
    firstNameLowerCase?: string;
    lastName?: string;
    lastNameLowerCase?: string;
    email?: string;
    emailLowerCase?: string;
    timezone?: string;
    companyName?: string;
    phone?: string;
    dnd?: boolean;
    dndSettings?: DNDSettings;
    type?: string;
    source?: string;
    assignedTo?: string;
    address1?: string;
    city?: string;
    state?: string;
    country?: string;
    postalCode?: string;
    website?: string;
    tags?: string[][];
    dateOfBirth?: string;
    dateAdded?: string;
    dateUpdated?: string;
    attachments?: string;
    ssn?: string;
    keyword?: string;
    lastActivity?: string;
    customFields?: CustomField[];
    businessId?: string;
    attributionSource?: ContactAttributionSourceDTO;
    lastAttributionSource?: ContactAttributionSourceDTO;
};
export type ContactUpdateSuccessfulResponseDTO = {
    succeded?: boolean;
    contact: ContactUpdateSuccessfulResponseSchema;
};
export type ContactUpsertDTO = ContactCreateDTO;
export type ContactUpsertSuccessfulResponseDTO = {
    new: boolean;
    contact: ContactUpdateSuccessfulResponseSchema;
    traceId: string;
};
export type ContactSearchDTO = {
    id?: string;
    locationId?: string;
    email?: string;
    timezone?: string;
    country?: string;
    source?: string;
    dateAdded?: string;
    customFields?: CustomField[];
    tags?: string[][];
    businessId?: string;
    attributions?: ContactAttributionSourceDTO[];
    followers?: string[];
};
export type ContactsMetaSchema = {
    total?: number;
    nextPageUrl?: string;
    startAfterId?: string;
    startAfter?: number;
    currentPage?: number;
    nextPage?: number;
    prevPage?: number | null;
};
export type ContactSearchSuccessfulResponseDTO = {
    contacts: ContactSearchDTO[];
    count: number;
};
export type ContactFollowersDTO = {
    followers: string[];
};
export type ContactAddFollowersSuccessfulResponseDTO = {
    followers: string[];
    followersAdded: string[];
};
export type ContactDeleteFollowersSuccessfulResponseDTO = {
    followers: string[];
    followersRemoved: string[];
};
export type ContactCreateDeleteCampaignsSuccessfulResponseDTO = {
    succeded?: boolean;
};
export type ContactCreateWorkflowDTO = {
    eventStartTime: string;
};
export type ContactsWorkflowSuccessfulResponseDTO = {
    succeded: boolean;
};
export type SearchConfigDates = {
    gt?: string;
    lt?: string;
    gte?: string;
    lte?: string;
};
type SearchContactId = {
    field: "id";
    operator: "eq" | "not_eq";
    value: string;
};
type SearchAddressValue = {
    field: "address";
    operator: "eq" | "not_eq" | "contains" | "not_contains";
    value: string;
};
type SearchAddressExists = {
    field: "address";
    operator: "exists" | "not_exists";
};
type SearchAddress = SearchAddressValue | SearchAddressExists;
type SearchAssignedToValue = {
    field: "assignedTo";
    operator: "eq" | "not_eq";
    value: string;
};
type SearchAssignedToExists = {
    field: "assignedTo";
    operator: "exists" | "not_exists";
};
type SearchAssignedTo = SearchAssignedToValue | SearchAssignedToExists;
type SearchBusinessNameValue = {
    field: "businessName";
    operator: "eq" | "not_eq" | "contains" | "not_contains";
    value: string;
};
type SearchBusinessNameExists = {
    field: "businessName";
    operator: "exists" | "not_exists";
};
type SearchBusinessName = SearchBusinessNameValue | SearchBusinessNameExists;
type SearchCityValue = {
    field: "city";
    operator: "eq" | "not_eq" | "contains" | "not_contains";
    value: string;
};
type SearchCityExists = {
    field: "city";
    operator: "exists" | "not_exists";
};
type SearchCity = SearchCityValue | SearchCityExists;
type SearchCountryValue = {
    field: "country";
    operator: "eq" | "not_eq";
    value: string;
};
type SearchCountryExists = {
    field: "country";
    operator: "exists" | "not_exists";
};
type SearchCountry = SearchCountryValue | SearchCountryExists;
type SearchCompanyNameValue = {
    field: "companyName";
    operator: "eq" | "not_eq" | "contains" | "not_contains";
    value: string;
};
type SearchCompanyNameExists = {
    field: "companyName";
    operator: "exists" | "not_exists";
};
type SearchCompanyName = SearchCompanyNameValue | SearchCompanyNameExists;
type SearchDateAddedRange = {
    field: "dateAdded";
    operator: "range";
    value: SearchConfigDates;
};
type SearchDateAddedExists = {
    field: "dateAdded";
    operator: "exists" | "not_exists";
};
type SearchDateAdded = SearchDateAddedRange | SearchDateAddedExists;
type SearchDateUpdatedRange = {
    field: "dateUpdated";
    operator: "range";
    value: SearchConfigDates;
};
type SearchDateUpdatedExists = {
    field: "dateUpdated";
    operator: "exists" | "not_exists";
};
type SearchDateUpdated = SearchDateUpdatedRange | SearchDateUpdatedExists;
type SearchDNDValue = {
    field: "dnd";
    operator: "eq" | "not_eq";
    value: boolean;
};
type SearchDNDExists = {
    field: "dnd";
    operator: "exists" | "not_exists";
};
type SearchDND = SearchDNDValue | SearchDNDExists;
type SearchEmailValue = {
    field: "email";
    operator: "eq" | "not_eq";
    value: string;
};
type SearchEmailExists = {
    field: "email";
    operator: "exists" | "not_exists";
};
type SearchEmail = SearchEmailValue | SearchEmailExists;
type SearchFollowersValue = {
    field: "followers";
    operator: "eq" | "not_eq";
    value: string;
};
type SearchFollowersExists = {
    field: "followers";
    operator: "exists" | "not_exists";
};
type SearchFollowers = SearchFollowersValue | SearchFollowersExists;
type SearchFirstNameLowerValue = {
    field: "firstNameLowerCase";
    operator: "eq" | "not_eq" | "contains" | "not_contains";
    value: string;
};
type SearchFirstNameLowerExists = {
    field: "firstNameLowerCase";
    operator: "exists" | "not_exists";
};
type SearchFirstNameLower = SearchFirstNameLowerValue | SearchFirstNameLowerExists;
type SearchLastNameLowerValue = {
    field: "lastNameLowerCase";
    operator: "eq" | "not_eq" | "contains" | "not_contains";
    value: string;
};
type SearchLastNameLowerExists = {
    field: "lastNameLowerCase";
    operator: "exists" | "not_exists";
};
type SearchLastNameLower = SearchLastNameLowerValue | SearchLastNameLowerExists;
type SearchIsValidWhatsappValue = {
    field: "isValidWhatsapp";
    operator: "eq" | "not_eq";
    value: boolean;
};
type SearchIsValidWhatsappExists = {
    field: "isValidWhatsapp";
    operator: "exists" | "not_exists";
};
type SearchIsValidWhatsapp = SearchIsValidWhatsappValue | SearchIsValidWhatsappExists;
type SearchLastEmailClickedDateRange = {
    field: "lastEmailClickedDate";
    operator: "range";
    value: SearchConfigDates;
};
type SearchLastEmailClickedDateExists = {
    field: "lastEmailClickedDate";
    operator: "exists" | "not_exists";
};
type SearchLastEmailClickedDate = SearchLastEmailClickedDateRange | SearchLastEmailClickedDateExists;
type SearchLastEmailOpenedDateRange = {
    field: "lastEmailOpenedDate";
    operator: "range";
    value: SearchConfigDates;
};
type SearchLastEmailOpenedDateExists = {
    field: "lastEmailOpenedDate";
    operator: "exists" | "not_exists";
};
type SearchLastEmailOpenedDate = SearchLastEmailOpenedDateRange | SearchLastEmailOpenedDateExists;
type SearchPhoneValue = {
    field: "phone";
    operator: "eq" | "not_eq" | "contains" | "not_contains";
    value: string;
};
type SearchPhoneExists = {
    field: "phone";
    operator: "exists" | "not_exists";
};
type SearchPhone = SearchPhoneValue | SearchPhoneExists;
type SearchPostalCodeValue = {
    field: "postalCode";
    operator: "eq" | "not_eq" | "contains" | "not_contains";
    value: string;
};
type SearchPostalCodeExists = {
    field: "postalCode";
    operator: "exists" | "not_exists";
};
type SearchPostalCode = SearchPostalCodeValue | SearchPostalCodeExists;
type SearchSourceValue = {
    field: "source";
    operator: "eq" | "not_eq" | "contains" | "not_contains";
    value: string;
};
type SearchSourceExists = {
    field: "source";
    operator: "exists" | "not_exists";
};
type SearchSource = SearchSourceValue | SearchSourceExists;
type SearchStateValue = {
    field: "state";
    operator: "eq" | "not_eq" | "contains" | "not_contains";
    value: string;
};
type SearchStateExists = {
    field: "state";
    operator: "exists" | "not_exists";
};
type SearchState = SearchStateValue | SearchStateExists;
type SearchTagsValue = {
    field: "tags";
    operator: "eq" | "not_eq" | "contains" | "not_contains";
    value: string[];
};
type SearchTagsExists = {
    field: "tags";
    operator: "exists" | "not_exists";
};
type SearchTags = SearchTagsValue | SearchTagsExists;
type SearchTimezoneValue = {
    field: "timezone";
    operator: "eq" | "not_eq";
    value: string;
};
type SearchTimezoneExists = {
    field: "timezone";
    operator: "exists" | "not_exists";
};
type SearchTimezone = SearchTimezoneValue | SearchTimezoneExists;
type SearchContactTypeValue = {
    field: "type";
    operator: "eq" | "not_eq";
    value: string;
};
type SearchContactTypeExists = {
    field: "type";
    operator: "exists" | "not_exists";
};
type SearchContactType = SearchContactTypeValue | SearchContactTypeExists;
type SearchValidEmailValue = {
    field: "validEmail";
    operator: "eq" | "not_eq";
    value: boolean;
};
type SearchValidEmailExists = {
    field: "validEmail";
    operator: "exists" | "not_exists";
};
type SearchValidEmail = SearchValidEmailValue | SearchValidEmailExists;
type SearchWebsiteValue = {
    field: "website";
    operator: "eq" | "not_eq";
    value: string;
};
type SearchWebsiteExists = {
    field: "website";
    operator: "exists" | "not_exists";
};
type SearchWebsite = SearchWebsiteValue | SearchWebsiteExists;
type SearchLastAppointmentRange = {
    field: "lastAppointment";
    operator: "range";
    value: SearchConfigDates;
};
type SearchLastAppointmentExists = {
    field: "lastAppointment";
    operator: "exists" | "not_exists";
};
type SearchLastAppointment = SearchLastAppointmentRange | SearchLastAppointmentExists;
type SearchActiveWorkflowsValue = {
    field: "activeWorkflows";
    operator: "eq" | "not_eq";
    value: string;
};
type SearchActiveWorkflowsExists = {
    field: "activeWorkflows";
    operator: "exists" | "not_exists";
};
type SearchActiveWorkflows = SearchActiveWorkflowsValue | SearchActiveWorkflowsExists;
type SearchFinishedWorkflowsValue = {
    field: "finishedWorkflows";
    operator: "eq" | "not_eq";
    value: string;
};
type SearchFinishedWorkflowsExists = {
    field: "finishedWorkflows";
    operator: "exists" | "not_exists";
};
type SearchFinishedWorkflows = SearchFinishedWorkflowsValue | SearchFinishedWorkflowsExists;
type SearchPipelineIdValue = {
    field: "pipelineId";
    operator: "eq" | "not_eq";
    value: string;
};
type SearchPipelineIdExists = {
    field: "pipelineId";
    operator: "exists" | "not_exists";
};
type SearchPipelineId = SearchPipelineIdValue | SearchPipelineIdExists;
type SearchPipelineStageIdValue = {
    field: "pipelineStageId";
    operator: "eq" | "not_eq";
    value: string;
};
type SearchPipelineStageIdExists = {
    field: "pipelineStageId";
    operator: "exists" | "not_exists";
};
type SearchPipelineStageId = SearchPipelineStageIdValue | SearchPipelineStageIdExists;
type SearchOpportunityStatusValue = {
    field: "status";
    operator: "eq" | "not_eq";
    value: string;
};
type SearchOpportunityStatusExists = {
    field: "status";
    operator: "exists" | "not_exists";
};
type SearchOpportunityStatus = SearchOpportunityStatusValue | SearchOpportunityStatusExists;
type SearchOpportunity = {
    field: "opportunity";
    operator: "nested";
    value: Array<SearchOpportunityStatus | SearchPipelineId | SearchPipelineStageId>;
};
type SearchCustomFieldType1Value = {
    field: string;
    operator: "eq" | "not_eq" | "contains" | "not_contains";
    value: string;
};
type SearchCustomFieldType1Exists = {
    field: string;
    operator: "exists" | "not_exists";
};
type SearchCustomFieldType1 = SearchCustomFieldType1Value | SearchCustomFieldType1Exists;
type SearchCustomFieldType2Value = {
    field: string;
    operator: "eq" | "not_eq";
    value: string;
};
type SearchCustomFieldType2Exists = {
    field: string;
    operator: "exists" | "not_exists";
};
type SearchCustomFieldType2 = SearchCustomFieldType2Value | SearchCustomFieldType2Exists;
type SearchCustomFieldType3Value = {
    field: string;
    operator: "eq" | "not_eq";
    value: number;
};
type SearchCustomFieldType3Exists = {
    field: string;
    operator: "exists" | "not_exists";
};
type SearchCustomFieldType3Range = {
    field: string;
    operator: "range";
    value: SearchConfigDates;
};
type SearchCustomFieldType3 = SearchCustomFieldType3Value | SearchCustomFieldType3Exists | SearchCustomFieldType3Range;
type SearchCustomFieldType4Range = {
    field: string;
    operator: "range";
    value: SearchConfigDates;
};
type SearchCustomFieldType4Exists = {
    field: string;
    operator: "exists" | "not_exists";
};
type SearchCustomFieldType4 = SearchCustomFieldType4Range | SearchCustomFieldType4Exists;
type SearchCustomFieldType5Value = {
    field: string;
    operator: "eq" | "not_eq" | "contains" | "not_contains";
    value: string;
};
type SearchCustomFieldType5Exists = {
    field: string;
    operator: "exists" | "not_exists";
};
type SearchCustomFieldType5 = SearchCustomFieldType5Value | SearchCustomFieldType5Exists;
type SearchCustomField = SearchCustomFieldType1 | SearchCustomFieldType2 | SearchCustomFieldType3 | SearchCustomFieldType4 | SearchCustomFieldType5;
type SearchFilterConfig = SearchContactId | SearchAddress | SearchAssignedTo | SearchBusinessName | SearchCity | SearchCountry | SearchCompanyName | SearchDateAdded | SearchDateUpdated | SearchDND | SearchEmail | SearchFollowers | SearchFirstNameLower | SearchLastNameLower | SearchIsValidWhatsapp | SearchLastEmailClickedDate | SearchLastEmailOpenedDate | SearchPhone | SearchPostalCode | SearchSource | SearchState | SearchTags | SearchTimezone | SearchContactType | SearchValidEmail | SearchWebsite | SearchLastAppointment | SearchActiveWorkflows | SearchFinishedWorkflows | SearchOpportunity | SearchCustomField;
type SearchFilter = {
    group?: "AND" | "OR";
    filters: SearchFilterConfig[];
};
type SearchSort = {
    field: string;
    direction: "asc" | "desc";
};
export type ContactSearchOptions = {
    locationId: string;
    page: number;
    pageLimit: number;
    searchAfter?: Array<string | number>;
    filters?: SearchFilter[];
    sort?: SearchSort[];
};
export type ConrtactSearchDuplicatesDTO = {
    contact: ContactUpdateSuccessfulResponseSchema;
    matchingField: "number" | "email";
    traceId: string;
};
export {};
