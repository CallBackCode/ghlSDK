import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { LocationsDeleteResponseDTO } from "../../types/locations";
type ResponseTypes = LocationsDeleteResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const del: (locationId: string, authToken: string) => Promise<ResponseTypes | null>;
export default del;
