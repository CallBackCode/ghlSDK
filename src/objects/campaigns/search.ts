import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../types/_global";
import { CampaignsSuccessfulResponseDto } from "../../types/campaigns";
import { withExponentialBackoff } from "../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/campaigns";

type SearchOptions = {
  locationId: string;
  status?: string;
};

type Params = Partial<SearchOptions>;

type ResponseTypes =
  | CampaignsSuccessfulResponseDto
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const search = async (
  options: SearchOptions,
  authToken: string
): Promise<ResponseTypes | null> => {
  const executeRequest = async (): Promise<ResponseTypes> => {
    let params: Params = { locationId: options.locationId };
    if (options.status) params.status = status.toString();

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
