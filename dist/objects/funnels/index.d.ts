export declare const funnels: {
    listFunnels: (options: {
        locationId: string;
        category?: string;
        limit?: string;
        name?: string;
        offset?: string;
        parentId?: string;
        type?: string;
    }, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/funnels").FunnelsListResponseDTO) | null>;
    listPages: (options: {
        locationId: string;
        funnelId: string;
        limit: number;
        offset: number;
        name?: string;
    }, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/funnels").FunnelsPageResponseDTO) | null>;
    countPages: (options: {
        locationId: string;
        funnelId: string;
        name?: string;
    }, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/funnels").FunnelsPageCountResponseDTO) | null>;
    redirects: {
        search: (options: {
            locationId: string;
            limit: number;
            offset: number;
            search?: string;
        }, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/funnels").FunnelsRedirectListResponseDTO) | null>;
        create: (options: import("../../types/funnels").FunnelsRedirectCreateParams, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/funnels").FunnelsRedirectCreateResponseDTO> | null;
        update: (redirectId: string, options: import("../../types/funnels").FunnelsRedirectUpdateParams, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/funnels").FunnelsRedirectCreateResponseDTO> | null;
        delete: (locationId: string, redirectId: string, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/funnels").FunnelsRedirectDeleteResponseDTO> | null;
    };
};
