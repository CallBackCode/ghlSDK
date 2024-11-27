import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { LocationsCFsResponseDTO } from "../../../types/locations";
type ResponseTypes = LocationsCFsResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const search: (locationId: string, authToken: string) => Promise<ResponseTypes> | null;
export default search;
