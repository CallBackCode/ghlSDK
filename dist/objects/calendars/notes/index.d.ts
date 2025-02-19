export declare const CalendarAppointmentNotes: {
    search: (appointmentId: import("../../../types/calendars").CalendarEventDTO["id"], options: {
        limit: number;
        offset: number;
    }, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/calendars").CalendarGetNotesDTO> | null;
    create: (appointmentId: import("../../../types/calendars").CalendarEventDTO["id"], options: import("../../../types/contacts").ContactNotesDTO, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/calendars").CalendarGetCreateUpdateNoteSuccessfulResponseDto> | null;
    update: (appointmentId: import("../../../types/calendars").CalendarEventDTO["id"], noteId: import("../../../types/calendars").CalendarGetNoteSchemaDTO["id"], options: import("../../../types/contacts").ContactNotesDTO, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/calendars").CalendarGetCreateUpdateNoteSuccessfulResponseDto> | null;
    delete: (appointmentId: import("../../../types/calendars").CalendarEventDTO["id"], noteId: import("../../../types/calendars").CalendarGetNoteSchemaDTO["id"], authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/_global").SuccessDeleteDTO> | null;
};
