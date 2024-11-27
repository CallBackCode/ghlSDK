import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { UpdateBusinessDTO, BusienssCreateUpdateResponseDTO, BusinessDTO } from "../../types/businesses";
type ResponseTypes = BusienssCreateUpdateResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const update: (businessId: BusinessDTO["id"], options: UpdateBusinessDTO, authToken: string) => Promise<ResponseTypes | null>;
export default update;
