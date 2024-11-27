import { CountryCodes } from "./_global";
export type LocationsSettingsSchema = {
    allowDuplicateContact?: boolean;
    allowDuplicateOpportunity?: boolean;
    allowFacebookNameMerge?: boolean;
    disableContactTimezone?: boolean;
};
export type LocationsSocialSchema = {
    facebookUrl?: string;
    googlePlus?: string;
    linkedIn?: string;
    foursquare?: string;
    twitter?: string;
    yelp?: string;
    instagram?: string;
    youtube?: string;
    pinterest?: string;
    blogRss?: string;
    googlePlacesId?: string;
};
export type LocationsGetSchema = {
    id?: string;
    name?: string;
    phone?: string;
    email?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    postalCode?: string;
    website?: string;
    timezone?: string;
    settings?: LocationsSettingsSchema;
    social?: LocationsSocialSchema;
};
export type LocationsSearchResponseDTO = {
    locations: LocationsGetSchema[];
};
export type LocationsBusinessSchema = {
    name?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    postalCode?: string;
    website?: string;
    timezone?: string;
    logoUrl?: string;
};
export type LocationsGetByIdSchema = {
    id?: string;
    companyId?: string;
    name?: string;
    domain?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    postalCode?: string;
    logoUrl?: string;
    website?: string;
    timezone?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    business?: LocationsBusinessSchema;
    social?: LocationsSocialSchema;
    settings?: LocationsSettingsSchema;
    reseller?: object;
};
export type LocationsGetByIdResponseDTO = {
    location: LocationsGetByIdSchema;
};
export type LocationsProspectInfoDTO = {
    firstName: string;
    lastName: string;
    email: string;
};
export type LocationsTwilioSchema = {
    sid: string;
    authToken: string;
};
export type LocationsMailgunSchema = {
    apiKey: string;
    domain: string;
};
export type LocationsCreateDTO = {
    name: string;
    phone?: string;
    companyId: string;
    address?: string;
    city?: string;
    state?: string;
    country?: CountryCodes;
    postalCode?: string;
    website?: string;
    timezone?: string;
    prospectInfo?: LocationsProspectInfoDTO;
    settings?: LocationsSettingsSchema;
    social?: LocationsSocialSchema;
    twilio?: LocationsTwilioSchema;
    mailgun?: LocationsMailgunSchema;
    snapshotId?: string;
};
export type LocationsCreateResponseDTO = {
    id: string;
    companyId: string;
    name: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    state: string;
    domain: string;
    country: string;
    postalCode: string;
    website: string;
    timezone: string;
    settings: LocationsSettingsSchema;
    social: LocationsSocialSchema;
};
export type LocationsSnapshotPutSchema = {
    id: string;
    override: boolean;
};
export type LocationsUpdateDTO = {
    companyId: string;
    name?: string;
    phone?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: CountryCodes;
    postalCode?: string;
    website?: string;
    timezone?: string;
    prospectInfo?: LocationsProspectInfoDTO;
    settings?: LocationsSettingsSchema;
    social?: LocationsSocialSchema;
    twilio?: LocationsTwilioSchema;
    mailgun?: LocationsMailgunSchema;
    snapshot?: LocationsSnapshotPutSchema;
};
export type LocationsDeleteResponseDTO = {
    success: boolean;
    message: string;
};
export type LocationsTagsSchema = {
    id?: string;
    name?: string;
    locationId?: string;
};
export type LocationsTagsResponseDTO = {
    tags: LocationsTagsSchema[];
};
export type LocationsTagResponseDTO = {
    tag: LocationsTagsSchema;
};
export type LocationsTagBodySchema = {
    name: string;
};
export type LocationsTaskSearchParamsDTO = {
    contactId?: string[];
    completed?: boolean;
    assignedTo?: string[];
    query?: string;
    limit?: number;
    skip?: number;
    businessId?: string;
};
type LocationsTaskContactSchema = {
    _id?: string;
    firstName?: string;
    lastName?: string;
};
type LocationsTaskUserSchema = {
    id?: string;
    firstName?: string;
    lastName?: string;
    profilePhoto?: string;
};
export type LocationsTaskSchema = {
    _id: string;
    assignedTo: string;
    body: string;
    completed: boolean;
    contactId: string;
    dateAdded: string;
    dateUpdated: string;
    deleted: boolean;
    dueDate: string;
    locationId: string;
    title: string;
    updatedAt: string;
    contactDetails: LocationsTaskContactSchema;
    assignedToUserDetails: LocationsTaskUserSchema;
};
export type LocationsTaskListResponseDTO = {
    tasks: LocationsTaskSchema[];
};
type LocationsCFModal = "contact" | "opportunity";
export type LocationsCFSchema = {
    id?: string;
    name?: string;
    fieldKey?: string;
    placeholder?: string;
    dataType?: string;
    position?: number;
    picklistOptions?: string[];
    picklistImageOptions?: string[];
    isAllowedCustomOption?: boolean;
    isMultiFileAllowed?: boolean;
    maxFileLimit?: number;
    locationId?: string;
    model?: LocationsCFModal;
};
export type LocationsCFsResponseDTO = {
    customFields: LocationsCFSchema[];
};
export type LocationsCFResponseDTO = {
    customField: LocationsCFSchema;
};
export type LocationsCFTextBoxListOptionsSchema = {
    label?: string;
    prefillValue?: string;
};
type LocationsCFDataTypes = "TEXT" | "LARGE_TEXT" | "NUMERICAL" | "PHONE" | "MONETORY" | "CHECKBOX" | "SINGLE_OPTIONS" | "MULTIPLE_OPTIONS" | "FLOAT" | "TIME" | "DATE" | "TEXTBOX_LIST" | "FILE_UPLOAD" | "SIGNATURE" | "RADIO";
type LocationsCFFormatTypes = ".pdf" | ".doc" | ".docx" | ".jpeg" | ".jpg" | ".png" | ".gif" | ".csv" | ".xls";
export type LocationsCFUpdateDTO = {
    name: string;
    placeholder?: string;
    acceptedFormat?: LocationsCFFormatTypes[];
    isMultipleFile?: boolean;
    maxNumberOfFiles?: number;
    textBoxListOptions?: LocationsCFTextBoxListOptionsSchema[];
    position?: number;
    model: LocationsCFModal;
};
export interface LocationsCFCreateDTO extends LocationsCFUpdateDTO {
    dataType: LocationsCFDataTypes;
}
export type LocationsFileUploadBodySchema = {
    id?: string;
    maxFiles?: number;
};
type LocationsFileuploadMeta = {
    fieldName?: string;
    originalname?: string;
    encoding?: string;
    mimetype?: string;
    size?: number;
    url?: string;
};
export type LocationsFileUploadResponseDto = {
    uploadedFiles?: {
        [fileName: string]: string;
    };
    meta?: LocationsFileuploadMeta[];
};
export type LocationsCVSchema = {
    id?: string;
    name?: string;
    fieldKey?: string;
    value?: string;
    locationId?: string;
};
export type LocationsCVsResponseDTO = {
    customValues: LocationsCVSchema[];
};
export type LocationsCVResponseDTO = {
    customValue: LocationsCVSchema;
};
export type LocationsCVDTO = {
    name: string;
    value: string;
};
export type LocationsSMSTemplateSchema = {
    body?: string;
    attachments: string[];
};
export type LocationsSMSTemplateResponseDTO = {
    id?: string;
    name?: string;
    type?: string;
    template?: LocationsSMSTemplateSchema;
    dateAdded?: string;
    locationId?: string;
    urlAttachments?: string[];
};
export type LocationsEmailTemplateSchema = {
    subject?: string;
    attachments?: string[];
    html?: string;
};
export type LocationsEmailTemplateResponseDTO = {
    id?: string;
    name?: string;
    type?: string;
    dateAdded?: string;
    template?: LocationsEmailTemplateSchema;
    locationId?: string;
};
export type LocationsTemplateResponseDTO = {
    templates: Array<LocationsEmailTemplateResponseDTO | LocationsSMSTemplateResponseDTO>;
    totalCount: number;
};
export type LocationsCFSearchParamsDTO = {
    model: LocationsCFModal;
};
export type LocationsSearchOptions = {
    companyId?: string;
    email?: string;
    limit?: string;
    order?: "asc" | "desc";
    skip?: string;
};
export type LocationsSearchParams = {
    companyId?: string;
    email?: string;
    limit?: string;
    order?: string;
    skip?: string;
};
export {};
