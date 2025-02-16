import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import { GetLocationAccessCodeBodyDTO, GetLocationAccessTokenSuccessfulResponseDTO } from "../../types/oauth";
type ResponseTypes = GetLocationAccessTokenSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const getLocationTokenFromCompany: (options: GetLocationAccessCodeBodyDTO, authToken: string) => Promise<ResponseTypes | null>;
export default getLocationTokenFromCompany;
