import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../types/_global";
import type { SurveySubmissionsGetResponseDTO } from "../../types/surveys";
import { withExponentialBackoff } from "../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/surveys/submissions";

type SearchParams = {
  locationId: string; // The company ID
  limit?: number; // The number of items to return
  page?: number; // The page number
  startAt?: string; // The start date (2020-12-14)
  endAt?: string; // The end date (2020-12-14)
  q?: string; // The search query
  surveyId?: string; // The survey ID
};

type Params = {
  locationId: string;
  limit?: string;
  page?: string;
  startAt?: string;
  endAt?: string;
  q?: string;
  surveyId?: string;
};

type ResponseTypes =
  | SurveySubmissionsGetResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const getSubmissions = async (
  options: SearchParams,
  authToken: string
): Promise<ResponseTypes> | null => {
  const { locationId, limit, page, startAt, endAt, q, surveyId } = options;
  const fetchEvent = async () => {
    const params: Params = { locationId };
    if (limit) params.limit = limit.toString();
    if (page) params.page = page.toString();
    if (startAt) params.startAt = startAt.toString();
    if (endAt) params.endAt = endAt.toString();
    if (q) params.q = q.toString();
    if (surveyId) params.surveyId = surveyId.toString();

    const URL = `${baseUrl}?` + new URLSearchParams(params);
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
    return await withExponentialBackoff(fetchEvent);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getSubmissions;
