export type FormsPageDetailsSchema = {
  url?: string; // The URL of the page
  title?: string; // The title of the page
};

export type FormsContactSessionIds = {
  ids?: string[] | null; // The session IDs of the contacts (["session1","session2"])
};

export type FormsEventDataSchema = {
  fbc?: string; // The Facebook click ID (fb.1.123456789.987654321)
  fbp?: string; // The Facebook pixel ID (fbp.1.987654321.123456789)
  page?: FormsPageDetailsSchema; // The page details
  type?: string; // The type of event (page-visit)
  domain?: string; // The domain of the event (example.com)
  medium?: string; // The medium of the event (form)
  source?: string; // The source of the event (Direct traffic)
  version?: string; // The version of the event (v3)
  adSource?: string; // The ad source of the event (example-ad-source)
  mediumId?: string; // The medium ID of the event (medium-id-123)
  parentId?: string; // The parent ID of the event (parent-id-456)
  referrer?: string; // The referrer of the event (https://staging.leadconnectorhq.com)
  fbEventId?: string; // The Facebook event ID (event-id-789)
  timestamp?: number; // The timestamp of the event (1234567890)
  parentName?: string; // The parent name of the event (Parent Form)
  fingerprint?: string; // The fingerprint of the event (example-fingerprint)
  pageVisitType?: string; // The type of page visit (form)
  contactSessionIds?: FormsContactSessionIds; // The session IDs of the contacts (["session1","session2"])
};

export type FormsOthersSchema = {
  __submissions_other_field__?: string; // The other field
  __custom_field_id__?: string; // The custom field ID
  eventData?: FormsEventDataSchema; // The event data
  fieldsOriSequance?: string[]; // The original sequence of the fields (["full_name","first_name","last_name","phone","email"])
};

export type FormsSubmissionsSubmissionsSchema = {
  id?: string; // The ID of the submission (38303ec7-629a-49e2-888a-cf8bf0b1f97e)
  contactId?: string; // The contact ID (DWQ45t2IPVxi9LDu1wBl)
  createdAt?: string; // The creation date of the submission (2021-06-23T06:07:04.000Z)
  formId?: string; // The form ID (YSWdvS4Is98wtIDGnpmI)
  name?: string; // The name of the submission (test)
  email?: string; // The email of the submission (john@does.com)
  others?: FormsOthersSchema; // The other fields
};

export type FormsMetaSchema = {
  total?: number; // The total number of submissions (1)
  currentPage?: number; // The current page (1)
  nextPage?: number | null; // The next page (null)
  previousPage?: number | null; // The previous page (null)
};

export type FormsSubmissionsSuccessfulResponseDTO = {
  submissions: FormsSubmissionsSubmissionsSchema[]; // The submissions
  meta: FormsMetaSchema; // The meta data
};

export type FormsParams = {
  id?: string; // The ID of the form (ABCHkzuJQ8ZMd4Te84GK)
  name?: string; // The name of the form (Test Form)
  locationId?: string; // The location ID of the form (ABCHkzuJQ8ZMd4Te84GK)
};

export type FormsSuccessfulResponseDTO = {
  forms: FormsParams[]; // The forms
  total: number; // The total number of forms (20)
};

export type FormsSubmissionsSearchOptions = {
  locationId: string; // The location ID
  endAt?: string; // Get submission by ending of this date. By default it will be current date(YYYY-MM-DD)
  formId?: string; // Filter submission by form id
  limit?: number; // Limit Per Page records count. will allow maximum up to 100 and default will be 20
  page?: number; // Page No. By default it will be 1
  q?: string; // Filter by contactId, name, email or phone no
  startAt?: string; // Get submission by starting of this date. By default it will be same date of last month(YYYY-MM-DD)
};

export type FormsSubmissionsSearchParams = {
  locationId: string; // The location ID
  endAt?: string; // Get submission by ending of this date. By default it will be current date(YYYY-MM-DD)
  formId?: string; // Filter submission by form id
  limit?: string; // Limit Per Page records count. will allow maximum up to 100 and default will be 20
  page?: string; // Page No. By default it will be 1
  q?: string; // Filter by contactId, name, email or phone no
  startAt?: string; // Get submission by starting of this date. By default it will be same date of last month(YYYY-MM-DD)
};

export type FormsSearchOptions = {
  locationId: string; // The location ID of the form (ABCHkzuJQ8ZMd4Te84GK)
  limit?: number; // The limit of the forms (20)
  skip?: number; // The skip of the forms (2)
  type?: string; // The type of the form (folder)
};

export type FormsSearchParams = {
  locationId: string; // The location ID of the form (ABCHkzuJQ8ZMd4Te84GK)
  limit?: string; // The limit of the forms (20)
  skip?: string; // The skip of the forms (2)
  type?: string; // The type of the form (folder)
};
