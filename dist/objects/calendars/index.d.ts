export declare const calendars: {
    get: (calendarId: import("../../types/calendars").Calendars.DTO["id"], authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").Calendars.ByIdSuccessfulResponseDTO) | null>;
    search: (options: {
        locationId: string;
        showDrafted?: boolean;
        groupId?: string;
    }, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").Calendars.GetSuccessfulResponseDTO) | null>;
    create: (options: import("../../types/calendars").Calendars.CreateDTO, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").Calendars.ByIdSuccessfulResponseDTO) | null>;
    update: (calendarId: import("../../types/calendars").Calendars.DTO["id"], options: import("../../types/calendars").Calendars.UpdateDTO, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").Calendars.ByIdSuccessfulResponseDTO) | null>;
    delete: (calendarId: import("../../types/calendars").Calendars.DTO["id"], authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/_global").SuccessDeleteDTO) | null>;
    freeSlots: {
        get: (calendarId: import("../../types/calendars").Calendars.DTO["id"], options: import("../../types/calendars").Calendars.Slots.GetFreeDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").Calendars.Slots.GetSuccessfulResponseDTO> | null;
    };
    groups: {
        search: (locationId: import("../../types/calendars").Calendars.Groups.DTO["locationId"], authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").Calendars.Groups.AllSuccessfulResponseDTO> | null;
        create: (options: import("../../types/calendars").Calendars.Groups.CreateDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").Calendars.Groups.CreateSuccessfulResponseDTO> | null;
        update: (groupId: import("../../types/calendars").Calendars.Groups.DTO["id"], options: import("../../types/calendars").Calendars.Groups.UpdateDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").Calendars.CreateUpdateBlockedSlotSuccessfulResponseDTO> | null;
        delete: (groupId: import("../../types/calendars").Calendars.Groups.DTO["id"], authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/_global").SuccessDeleteDTO> | null;
        disable: (groupId: import("../../types/calendars").Calendars.Groups.DTO["id"], options: {
            isActive: boolean;
        }, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | {
            success: true;
        }> | null;
        validateSlug: (options: import("../../types/calendars").Calendars.Groups.ValidateSlugPostBodyDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").Calendars.Groups.ValidateSlugSuccessResponseDTO> | null;
    };
    appointments: {
        get: (calendarId: import("../../types/calendars").Calendars.Events.DTO["id"], authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | {
            event: import("../../types/calendars").Calendars.Events.DTO;
        }> | null;
        search: (options: {
            locationId: string;
            startTime: string;
            endTime: string;
            calendarId?: string;
            groupId?: string;
            userId?: string;
        }, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").Calendars.Events.GetSuccessfulResponseDTO> | null;
        create: (options: import("../../types/calendars").Calendars.Appointments.CreateUpdateDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").Calendars.CreateUpdateBlockedSlotSuccessfulResponseDTO> | null;
        update: (eventId: import("../../types/calendars").Calendars.Events.DTO["id"], options: Partial<import("../../types/calendars").Calendars.Appointments.CreateUpdateDTO>, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").Calendars.CreateUpdateBlockedSlotSuccessfulResponseDTO> | null;
        delete: (eventId: import("../../types/calendars").Calendars.Events.DTO["id"], authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/_global").SuccededDeleteDTO> | null;
    };
    notes: {
        search: (appointmentId: import("../../types/calendars").Calendars.Events.DTO["id"], options: {
            limit: number;
            offset: number;
        }, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").Calendars.GetNotesDTO> | null;
        create: (appointmentId: import("../../types/calendars").Calendars.Events.DTO["id"], options: import("../../types/contacts").ContactNotesDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").Calendars.GetCreateUpdateNoteSuccessfulResponseDto> | null;
        update: (appointmentId: import("../../types/calendars").Calendars.Events.DTO["id"], noteId: import("../../types/calendars").Calendars.GetNoteSchemaDTO["id"], options: import("../../types/contacts").ContactNotesDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").Calendars.GetCreateUpdateNoteSuccessfulResponseDto> | null;
        delete: (appointmentId: import("../../types/calendars").Calendars.Events.DTO["id"], noteId: import("../../types/calendars").Calendars.GetNoteSchemaDTO["id"], authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/_global").SuccessDeleteDTO> | null;
    };
    blocks: {
        search: (options: {
            locationId: string;
            startTime: string;
            endTime: string;
            calendarId?: string;
            groupId?: string;
            userId?: string;
        }, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").Calendars.Events.GetSuccessfulResponseDTO> | null;
        create: (options: import("../../types/calendars").Calendars.BlockSlotCreateSchemaDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").Calendars.CreateUpdateBlockedSlotSuccessfulResponseDTO> | null;
        update: (eventId: import("../../types/calendars").Calendars.Events.DTO["id"], options: import("../../types/calendars").Calendars.BlockSlotEditSchemaDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").Calendars.Appointments.ResponseDTO> | null;
        delete: (eventId: import("../../types/calendars").Calendars.Events.DTO["id"], authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/_global").SuccededDeleteDTO> | null;
    };
    resources: {
        get: (resourceId: string, resourceType: import("../../types/calendars").Calendars.ResourceTypeDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").Calendars.ResourceDTO> | null;
        search: (resourceType: import("../../types/calendars").Calendars.ResourceTypeDTO[], options: {
            locationId: import("../../types/calendars").Calendars.ResourceDTO["locationId"];
            limit: number;
            skip: number;
        }, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").Calendars.ResourceDTO> | null;
        create: (resourceType: import("../../types/calendars").Calendars.ResourceTypeDTO, options: import("../../types/calendars").Calendars.CreateResourceDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").Calendars.ResourceResponseDTO> | null;
        update: (resourceId: string, resourceType: import("../../types/calendars").Calendars.ResourceTypeDTO, options: Partial<import("../../types/calendars").Calendars.CreateResourceDTO & {
            isActive: boolean;
        }>, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/calendars").Calendars.ResourceResponseDTO) | null>;
        delete: (resourceId: string, resourceType: import("../../types/calendars").Calendars.ResourceTypeDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/_global").SuccessDeleteDTO> | null;
    };
};
