export declare const payments: {
    integrations: {
        search: (options: {
            altId: string;
            altType: "location";
            limit?: number;
            offset?: number;
        }, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/payments").PaymentsWLProviderListResponseDTO) | null>;
        create: (options: import("../../types/payments").PaymentsWLProviderCreateDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/payments").PaymentsIntegrationProviderSchema> | null;
    };
    orders: {
        get: (orderId: string, options: import("../../types/payments").PaymentsOrderFullfillmentsGetOptions, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/payments").PaymentsOrderGetResponseDTO> | null;
        list: (options: import("../../types/payments").PaymentsOrderFullfillmentsSearchOptions, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/payments").PaymentsOrderListResponseDTO> | null;
        fullfillments: {
            list: (orderId: string, options: {
                altId: string;
                altType: string;
            }, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/payments").PaymentsFullfillmentListResponseDTO> | null;
            create: (orderId: string, options: import("../../types/payments").PaymentsFullfillmentCreateDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/payments").PaymentsFullfillmentListResponseDTO> | null;
        };
    };
    transactions: {
        get: (transactionId: string, options: {
            altId: string;
            altType: string;
            locationId?: string;
        }, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/payments").PaymentsTxnGetResponseDTO> | null;
        search: (options: import("../../types/payments").PaymentsTransactionsSearchOptions, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/payments").PaymentsTxnListResponseDTO> | null;
    };
    subscriptions: {
        get: (subscriptionId: string, options: {
            altId: string;
            altType: string;
        }, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/payments").PaymentsSubscriptionGetResponseDTO> | null;
        search: (options: import("../../types/payments").PaymentsSubscriptionsSearchOptions, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/payments").PaymentsSubscriptionListResponseDTO> | null;
    };
    customProviders: {
        create: (locationId: string, options: import("../../types/payments").PaymentsCustomProviderCreateDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/payments").PaymentsCustomProviderGetResponseDTO> | null;
        delete: (locationId: string, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/_global").SuccessDeleteDTO> | null;
        config: {
            get: (locationId: string, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/payments").PaymentsCustomProviderGetResponseDTO> | null;
            create: (locationId: string, options: import("../../types/payments").PaymentsCustomProviderConnectSchema, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/payments").PaymentsCustomProviderGetResponseDTO> | null;
            disconnect: (locationId: string, options: import("../../types/payments").PaymentsCustomProviderDeleteResponseDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/payments").PaymentsCustomProviderDisconnectResponseDTO> | null;
        };
    };
};
