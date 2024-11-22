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

const update = async (
  resourceId: string,
  resourceType: CalendarResourceTypeDTO,
  options: Partial<CalendarCreateResourceDTO & { isActive: boolean }>,
  authToken: string
): Promise<ResponseTypes> | null => {
  try {
    const URL = `${baseUrl}/${resourceType}/${resourceId}`;
    const response = await fetch(URL, {
      method: "PUT",
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

export default update;
