import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../types/_global";
import type {
  InvoicesListResponseDTO,
  InvoicesSearchOptions,
  InvoicesSearchParams,
} from "../../types/invoices";
import { withExponentialBackoff } from "../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/invoices";

type ResponseTypes =
  | InvoicesListResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const search = async (
  options: InvoicesSearchOptions,
  authToken: string
): Promise<ResponseTypes | null> => {
  const {
    contactId,
    endAt,
    paymentMode,
    search,
    startAt,
    status,
    altId,
    altType,
    limit,
    offset,
  } = options;

  console.log("options:", options);

  const executeRequest = async (): Promise<ResponseTypes> => {
    let params: InvoicesSearchParams = {
      altId,
      altType,
      limit: limit.toString(),
      offset: offset.toString(),
    };
    if (contactId) params.contactId = contactId.toString();
    if (endAt) params.endAt = endAt.toString();
    if (paymentMode) params.paymentMode = paymentMode.toString();
    if (search) params.search = search.toString();
    if (startAt) params.startAt = startAt.toString();
    if (status) params.status = status.toString();

    console.log("params:", params);

    const URL = `${baseUrl}/?` + new URLSearchParams(params);

    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Version: "2021-07-28",
        Authorization: `Bearer ${authToken}`,
      },
    });

    if (!response.ok) {
      const error = new Error(`Request failed with status ${response.status}`);
      (error as any).response = response;
      throw error;
    }

    return response.json();
  };

  try {
    const data = await withExponentialBackoff(executeRequest);
    return data;
  } catch (error) {
    console.error("Failed after retries:", error);
    return null;
  }
};

export default search;
