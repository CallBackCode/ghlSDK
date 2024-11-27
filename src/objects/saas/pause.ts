import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../types/_global";
import type { SaasSubscriptionPauseLocationDTO } from "../../types/saas";
import { withExponentialBackoff } from "../../contexts/requestUtils"; // Assuming this function is defined

const baseUrl =
  "https://services.leadconnectorhq.com/saas-api/public-api/pause";

type ResponseTypes = null | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;

const pause = async (
  locationId: string,
  options: SaasSubscriptionPauseLocationDTO,
  authToken: string
): Promise<ResponseTypes> | null => {
  const execute = async () => {
    const URL = `${baseUrl}/${locationId}`;
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Version: "2021-04-15",
        Authorization: `Bearer ${authToken}`,
        channel: "OAUTH",
        source: "INTEGRATION",
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

export default pause;
