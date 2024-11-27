import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { LocationsTagResponseDTO } from "../../../types/locations";
type ResponseTypes = LocationsTagResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const get: (locationId: string, tagId: string, authToken: string) => Promise<ResponseTypes> | null;
export default get;
