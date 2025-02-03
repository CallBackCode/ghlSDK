import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import { GetAccessCodeBodyDTO, GetAccessCodeSuccessfulResponseDTO } from "../../types/oauth";
type ResponseTypes = GetAccessCodeSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const getAccessToken: (options: GetAccessCodeBodyDTO) => Promise<ResponseTypes | null>;
export default getAccessToken;
