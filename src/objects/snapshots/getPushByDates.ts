import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../types/_global";
import type { SnapshotsStatusResponseDTO } from "../../types/snapshots";
import { withExponentialBackoff } from "../../contexts/requestUtils";

const baseUrl =
  "https://services.leadconnectorhq.com/snapshots/snapshot-status";

type SearchParams = {
  companyId: string; // The company id to filter the response
  from: string; // The start date to filter the response
  lastDoc: string; // The last document to filter the response
  limit: string; // The number of items to return
  to: string; // The end date to filter the response
};

type ResponseTypes =
  | SnapshotsStatusResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const getPushByDates = async (
  snapshotId: string,
  options: SearchParams,
  authToken: string
): Promise<ResponseTypes> | null => {
  const fetchEvent = async () => {
    const URL = `${baseUrl}/${snapshotId}?` + new URLSearchParams(options);
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

export default getPushByDates;
