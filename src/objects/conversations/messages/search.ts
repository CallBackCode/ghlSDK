import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import type { ConversationGetMessagesByResponseDTO } from "../../../types/conversations";
import { withExponentialBackoff } from "../../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/conversations";

type SearchOptions = {
  lastMessageId?: string;
  limit?: number;
  type?: string;
};

type Params = {
  lastMessageId?: string;
  limit?: string;
  type?: string;
};

type ResponseTypes =
  | ConversationGetMessagesByResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const search = async (
  conversationId: string,
  options: SearchOptions,
  authToken: string
): Promise<ResponseTypes | null> => {
  const { lastMessageId, limit, type } = options;

  const executeRequest = async (): Promise<ResponseTypes> => {
    let params: Params = { lastMessageId };
    if (limit) params.limit = limit.toString();
    if (type) params.type = type.toString();

    const URL =
      `${baseUrl}/${conversationId}/messages?` + new URLSearchParams(params);

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
