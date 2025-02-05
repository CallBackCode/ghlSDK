import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../types/_global";
import { withExponentialBackoff } from "../../contexts/requestUtils";
import {
  GetAccessCodeBodyDTO,
  GetAccessCodeSuccessfulResponseDTO,
} from "../../types/oauth";

const baseUrl = "https://services.leadconnectorhq.com/oauth/token";

type ResponseTypes =
  | GetAccessCodeSuccessfulResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const getAccessToken = async (
  options: GetAccessCodeBodyDTO,
): Promise<ResponseTypes | null> => {
  const URL = `${baseUrl}/`;

  const executeRequest = async (): Promise<ResponseTypes> => {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
        Version: "2021-07-28",
      },
      body: new URLSearchParams(options),
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

export default getAccessToken;
