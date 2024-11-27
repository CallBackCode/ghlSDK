export type SuverysGetSchema = {
    id?: string;
    name?: string;
    locationId?: string;
};
export type SuverysGetResponseSchema = {
    surveys: SuverysGetSchema[];
    total: number;
};
export type SurveysPageDetailsSchema = {
    url?: string;
    title?: string;
};
export type SurveysContactSessionIdsSchema = {
    ids: string[];
};
export type SurveysEventDataSchema = {
    fbc?: string;
    fbp?: string;
    page?: SurveysPageDetailsSchema;
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
    contactSessionIds?: SurveysContactSessionIdsSchema | null;
};
export type SurveysOthersSchema = {
    __submissions_other_field__?: string;
    __custom_field_id__?: string;
    eventData?: SurveysEventDataSchema;
    fieldsOriSequance?: string[];
};
export type SuverysSubmissionSchema = {
    id?: string;
    contactId?: string;
    createdAt?: string;
    surveyId?: string;
    name?: string;
    email?: string;
    others?: SurveysOthersSchema;
};
export type SurveysMetaSchema = {
    total?: number;
    currentPage?: number;
    nextPage?: number | null;
    prevPage?: number | null;
};
export type SurveySubmissionsGetResponseDTO = {
    submissions: SuverysSubmissionSchema[];
    meta: SurveysMetaSchema;
};
