export declare const CalendarBlocks: {
    search: (options: {
        locationId: string;
        startTime: string;
        endTime: string;
        calendarId?: string;
        groupId?: string;
        userId?: string;
    }, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/calendars").Calendars.Events.GetSuccessfulResponseDTO> | null;
    create: (options: import("../../../types/calendars").Calendars.BlockSlotCreateSchemaDTO, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/calendars").Calendars.CreateUpdateBlockedSlotSuccessfulResponseDTO> | null;
    update: (eventId: import("../../../types/calendars").Calendars.Events.DTO["id"], options: import("../../../types/calendars").Calendars.BlockSlotEditSchemaDTO, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/calendars").Calendars.Appointments.ResponseDTO> | null;
    delete: (eventId: import("../../../types/calendars").Calendars.Events.DTO["id"], authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/_global").SuccededDeleteDTO> | null;
};
