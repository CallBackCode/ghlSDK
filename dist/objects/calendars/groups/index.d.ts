export declare const CalendarGroups: {
    search: (locationId: CalendarGroupDTO, authToken: string) => Promise<any> | null;
    create: (options: CalendarGroupCreateDTO, authToken: string) => Promise<any> | null;
    update: (groupId: CalendarGroupDTO, options: CalendarGroupUpdateDTO, authToken: string) => Promise<any> | null;
    delete: (groupId: CalendarGroupDTO, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/_global").SuccessDeleteDTO> | null;
    disable: (groupId: CalendarGroupDTO, options: {
        isActive: boolean;
    }, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | {
        success: true;
    }> | null;
    validateSlug: (options: CalendarValidateGroupSlugPostBodyDTO, authToken: string) => Promise<any> | null;
};
