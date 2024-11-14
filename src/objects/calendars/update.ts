import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../types/_global";
import type {
  CalendarByIdSuccessfulResponseDTO,
  CalendarDTO,
} from "../../types/calendars";
const baseUrl = "https://services.leadconnectorhq.com/calendars";

type ResponseTypes =
  | CalendarByIdSuccessfulResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const update = async (
  calendarId: CalendarDTO["id"],
  options: Partial<CalendarDTO>,
  authToken: string
): Promise<ResponseTypes> | null => {
  try {
    const URL = `${baseUrl}/${calendarId}`;
    const response = await fetch(URL, {
      method: "PUT",
      headers: {
        Version: "2021-07-28",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(options),
    });
    const data: ResponseTypes = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default update;
