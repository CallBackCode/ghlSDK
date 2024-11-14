import {
  BadRequestDTO,
  SuccessDeleteDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../types/_global";
import type { CalendarDTO } from "../../types/calendars";
const baseUrl = "https://services.leadconnectorhq.com/calendars";

type ResponseTypes =
  | SuccessDeleteDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const deleteCalendar = async (
  calendarId: CalendarDTO["id"],
  authToken: string
): Promise<ResponseTypes> | null => {
  try {
    const URL = `${baseUrl}/${calendarId}`;
    const response = await fetch(URL, {
      method: "DELETE",
      headers: {
        Version: "2021-07-28",
        Authorization: `Bearer ${authToken}`,
      },
    });
    const data: ResponseTypes = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default deleteCalendar;
