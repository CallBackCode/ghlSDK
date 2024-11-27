export type CampaignsDTO = {
    id: string;
    name: string;
    status: string;
    locationId: string;
};
export type CampaignsSuccessfulResponseDto = {
    campaigns: CampaignsDTO[];
};
