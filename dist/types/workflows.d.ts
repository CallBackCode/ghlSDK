export type WorkflowsSchema = {
    id?: string;
    name?: string;
    status?: string;
    version?: number;
    createdAt?: string;
    updatedAt?: string;
    locationId?: string;
};
export type WorkflowsSearchResponseDTO = {
    workflows: WorkflowsSchema[];
};
