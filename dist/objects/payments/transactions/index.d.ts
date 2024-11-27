export declare const transactions: {
    get: (transactionId: string, options: {
        altId: string;
        altType: string;
        locationId?: string;
    }, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/payments").PaymentsTxnGetResponseDTO> | null;
    search: (options: import("../../../types/payments").PaymentsTransactionsSearchOptions, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/payments").PaymentsTxnListResponseDTO> | null;
};
