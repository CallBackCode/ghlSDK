import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../types/_global";
import type {
  UsersSearchOptions,
  UsersSearchParams,
  UsersSearchResponseDTO,
} from "../../types/users";
import { withExponentialBackoff } from "../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/users/search";

type ResponseTypes =
  | UsersSearchResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const search = async (
  options: UsersSearchOptions,
  authToken: string
): Promise<ResponseTypes | null> => {
  const {
    companyId,
    enabled2waySync,
    limit,
    locationId,
    query,
    role,
    skip,
    sort,
    sortDirection,
    type,
    ids,
  } = options;

  const executeRequest = async (): Promise<ResponseTypes> => {
    const params: UsersSearchParams = { companyId };
    if (ids) params.ids = ids.toString();
    if (enabled2waySync) params.enabled2waySync = enabled2waySync.toString();
    if (limit) params.limit = limit.toString();
    if (locationId) params.locationId = locationId.toString();
    if (query) params.query = query.toString();
    if (role) params.role = role.toString();
    if (skip) params.skip = skip.toString();
    if (sort) params.sort = sort.toString();
    if (sortDirection) params.sortDirection = sortDirection.toString();
    if (type) params.type = type.toString();

    const URL = `${baseUrl}?` + new URLSearchParams(params);

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
