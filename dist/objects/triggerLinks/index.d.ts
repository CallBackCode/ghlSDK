export declare const triggerLinks: {
    search: (options: {
        locationId: string;
    }, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/triggerLinks").LinksSearchResponseDTO) | null>;
    create: (options: import("../../types/triggerLinks").LinksDTO, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/triggerLinks").LinksGetResponseDTO) | null>;
    update: (linkId: string, options: import("../../types/triggerLinks").LinksUpdateDTO, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/triggerLinks").LinksGetResponseDTO) | null>;
    delete: (linkId: string, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/_global").SuccededDeleteDTO) | null>;
};
