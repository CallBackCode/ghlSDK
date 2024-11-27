export declare const forms: {
    search: (options: import("../../types/forms").FormsSearchOptions, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/forms").FormsSuccessfulResponseDTO) | null>;
    submissions: {
        search: (options: import("../../types/forms").FormsSubmissionsSearchOptions, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/forms").FormsSubmissionsSuccessfulResponseDTO) | null>;
    };
};
