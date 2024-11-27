import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { SnapshotsGetResponseDTO } from "../../types/snapshots";
type ResponseTypes = SnapshotsGetResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const get: (companyId: string, authToken: string) => Promise<ResponseTypes> | null;
export default get;
