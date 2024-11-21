import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../types/_global";
import type {
  BusinessDTO,
  BusinessSearchResponseDTO,
} from "../../types/businesses";
const baseUrl = "https://services.leadconnectorhq.com/businesses";

type ResponseTypes =
  | BusinessSearchResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const get = async (
  locationId: BusinessDTO["locationId"],
  authToken: string
): Promise<ResponseTypes> | null => {
  try {
    const URL = `${baseUrl}?` + new URLSearchParams({ locationId });
    const response = await fetch(URL, {
      method: "GET",
      headers: {
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

export default get;
