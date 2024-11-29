declare enum OpportunityStatus {
    Open = "open",
    Won = "won",
    Lost = "lost",
    Abandoned = "abandoned"
}
export type ContactOpportunityDTO = {
    id: string /** The ID of the opportunity (1a2b3c4d5e6f7g8h9i0j) */;
    pipeline_id: string /** The ID of the pipeline (pipeline123) */;
    pipeline_stage_id: string /** The ID of the pipeline stage (stage456) */;
    monetary_value: number /** The value of the opportunity (1000) */;
    status: OpportunityStatus /** The status of the opportunity (open) */;
};
type CustomField = {
    id: string /** The ID of the custom field (MgobCB14YMVKuE4Ka8p1) */;
    value: string /** The value of the custom field (name) */;
};
type ChannelDNDSettings = {
    status: string /** The status of the channel DND (active) */;
    message: string /** The message of the channel DND (message) */;
    code: string /** The code of the channel DND (code) */;
};
type DNDSettings = {
    Call: ChannelDNDSettings /** The DND settings for the Call channel */;
    Email: ChannelDNDSettings /** The DND settings for the Email channel; */;
    SMS: ChannelDNDSettings /** The DND settings for the SMS channel */;
    WhatsApp: ChannelDNDSettings /** The DND settings for the Whatsapp channel; */;
    GMB: ChannelDNDSettings /** The DND settings for the GMB channel */;
    FB: ChannelDNDSettings /** The DND settings for the FB channel */;
};
export type ContactTagsDTO = {
    tags: string[] /** The tags of the contact (["tag-1","tag-2"]) */;
};
export type ContactDTO = {
    id?: string /** The ID of the contact (102goXVW3lIExEQPOnd3) */;
    phoneLabel?: string /** The label of the phone number (Mobile) */;
    country?: string /** The country of the contact (United States) */;
    address?: string /** The address of the contact (123 Main Street) */;
    source?: string /** The source of the contact (Website) */;
    type?: string /** The type of the contact (lead) */;
    locationId?: string /** The ID of the location (502goXVW3lIExEQPOnd3) */;
    dnd?: boolean /** The DND status of the contact (false) */;
    state?: string /** The state of the contact (California) */;
    businessName?: string /** The business name of the contact (Acme Corporation) */;
    customFields?: CustomField /** The custom fields of the contact ([{ id: "MgobCB14YMVKuE4Ka8p1", value: "name" }]) */;
    tags?: string[] /** The tags of the contact (["tag-1","tag-2"]) */;
    dateAdded?: string /** The date the contact was added (2024-06-06T18:54:57.221Z) */;
    additionalEmails?: string[] /** The additional emails of the contact (["john@example.com","jane@example.com"]) */;
    phone?: string /** The phone number of the contact (+123456789) */;
    companyName?: string /** The company name of the contact (XYZ Corp) */;
    additionalPhones?: string[] /** The additional phones of the contact (["123456789","987654321"]) */;
    dateUpdated?: string /** The date the contact was updated (2024-06-06T18:54:57.221Z) */;
    city?: string /** The city of the contact (New York) */;
    dateOfBirth?: string /** The date of birth of the contact (1990-01-01) */;
    firstNameLowerCase?: string /** The lowercase first name of the contact (john) */;
    lastNameLowerCase?: string /** The lowercase last name of the contact (doe) */;
    email?: string /** The email of the contact (john@example.com) */;
    assignedTo?: string /** The ID of the user the contact is assigned to (182goXVW3lIExEQPOnd3) */;
    followers?: string[] /** The IDs of the users following the contact (["682goXVW3lIExEQPOnd3","582goXVW3lIExEQPOnd3"]) */;
    validEmail?: boolean /** The validity of the email (true) */;
    dndSettings?: DNDSettings;
    opportunities?: ContactOpportunityDTO /** The opportunity of the contact */;
    postalCode?: string /** The postal code of the contact (12345) */;
    businessId?: string /** The ID of the business (282goXVW3lIExEQPOnd3) */;
    searchAfter?: string[] /** The search after of the contact ([1234,"102goXVW3lIExEQPOnd3"]) */;
};
export type ContactSearchSuccessResponseDTO = {
    contacts: ContactDTO[];
    total: number;
};
export type ContactTaskDTO = {
    id?: string /** The ID of the task (102goXVW3lIExEQPOnd3) */;
    title?: string /** The title of the task (Call John) */;
    body?: string /** The body of the task (Call John at 123456789) */;
    assignedTo?: string /** The ID of the user the task is assigned to (182goXVW3lIExEQPOnd3) */;
    dueDate?: string /** The due date of the task (2024-06-06T18:54:57.221Z) */;
    completed?: boolean /** The completion status of the task (false) */;
    contactId?: string /** The ID of the contact (102goXVW3lIExEQPOnd3) */;
};
export type ContactTasksListSuccessfulResponseDTO = {
    tasks: ContactTaskDTO[];
};
export type ContactTaskByIsSuccessfulResponseDTO = {
    task: ContactTaskDTO;
};
export type ContactCreateTaskParamsDTO = {
    title: string /** The title of the task (Call John) */;
    body?: string /** The body of the task (Call John at 123456789) */;
    dueDate: string /** The due date of the task (2024-06-06T18:54:57.221Z) */;
    completed: boolean /** The completion status of the task (false) */;
    assignedTo?: string /** The ID of the user the task is assigned to (182goXVW3lIExEQPOnd3) */;
};
export type ContactUpdateTaskBodyDTO = Partial<ContactCreateTaskParamsDTO>;
export type ContactUpdateTaskStatusParamsDTO = {
    completed: boolean /** The completion status of the task (false) */;
};
export type ContactGetEventDTO = {
    id?: string /** The ID of the event (102goXVW3lIExEQPOnd3) */;
    calendarId?: string /** The ID of the calendar (182goXVW3lIExEQPOnd3) */;
    status?: string /** The status of the event (booked) */;
    title?: string /** The title of the event (Call John) */;
    appoinmentStatus?: string /** The status of the appointment (confirmed) */;
    assignedUserId?: string /** The ID of the user the event is assigned to (182goXVW3lIExEQPOnd3) */;
    notes?: string /** The notes of the event (Call John at 123456789) */;
    startTime?: string /** The start time of the event (2024-06-06T18:54:57.221Z) */;
    endTime?: string /** The end time of the event (2024-06-06T18:54:57.221Z) */;
    address?: string /** The address of the event (123 Main Street) */;
    locationId?: string /** The ID of the location (502goXVW3lIExEQPOnd3) */;
    contactId?: string /** The ID of the contact (102goXVW3lIExEQPOnd3) */;
    groupId?: string /** The ID of the group (282goXVW3lIExEQPOnd3) */;
    users?: string[] /** The IDs of the users (["182goXVW3lIExEQPOnd3","282goXVW3lIExEQPOnd3"]) */;
    dateAdded?: string /** The date the event was added (2024-06-06T18:54:57.221Z) */;
    dateUpdated?: string /** The date the event was updated (2024-06-06T18:54:57.221Z) */;
    assignedResources?: string[] /** The IDs of the assigned resources (["182goXVW3lIExEQPOnd3","282goXVW3lIExEQPOnd3"]) */;
};
export type ContactGetEventsSuccessfulResponseDTO = {
    events: ContactGetEventDTO[];
};
export type ContactCreateAddTagSuccessfulResponseDTO = string[];
export type ContactCreateDeleteTagSuccessfulResponseDTO = string[];
export type ContactGetNoteDTO = {
    id?: string /** The ID of the note (102goXVW3lIExEQPOnd3) */;
    body?: string /** The body of the note (Call John at 123456789) */;
    userId?: string /** The ID of the user (182goXVW3lIExEQPOnd3) */;
    dateAdded?: string /** The date the note was added (2024-06-06T18:54:57.221Z) */;
    contactId?: string /** The ID of the contact (102goXVW3lIExEQPOnd3) */;
};
export type ContactGetNotesListSuccessfulResponseDTO = {
    notes: ContactGetNoteDTO[];
};
export type ContactNotesDTO = {
    body: string /** The body of the note (Call John at 123456789) */;
    userId?: string /** The ID of the user (182goXVW3lIExEQPOnd3) */;
};
export type ContactGetCreateUpdateNoteSuccessfulResponseDto = {
    note: ContactGetNoteDTO;
};
export type ContactBusinessUpdateDTO = {
    locationId: string /** The ID of the location (502goXVW3lIExEQPOnd3) */;
    ids: string[] /** The IDs of the contacts (["IDqvFHGColiyK6jiatuz","pOC0uJ97VYOKH2m3fkMD"]) */;
    businessId: string /** The ID of the business (282goXVW3lIExEQPOnd3) */;
};
export type ContactBulkUpateResponse = {
    success: boolean /** The success status of the bulk update (true) */;
    ids: string[] /** The IDs of the contacts (["IDqvFHGColiyK6jiatuz","pOC0uJ97VYOKH2m3fkMD"]) */;
};
declare enum ContactDndStatus {
    Active = "active",
    Inactive = "inactive",
    Permanent = "permanent"
}
export type ContactDndSettingDTO = {
    status: ContactDndStatus /** The status of the channel DND (active) */;
    message?: string /** The message of the channel DND (message) */;
    code?: string /** The code or reason of the channel DND (30007) */;
};
export type ContactDndSettingsDTO = {
    Call: ContactDndSettingDTO /** The DND settings for the Call channel */;
    Email: ContactDndSettingDTO /** The DND settings for the Email channel; */;
    SMS: ContactDndSettingDTO /** The DND settings for the SMS channel */;
    WhatsApp: ContactDndSettingDTO /** The DND settings for the Whatsapp channel; */;
    GMB: ContactDndSettingDTO /** The DND settings for the GMB channel */;
    FB: ContactDndSettingDTO /** The DND settings for the FB channel */;
};
export type ContactCustomFieldDTO = {
    id?: string /** The ID of the custom field (MgobCB14YMVKuE4Ka8p1) */;
    value?: string /** The value of the custom field (name) */;
};
export type ContactAttributionSourceDTO = {
    url: string /** The URL of the attribution source (https://www.google.com) */;
    campaign?: string /** The campaign of the attribution source (null) */;
    utmSource?: string /** The UTM source of the attribution source (null) */;
    utmMedium?: string /** The UTM medium of the attribution source (null) */;
    utmContent?: string /** The UTM content of the attribution source (null) */;
    referrer?: string /** The referrer of the attribution source (https://www.google.com) */;
    campaignId?: string /** The campaign ID of the attribution source (null) */;
    fbclid?: string /** The FB click ID of the attribution source (null) */;
    gclid?: string /** The GCLID of the attribution source (CjOKCQjwnNyUBhCZARISAI9AYIFtNnIcWcYGIOQINz_ZoFI5SSLRRugSoPZoiEu27IZBY£1-MAIWmEaAo2VEALW_WCB) */;
    msclikid?: string /** The MS click ID of the attribution source (null) */;
    dclid?: string /** The DCLID of the attribution source (null) */;
    fbc?: string /** The FB click of the attribution source (null) */;
    fbp?: string /** The FB pixel of the attribution source (fb. 1.1674748390986.1171287961) */;
    fbEventId?: string /** The FB event ID of the attribution source (null) */;
    userAgent?: string /** The user agent of the attribution source (Mozilla/5.0) */;
    ip?: string /** The IP of the attribution source (58.111.106.198) */;
    medium?: string /** The medium of the attribution source (survey) */;
    mediumId?: string /** The medium ID of the attribution source (FglfHAn30PRwsZVyQlKp) */;
};
export type ContactGetByIdDTO = ContactDTO;
export type ContactByIdSuccessfulResponseDTO = {
    contact: ContactDTO;
};
export type ContactCustomFieldsInputArrayDTO = {
    id: string /** The ID of the contact (102goXVW3lIExEQPOnd3) */;
    key?: string /** The key of the custom field (my_custom_field) */;
    field_value?: string[] /** The value of the custom field (["test","test2"]) */;
};
export type ContactCustomFieldsInputObjectDTO = {
    id: string /** The ID of the contact (102goXVW3lIExEQPOnd3) */;
    key?: string /** The key of the custom field (my_custom_field) */;
    field_value?: object /** The value of the custom field ({}) */;
};
export type ContactCustomFieldsInputStringDTO = {
    id: string /** The ID of the contact (102goXVW3lIExEQPOnd3) */;
    key?: string /** The key of the custom field (my_custom_field) */;
    field_value?: string /** The value of the custom field (test) */;
};
export type ContactInboundDndSettingDTO = {
    status: string /** The status of the channel DND (active) */;
    message: string /** The message of the channel DND (message) */;
};
export type ContactInboundDndSettingsDTO = {
    all: ContactInboundDndSettingDTO /** The DND settings for all channels */;
};
export interface ContactCreateDTO extends ContactCreateSuccessfulResponseSchema {
    locationId: string /** The ID of the location (ve9EPM428h8vShlRW1KT) */;
}
type ContactCreateSuccessfulResponseSchema = {
    id?: string /** The ID of the contact (102goXVW3lIExEQPOnd3) */;
    dateAdded?: string /** The date the contact was added (2024-06-06T18:54:57.221Z) */;
    dateUpdated?: string /** The date the contact was updated (2024-06-06T18:54:57.221Z) */;
    deleted?: boolean /** The deletion status of the contact (false) */;
    tags?: string[][] /** The tags of the contact (["tag-1","tag-2"]) */;
    type?: string /** The type of the contact (lead) */;
    customFields?: CustomField[] /** The custom fields of the contact ([{ id: "MgobCB14YMVKuE4Ka8p1", value: "name" }]) */;
    locationId?: string /** The ID of the location (502goXVW3lIExEQPOnd3) */;
    firstName?: string /** The first name of the contact (John) */;
    firstNameLowerCase?: string /** The lowercase first name of the contact (john) */;
    lastName?: string /** The last name of the contact (Doe) */;
    lastNameLowerCase?: string /** The lowercase last name of the contact (doe) */;
    fullNameLowerCase?: string /** The lowercase full name of the contact (john doe) */;
    email?: string /** The email of the contact (John@Does.com) */;
    emailLowerCase?: string /** The lowercase email of the contact (john@does.com) */;
    bounceEmail?: boolean /** The bounce email status of the contact (false) */;
    unsubscribeEmail?: boolean /** The unsubscribe email status of the contact (false) */;
    dnd?: boolean /** The DND status of the contact (true) */;
    dndSettings?: DNDSettings /** The DND settings of the contact */;
    phone?: string /** The phone number of the contact (+123456789) */;
    address1?: string /** The address of the contact (123 Main Street) */;
    city?: string /** The city of the contact (New York) */;
    state?: string /** The state of the contact (New York) */;
    country?: string /** The country of the contact (United States) */;
    postalCode?: string /** The postal code of the contact (12345) */;
    website?: string /** The website of the contact (https://www.example.com) */;
    source?: string /** The source of the contact (Website) */;
    companyName?: string /** The company name of the contact (XYZ Corp) */;
    dateOfBirth?: string /** The date of birth of the contact (1990-09-25T00:00:00.000Z) */;
    birthMonth?: number /** The birth month of the contact (8) */;
    birthDay?: number /** The birth day of the contact (25) */;
    lastSessionActivityAt?: string /** The last session activity of the contact (2021-07-16T11:39:30.564Z) */;
    offers?: string[] /** The offers of the contact ([]) */;
    products?: string[] /** The products of the contact ([]) */;
    businessId?: string /** The ID of the business (282goXVW3lIExEQPOnd3) */;
    assignedTo?: string /** The ID of the user the contact is assigned to (182goXVW3lIExEQPOnd3) */;
};
export type ContactCreateSuccessfulResponseDTO = {
    contact: ContactCreateSuccessfulResponseSchema;
};
export type ContactUpdateDTO = {
    firstName?: string /** The first name of the contact (John) */;
    lastName?: string /** The last name of the contact (Doe) */;
    name?: string /** The name of the contact (John Doe) */;
    email?: string /** The email of the contact (john@does.com) */;
    phone?: string /** The phone number of the contact (+123456789) */;
    address1?: string /** The address of the contact (123 Main Street) */;
    city?: string /** The city of the contact (New York) */;
    state?: string /** The state of the contact (New York) */;
    postalCode?: string /** The postal code of the contact (12345) */;
    website?: string /** The website of the contact (https://www.example.com) */;
    timezone?: string /** The timezone of the contact (America/Chihuahua) */;
    dnd?: boolean /** The DND status of the contact (true) */;
    dndSettings?: DNDSettings /** The DND settings of the contact */;
    inboundDndSettings?: ContactInboundDndSettingsDTO /** The inbound DND settings of the contact */;
    tags?: string[] /** The tags of the contact (["tag1","tag2"]) */;
    customFields?: Array<ContactCustomFieldsInputStringDTO | ContactCustomFieldsInputArrayDTO | ContactCustomFieldsInputObjectDTO> /** The custom fields of the contact ([{ id: "MgobCB14YMVKuE4Ka8p1", field_value: "name" }]) */;
    source?: string /** The source of the contact (public api) */;
    country?: string /** The country of the contact (US) */;
    assignedTo?: string /** The ID of the user the contact is assigned to (y0BeYjuRIlDwsDcOHOJo) */;
};
export interface ContactCreateSchema extends ContactUpdateDTO {
    companyName?: string /** The company name of the contact (DGS VolMAX) */;
}
export type ContactUpdateSuccessfulResponseSchema = {
    id?: string /** The ID of the contact (102goXVW3lIExEQPOnd3) */;
    locationId?: string /** The ID of the location (502goXVW3lIExEQPOnd3) */;
    name?: string /** The name of the contact (John Doe) */;
    fullNameLowerCase?: string /** The lowercase full name of the contact (john doe) */;
    firstName?: string /** The first name of the contact (John) */;
    firstNameLowerCase?: string /** The lowercase first name of the contact (john) */;
    lastName?: string /** The last name of the contact (Doe) */;
    lastNameLowerCase?: string /** The lowercase last name of the contact (doe) */;
    email?: string /** The email of the contact (John@Does.com) */;
    emailLowerCase?: string /** The lowercase email of the contact (john@does.com) */;
    timezone?: string /** The timezone of the contact (America/Chihuahua) */;
    companyName?: string /** The company name of the contact (DGS VolMAX) */;
    phone?: string /** The phone number of the contact (+123456789) */;
    dnd?: boolean /** The DND status of the contact (true) */;
    dndSettings?: DNDSettings /** The DND settings of the contact */;
    type?: string /** The type of the contact (lead) */;
    source?: string /** The source of the contact (public api) */;
    assignedTo?: string /** The ID of the user the contact is assigned to (ve9EPM428h8vShlRW1KT) */;
    address1?: string /** The address of the contact (3535 1st St N) */;
    city?: string /** The city of the contact (ruDolomitebika) */;
    state?: string /** The state of the contact (AL) */;
    country?: string /** The country of the contact (US) */;
    postalCode?: string /** The postal code of the contact (35061) */;
    website?: string /** The website of the contact (https://www.tesla.com) */;
    tags?: string[][] /** The tags of the contact (["nisi sint commodo amet","consequat"]) */;
    dateOfBirth?: string /** The date of birth of the contact (1990-09-25T00:00:00.000Z) */;
    dateAdded?: string /** The date the contact was added (2021-07-02T05:18:26.704Z) */;
    dateUpdated?: string /** The date the contact was updated (2021-07-02T05:18:26.704Z) */;
    attachments?: string /** The attachments of the contact */;
    ssn?: string /** The SSN of the contact */;
    keyword?: string /** The keyword of the contact (test) */;
    lastActivity?: string /** The last activity of the contact (2021-07-16T11:39:30.564Z) */;
    customFields?: CustomField[] /** The custom fields of the contact ([{ id: "MgobCB14YMVKuE4Ka8p1", value: "name" }]) */;
    businessId?: string /** The ID of the business (282goXVW3lIExEQPOnd3) */;
    attributionSource?: ContactAttributionSourceDTO /** The attribution source of the contact */;
    lastAttributionSource?: ContactAttributionSourceDTO /** The last attribution source of the contact */;
};
export type ContactUpdateSuccessfulResponseDTO = {
    succeded?: boolean /** The success status of the update (true) */;
    contact: ContactUpdateSuccessfulResponseSchema /** The updated contact */;
};
export type ContactUpsertDTO = ContactCreateDTO;
export type ContactUpsertSuccessfulResponseDTO = {
    new: boolean /** True if the contact is created, false if updated (true) */;
    contact: ContactUpdateSuccessfulResponseSchema /** The upserted contact */;
    traceId: string /** The trace ID of the upsert */;
};
export type ContactSearchDTO = {
    id?: string /** The ID of the contact (102goXVW3lIExEQPOnd3) */;
    locationId?: string /** The ID of the location (502goXVW3lIExEQPOnd3) */;
    email?: string /** The email of the contact (john@does.com) */;
    timezone?: string /** The timezone of the contact (America/Chihuahua) */;
    country?: string /** The country of the contact (US) */;
    source?: string /** The source of the contact (public api) */;
    dateAdded?: string /** The date the contact was added (2021-07-02T05:18:26.704Z) */;
    customFields?: CustomField[] /** The custom fields of the contact ([{ id: "MgobCB14YMVKuE4Ka8p1", value: "name" }]) */;
    tags?: string[][] /** The tags of the contact (["nisi sint commodo amet","consequat"]) */;
    businessId?: string /** The ID of the business (282goXVW3lIExEQPOnd3) */;
    attributions?: ContactAttributionSourceDTO[] /** The attributions of the contact */;
    followers?: string[] /** The IDs of the users following the contact (["682goXVW3lIExEQPOnd3","582goXVW3lIExEQPOnd3"]) */;
};
export type ContactsMetaSchema = {
    total?: number /** The total number of contacts (50) */;
    nextPageUrl?: string /** The URL of the next page (http://localhost:5058/contacts/?locationId=ve9EPM428h8vShlRW1KT&startAfter=1631087949919&startAfterId=yd0jdjOavGk2o6Nh5Ndb) */;
    startAfterId?: string /** The ID of the start after contact (yd0jdjOavGk2o6Nh5Ndb) */;
    startAfter?: number /** The start after timestamp (1631087949919) */;
    currentPage?: number /** The current page (2) */;
    nextPage?: number /** The next page (3) */;
    prevPage?: number | null /** The previous page (1) */;
};
export type ContactSearchSuccessfulResponseDTO = {
    contacts: ContactSearchDTO[];
    count: number /** The number of contacts (50) */;
};
export type ContactFollowersDTO = {
    followers: string[] /** The IDs of the users following the contact (["682goXVW3lIExEQPOnd3","582goXVW3lIExEQPOnd3"]) */;
};
export type ContactAddFollowersSuccessfulResponseDTO = {
    followers: string[] /** The IDs of the users following the contact (["682goXVW3lIExEQPOnd3","582goXVW3lIExEQPOnd3", "782goXVW3lIExEQPOnd3"]) */;
    followersAdded: string[] /** The IDs of the users added as followers (["682goXVW3lIExEQPOnd3","582goXVW3lIExEQPOnd3"]) */;
};
export type ContactDeleteFollowersSuccessfulResponseDTO = {
    followers: string[] /** The IDs of the users following the contact (["682goXVW3lIExEQPOnd3","582goXVW3lIExEQPOnd3"]) */;
    followersRemoved: string[] /** The IDs of the users deleted as followers (["682goXVW3lIExEQPOnd3"]) */;
};
export type ContactCreateDeleteCampaignsSuccessfulResponseDTO = {
    succeded?: boolean /** The success status of the delete (true) */;
};
export type ContactCreateWorkflowDTO = {
    eventStartTime: string /** The start time of the event (2021-06-23T03:30:00+01:00) */;
};
export type ContactsWorkflowSuccessfulResponseDTO = {
    succeded: boolean /** The success status of the workflow (true) */;
};
export type SearchConfigDates = {
    gt?: string /** The greater than date (2021-06-23T03:30:00+01:00) */;
    lt?: string /** The less than date (2021-06-23T03:30:00+01:00) */;
    gte?: string /** The greater than or equal date (2021-06-23T03:30:00+01:00) */;
    lte?: string /** The less than or equal date (2021-06-23T03:30:00+01:00) */;
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
    value: string /** Do not pass country code */;
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
    value: string[] /** contains any values included in array (OR Condition) */;
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
    field: string /** The key of the custom field superseeded with "customFields." followed by the custom field id */;
    operator: "eq" | "not_eq" | "contains" | "not_contains";
    value: string;
};
type SearchCustomFieldType1Exists = {
    field: string /** The key of the custom field superseeded with "customFields." followed by the custom field id */;
    operator: "exists" | "not_exists";
};
type SearchCustomFieldType1 = SearchCustomFieldType1Value | SearchCustomFieldType1Exists;
type SearchCustomFieldType2Value = {
    field: string /** The key of the custom field superseeded with "customFields." followed by the custom field id */;
    operator: "eq" | "not_eq";
    value: string;
};
type SearchCustomFieldType2Exists = {
    field: string /** The key of the custom field superseeded with "customFields." followed by the custom field id */;
    operator: "exists" | "not_exists";
};
type SearchCustomFieldType2 = SearchCustomFieldType2Value | SearchCustomFieldType2Exists;
type SearchCustomFieldType3Value = {
    field: string /** The key of the custom field superseeded with "customFields." followed by the custom field id */;
    operator: "eq" | "not_eq";
    value: number;
};
type SearchCustomFieldType3Exists = {
    field: string /** The key of the custom field superseeded with "customFields." followed by the custom field id */;
    operator: "exists" | "not_exists";
};
type SearchCustomFieldType3Range = {
    field: string /** The key of the custom field superseeded with "customFields." followed by the custom field id */;
    operator: "range";
    value: SearchConfigDates;
};
type SearchCustomFieldType3 = SearchCustomFieldType3Value | SearchCustomFieldType3Exists | SearchCustomFieldType3Range;
type SearchCustomFieldType4Range = {
    field: string /** The key of the custom field superseeded with "customFields." followed by the custom field id */;
    operator: "range";
    value: SearchConfigDates;
};
type SearchCustomFieldType4Exists = {
    field: string /** The key of the custom field superseeded with "customFields." followed by the custom field id */;
    operator: "exists" | "not_exists";
};
type SearchCustomFieldType4 = SearchCustomFieldType4Range | SearchCustomFieldType4Exists;
type SearchCustomFieldType5Value = {
    field: string /** The key of the custom field superseeded with "customFields." followed by the custom field id */;
    operator: "eq" | "not_eq" | "contains" | "not_contains";
    value: string;
};
type SearchCustomFieldType5Exists = {
    field: string /** The key of the custom field superseeded with "customFields." followed by the custom field id */;
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
    filters?: Array<SearchFilter | SearchFilterConfig>;
    sort?: SearchSort[];
};
export type ContactsSearchDuplicatesDTO = {
    contact: ContactUpdateSuccessfulResponseSchema;
    matchingField: "number" | "email";
    traceId: string;
};
export {};
