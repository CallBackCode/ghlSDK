import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../types/_global";
import type {
  SnapshotsSharelinkCreateDTO,
  SnapshotsSharelinkCreateResponseDTO,
} from "../../types/snapshots";
import { withExponentialBackoff } from "../../contexts/requestUtils"; // Assuming this function is defined

const baseUrl = "https://services.leadconnectorhq.com/snapshots/share/link";

type ResponseTypes =
  | SnapshotsSharelinkCreateResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const createShareLink = async (
  options: SnapshotsSharelinkCreateDTO,
  authToken: string
): Promise<ResponseTypes> | null => {
  const execute = async () => {
    const URL = `${baseUrl}`;
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Version: "2021-07-28",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(options),
    });
    const data: ResponseTypes = await response.json();
    return data;
  };

  try {
    return await withExponentialBackoff(execute);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default createShareLink;
