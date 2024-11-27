import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../types/_global";
import type { SaasSubscriptionBulkDisableDTO } from "../../types/saas";
import { withExponentialBackoff } from "../../contexts/requestUtils"; // Assuming this function is defined

const baseUrl =
  "https://services.leadconnectorhq.com/saas-api/public-api/bulk-disable-saas";

type ResponseTypes = null | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;

const disable = async (
  companyId: string,
  options: SaasSubscriptionBulkDisableDTO,
  authToken: string
): Promise<ResponseTypes> | null => {
  const execute = async () => {
    const URL = `${baseUrl}/${companyId}`;
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

export default disable;
