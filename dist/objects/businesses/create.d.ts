import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { CreateBusinessDTO, BusienssCreateUpdateResponseDTO } from "../../types/businesses";
type ResponseTypes = BusienssCreateUpdateResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const create: (options: CreateBusinessDTO, authToken: string) => Promise<ResponseTypes | null>;
export default create;
