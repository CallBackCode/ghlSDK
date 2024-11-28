import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../types/_global";
import type { ConrtactSearchDuplicatesDTO } from "../../types/contacts";
import { withExponentialBackoff } from "../../contexts/requestUtils";

const baseUrl =
  "https://services.leadconnectorhq.com/contacts/search/duplicates";

type SearchOptions = {
  locationId: string;
  email?: string;
  phone?: string;
};

type Params = {
  locationId?: string;
  email?: string;
  phone?: string;
};

type ResponseTypes =
  | ConrtactSearchDuplicatesDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const findDuplicates = async (
  options: SearchOptions,
  authToken: string
): Promise<ResponseTypes | null> => {
  const { locationId, email, phone } = options;

  const executeRequest = async (): Promise<ResponseTypes> => {
    let params: Params = { locationId };
    if (email) params.email = email.toString();
    if (phone) params.phone = phone.toString();

    const URL = `${baseUrl}/?` + new URLSearchParams(params);

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

export default findDuplicates;
