import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../types/_global";
import type {
  UpdateBusinessDTO,
  BusienssCreateUpdateResponseDTO,
  BusinessDTO,
} from "../../types/businesses";
const baseUrl = "https://services.leadconnectorhq.com/businesses";

type ResponseTypes =
  | BusienssCreateUpdateResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const create = async (
  businessId: BusinessDTO["id"],
  options: UpdateBusinessDTO,
  authToken: string
): Promise<ResponseTypes> | null => {
  try {
    const URL = `${baseUrl}/${businessId}`;
    const response = await fetch(URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Version: "2021-07-28",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(options),
    });
    const data: ResponseTypes = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default create;
