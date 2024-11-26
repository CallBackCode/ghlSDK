import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import type {
  InvoicesListSchedulesResponseDTO,
  InvoicesScheduleSearchOptions,
  InvoicesSearchParams,
} from "../../../types/invoices";
import { withExponentialBackoff } from "../../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/invoices/schedule";

type ResponseTypes =
  | InvoicesListSchedulesResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const search = async (
  options: InvoicesScheduleSearchOptions,
  authToken: string
): Promise<ResponseTypes | null> => {
  const {
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

  const executeRequest = async (): Promise<ResponseTypes> => {
    let params: InvoicesSearchParams = { altId, altType, limit, offset };
    if (endAt) params.endAt = endAt.toString();
    if (paymentMode) params.paymentMode = paymentMode.toString();
    if (search) params.search = search.toString();
    if (startAt) params.startAt = startAt.toString();
    if (status) params.status = status.toString();

    const URL = `${baseUrl}?` + new URLSearchParams(params);

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
