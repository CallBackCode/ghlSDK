export declare const followers: {
    add: (contactId: string, options: import("../../../types/contacts").ContactFollowersDTO, authToken: string) => Promise<(import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/contacts").ContactAddFollowersSuccessfulResponseDTO) | null>;
    remove: (contactId: string, options: import("../../../types/contacts").ContactFollowersDTO, authToken: string) => Promise<(import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/contacts").ContactDeleteFollowersSuccessfulResponseDTO) | null>;
};
