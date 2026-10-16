export declare const CalendarAppointments: {
    get: (calendarId: import("../../../types/calendars").Calendars.Events.DTO["id"], authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | {
        event: import("../../../types/calendars").Calendars.Events.DTO;
    }> | null;
    search: (options: {
        locationId: string;
        startTime: string;
        endTime: string;
        calendarId?: string;
        groupId?: string;
        userId?: string;
    }, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/calendars").Calendars.Events.GetSuccessfulResponseDTO> | null;
    create: (options: import("../../../types/calendars").Calendars.Appointments.CreateUpdateDTO, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/calendars").Calendars.CreateUpdateBlockedSlotSuccessfulResponseDTO> | null;
    update: (eventId: import("../../../types/calendars").Calendars.Events.DTO["id"], options: Partial<import("../../../types/calendars").Calendars.Appointments.CreateUpdateDTO>, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/calendars").Calendars.CreateUpdateBlockedSlotSuccessfulResponseDTO> | null;
    delete: (eventId: import("../../../types/calendars").Calendars.Events.DTO["id"], authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/_global").SuccededDeleteDTO> | null;
};
