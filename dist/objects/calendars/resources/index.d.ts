export declare const CalendarResources: {
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
    delete: (resourceId: string, resourceType: CalendarResourceTypeDTO, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/_global").SuccessDeleteDTO> | null;
};
