export declare const followers: {
    add: (opportunityId: string, options: import("../../../types/opportunities").OpportunitiesFollowersDTO, authToken: string) => Promise<(import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/opportunities").OpportunitiesAddFollowersResponseDTO) | null>;
    remove: (opportunityId: string, options: import("../../../types/opportunities").OpportunitiesFollowersDTO, authToken: string) => Promise<(import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/opportunities").OpportunitiesRemoveFollowersResponseDTO) | null>;
};
