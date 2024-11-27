export type FormsPageDetailsSchema = {
    url?: string;
    title?: string;
};
export type FormsContactSessionIds = {
    ids?: string[] | null;
};
export type FormsEventDataSchema = {
    fbc?: string;
    fbp?: string;
    page?: FormsPageDetailsSchema;
    type?: string;
    domain?: string;
    medium?: string;
    source?: string;
    version?: string;
    adSource?: string;
    mediumId?: string;
    parentId?: string;
    referrer?: string;
    fbEventId?: string;
    timestamp?: number;
    parentName?: string;
    fingerprint?: string;
    pageVisitType?: string;
    contactSessionIds?: FormsContactSessionIds;
};
export type FormsOthersSchema = {
    __submissions_other_field__?: string;
    __custom_field_id__?: string;
    eventData?: FormsEventDataSchema;
    fieldsOriSequance?: string[];
};
export type FormsSubmissionsSubmissionsSchema = {
    id?: string;
    contactId?: string;
    createdAt?: string;
    formId?: string;
    name?: string;
    email?: string;
    others?: FormsOthersSchema;
};
export type FormsMetaSchema = {
    total?: number;
    currentPage?: number;
    nextPage?: number | null;
    previousPage?: number | null;
};
export type FormsSubmissionsSuccessfulResponseDTO = {
    submissions: FormsSubmissionsSubmissionsSchema[];
    meta: FormsMetaSchema;
};
export type FormsParams = {
    id?: string;
    name?: string;
    locationId?: string;
};
export type FormsSuccessfulResponseDTO = {
    forms: FormsParams[];
    total: number;
};
export type FormsSubmissionsSearchOptions = {
    locationId: string;
    endAt?: string;
    formId?: string;
    limit?: number;
    page?: number;
    q?: string;
    startAt?: string;
};
export type FormsSubmissionsSearchParams = {
    locationId: string;
    endAt?: string;
    formId?: string;
    limit?: string;
    page?: string;
    q?: string;
    startAt?: string;
};
export type FormsSearchOptions = {
    locationId: string;
    limit?: number;
    skip?: number;
    type?: string;
};
export type FormsSearchParams = {
    locationId: string;
    limit?: string;
    skip?: string;
    type?: string;
};
