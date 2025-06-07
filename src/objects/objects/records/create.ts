import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import type { Objects } from "../../../types/objects";
import { withExponentialBackoff } from "../../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/objects";

type ResponseTypes =
  | Objects.Records.CreateResponse
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const create = async (
  params: Objects.Records.CreateParams,
  body: Objects.Records.CreateBody,
  authToken: string
): Promise<ResponseTypes | null> => {
  const URL = `${baseUrl}/${params.schemaKey}/records`;

  const executeRequest = async (): Promise<ResponseTypes> => {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Version: "2021-07-28",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(body),
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

export default create;
