import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { BusinessDTO, BusinessSearchResponseDTO } from "../../types/businesses";
type ResponseTypes = BusinessSearchResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const listByLocation: (locationId: BusinessDTO["locationId"], authToken: string) => Promise<ResponseTypes | null>;
export default listByLocation;
