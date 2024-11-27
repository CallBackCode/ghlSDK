export declare const companies: {
    get: (companyId: import("../../types/companies").CompaniesGetByIdDTO["id"], authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/companies").CompaniesGetByIdSuccessfulResponseDTO) | null>;
};
