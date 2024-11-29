import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../types/_global";
import type { UsersResponseDTO, UsersUpdateDTO } from "../../types/users";
import { withExponentialBackoff } from "../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/users";

type ResponseTypes =
  | UsersResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const update = async (
  userId: string,
  options: UsersUpdateDTO,
  authToken: string
): Promise<ResponseTypes | null> => {
  const URL = `${baseUrl}/${userId}`;

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
      let text = await response.text();
      const error = new Error(
        `Request failed with status ${response.status}. ${text}`
      );
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

export default update;
