import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { ContactCreateDeleteCampaignsSuccessfulResponseDTO } from "../../../types/contacts";
type ResponseTypes = ContactCreateDeleteCampaignsSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const add: (contactId: string, campaignId: string, authToken: string) => Promise<ResponseTypes | null>;
export default add;
