import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../types/_global";
import type { SaasSubscriptionUpdateDTO } from "../../types/saas";
import { withExponentialBackoff } from "../../contexts/requestUtils";

const baseUrl =
  "https://services.leadconnectorhq.com/saas-api/public-api/update-saas-subscription";

type ResponseTypes = null | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;

const update = async (
  locationId: string,
  options: SaasSubscriptionUpdateDTO,
  authToken: string
): Promise<ResponseTypes> | null => {
  const updateAppointment = async () => {
    const URL = `${baseUrl}/${locationId}`;
    const response = await fetch(URL, {
      method: "PUT",
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
    return await withExponentialBackoff(updateAppointment);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default update;
