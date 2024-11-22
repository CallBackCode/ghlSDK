import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import type {
  CalendarCreateResourceDTO,
  CalendarResourceResponseDTO,
  CalendarResourceTypeDTO,
} from "../../../types/calendars";
const baseUrl = "https://services.leadconnectorhq.com/calendars/resources";

type ResponseTypes =
  | CalendarResourceResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const create = async (
  resourceType: CalendarResourceTypeDTO,
  options: CalendarCreateResourceDTO,
  authToken: string
): Promise<ResponseTypes> | null => {
  try {
    const URL = `${baseUrl}/${resourceType}`;
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Version: "2021-04-15",
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

export default create;
