export declare const CalendarGroups: {
    search: (locationId: import("../../../types/calendars").CalendarGroupDTO["locationId"], authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/calendars").CalendarAllGroupsSuccessfulResponseDTO> | null;
    create: (options: import("../../../types/calendars").CalendarGroupCreateDTO, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/calendars").CalendarGroupCreateSuccessfulResponseDTO> | null;
    update: (groupId: import("../../../types/calendars").CalendarGroupDTO["id"], options: import("../../../types/calendars").CalendarGroupUpdateDTO, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/calendars").CalendarCreateUpdateBlockedSlotSuccessfulResponseDTO> | null;
    delete: (groupId: import("../../../types/calendars").CalendarGroupDTO["id"], authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/_global").SuccessDeleteDTO> | null;
    disable: (groupId: import("../../../types/calendars").CalendarGroupDTO["id"], options: {
        isActive: boolean;
    }, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | {
        success: true;
    }> | null;
    validateSlug: (options: import("../../../types/calendars").CalendarValidateGroupSlugPostBodyDTO, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/calendars").CalendarValidateGroupSlugSuccessResponseDTO> | null;
};
