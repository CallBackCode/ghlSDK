import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import type { Calendars } from "../../../types/calendars";
import { withExponentialBackoff } from "../../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/calendars/resources";

type ResponseTypes =
  | Calendars.ResourceResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const create = async (
  resourceType: Calendars.ResourceTypeDTO,
  options: Calendars.CreateResourceDTO,
  authToken: string
): Promise<ResponseTypes> | null => {
  const URL = `${baseUrl}/${resourceType}`;

  const createResource = async () => {
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
  };

  try {
    return await withExponentialBackoff(createResource);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default create;
