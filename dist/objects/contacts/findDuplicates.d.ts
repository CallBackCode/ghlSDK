import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { ContactsSearchDuplicatesDTO } from "../../types/contacts";
type SearchOptions = {
    locationId: string;
    email?: string;
    phone?: string;
};
type ResponseTypes = ContactsSearchDuplicatesDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const findDuplicates: (options: SearchOptions, authToken: string) => Promise<ResponseTypes | null>;
export default findDuplicates;
