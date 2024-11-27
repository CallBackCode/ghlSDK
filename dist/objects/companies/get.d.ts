import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import { CompaniesGetByIdSuccessfulResponseDTO, CompaniesGetByIdDTO } from "../../types/companies";
type ResponseTypes = CompaniesGetByIdSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const get: (companyId: CompaniesGetByIdDTO["id"], authToken: string) => Promise<ResponseTypes | null>;
export default get;
