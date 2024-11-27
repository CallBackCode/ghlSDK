export declare const CalendarSlots: {
    get: (calendarId: import("../../../types/calendars").CalendarDTO["id"], options: import("../../../types/calendars").CalendarGetFreeSlotsDTO, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/calendars").CalendarGetSlotsSuccessfulResponseDto> | null;
};
