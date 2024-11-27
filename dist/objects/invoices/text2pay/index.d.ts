export declare const text2pay: {
    createAndSend: (options: import("../../../types/invoices").InvoicesTTPDTO, authToken: string) => Promise<(import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/invoices").InvoicesTTPResponseDTO) | null>;
};
