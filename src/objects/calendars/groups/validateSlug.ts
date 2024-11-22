import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import type {
  CalendarValidateGroupSlugPostBodyDTO,
  CalendarValidateGroupSlugSuccessResponseDTO,
} from "../../../types/calendars";
import { withExponentialBackoff } from "../../../contexts/requestUtils";

const baseUrl =
  "https://services.leadconnectorhq.com/calendars/groups/validate-slug";

type ResponseTypes =
  | CalendarValidateGroupSlugSuccessResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const validateSlug = async (
  options: CalendarValidateGroupSlugPostBodyDTO,
  authToken: string
): Promise<ResponseTypes> | null => {
  const URL = `${baseUrl}`;

  const validateSlugRequest = async () => {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Version: "2021-04-15",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(options),
    });
    const data: ResponseTypes = await response.json();
    return data;
  };

  try {
    return await withExponentialBackoff(validateSlugRequest);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default validateSlug;
