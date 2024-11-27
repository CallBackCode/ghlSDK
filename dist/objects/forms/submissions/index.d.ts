export declare const submissions: {
    search: (options: import("../../../types/forms").FormsSubmissionsSearchOptions, authToken: string) => Promise<(import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/forms").FormsSubmissionsSuccessfulResponseDTO) | null>;
};
