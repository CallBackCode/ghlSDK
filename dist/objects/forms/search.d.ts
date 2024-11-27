import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import { FormsSearchOptions, FormsSuccessfulResponseDTO } from "../../types/forms";
type ResponseTypes = FormsSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const search: (options: FormsSearchOptions, authToken: string) => Promise<ResponseTypes | null>;
export default search;
