import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import type { PaymentsWLProviderListResponseDTO } from "../../../types/payments";
import { withExponentialBackoff } from "../../../contexts/requestUtils";

const baseUrl =
  "https://services.leadconnectorhq.com/payments/integrations/provider/whitelabel";

type SearchOptions = {
  altId: string;
  altType: "location";
  limit?: number;
  offset?: number;
};

type Params = {
  altId: string;
  altType: string;
  limit?: string;
  offset?: string;
};

type ResponseTypes =
  | PaymentsWLProviderListResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const search = async (
  options: SearchOptions,
  authToken: string
): Promise<ResponseTypes | null> => {
  const { altId, altType, limit, offset } = options;
  const executeRequest = async (): Promise<ResponseTypes> => {
    let params: Params = { altId, altType };
    if (limit) params.limit = limit.toString();
    if (offset) params.offset = offset.toString();

    const URL = `${baseUrl}`;

    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Version: "2021-07-28",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(options),
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
