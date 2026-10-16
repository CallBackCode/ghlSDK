import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import type { Calendars } from "../../../types/calendars";
import { withExponentialBackoff } from "../../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/calendars/groups";

type ResponseTypes =
  | Calendars.Groups.CreateSuccessfulResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const create = async (
  options: Calendars.Groups.CreateDTO,
  authToken: string
): Promise<ResponseTypes> | null => {
  const URL = `${baseUrl}`;

  const createGroup = async () => {
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
    return await withExponentialBackoff(createGroup);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default create;
