export declare const integrations: {
    search: (options: {
        altId: string;
        altType: "location";
        limit?: number;
        offset?: number;
    }, authToken: string) => Promise<(import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/payments").PaymentsWLProviderListResponseDTO) | null>;
    create: (options: import("../../../types/payments").PaymentsWLProviderCreateDTO, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/payments").PaymentsIntegrationProviderSchema> | null;
};
