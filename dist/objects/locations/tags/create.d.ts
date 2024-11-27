import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { LocationsTagBodySchema, LocationsTagResponseDTO } from "../../../types/locations";
type ResponseTypes = LocationsTagResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const create: (locationId: string, options: LocationsTagBodySchema, authToken: string) => Promise<ResponseTypes> | null;
export default create;
