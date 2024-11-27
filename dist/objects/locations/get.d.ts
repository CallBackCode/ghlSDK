import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { LocationsGetByIdResponseDTO } from "../../types/locations";
type ResponseTypes = LocationsGetByIdResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const get: (locationId: string, authToken: string) => Promise<ResponseTypes | null>;
export default get;
