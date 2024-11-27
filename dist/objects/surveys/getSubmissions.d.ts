import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { SurveySubmissionsGetResponseDTO } from "../../types/surveys";
type SearchParams = {
    locationId: string;
    limit?: number;
    page?: number;
    startAt?: string;
    endAt?: string;
    q?: string;
    surveyId?: string;
};
type ResponseTypes = SurveySubmissionsGetResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const getSubmissions: (options: SearchParams, authToken: string) => Promise<ResponseTypes> | null;
export default getSubmissions;
