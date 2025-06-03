export declare const calendars: {
    get: (calendarId: CalendarDTO, authToken: string) => Promise<any | null>;
    search: (options: {
        locationId: string;
        showDrafted?: boolean;
        groupId?: string;
    }, authToken: string) => Promise<any | null>;
    create: (options: CalendarCreateDTO, authToken: string) => Promise<any | null>;
    update: (calendarId: CalendarDTO, options: CalendarUpdateDTO, authToken: string) => Promise<any | null>;
    delete: (calendarId: CalendarDTO, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/_global").SuccessDeleteDTO) | null>;
    freeSlots: {
        get: (calendarId: CalendarDTO, options: CalendarGetFreeSlotsDTO, authToken: string) => Promise<any> | null;
    };
    groups: {
        search: (locationId: CalendarGroupDTO, authToken: string) => Promise<any> | null;
        create: (options: CalendarGroupCreateDTO, authToken: string) => Promise<any> | null;
        update: (groupId: CalendarGroupDTO, options: CalendarGroupUpdateDTO, authToken: string) => Promise<any> | null;
        delete: (groupId: CalendarGroupDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/_global").SuccessDeleteDTO> | null;
        disable: (groupId: CalendarGroupDTO, options: {
            isActive: boolean;
        }, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | {
            success: true;
        }> | null;
        validateSlug: (options: CalendarValidateGroupSlugPostBodyDTO, authToken: string) => Promise<any> | null;
    };
    appointments: {
        get: (calendarId: CalendarEventDTO, authToken: string) => Promise<any> | null;
        search: (options: {
            locationId: string;
            startTime: string;
            endTime: string;
            calendarId?: string;
            groupId?: string;
            userId?: string;
        }, authToken: string) => Promise<any> | null;
        create: (options: CalendarAppointmentCreateUpdateSchemaDTO, authToken: string) => Promise<any> | null;
        update: (eventId: CalendarEventDTO, options: Partial<CalendarAppointmentCreateUpdateSchemaDTO>, authToken: string) => Promise<any> | null;
        delete: (eventId: CalendarEventDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/_global").SuccededDeleteDTO> | null;
    };
    notes: {
        search: (appointmentId: CalendarEventDTO, options: {
            limit: number;
            offset: number;
        }, authToken: string) => Promise<any> | null;
        create: (appointmentId: CalendarEventDTO, options: import("../../types/contacts").ContactNotesDTO, authToken: string) => Promise<any> | null;
        update: (appointmentId: CalendarEventDTO, noteId: CalendarGetNoteSchemaDTO, options: import("../../types/contacts").ContactNotesDTO, authToken: string) => Promise<any> | null;
        delete: (appointmentId: CalendarEventDTO, noteId: CalendarGetNoteSchemaDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/_global").SuccessDeleteDTO> | null;
    };
    blocks: {
        search: (options: {
            locationId: string;
            startTime: string;
            endTime: string;
            calendarId?: string;
            groupId?: string;
            userId?: string;
        }, authToken: string) => Promise<any> | null;
        create: (options: CalendarBlockSlotCreateSchemaDTO, authToken: string) => Promise<any> | null;
        update: (eventId: CalendarEventDTO, options: CalendarBlockSlotEditSchemaDTO, authToken: string) => Promise<any> | null;
        delete: (eventId: CalendarEventDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/_global").SuccededDeleteDTO> | null;
    };
    resources: {
        get: (resourceId: string, resourceType: CalendarResourceTypeDTO, authToken: string) => Promise<any> | null;
        search: (resourceType: CalendarResourceTypeDTO[], options: {
            locationId: CalendarResourceDTO;
            limit: number;
            skip: number;
        }, authToken: string) => Promise<any> | null;
        create: (resourceType: CalendarResourceTypeDTO, options: CalendarCreateResourceDTO, authToken: string) => Promise<any> | null;
        update: (resourceId: string, resourceType: CalendarResourceTypeDTO, options: Partial<CalendarCreateResourceDTO & {
            isActive: boolean;
        }>, authToken: string) => Promise<any | null>;
        delete: (resourceId: string, resourceType: CalendarResourceTypeDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/_global").SuccessDeleteDTO> | null;
    };
};
