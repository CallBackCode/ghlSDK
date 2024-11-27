export declare const CalendarAppointments: {
    get: (calendarId: import("../../../types/calendars").CalendarEventDTO["id"], authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/calendars").CalendarGetEventSuccessfulResponseDTO> | null;
    search: (options: {
        locationId: string;
        startTime: string;
        endTime: string;
        calendarId?: string;
        groupId?: string;
        userId?: string;
    }, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/calendars").CalendarGetEventsSuccessfulResponseDTO> | null;
    create: (options: import("../../../types/calendars").CalendarBlockSlotCreateSchemaDTO, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/calendars").CalendarCreateUpdateBlockedSlotSuccessfulResponseDTO> | null;
    update: (eventId: import("../../../types/calendars").CalendarEventDTO["id"], options: Partial<import("../../../types/calendars").CalendarAppointmentCreateUpdateSchemaDTO>, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/calendars").CalendarCreateUpdateBlockedSlotSuccessfulResponseDTO> | null;
    delete: (eventId: import("../../../types/calendars").CalendarEventDTO["id"], authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/_global").SuccededDeleteDTO> | null;
};
