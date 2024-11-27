export declare const snippets: {
    search: (locationId: string, options: import("../../../types/locations").LocationsCFSearchParamsDTO, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/locations").LocationsCFsResponseDTO> | null;
    delete: (locationId: string, snippetId: string, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/_global").SuccededDeleteDTO> | null;
};
