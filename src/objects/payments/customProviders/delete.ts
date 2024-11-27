import {
  BadRequestDTO,
  SuccessDeleteDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import { withExponentialBackoff } from "../../../contexts/requestUtils";

const baseUrl =
  "https://services.leadconnectorhq.com/payments/custom-provider/provider";

type ResponseTypes =
  | SuccessDeleteDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const del = async (
  locationId: string,
  authToken: string
): Promise<ResponseTypes> | null => {
  const deleteEvent = async () => {
    const URL = `${baseUrl}?` + new URLSearchParams({ locationId });
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
    return await withExponentialBackoff(deleteEvent);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default del;
