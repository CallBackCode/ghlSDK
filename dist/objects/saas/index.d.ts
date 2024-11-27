export declare const saas: {
    get: (options: import("../../types/saas").SaasSubscriptionUpdateDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/saas").SaasSubscriptionGetResponseDTO> | null;
    update: (locationId: string, options: import("../../types/saas").SaasSubscriptionUpdateDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO> | null;
    enable: (locationId: string, options: import("../../types/saas").SaasSubscriptionEnableDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO> | null;
    disable: (companyId: string, options: import("../../types/saas").SaasSubscriptionBulkDisableDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO> | null;
    pause: (locationId: string, options: import("../../types/saas").SaasSubscriptionPauseLocationDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO> | null;
    rebilling: {
        update: (companyId: string, options: import("../../types/saas").SaasRebillingUpdateDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO> | null;
    };
};
