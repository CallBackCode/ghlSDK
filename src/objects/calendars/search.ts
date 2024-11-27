import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../types/_global";
import type { CalendarsGetSuccessfulResponseDTO } from "../../types/calendars";
import { withExponentialBackoff } from "../../contexts/requestUtils";

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

const search = async (
  options: SearchOptions,
  authToken: string
): Promise<ResponseTypes | null> => {
  const { locationId, showDrafted, groupId } = options;

  const executeRequest = async (): Promise<ResponseTypes> => {
    let params: Params = { locationId };
    if (showDrafted) params.showDrafted = showDrafted.toString();
    if (groupId) params.groupId = groupId.toString();

    const URL = `${baseUrl}/?` + new URLSearchParams(params);

    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Version: "2021-04-15",
        Authorization: `Bearer ${authToken}`,
      },
    });

    if (!response.ok) {
      const error = new Error(`Request failed with status ${response.status}`);
      (error as any).response = response;
      throw error;
    }

    return response.json();
  };

  try {
    const data = await withExponentialBackoff(executeRequest);
    return data;
  } catch (error) {
    console.error("Failed after retries:", error);
    return null;
  }
};

export default search;
