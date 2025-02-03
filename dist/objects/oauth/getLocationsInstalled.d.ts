import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import { OAuthSearchOptions, GetInstalledLocationsSuccessfulResponseDTO } from "../../types/oauth";
type ResponseTypes = GetInstalledLocationsSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const getLocationsInstalled: (options: OAuthSearchOptions) => Promise<ResponseTypes | null>;
export default getLocationsInstalled;
