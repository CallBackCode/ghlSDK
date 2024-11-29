type EmailsType = "html" | "builder" | "folder";
type EmailsBuilderVersion = 1 | 2;
type EmailsImportProvider = "mailchimp" | "active_campaign" | "kajabi";
export type EmailsCreateBuilderDTO = {
    locationId: string /** The location ID of the email (ABCHkzuJQ8ZMd4Te84GK) */;
    type: EmailsType /** The type of email (html, builder, folder) */;
    title?: string /** The title of the email */;
    updatedBy?: string /** The user ID of the user who updated the email */;
    builderVersion?: EmailsBuilderVersion /** The version of the builder */;
    name?: string /** The name of the email */;
    parentId?: string /** The parent ID of the email */;
    templateDataUrl?: string /** The URL of the template data */;
    importProvider?: EmailsImportProvider /** The import provider */;
    importURL?: string /** The URL of the import */;
    templateSource?: string /** The source of the template */;
    isPlainText?: boolean /** Whether the email is plain text */;
};
export type EmailsCreateBuilderSuccesfulResponseDTO = {
    redirect: string;
    traceId: string;
};
export type EmailsFetchBuilderSuccesfulResponseDTO = {
    name?: string /** The name of the email (New Template) */;
    updatedBy?: string /** The user ID of the user who updated the email (ABCHkzuJQ8ZMd4Te84GK) */;
    isPlainText?: boolean /** Whether the email is plain text (false) */;
    lastUpdated?: string /** The last updated date (2024-11-12T12:34:36.070Z) */;
    dateAdded?: string /** The date added (2024-11-12T12:34:36.070Z) */;
    previewUrl?: string /** The preview URL (https://example.com) */;
    id?: string /** The email ID (67334b231f2fad724062f52b5) */;
    version?: string /** The version (1) */;
    templateType?: string /** The type of template (builder) */;
};
export type EmailsDeleteBuilderSuccesfulResponseDTO = {
    ok: string /** The status of the request (true) */;
    traceId: string /** The trace ID of the request (ABCHkzuJQ8ZMd4Te84GK) */;
};
export type EmailsTemplateSettings = object;
export type EmailsIBuilderJsonMapper = {
    elements: string[] /** The elements of the email */;
    attrs: object /** The attributes of the email */;
    templateSettings: EmailsTemplateSettings /** The template settings */;
};
export type EmailsSaveBuilderDataDTO = {
    locationId: string /** The location ID of the email (ABCHkzuJQ8ZMd4Te84GK) */;
    templateId: string /** The template ID (ABCHkzuJQ8ZMd4Te84GK) */;
    updatedBy: string /** The user ID of the user who updated the email (ABCHkzuJQ8ZMd4Te84GK) */;
    dnd: EmailsIBuilderJsonMapper /** The drag and drop data */;
    html: string /** The HTML of the email */;
    editorType: EmailsType /** The type of editor (html) */;
    previewText?: string /** The preview text */;
};
export type EmailsBuilderUpdateSuccessfulDTO = {
    ok?: string /** The status of the request (true) */;
    traceId?: string /** The trace ID of the request (ABCHkzuJQ8ZMd4Te84GK) */;
    previewUrl?: string /** The preview URL (https://example.com) */;
    templateDownloadUrl?: string /** The template download URL (https://example.com) */;
};
export type EmailsSearchOptions = {
    locationId: string /** The location ID of the email */;
    archived?: string /** Whether the email is archived */;
    builderVersion?: EmailsBuilderVersion /** The version of the builder */;
    limit?: string /** The limit of the search */;
    name?: string /** The name of the email */;
    offset?: string /** The offset of the search */;
    originId?: string /** The origin ID of the email */;
    parentId?: string /** The parent ID of the email */;
    search?: string /** The search query */;
    sortByDate?: string /** The sort order */;
    templatesOnly?: string /** Whether to search for templates only */;
};
export type EmailsParams = {
    locationId: string /** The location ID of the email */;
    archived?: string /** Whether the email is archived */;
    builderVersion?: string /** The version of the builder */;
    limit?: string /** The limit of the search */;
    name?: string /** The name of the email */;
    offset?: string /** The offset of the search */;
    originId?: string /** The origin ID of the email */;
    parentId?: string /** The parent ID of the email */;
    search?: string /** The search query */;
    sortByDate?: string /** The sort order */;
    templatesOnly?: string /** Whether to search for templates only */;
};
export {};
