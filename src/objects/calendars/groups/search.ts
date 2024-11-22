import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import type {
  CalendarGroupDTO,
  CalendarAllGroupsSuccessfulResponseDTO,
} from "../../../types/calendars";
import { withExponentialBackoff } from "../../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/calendars/groups";

type ResponseTypes =
  | CalendarAllGroupsSuccessfulResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const search = async (
  locationId: CalendarGroupDTO["locationId"],
  authToken: string
): Promise<ResponseTypes> | null => {
  const query = new URLSearchParams({ locationId }).toString();
  const URL = `${baseUrl}?${query}`;

  const searchRequest = async () => {
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
    return await withExponentialBackoff(searchRequest);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default search;
