type EmailsType = "html" | "builder" | "folder";
type EmailsBuilderVersion = 1 | 2;
type EmailsImportProvider = "mailchimp" | "active_campaign" | "kajabi";
export type EmailsCreateBuilderDTO = {
    locationId: string;
    type: EmailsType;
    title?: string;
    updatedBy?: string;
    builderVersion?: EmailsBuilderVersion;
    name?: string;
    parentId?: string;
    templateDataUrl?: string;
    importProvider?: EmailsImportProvider;
    importURL?: string;
    templateSource?: string;
    isPlainText?: boolean;
};
export type EmailsCreateBuilderSuccesfulResponseDTO = {
    redirect: string;
    traceId: string;
};
export type EmailsFetchBuilderSuccesfulResponseDTO = {
    name?: string;
    updatedBy?: string;
    isPlainText?: boolean;
    lastUpdated?: string;
    dateAdded?: string;
    previewUrl?: string;
    id?: string;
    version?: string;
    templateType?: string;
};
export type EmailsDeleteBuilderSuccesfulResponseDTO = {
    ok: string;
    traceId: string;
};
export type EmailsTemplateSettings = object;
export type EmailsIBuilderJsonMapper = {
    elements: string[];
    attrs: object;
    templateSettings: EmailsTemplateSettings;
};
export type EmailsSaveBuilderDataDTO = {
    locationId: string;
    templateId: string;
    updatedBy: string;
    dnd: EmailsIBuilderJsonMapper;
    html: string;
    editorType: EmailsType;
    previewText?: string;
};
export type EmailsBuilderUpdateSuccessfulDTO = {
    ok?: string;
    traceId?: string;
    previewUrl?: string;
    templateDownloadUrl?: string;
};
export type EmailsSearchOptions = {
    locationId: string;
    archived?: string;
    builderVersion?: EmailsBuilderVersion;
    limit?: string;
    name?: string;
    offset?: string;
    originId?: string;
    parentId?: string;
    search?: string;
    sortByDate?: string;
    templatesOnly?: string;
};
export type EmailsParams = {
    locationId: string;
    archived?: string;
    builderVersion?: string;
    limit?: string;
    name?: string;
    offset?: string;
    originId?: string;
    parentId?: string;
    search?: string;
    sortByDate?: string;
    templatesOnly?: string;
};
export {};
