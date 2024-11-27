export declare const campaigns: {
    add: (contactId: string, campaignId: string, authToken: string) => Promise<(import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/contacts").ContactCreateDeleteCampaignsSuccessfulResponseDTO) | null>;
    remove: (contactId: string, campaignId: string, authToken: string) => Promise<(import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/contacts").ContactCreateDeleteCampaignsSuccessfulResponseDTO) | null>;
    removeAll: (contactId: string, authToken: string) => Promise<(import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/contacts").ContactCreateDeleteCampaignsSuccessfulResponseDTO) | null>;
};