import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../types/_global";
import type { ProductsListResponseDTO } from "../../types/products";
import { withExponentialBackoff } from "../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/products";

type SearchOptions = {
  limit?: string; // The maximum number of items to be included in a single page of results
  offset?: string; // The starting index of the page, indicating the position from which the results should be retrieved
  search?: string; // The name of the product for searching
  locationId: string; // LocationId is the id of the sub-account
};

type ResponseTypes =
  | ProductsListResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const list = async (
  options: SearchOptions,
  authToken: string,
): Promise<ResponseTypes> | null => {
  const executeRequest = async () => {
    const URL = `${baseUrl}?` + new URLSearchParams(options);
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Version: "2021-07-28",
        Authorization: `Bearer ${authToken}`,
      },
    });
    const data: ResponseTypes = await response.json();
    return data;
  };

  try {
    return await withExponentialBackoff(executeRequest);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default list;
