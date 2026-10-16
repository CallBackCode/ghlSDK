import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { Businesses } from "../../types/businesses";
type ResponseTypes = Businesses.SearchResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const listByLocation: (locationId: Businesses.DTO["locationId"], authToken: string) => Promise<ResponseTypes | null>;
export default listByLocation;
