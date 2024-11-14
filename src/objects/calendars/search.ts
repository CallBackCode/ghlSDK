import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../types/_global";
import type { CalendarsGetSuccessfulResponseDTO } from "../../types/calendars";
const baseUrl = "https://services.leadconnectorhq.com/calendars";

type SearchOptions = {
  locationId: string;
  showDrafted?: boolean;
  groupId?: string;
};

type Params = {
  locationId?: string;
  showDrafted?: string;
  groupId?: string;
};

type ResponseTypes =
  | CalendarsGetSuccessfulResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const get = async (
  options: SearchOptions,
  authToken: string
): Promise<ResponseTypes> | null => {
  try {
    let params: Params = { locationId: options.locationId };
    if (options.showDrafted)
      params.showDrafted = options.showDrafted.toString();
    if (options.groupId) params.groupId = options.groupId.toString();
    const URL = `${baseUrl}?` + new URLSearchParams(params);
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Version: "2021-07-28",
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

export default get;
