export declare const CalendarAppointmentNotes: {
    search: (appointmentId: CalendarEventDTO, options: {
        limit: number;
        offset: number;
    }, authToken: string) => Promise<any> | null;
    create: (appointmentId: CalendarEventDTO, options: import("../../../types/contacts").ContactNotesDTO, authToken: string) => Promise<any> | null;
    update: (appointmentId: CalendarEventDTO, noteId: CalendarGetNoteSchemaDTO, options: import("../../../types/contacts").ContactNotesDTO, authToken: string) => Promise<any> | null;
    delete: (appointmentId: CalendarEventDTO, noteId: CalendarGetNoteSchemaDTO, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/_global").SuccessDeleteDTO> | null;
};
