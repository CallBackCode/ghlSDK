import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../types/_global";
import type {
  ConversationSearchParams,
  ConversationSendResponseDTO,
} from "../../types/conversations";
import { withExponentialBackoff } from "../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/conversations";

type Params = {
  locationId?: string;
  assignedTo?: string;
  contactId?: string;
};

type ResponseTypes =
  | ConversationSendResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const search = async (
  options: ConversationSearchParams,
  authToken: string
): Promise<ResponseTypes | null> => {
  const { locationId, assignedTo, contactId } = options;

  const executeRequest = async (): Promise<ResponseTypes> => {
    let params: Params = { locationId };
    if (assignedTo) params.assignedTo = assignedTo.toString();
    if (contactId) params.contactId = contactId.toString();

    const URL = `${baseUrl}?` + new URLSearchParams(params);

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
