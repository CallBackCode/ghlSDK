type PipelinesStageSchema = {
  id: string /** Stage ID */;
  name: string /** Stage name */;
  position: number /** Stage position */;
  showInFunnel: boolean /** Whether to show in funnel */;
  showInPieChart: boolean /** Whether to show in pie chart */;
};

export type PipelinesResponseSchema = {
  id?: string /** Pipeline ID */;
  name?: string /** Pipeline name */;
  stages?: PipelinesStageSchema[] /** Pipeline stages */;
  showInFunnel?: boolean /** Whether to show in funnel */;
  showInPieChart?: boolean /** Whether to show in pie chart */;
  locationId?: string /** Location ID */;
};

export type PipelinesGetResponseDTO = {
  pipelines: PipelinesResponseSchema[] /** Array of pipelines */;
};
