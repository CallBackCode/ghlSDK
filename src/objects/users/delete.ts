import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../types/_global";
import type { UsersDeleteDTO } from "../../types/users";
import { withExponentialBackoff } from "../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/users";

type ResponseTypes =
  | UsersDeleteDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const del = async (
  userId: string,
  authToken: string
): Promise<ResponseTypes | null> => {
  const URL = `${baseUrl}/${userId}/`;

  const executeRequest = async (): Promise<ResponseTypes> => {
    const response = await fetch(URL, {
      method: "DELETE",
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

    let data: ResponseTypes = await response.json();

    return data;
  };

  try {
    const data = await withExponentialBackoff(executeRequest);
    return data;
  } catch (error) {
    console.error("Failed after retries:", error);
    return null;
  }
};

export default del;
