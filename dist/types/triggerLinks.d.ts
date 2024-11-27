export type LinksSchema = {
    id?: string;
    name?: string;
    redirectTo?: string;
    fieldKey?: string;
    locationId?: string;
};
export type LinksSearchResponseDTO = {
    links: LinksSchema[];
};
export type LinksGetResponseDTO = {
    link: LinksSchema;
};
export type LinksDTO = {
    locationId: string;
    name: string;
    redirectTo: string;
};
export type LinksUpdateDTO = {
    name: string;
    redirectTo: string;
};
