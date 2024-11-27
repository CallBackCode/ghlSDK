export declare const CalendarResources: {
    get: (resourceId: string, resourceType: import("../../../types/calendars").CalendarResourceTypeDTO, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/calendars").CalendarResourceDTO> | null;
    search: (resourceType: import("../../../types/calendars").CalendarResourceTypeDTO[], options: {
        locationId: import("../../../types/calendars").CalendarResourceDTO["locationId"];
        limit: number;
        skip: number;
    }, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/calendars").CalendarResourceDTO> | null;
    create: (resourceType: import("../../../types/calendars").CalendarResourceTypeDTO, options: import("../../../types/calendars").CalendarCreateResourceDTO, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/calendars").CalendarResourceResponseDTO> | null;
    update: (resourceId: string, resourceType: import("../../../types/calendars").CalendarResourceTypeDTO, options: Partial<import("../../../types/calendars").CalendarCreateResourceDTO & {
        isActive: boolean;
    }>, authToken: string) => Promise<(import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/calendars").CalendarResourceResponseDTO) | null>;
    delete: (resourceId: string, resourceType: import("../../../types/calendars").CalendarResourceTypeDTO, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/_global").SuccessDeleteDTO> | null;
};
