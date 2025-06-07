import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../../types/_global";
import type { Objects } from "../../../../types/objects";
import { withExponentialBackoff } from "../../../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/associations/relations";

type ResponseTypes =
  | Objects.Associations.Relations.GetResponse
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const getAll = async (
  params: Objects.Associations.Relations.GetParams,
  authToken: string
): Promise<ResponseTypes | null> => {
  const queryObject: Record<string, string> = {
    locationId: params.locationId,
    limit: params.limit?.toString() ?? "",
    skip: params.skip?.toString() ?? "",
  };

  if (params.associationIds && params.associationIds.length) {
    queryObject.associationIds = params.associationIds.join(",");
  }
  const URL =
    `${baseUrl}/${params.recordId}?` + new URLSearchParams(queryObject);

  const executeRequest = async (): Promise<ResponseTypes> => {
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

export default getAll;
