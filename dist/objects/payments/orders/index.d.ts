export declare const orders: {
    get: (orderId: string, options: import("../../../types/payments").PaymentsOrderFullfillmentsGetOptions, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/payments").PaymentsOrderGetResponseDTO> | null;
    list: (options: import("../../../types/payments").PaymentsOrderFullfillmentsSearchOptions, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/payments").PaymentsOrderListResponseDTO> | null;
    fullfillments: {
        list: (orderId: string, options: {
            altId: string;
            altType: string;
        }, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/payments").PaymentsFullfillmentListResponseDTO> | null;
        create: (orderId: string, options: import("../../../types/payments").PaymentsFullfillmentCreateDTO, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/payments").PaymentsFullfillmentListResponseDTO> | null;
    };
};
