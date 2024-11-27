import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../types/_global";
import { withExponentialBackoff } from "../../contexts/requestUtils";
import { ProductsDeleteResponseDTO } from "../../types/products";

const baseUrl = "https://services.leadconnectorhq.com/products";

type ResponseTypes =
  | ProductsDeleteResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const del = async (
  locationId: string,
  productId: string,
  authToken: string
): Promise<ResponseTypes> | null => {
  const deleteProduct = async () => {
    const URL =
      `${baseUrl}/${productId}?` + new URLSearchParams({ locationId });
    const response = await fetch(URL, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Version: "2021-07-28",
        Authorization: `Bearer ${authToken}`,
      },
    });
    const data: ResponseTypes = await response.json();
    return data;
  };

  try {
    return await withExponentialBackoff(deleteProduct);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default del;
