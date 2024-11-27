export declare const campaigns: {
    search: (options: {
        locationId: string;
        status?: string;
    }, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/campaigns").CampaignsSuccessfulResponseDto) | null>;
};
