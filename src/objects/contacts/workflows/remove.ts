import {
  SuccededDeleteDTO,
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import { withExponentialBackoff } from "../../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/contacts";

type ResponseTypes =
  | SuccededDeleteDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const remove = async (
  contactId: string,
  workflowId: string,
  authToken: string
): Promise<ResponseTypes | null> => {
  const URL = `${baseUrl}/${contactId}/workflow/${workflowId}`;

  const executeRequest = async (): Promise<ResponseTypes> => {
    const response = await fetch(URL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
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

export default remove;
