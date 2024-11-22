import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import type {
  CalendarResourceDTO,
  CalendarResourceTypeDTO,
} from "../../../types/calendars";
const baseUrl = "https://services.leadconnectorhq.com/calendars/resources";

type QueryOptions = {
  locationId: CalendarResourceDTO["locationId"];
  limit: number;
  skip: number;
};

type ResponseTypes =
  | CalendarResourceDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const search = async (
  resourceType: CalendarResourceTypeDTO[],
  options: QueryOptions,
  authToken: string
): Promise<ResponseTypes> | null => {
  try {
    const query = new URLSearchParams(
      Object.entries(options).reduce((acc, [key, value]) => {
        acc[key] = value.toString();
        return acc;
      }, {} as Record<string, string>)
    ).toString();
    const URL = `${baseUrl}/${resourceType}?${query}`;
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
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default search;
