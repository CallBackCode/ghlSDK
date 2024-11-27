import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../types/_global";
import type {
  SaasSubscriptionGetResponseDTO,
  SaasSubscriptionUpdateDTO,
} from "../../types/saas";
import { withExponentialBackoff } from "../../contexts/requestUtils";

const baseUrl =
  "https://services.leadconnectorhq.com/saas-api/public-api/locations";

type ResponseTypes =
  | SaasSubscriptionGetResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const get = async (
  options: SaasSubscriptionUpdateDTO,
  authToken: string
): Promise<ResponseTypes> | null => {
  const fetchEvent = async () => {
    const URL = `${baseUrl}?` + new URLSearchParams(options);
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Version: "2021-04-15",
        Authorization: `Bearer ${authToken}`,
        channel: "OAUTH",
        source: "INTEGRATION",
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
