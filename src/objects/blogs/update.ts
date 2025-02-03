import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../types/_global";
import type { Blogs } from "../../types/blogs";
import { withExponentialBackoff } from "../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/blogs/posts";

type ResponseTypes =
  | Blogs.UpdatePostResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const update = async (
  postId: string,
  options: Blogs.UpdatePostParams,
  authToken: string
): Promise<ResponseTypes | null> => {
  const URL = `${baseUrl}/${postId}`;

  const executeRequest = async (): Promise<ResponseTypes> => {
    const response = await fetch(URL, {
      method: "PUT",
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

export default update;
