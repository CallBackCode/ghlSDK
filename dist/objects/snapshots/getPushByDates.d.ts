import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { SnapshotsStatusResponseDTO } from "../../types/snapshots";
type SearchParams = {
    companyId: string;
    from: string;
    lastDoc: string;
    limit: string;
    to: string;
};
type ResponseTypes = SnapshotsStatusResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const getPushByDates: (snapshotId: string, options: SearchParams, authToken: string) => Promise<ResponseTypes> | null;
export default getPushByDates;
