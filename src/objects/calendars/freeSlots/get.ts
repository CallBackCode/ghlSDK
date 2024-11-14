import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import {
  CalendarDTO,
  CalendarGetFreeSlotsDTO,
  CalendarGetSlotsSuccessfulResponseDto,
} from "../../../types/calendars";
const baseUrl = "https://services.leadconnectorhq.com/calendars";

type ResponseTypes =
  | CalendarGetSlotsSuccessfulResponseDto
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const get = async (
  calendarId: CalendarDTO["id"],
  options: CalendarGetFreeSlotsDTO,
  authToken: string
): Promise<ResponseTypes> | null => {
  try {
    let URL = `${baseUrl}/${calendarId}/free-slots`;
    if (options) {
      const params = new URLSearchParams();
      Object.entries(options).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach(val => params.append(key, val));
        } else {
          params.append(key, value as string);
        }
      });
      URL += `?${params.toString()}`;
    }
    const response = await fetch(URL, {
      method: "GET",
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

export default get;
