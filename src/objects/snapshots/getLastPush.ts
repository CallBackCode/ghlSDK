import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../types/_global";
import type { SnapshotsStatusResponseDTO } from "../../types/snapshots";
import { withExponentialBackoff } from "../../contexts/requestUtils";

const baseUrl =
  "https://services.leadconnectorhq.com/snapshots/snapshot-status";

type ResponseTypes =
  | SnapshotsStatusResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const getLastPush = async (
  companyId: string,
  locationId: string,
  snapshotId: string,
  authToken: string
): Promise<ResponseTypes> | null => {
  const fetchEvent = async () => {
    const URL =
      `${baseUrl}/${snapshotId}/location/${locationId}?` +
      new URLSearchParams({ companyId });
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
  };

  try {
    return await withExponentialBackoff(fetchEvent);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getLastPush;
