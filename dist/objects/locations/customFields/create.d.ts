import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { LocationsCFCreateDTO, LocationsCVResponseDTO } from "../../../types/locations";
type ResponseTypes = LocationsCVResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const create: (locationId: string, options: LocationsCFCreateDTO, authToken: string) => Promise<ResponseTypes> | null;
export default create;
