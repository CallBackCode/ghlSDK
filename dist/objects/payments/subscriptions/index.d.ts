export declare const subscriptions: {
    get: (subscriptionId: string, options: {
        altId: string;
        altType: string;
    }, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/payments").PaymentsSubscriptionGetResponseDTO> | null;
    search: (options: import("../../../types/payments").PaymentsSubscriptionsSearchOptions, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/payments").PaymentsSubscriptionListResponseDTO> | null;
};
