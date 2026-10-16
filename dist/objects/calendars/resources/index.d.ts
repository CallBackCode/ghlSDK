export declare const CalendarResources: {
    get: (resourceId: string, resourceType: import("../../../types/calendars").Calendars.ResourceTypeDTO, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/calendars").Calendars.ResourceDTO> | null;
    search: (resourceType: import("../../../types/calendars").Calendars.ResourceTypeDTO[], options: {
        locationId: import("../../../types/calendars").Calendars.ResourceDTO["locationId"];
        limit: number;
        skip: number;
    }, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/calendars").Calendars.ResourceDTO> | null;
    create: (resourceType: import("../../../types/calendars").Calendars.ResourceTypeDTO, options: import("../../../types/calendars").Calendars.CreateResourceDTO, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/calendars").Calendars.ResourceResponseDTO> | null;
    update: (resourceId: string, resourceType: import("../../../types/calendars").Calendars.ResourceTypeDTO, options: Partial<import("../../../types/calendars").Calendars.CreateResourceDTO & {
        isActive: boolean;
    }>, authToken: string) => Promise<(import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/calendars").Calendars.ResourceResponseDTO) | null>;
    delete: (resourceId: string, resourceType: import("../../../types/calendars").Calendars.ResourceTypeDTO, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/_global").SuccessDeleteDTO> | null;
};
