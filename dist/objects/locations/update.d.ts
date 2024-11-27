import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { LocationsCreateResponseDTO, LocationsUpdateDTO } from "../../types/locations";
type ResponseTypes = LocationsCreateResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const update: (locationId: string, options: LocationsUpdateDTO, authToken: string) => Promise<ResponseTypes | null>;
export default update;
