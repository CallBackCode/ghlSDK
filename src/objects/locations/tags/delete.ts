import {
  BadRequestDTO,
  SuccededDeleteDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import { withExponentialBackoff } from "../../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/locations";

type ResponseTypes =
  | SuccededDeleteDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const del = async (
  locationId: string,
  tagId: string,
  authToken: string
): Promise<ResponseTypes> | null => {
  const deleteLocation = async () => {
    const URL = `${baseUrl}/${locationId}/tags/${tagId}`;
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
    return await withExponentialBackoff(deleteLocation);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default del;
