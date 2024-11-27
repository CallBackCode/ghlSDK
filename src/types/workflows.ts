export type WorkflowsSchema = {
  id?: string; // The workflow ID
  name?: string; // The name
  status?: string; // The status
  version?: number; // The version
  createdAt?: string; // The creation date (2021-05-26T11:33:49.000Z)
  updatedAt?: string; // The update date (2021-05-26T11:33:49.000Z)
  locationId?: string; // The location ID
};

export type WorkflowsSearchResponseDTO = {
  workflows: WorkflowsSchema[]; // The list of workflows
};
