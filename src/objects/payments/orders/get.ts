import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import type {
  PaymentsOrderGetResponseDTO,
  PaymentsOrderFullfillmentsSearchParams,
  PaymentsOrderFullfillmentsGetOptions,
} from "../../../types/payments";
import { withExponentialBackoff } from "../../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/payments/orders";

type ResponseTypes =
  | PaymentsOrderGetResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const get = async (
  orderId: string,
  options: PaymentsOrderFullfillmentsGetOptions,
  authToken: string
): Promise<ResponseTypes> | null => {
  const { locationId, altId, altType } = options;

  const executeRequest = async () => {
    let params: PaymentsOrderFullfillmentsSearchParams = { altId, altType };
    if (locationId) params.locationId = locationId.toString();

    const URL = `${baseUrl}/${orderId}?` + new URLSearchParams(params);
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
    return await withExponentialBackoff(executeRequest);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default get;
