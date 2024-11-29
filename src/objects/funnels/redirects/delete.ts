import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import { withExponentialBackoff } from "../../../contexts/requestUtils";
import { FunnelsRedirectDeleteResponseDTO } from "../../../types/funnels";

const baseUrl = "https://services.leadconnectorhq.com/funnels/lookup/redirect";

type ResponseTypes =
  | FunnelsRedirectDeleteResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const del = async (
  locationId: string,
  redirectId: string,
  authToken: string
): Promise<ResponseTypes> | null => {
  const deleteFunnel = async () => {
    const URL =
      `${baseUrl}/${redirectId}/?` + new URLSearchParams({ locationId });
    const response = await fetch(URL, {
      method: "DELETE",
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
    return await withExponentialBackoff(deleteFunnel);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default del;
