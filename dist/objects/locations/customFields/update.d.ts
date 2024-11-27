import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { LocationsCFResponseDTO, LocationsCFUpdateDTO } from "../../../types/locations";
type ResponseTypes = LocationsCFResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const update: (locationId: string, customFieldId: string, options: LocationsCFUpdateDTO, authToken: string) => Promise<ResponseTypes> | null;
export default update;
