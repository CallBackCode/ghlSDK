import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { ConrtactSearchDuplicatesDTO } from "../../types/contacts";
type SearchOptions = {
    locationId: string;
    email?: string;
    phone?: string;
};
type ResponseTypes = ConrtactSearchDuplicatesDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const findDuplicates: (options: SearchOptions, authToken: string) => Promise<ResponseTypes | null>;
export default findDuplicates;
