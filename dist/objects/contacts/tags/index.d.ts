export declare const tags: {
    add: (contactId: string, options: import("../../../types/contacts").ContactTagsDTO, authToken: string) => Promise<(import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/contacts").ContactTagsDTO) | null>;
    remove: (contactId: string, options: import("../../../types/contacts").ContactTagsDTO, authToken: string) => Promise<(import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/contacts").ContactTagsDTO) | null>;
};
