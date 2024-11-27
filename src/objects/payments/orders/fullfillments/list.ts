import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../../types/_global";
import type { PaymentsFullfillmentListResponseDTO } from "../../../../types/payments";
import { withExponentialBackoff } from "../../../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/payments/orders";

type SearchOptions = {
  altId: string;
  altType: string;
};

type ResponseTypes =
  | PaymentsFullfillmentListResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const list = async (
  orderId: string,
  options: SearchOptions,
  authToken: string
): Promise<ResponseTypes> | null => {
  const fetchEvent = async () => {
    const URL =
      `${baseUrl}/${orderId}/fullfillments?` + new URLSearchParams(options);
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

export default list;
