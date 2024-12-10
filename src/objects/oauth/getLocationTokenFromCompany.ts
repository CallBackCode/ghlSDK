import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../types/_global";
import { withExponentialBackoff } from "../../contexts/requestUtils";
import {
  GetLocationAccessCodeBodyDTO,
  GetLocationAccessTokenSuccessfulResponseDTO,
} from "../../types/oauth";

const baseUrl = "https://services.leadconnectorhq.com/oauth/locationToken";

type ResponseTypes =
  | GetLocationAccessTokenSuccessfulResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const getLocationTokenFromCompany = async (
  options: GetLocationAccessCodeBodyDTO,
  authToken: string
): Promise<ResponseTypes | null> => {
  const URL = `${baseUrl}/`;

  const executeRequest = async (): Promise<ResponseTypes> => {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
        Version: "2021-07-28",
        Authorization: `Bearer ${authToken}`,
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

export default getLocationTokenFromCompany;
