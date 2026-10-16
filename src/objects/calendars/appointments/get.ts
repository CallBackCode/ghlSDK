import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import type { Calendars } from "../../../types/calendars";
import { withExponentialBackoff } from "../../../contexts/requestUtils";

const baseUrl =
  "https://services.leadconnectorhq.com/calendars/events/appointments";

type ResponseTypes =
  | { event: Calendars.Events.DTO }
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const get = async (
  calendarId: Calendars.Events.DTO["id"],
  authToken: string
): Promise<ResponseTypes> | null => {
  const fetchEvent = async () => {
    const URL = `${baseUrl}/${calendarId}`;
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Version: "2021-04-15",
        Authorization: `Bearer ${authToken}`,
      },
    });
    const data: ResponseTypes = await response.json();
    return data;
  };

  try {
    return await withExponentialBackoff(fetchEvent);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default get;
