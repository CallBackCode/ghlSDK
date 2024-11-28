export declare const calendars: {
    get: (calendarId: import("../../types/calendars").CalendarDTO["id"], authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").CalendarByIdSuccessfulResponseDTO) | null>;
    search: (options: {
        locationId: string;
        showDrafted?: boolean;
        groupId?: string;
    }, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").CalendarsGetSuccessfulResponseDTO) | null>;
    create: (options: import("../../types/calendars").CalendarCreateDTO, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").CalendarByIdSuccessfulResponseDTO) | null>;
    update: (calendarId: import("../../types/calendars").CalendarDTO["id"], options: import("../../types/calendars").CalendarUpdateDTO, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").CalendarByIdSuccessfulResponseDTO) | null>;
    delete: (calendarId: import("../../types/calendars").CalendarDTO["id"], authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/_global").SuccessDeleteDTO) | null>;
    freeSlots: {
        get: (calendarId: import("../../types/calendars").CalendarDTO["id"], options: import("../../types/calendars").CalendarGetFreeSlotsDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").CalendarGetSlotsSuccessfulResponseDto> | null;
    };
    groups: {
        search: (locationId: import("../../types/calendars").CalendarGroupDTO["locationId"], authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").CalendarAllGroupsSuccessfulResponseDTO> | null;
        create: (options: import("../../types/calendars").CalendarGroupCreateDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").CalendarGroupCreateSuccessfulResponseDTO> | null;
        update: (groupId: import("../../types/calendars").CalendarGroupDTO["id"], options: import("../../types/calendars").CalendarGroupUpdateDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").CalendarCreateUpdateBlockedSlotSuccessfulResponseDTO> | null;
        delete: (groupId: import("../../types/calendars").CalendarGroupDTO["id"], authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/_global").SuccessDeleteDTO> | null;
        disable: (groupId: import("../../types/calendars").CalendarGroupDTO["id"], options: {
            isActive: boolean;
        }, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | {
            success: true;
        }> | null;
        validateSlug: (options: import("../../types/calendars").CalendarValidateGroupSlugPostBodyDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").CalendarValidateGroupSlugSuccessResponseDTO> | null;
    };
    appointments: {
        get: (calendarId: import("../../types/calendars").CalendarEventDTO["id"], authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").CalendarGetEventSuccessfulResponseDTO> | null;
        search: (options: {
            locationId: string;
            startTime: string;
            endTime: string;
            calendarId?: string;
            groupId?: string;
            userId?: string;
        }, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").CalendarGetEventsSuccessfulResponseDTO> | null;
        create: (options: import("../../types/calendars").CalendarAppointmentCreateUpdateSchemaDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").CalendarCreateUpdateBlockedSlotSuccessfulResponseDTO> | null;
        update: (eventId: import("../../types/calendars").CalendarEventDTO["id"], options: Partial<import("../../types/calendars").CalendarAppointmentCreateUpdateSchemaDTO>, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").CalendarCreateUpdateBlockedSlotSuccessfulResponseDTO> | null;
        delete: (eventId: import("../../types/calendars").CalendarEventDTO["id"], authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/_global").SuccededDeleteDTO> | null;
    };
    notes: {
        search: (appointmentId: import("../../types/calendars").CalendarEventDTO["id"], options: {
            limit: number;
            offset: number;
        }, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").CalendarGetNotesDTO> | null;
        create: (appointmentId: import("../../types/calendars").CalendarEventDTO["id"], options: import("../../types/contacts").ContactNotesDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").CalendarGetCreateUpdateNoteSuccessfulResponseDto> | null;
        update: (appointmentId: import("../../types/calendars").CalendarEventDTO["id"], noteId: import("../../types/calendars").CalendarGetNoteSchemaDTO["id"], options: import("../../types/contacts").ContactNotesDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").CalendarGetCreateUpdateNoteSuccessfulResponseDto> | null;
        delete: (appointmentId: import("../../types/calendars").CalendarEventDTO["id"], noteId: import("../../types/calendars").CalendarGetNoteSchemaDTO["id"], authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/_global").SuccessDeleteDTO> | null;
    };
    blocks: {
        search: (options: {
            locationId: string;
            startTime: string;
            endTime: string;
            calendarId?: string;
            groupId?: string;
            userId?: string;
        }, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").CalendarGetEventsSuccessfulResponseDTO> | null;
        create: (options: import("../../types/calendars").CalendarBlockSlotCreateSchemaDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").CalendarCreateUpdateBlockedSlotSuccessfulResponseDTO> | null;
        update: (eventId: import("../../types/calendars").CalendarEventDTO["id"], options: import("../../types/calendars").CalendarBlockSlotEditSchemaDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").CalendarAppointmentSchemaResponseDTO> | null;
        delete: (eventId: import("../../types/calendars").CalendarEventDTO["id"], authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/_global").SuccededDeleteDTO> | null;
    };
    resources: {
        get: (resourceId: string, resourceType: import("../../types/calendars").CalendarResourceTypeDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").CalendarResourceDTO> | null;
        search: (resourceType: import("../../types/calendars").CalendarResourceTypeDTO[], options: {
            locationId: import("../../types/calendars").CalendarResourceDTO["locationId"];
            limit: number;
            skip: number;
        }, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").CalendarResourceDTO> | null;
        create: (resourceType: import("../../types/calendars").CalendarResourceTypeDTO, options: import("../../types/calendars").CalendarCreateResourceDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").CalendarResourceResponseDTO> | null;
        update: (resourceId: string, resourceType: import("../../types/calendars").CalendarResourceTypeDTO, options: Partial<import("../../types/calendars").CalendarCreateResourceDTO & {
            isActive: boolean;
        }>, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").CalendarResourceResponseDTO) | null>;
        delete: (resourceId: string, resourceType: import("../../types/calendars").CalendarResourceTypeDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/_global").SuccessDeleteDTO> | null;
    };
};
