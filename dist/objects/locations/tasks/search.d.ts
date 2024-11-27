import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { LocationsTaskListResponseDTO, LocationsTaskSearchParamsDTO } from "../../../types/locations";
type ResponseTypes = LocationsTaskListResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const search: (locationId: string, options: LocationsTaskSearchParamsDTO, authToken: string) => Promise<ResponseTypes> | null;
export default search;
