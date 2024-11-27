type PipelinesStageSchema = {
    id: string;
    name: string;
    position: number;
    showInFunnel: boolean;
    showInPieChart: boolean;
};
export type PipelinesResponseSchema = {
    id?: string;
    name?: string;
    stages?: PipelinesStageSchema[];
    showInFunnel?: boolean;
    showInPieChart?: boolean;
    locationId?: string;
};
export type PipelinesGetResponseDTO = {
    pipelines: PipelinesResponseSchema[];
};
export {};
