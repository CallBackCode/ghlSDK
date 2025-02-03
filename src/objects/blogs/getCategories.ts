import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../types/_global";
import type { Blogs } from "../../types/blogs";
import { withExponentialBackoff } from "../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/blogs/categories";

type SearchOptions = {
  locationId: string;
  limit: number;
  offset: number;
};

type Params = {
  locationId: string;
  limit: string;
  offset: string;
};

type ResponseTypes =
  | Blogs.CategoriesResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const getCategories = async (
  options: SearchOptions,
  authToken: string
): Promise<ResponseTypes | null> => {
  const { locationId, limit, offset } = options;

  const executeRequest = async (): Promise<ResponseTypes> => {
    let params: Params = {
      locationId,
      limit: limit.toString(),
      offset: offset.toString(),
    };

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

export default getCategories;
