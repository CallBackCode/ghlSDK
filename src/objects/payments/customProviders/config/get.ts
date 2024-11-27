import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../../types/_global";
import type { PaymentsCustomProviderCreateResponseDTO } from "../../../../types/payments";
import { withExponentialBackoff } from "../../../../contexts/requestUtils";

const baseUrl =
  "https://services.leadconnectorhq.com/payments/custom-provider/connect";

type ResponseTypes =
  | PaymentsCustomProviderCreateResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const get = async (
  locationId: string,
  authToken: string
): Promise<ResponseTypes> | null => {
  const fetchEvent = async () => {
    const URL = `${baseUrl}?` + new URLSearchParams({ locationId });
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

export default get;
