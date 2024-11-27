export declare const tasks: {
    search: (locationId: string, options: import("../../../types/locations").LocationsTaskSearchParamsDTO, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/locations").LocationsTaskListResponseDTO> | null;
};
