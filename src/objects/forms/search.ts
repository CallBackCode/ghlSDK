import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../types/_global";
import {
  FormsSearchOptions,
  FormsSearchParams,
  FormsSuccessfulResponseDTO,
} from "../../types/forms";
import { withExponentialBackoff } from "../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/forms";

type ResponseTypes =
  | FormsSuccessfulResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const search = async (
  options: FormsSearchOptions,
  authToken: string
): Promise<ResponseTypes | null> => {
  const { locationId, limit, skip, type } = options;

  const executeRequest = async (): Promise<ResponseTypes> => {
    let params: FormsSearchParams = { locationId };
    if (limit) params.limit = limit.toString();
    if (skip) params.skip = skip.toString();
    if (type) params.type = type.toString();

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

export default search;
