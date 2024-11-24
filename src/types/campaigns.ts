export type CampaignsDTO = {
  id: string; // The ID of the campaign (mIVALPYuTD7YjUHnFEx4)
  name: string; // The name of the campaign (New Lead)
  status: string; // The status of the campaign (draft)
  locationId: string; // The ID of the location associated with the campaign (mIVALPYuTD7YjUHnFEx4)
};

export type CampaignsSuccessfulResponseDto = {
  campaigns: CampaignsDTO[];
};
