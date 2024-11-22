import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import type {
  CalendarCreateUpdateBlockedSlotSuccessfulResponseDTO,
  CalendarGroupDTO,
} from "../../../types/calendars";
const baseUrl = "https://services.leadconnectorhq.com/calendars/groups";

type ResponseTypes =
  | { success: true }
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const disable = async (
  groupId: CalendarGroupDTO["id"],
  options: { isActive: boolean },
  authToken: string
): Promise<ResponseTypes> | null => {
  try {
    const URL = `${baseUrl}/${groupId}/status`;
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
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default disable;
