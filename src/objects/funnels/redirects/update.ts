import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import type {
  FunnelsRedirectUpdateParams,
  FunnelsRedirectUpdateResponseDTO,
} from "../../../types/funnels";
import { withExponentialBackoff } from "../../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/funnels/lookup/redirect";

type ResponseTypes =
  | FunnelsRedirectUpdateResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const update = async (
  redirectId: string,
  options: FunnelsRedirectUpdateParams,
  authToken: string
): Promise<ResponseTypes> | null => {
  const updateAppointment = async () => {
    const URL = `${baseUrl}/${redirectId}/`;
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
    const data: ResponseTypes = await response.json();
    return data;
  };

  try {
    return await withExponentialBackoff(updateAppointment);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default update;
