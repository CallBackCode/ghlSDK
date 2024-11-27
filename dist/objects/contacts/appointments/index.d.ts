export declare const appointments: {
    search: (contactId: import("../../../types/contacts").ContactDTO["id"], authToken: string) => Promise<(import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/contacts").ContactGetEventsSuccessfulResponseDTO) | null>;
};
