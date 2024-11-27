import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import type { PaymentsTxnGetResponseDTO } from "../../../types/payments";
import { withExponentialBackoff } from "../../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/payments/transactions";

type SearchOptions = {
  altId: string;
  altType: string;
  locationId?: string;
};

type ResponseTypes =
  | PaymentsTxnGetResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const get = async (
  transactionId: string,
  options: SearchOptions,
  authToken: string
): Promise<ResponseTypes> | null => {
  const executeRequest = async () => {
    const URL = `${baseUrl}/${transactionId}?` + new URLSearchParams(options);
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
