import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { Calendars } from "../../../types/calendars";
type ResponseTypes = {
    success: true;
} | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const disable: (groupId: Calendars.Groups.DTO["id"], options: {
    isActive: boolean;
}, authToken: string) => Promise<ResponseTypes> | null;
export default disable;
