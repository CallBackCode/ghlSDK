export declare const workflows: {
    search: (locationId: string, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/workflows").WorkflowsSearchResponseDTO) | null>;
};
