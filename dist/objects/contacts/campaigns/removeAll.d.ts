import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { ContactCreateDeleteCampaignsSuccessfulResponseDTO } from "../../../types/contacts";
type ResponseTypes = ContactCreateDeleteCampaignsSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const removeAll: (contactId: string, authToken: string) => Promise<ResponseTypes | null>;
export default removeAll;
