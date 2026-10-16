import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import type { Calendars } from "../../../types/calendars";
import { withExponentialBackoff } from "../../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/calendars/resources";

type ResponseTypes =
  | Calendars.ResourceDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const get = async (
  resourceId: string,
  resourceType: Calendars.ResourceTypeDTO,
  authToken: string
): Promise<ResponseTypes> | null => {
  const URL = `${baseUrl}/${resourceType}/${resourceId}`;

  const fetchData = async () => {
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
    return await withExponentialBackoff(fetchData);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default get;
