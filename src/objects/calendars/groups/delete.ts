import { CalendarGroupDTO } from "../../../types/calendars";
import {
  BadRequestDTO,
  SuccessDeleteDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import { withExponentialBackoff } from "../../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/calendars/groups";

type ResponseTypes =
  | SuccessDeleteDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const del = async (
  groupId: CalendarGroupDTO["id"],
  authToken: string
): Promise<ResponseTypes> | null => {
  const URL = `${baseUrl}/${groupId}`;

  const deleteRequest = async () => {
    const response = await fetch(URL, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Version: "2021-04-15",
        Authorization: `Bearer ${authToken}`,
      },
    });
    const data: ResponseTypes = await response.json();
    return data;
  };

  try {
    return await withExponentialBackoff(deleteRequest);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default del;
