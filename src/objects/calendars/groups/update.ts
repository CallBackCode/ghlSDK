import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import type { Calendars } from "../../../types/calendars";
import { withExponentialBackoff } from "../../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/calendars/groups";

type ResponseTypes =
  | Calendars.CreateUpdateBlockedSlotSuccessfulResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const update = async (
  groupId: Calendars.Groups.DTO["id"],
  options: Calendars.Groups.UpdateDTO,
  authToken: string
): Promise<ResponseTypes> | null => {
  const URL = `${baseUrl}/${groupId}`;

  const updateGroupRequest = async () => {
    const response = await fetch(URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Version: "2021-04-15",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(options),
    });
    const data: ResponseTypes = await response.json();
    return data;
  };

  try {
    return await withExponentialBackoff(updateGroupRequest);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default update;
