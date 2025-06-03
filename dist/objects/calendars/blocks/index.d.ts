export declare const CalendarBlocks: {
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
    delete: (eventId: CalendarEventDTO, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/_global").SuccededDeleteDTO> | null;
};
