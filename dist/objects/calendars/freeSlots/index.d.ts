export declare const CalendarSlots: {
    get: (calendarId: import("../../../types/calendars").Calendars.DTO["id"], options: import("../../../types/calendars").Calendars.Slots.GetFreeDTO, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/calendars").Calendars.Slots.GetSuccessfulResponseDTO> | null;
};
