import {
  BadRequestDTO,
  SuccessDeleteDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../types/_global";
import type { BusinessDTO } from "../../types/businesses";
const baseUrl = "https://services.leadconnectorhq.com/businesses";

type ResponseTypes =
  | SuccessDeleteDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const create = async (
  businessId: BusinessDTO["id"],
  authToken: string
): Promise<ResponseTypes> | null => {
  try {
    const URL = `${baseUrl}/${businessId}`;
    const response = await fetch(URL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Version: "2021-07-28",
        Authorization: `Bearer ${authToken}`,
      },
    });
    const data: ResponseTypes = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default create;
