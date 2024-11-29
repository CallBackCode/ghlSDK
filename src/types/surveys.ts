export type SuverysGetSchema = {
  id?: string /** Survey ID */;
  name?: string /** Survey name */;
  locationId?: string /** Location ID */;
};

export type SuverysGetResponseSchema = {
  surveys: SuverysGetSchema[] /** The list of surveys */;
  total: number /** The total number of surveys */;
};

export type SurveysPageDetailsSchema = {
  url?: string /** The URL of the page */;
  title?: string /** The title of the page */;
};

export type SurveysContactSessionIdsSchema = {
  ids: string[] /** The list of contact session ids */;
};

export type SurveysEventDataSchema = {
  fbc?: string /** The Facebook click ID */;
  fbp?: string /** The Facebook pixel ID */;
  page?: SurveysPageDetailsSchema /** The page details */;
  domain?: string /** The domain */;
  medium?: string /** The medium */;
  source?: string /** The source */;
  version?: string /** The version */;
  adSource?: string /** The ad source */;
  mediumId?: string /** The medium ID */;
  parentId?: string /** The parent ID */;
  referrer?: string /** The referrer */;
  fbEventId?: string /** The Facebook event ID */;
  timestamp?: number /** The timestamp */;
  parentName?: string /** The parent name */;
  fingerprint?: string /** The fingerprint */;
  pageVisitType?: string /** The page visit type */;
  contactSessionIds?: SurveysContactSessionIdsSchema | null /** The contact session ids */;
};

export type SurveysOthersSchema = {
  __submissions_other_field__?: string /** The other field */;
  __custom_field_id__?: string /** The custom field ID */;
  eventData?: SurveysEventDataSchema /** The event data */;
  fieldsOriSequance?: string[] /** The original sequence of fields */;
};

export type SuverysSubmissionSchema = {
  id?: string /** The submission ID */;
  contactId?: string /** The contact ID */;
  createdAt?: string /** The creation date (2020-11-01T18:02:21.000Z) */;
  surveyId?: string /** The survey ID */;
  name?: string /** The name */;
  email?: string /** The email */;
  others?: SurveysOthersSchema /** The others */;
};

export type SurveysMetaSchema = {
  total?: number /** The total number of surveys */;
  currentPage?: number /** The current page */;
  nextPage?: number | null /** The next page */;
  prevPage?: number | null /** The previous page */;
};

export type SurveySubmissionsGetResponseDTO = {
  submissions: SuverysSubmissionSchema[] /** The list of submissions */;
  meta: SurveysMetaSchema /** The meta data */;
};
