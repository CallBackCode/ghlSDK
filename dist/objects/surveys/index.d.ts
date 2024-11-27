export declare const surveys: {
    get: (options: {
        locationId: string;
        type?: string;
        limit?: number;
        skip?: number;
    }, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/surveys").SuverysGetResponseSchema> | null;
    getSubmissions: (options: {
        locationId: string;
        limit?: number;
        page?: number;
        startAt?: string;
        endAt?: string;
        q?: string;
        surveyId?: string;
    }, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/surveys").SurveySubmissionsGetResponseDTO> | null;
};
