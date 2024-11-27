import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import type {
  PaymentsCustomProviderCreateDTO,
  PaymentsCustomProviderCreateResponseDTO,
} from "../../../types/payments";
import { withExponentialBackoff } from "../../../contexts/requestUtils"; // Assuming this function is defined

const baseUrl =
  "https://services.leadconnectorhq.com/payments/custom-provider/provider";

type ResponseTypes =
  | PaymentsCustomProviderCreateResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const create = async (
  locationId: string,
  options: PaymentsCustomProviderCreateDTO,
  authToken: string
): Promise<ResponseTypes> | null => {
  const createAppointment = async () => {
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
    return await withExponentialBackoff(createAppointment);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default create;
