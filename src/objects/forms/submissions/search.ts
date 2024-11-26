import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import {
  FormsSubmissionsSearchOptions,
  FormsSubmissionsSearchParams,
  FormsSubmissionsSuccessfulResponseDTO,
} from "../../../types/forms";
import { withExponentialBackoff } from "../../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/forms/submissions";

type ResponseTypes =
  | FormsSubmissionsSuccessfulResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const search = async (
  options: FormsSubmissionsSearchOptions,
  authToken: string
): Promise<ResponseTypes | null> => {
  const { locationId, startAt, endAt, formId, limit, page, q } = options;

  const executeRequest = async (): Promise<ResponseTypes> => {
    let params: FormsSubmissionsSearchParams = { locationId };
    if (startAt) params.startAt = startAt.toString();
    if (endAt) params.endAt = endAt.toString();
    if (formId) params.formId = formId.toString();
    if (limit) params.limit = limit.toString();
    if (page) params.page = page.toString();
    if (q) params.q = q.toString();

    const URL =
      `${baseUrl}?` + new URLSearchParams(params as Record<string, string>);

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

export default search;
