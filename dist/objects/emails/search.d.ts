import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import { EmailsFetchBuilderSuccesfulResponseDTO, EmailsSearchOptions } from "../../types/emails";
type ResponseTypes = EmailsFetchBuilderSuccesfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const search: (options: EmailsSearchOptions, authToken: string) => Promise<ResponseTypes | null>;
export default search;
