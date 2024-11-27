type FunnelsRedirectAction = "funnel" | "website" | "url" | "all";
export type FunnelsRedirectCreateParams = {
    locationId: string;
    domain: string;
    path: string;
    target: string;
    action: FunnelsRedirectAction;
};
export type FunnelsRedirectResponseDTO = {
    id: string;
    locationId: string;
    domain: string;
    path: string;
    pathLowercase: string;
    type: string;
    target: string;
    action: FunnelsRedirectAction;
};
export type FunnelsRedirectCreateResponseDTO = {
    data: FunnelsRedirectResponseDTO;
};
export type FunnelsRedirectUpdateParams = {
    locationId: string;
    target: string;
    action: FunnelsRedirectAction;
};
export type FunnelsRedirectListResponseDTO = {
    data: {
        count: number;
        data: any[];
    };
};
export type FunnelsRedirectDeleteResponseDTO = {
    data: {
        status: string;
    };
};
export type FunnelsRedirectUpdateResponseDTO = FunnelsRedirectCreateResponseDTO;
export type FunnelsPageResponseDTO = {
    _id: string;
    locationId: string;
    funnelId: string;
    name: string;
    stepId: string;
    deleted: string;
    updatedAt: string;
};
export type FunnelsPageCountResponseDTO = {
    count: number;
};
type FunnelsListSchema = {
    _id: string;
    dateAdded: string;
    dateUpdated: string;
    deleted: boolean;
    domainId?: string;
    locationId: string;
    name: string;
    orderFormVersion?: number;
    originId?: string;
    steps: {
        id: string;
        name: string;
        originId: string;
        pages?: string[];
        products?: string[];
        sequence?: number;
        type?: string;
        url?: string;
    }[];
    type?: string;
    updatedAt: string;
    faviconUrl?: string;
    globalSectionVersion?: number;
    globalSectionsPath?: string;
    globalSectionsUrl?: string;
    isStoreActive?: boolean;
    trackingCodeBody?: string;
    trackingCodeHead?: string;
    url?: string;
};
export type FunnelsListResponseDTO = {
    funnels: FunnelsListSchema;
    count: number;
    traceId: string;
};
export {};
