import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { LocationsCVDTO, LocationsCVResponseDTO } from "../../../types/locations";
type ResponseTypes = LocationsCVResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const update: (locationId: string, customValueId: string, options: LocationsCVDTO, authToken: string) => Promise<ResponseTypes> | null;
export default update;
