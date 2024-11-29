import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../types/_global";
import type { UsersGetResponseDTO } from "../../types/users";
import { withExponentialBackoff } from "../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/users";

type ResponseTypes =
  | UsersGetResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const listByLocation = async (
  companyId: string,
  locationId: string,
  authToken: string
): Promise<ResponseTypes | null> => {
  const executeRequest = async (): Promise<ResponseTypes> => {
    const URL = `${baseUrl}/?` + new URLSearchParams({ companyId, locationId });

    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Version: "2021-07-28",
        Authorization: `Bearer ${authToken}`,
      },
    });

    if (!response.ok) {
      let text = await response.text();
      const error = new Error(
        `Request failed with status ${response.status}. ${text}`
      );
      (error as any).response = response;
      throw error;
    }

    let data: ResponseTypes = await response.json();

    return data;
  };

  try {
    const data = await withExponentialBackoff(executeRequest);
    return data;
  } catch (error) {
    console.error("Failed after retries:", error);
    return null;
  }
};

export default listByLocation;
