import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../types/_global";
import type { InvoicesDeleteResponseDTO } from "../../types/invoices";
import { withExponentialBackoff } from "../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/invoices";

type SearchOptions = {
  altId: string; // The Location ID
  altType: "location";
};

type Params = {
  altId: string;
  altType: string;
};

type ResponseTypes =
  | InvoicesDeleteResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const del = async (
  invoiceId: string,
  options: SearchOptions,
  authToken: string
): Promise<ResponseTypes | null> => {
  const { altId, altType } = options;

  const executeRequest = async (): Promise<ResponseTypes> => {
    const params: Params = { altId, altType };
    const URL = `${baseUrl}/${invoiceId}?` + new URLSearchParams(params);
    const response = await fetch(URL, {
      method: "DELETE",
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

export default del;
