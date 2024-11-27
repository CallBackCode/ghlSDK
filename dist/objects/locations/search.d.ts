import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { LocationsSearchOptions, LocationsSearchResponseDTO } from "../../types/locations";
type ResponseTypes = LocationsSearchResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const search: (options: LocationsSearchOptions, authToken: string) => Promise<ResponseTypes | null>;
export default search;
