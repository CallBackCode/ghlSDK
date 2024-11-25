import { CalendarEventDTO } from "../../../types/calendars";
import {
  BadRequestDTO,
  SuccededDeleteDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import { withExponentialBackoff } from "../../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/calendars/events";

type ResponseTypes =
  | SuccededDeleteDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const del = async (
  eventId: CalendarEventDTO["id"],
  authToken: string
): Promise<ResponseTypes> | null => {
  const deleteEvent = async () => {
    const URL = `${baseUrl}/${eventId}`;
    const response = await fetch(URL, {
      method: "DELETE",
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
    return await withExponentialBackoff(deleteEvent);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default del;
