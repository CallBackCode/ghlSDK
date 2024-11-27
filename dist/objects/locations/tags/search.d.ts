import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { LocationsTagsResponseDTO } from "../../../types/locations";
type ResponseTypes = LocationsTagsResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const search: (locationId: string, authToken: string) => Promise<ResponseTypes> | null;
export default search;
