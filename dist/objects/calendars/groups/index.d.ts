export declare const CalendarGroups: {
    search: (locationId: import("../../../types/calendars").Calendars.Groups.DTO["locationId"], authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/calendars").Calendars.Groups.AllSuccessfulResponseDTO> | null;
    create: (options: import("../../../types/calendars").Calendars.Groups.CreateDTO, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/calendars").Calendars.Groups.CreateSuccessfulResponseDTO> | null;
    update: (groupId: import("../../../types/calendars").Calendars.Groups.DTO["id"], options: import("../../../types/calendars").Calendars.Groups.UpdateDTO, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/calendars").Calendars.CreateUpdateBlockedSlotSuccessfulResponseDTO> | null;
    delete: (groupId: import("../../../types/calendars").Calendars.Groups.DTO["id"], authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/_global").SuccessDeleteDTO> | null;
    disable: (groupId: import("../../../types/calendars").Calendars.Groups.DTO["id"], options: {
        isActive: boolean;
    }, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | {
        success: true;
    }> | null;
    validateSlug: (options: import("../../../types/calendars").Calendars.Groups.ValidateSlugPostBodyDTO, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/calendars").Calendars.Groups.ValidateSlugSuccessResponseDTO> | null;
};
