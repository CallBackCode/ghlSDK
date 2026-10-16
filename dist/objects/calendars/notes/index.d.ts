export declare const CalendarAppointmentNotes: {
    search: (appointmentId: import("../../../types/calendars").Calendars.Events.DTO["id"], options: {
        limit: number;
        offset: number;
    }, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/calendars").Calendars.GetNotesDTO> | null;
    create: (appointmentId: import("../../../types/calendars").Calendars.Events.DTO["id"], options: import("../../../types/contacts").ContactNotesDTO, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/calendars").Calendars.GetCreateUpdateNoteSuccessfulResponseDto> | null;
    update: (appointmentId: import("../../../types/calendars").Calendars.Events.DTO["id"], noteId: import("../../../types/calendars").Calendars.GetNoteSchemaDTO["id"], options: import("../../../types/contacts").ContactNotesDTO, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/calendars").Calendars.GetCreateUpdateNoteSuccessfulResponseDto> | null;
    delete: (appointmentId: import("../../../types/calendars").Calendars.Events.DTO["id"], noteId: import("../../../types/calendars").Calendars.GetNoteSchemaDTO["id"], authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/_global").SuccessDeleteDTO> | null;
};
