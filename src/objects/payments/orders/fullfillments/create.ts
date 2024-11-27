import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../../types/_global";
import type {
  PaymentsFullfillmentCreateDTO,
  PaymentsFullfillmentCreateResponseDTO,
} from "../../../../types/payments";
import { withExponentialBackoff } from "../../../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/payments/orders";

type ResponseTypes =
  | PaymentsFullfillmentCreateResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const create = async (
  orderId: string,
  options: PaymentsFullfillmentCreateDTO,
  authToken: string
): Promise<ResponseTypes> | null => {
  const executeRequest = async () => {
    const URL = `${baseUrl}/${orderId}/fulfillments`;
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
    return await withExponentialBackoff(executeRequest);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default create;
