import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { LocationsCFResponseDTO } from "../../../types/locations";
type ResponseTypes = LocationsCFResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const get: (locationId: string, customFieldId: string, authToken: string) => Promise<ResponseTypes> | null;
export default get;
