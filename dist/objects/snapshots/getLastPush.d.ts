import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { SnapshotsStatusResponseDTO } from "../../types/snapshots";
type ResponseTypes = SnapshotsStatusResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const getLastPush: (companyId: string, locationId: string, snapshotId: string, authToken: string) => Promise<ResponseTypes> | null;
export default getLastPush;
