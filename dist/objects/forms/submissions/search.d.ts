import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import { FormsSubmissionsSearchOptions, FormsSubmissionsSuccessfulResponseDTO } from "../../../types/forms";
type ResponseTypes = FormsSubmissionsSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const search: (options: FormsSubmissionsSearchOptions, authToken: string) => Promise<ResponseTypes | null>;
export default search;
