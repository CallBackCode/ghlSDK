import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { SnapshotsSharelinkCreateDTO, SnapshotsSharelinkCreateResponseDTO } from "../../types/snapshots";
type ResponseTypes = SnapshotsSharelinkCreateResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const createShareLink: (options: SnapshotsSharelinkCreateDTO, authToken: string) => Promise<ResponseTypes> | null;
export default createShareLink;
