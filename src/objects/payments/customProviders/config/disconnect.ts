import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../../types/_global";
import type {
  PaymentsCustomProviderDeleteResponseDTO,
  PaymentsCustomProviderDisconnectResponseDTO,
} from "../../../../types/payments";
import { withExponentialBackoff } from "../../../../contexts/requestUtils";

const baseUrl =
  "https://services.leadconnectorhq.com/payments/custom-provider/disconnect";

type ResponseTypes =
  | PaymentsCustomProviderDisconnectResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const disconnect = async (
  locationId: string,
  options: PaymentsCustomProviderDeleteResponseDTO,
  authToken: string
): Promise<ResponseTypes> | null => {
  const execute = async () => {
    const URL = `${baseUrl}?` + new URLSearchParams({ locationId });
    const response = await fetch(URL, {
      method: "POST",
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
    return await withExponentialBackoff(execute);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default disconnect;
