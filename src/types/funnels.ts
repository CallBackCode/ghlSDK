type FunnelsRedirectAction = "funnel" | "website" | "url" | "all";

export type FunnelsRedirectCreateParams = {
  locationId: string /** Location ID */;
  domain: string /** Domain of the funnel */;
  path: string /** Path of the funnel */;
  target: string /** Target URL */;
  action: FunnelsRedirectAction /** Action to perform */;
};

export type FunnelsRedirectResponseDTO = {
  id: string /** Redirect ID */;
  locationId: string /** Location ID */;
  domain: string /** Domain of the funnel */;
  path: string /** Path of the funnel */;
  pathLowercase: string /** Lowercase version of the path */;
  type: string /** Type of redirect */;
  target: string /** Target URL */;
  action: FunnelsRedirectAction /** Action performed */;
};

export type FunnelsRedirectCreateResponseDTO = {
  data: FunnelsRedirectResponseDTO;
};

export type FunnelsRedirectUpdateParams = {
  locationId: string /** Location ID */;
  target: string /** Target URL */;
  action: FunnelsRedirectAction /** Action to perform */;
};

export type FunnelsRedirectListResponseDTO = {
  data: {
    count: number /** Number of funnels */;
    data: any[] /** Array of funnels (currently returns an empty array even when count is true) */;
  };
};

export type FunnelsRedirectDeleteResponseDTO = {
  data: {
    status: string /** Status of the deletion */;
  };
};

export type FunnelsRedirectUpdateResponseDTO = FunnelsRedirectCreateResponseDTO;

export type FunnelsPageResponseDTO = {
  _id: string /** Page ID */;
  locationId: string /** Location ID */;
  funnelId: string /** Funnel ID */;
  name: string /** Name of the page */;
  stepId: string /** Step ID */;
  deleted: string /** Whether the page is deleted */;
  updatedAt: string /** Last updated timestamp */;
};

export type FunnelsPageCountResponseDTO = {
  count: number /** Number of pages */;
};

type FunnelsListSchema = {
  _id: string /** Funnel ID */;
  dateAdded: string /** Date added timestamp */;
  dateUpdated: string /** Date updated timestamp */;
  deleted: boolean /** Whether the funnel is deleted */;
  domainId?: string /** Domain ID */;
  locationId: string /** Location ID */;
  name: string /** Name of the funnel */;
  orderFormVersion?: number /** Order form version */;
  originId?: string /** Origin ID */;
  steps: {
    id: string /** Step ID */;
    name: string /** Name of the step */;
    originId: string /** Origin ID */;
    pages?: string[] /** Array of page IDs */;
    products?: string[] /** Array of product IDs */;
    sequence?: number /** Sequence number */;
    type?: string /** Type of step */;
    url?: string /** URL of the step */;
  }[] /** Array of steps */;
  type?: string /** Type of funnel */;
  updatedAt: string /** Last updated timestamp */;
  faviconUrl?: string /** URL of the favicon */;
  globalSectionVersion?: number /** Global section version */;
  globalSectionsPath?: string /** Path to global sections */;
  globalSectionsUrl?: string /** URL to global sections */;
  isStoreActive?: boolean /** Whether the store is active */;
  trackingCodeBody?: string /** Body tracking code */;
  trackingCodeHead?: string /** Head tracking code */;
  url?: string /** URL of the funnel */;
};

export type FunnelsListResponseDTO = {
  funnels: FunnelsListSchema /** Array of funnels */;
  count: number /** Number of funnels */;
  traceId: string /** Trace ID */;
};
