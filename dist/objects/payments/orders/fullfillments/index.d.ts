export declare const fullfillments: {
    list: (orderId: string, options: {
        altId: string;
        altType: string;
    }, authToken: string) => Promise<import("../../../../types/_global").BadRequestDTO | import("../../../../types/_global").UnauthorizedDTO | import("../../../../types/_global").UnprocessableDTO | import("../../../../types/payments").PaymentsFullfillmentListResponseDTO> | null;
    create: (orderId: string, options: import("../../../../types/payments").PaymentsFullfillmentCreateDTO, authToken: string) => Promise<import("../../../../types/_global").BadRequestDTO | import("../../../../types/_global").UnauthorizedDTO | import("../../../../types/_global").UnprocessableDTO | import("../../../../types/payments").PaymentsFullfillmentListResponseDTO> | null;
};
