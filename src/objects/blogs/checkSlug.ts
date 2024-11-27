import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../types/_global";
import type { BlogsCheckUrlSlugResponseDTO } from "../../types/blogs";
import { withExponentialBackoff } from "../../contexts/requestUtils";

const baseUrl =
  "https://services.leadconnectorhq.com/blogs/posts/url-slug-exists";

type SearchOptions = {
  locationId: string;
  urlSlug: string;
  postId?: string;
};

type ResponseTypes =
  | BlogsCheckUrlSlugResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const checkSlug = async (
  options: SearchOptions,
  authToken: string
): Promise<ResponseTypes | null> => {
  const { locationId, urlSlug, postId } = options;

  const executeRequest = async (): Promise<ResponseTypes> => {
    let params: SearchOptions = { locationId, urlSlug };
    if (postId) params.postId = postId.toString();

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

export default checkSlug;
