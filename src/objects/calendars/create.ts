import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../types/_global";
import type {
  CalendarByIdSuccessfulResponseDTO,
  CalendarDTO,
} from "../../types/calendars";
const baseUrl = "https://services.leadconnectorhq.com/calendars";

type ResponseTypes =
  | CalendarByIdSuccessfulResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const create = async (
  options: CalendarDTO,
  authToken: string
): Promise<ResponseTypes> | null => {
  try {
    const URL = `${baseUrl}`;
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
