export declare const pipelines: {
    list: (locationId: string, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/pipelines").PipelinesGetResponseDTO) | null>;
};
