import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../types/_global";
import type { FunnelsListResponseDTO } from "../../types/funnels";
import { withExponentialBackoff } from "../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/funnels/funnel/list";

type SearchOptions = {
  locationId: string;
  category?: string;
  limit?: string;
  name?: string;
  offset?: string;
  parentId?: string;
  type?: string;
};

type Params = {
  locationId: string;
  category?: string;
  limit?: string;
  name?: string;
  offset?: string;
  parentId?: string;
  type?: string;
};

type ResponseTypes =
  | FunnelsListResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const listFunnels = async (
  options: SearchOptions,
  authToken: string
): Promise<ResponseTypes | null> => {
  const { locationId, limit, offset, category, name, parentId, type } = options;

  const executeRequest = async (): Promise<ResponseTypes> => {
    let params: Params = { locationId };
    if (limit) params.limit = limit;
    if (offset) params.offset = offset;
    if (category) params.category = category;
    if (name) params.name = name;
    if (parentId) params.parentId = parentId;
    if (type) params.type = type;

    const URL = `${baseUrl}?` + new URLSearchParams(params);

    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Version: "2021-07-28",
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

export default listFunnels;
