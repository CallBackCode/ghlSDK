import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../types/_global";
import { withExponentialBackoff } from "../../contexts/requestUtils";
import {
  OAuthSearchOptions,
  GetInstalledLocationsSuccessfulResponseDTO,
  OAuthSearchParams,
} from "../../types/oauth";

const baseUrl = "https://services.leadconnectorhq.com/oauth/installedLocations";

type ResponseTypes =
  | GetInstalledLocationsSuccessfulResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const getLocationsInstalled = async (
  options: OAuthSearchOptions
): Promise<ResponseTypes | null> => {
  const { companyId, appId, isInstalled, limit, onTrial, planId, query, skip } =
    options;
  let params: OAuthSearchParams = { companyId, appId };
  if (isInstalled) params.isInstalled = isInstalled.toString();
  if (limit) params.limit = limit.toString();
  if (onTrial) params.onTrial = onTrial.toString();
  if (planId) params.planId = planId.toString();
  if (skip) params.skip = skip.toString();
  if (query) params.query = query;

  const URL = `${baseUrl}/` + new URLSearchParams(params);

  const executeRequest = async (): Promise<ResponseTypes> => {
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Version: "2021-07-28",
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

export default getLocationsInstalled;
