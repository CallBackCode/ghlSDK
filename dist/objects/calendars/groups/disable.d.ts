import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { CalendarGroupDTO } from "../../../types/calendars";
type ResponseTypes = {
    success: true;
} | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const disable: (groupId: CalendarGroupDTO["id"], options: {
    isActive: boolean;
}, authToken: string) => Promise<ResponseTypes> | null;
export default disable;
