import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { LocationsCreateDTO, LocationsCreateResponseDTO } from "../../types/locations";
type ResponseTypes = LocationsCreateResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const create: (options: LocationsCreateDTO, authToken: string) => Promise<ResponseTypes | null>;
export default create;
