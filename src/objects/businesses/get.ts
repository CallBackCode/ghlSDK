import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../types/_global";
import type {
  BusinessDTO,
  BusinessGetResponseDTO,
} from "../../types/businesses";
const baseUrl = "https://services.leadconnectorhq.com/businesses";

type ResponseTypes =
  | BusinessGetResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const get = async (
  businessId: BusinessDTO["id"],
  authToken: string
): Promise<ResponseTypes> | null => {
  try {
    const URL = `${baseUrl}/${businessId}`;
    const response = await fetch(URL, {
      method: "GET",
      headers: {
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

export default get;
