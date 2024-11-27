import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { LocationsCVResponseDTO } from "../../../types/locations";
type ResponseTypes = LocationsCVResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const get: (locationId: string, customValueId: string, authToken: string) => Promise<ResponseTypes> | null;
export default get;
