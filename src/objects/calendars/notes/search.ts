import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import type {
  CalendarEventDTO,
  CalendarGetNotesDTO,
} from "../../../types/calendars";
import { withExponentialBackoff } from "../../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/calendars/appointments";

type QueryOptions = {
  limit?: number;
  offset?: number;
};

type ResponseTypes =
  | CalendarGetNotesDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const search = async (
  appointmentId: CalendarEventDTO["id"],
  options: QueryOptions,
  authToken: string
): Promise<ResponseTypes> | null => {
  const query = new URLSearchParams(
    Object.entries(options).reduce((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value.toString();
      }
      return acc;
    }, {} as Record<string, string>)
  ).toString();

  const URL = `${baseUrl}/${appointmentId}/notes?${query}`;

  const fetchNotes = async () => {
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
    return await withExponentialBackoff(fetchNotes);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default search;
