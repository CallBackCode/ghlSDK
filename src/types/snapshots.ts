export type SnapshotsSchema = {
  id?: string /** The snapshot id */;
  name?: string /** The snapshot name */;
  type?: string /** The snapshot type */;
};

export type SnapshotsGetResponseDTO = {
  snapshots?: SnapshotsSchema[] /** The list of snapshots */;
};

type ShareType = "link" | "permanent_link" | "agency_link" | "location_link";

export type SnapshotsSharelinkCreateDTO = {
  snapshot_id: string /** id for snapshot to be shared */;
  share_type: ShareType /** Type of share link to generate */;
  relationship_number?: string /** Comma separated Relationship number of Agencies to create agency restricted share link */;
  share_location_id?: string /** Comma separated Sub-Account ids to create sub-account restricted share link */;
};

export type SnapshotsSharelinkCreateResponseDTO = {
  id?: string /** The share link id */;
  shareLink?: string /** The share link */;
};

export type SnapshotsStatusSchema = {
  id?: string /** Document id */;
  locationId?: string /** Sub-account id */;
  status?: string /** Status of snapshot push */;
  dateAdded?: string /** Timestamp of when snapshot processing starts for sub-account (10/28/2022, 6:24:54 PM) */;
};

export type SnapshotsStatusResponseDTO = {
  data: SnapshotsStatusSchema[] /** The list of snapshot status */;
};

export type SnapshotsAssetsStatusSchema = {
  id?: string /** Document id */;
  locationId?: string /** Sub-account id */;
  status?: string /** Status of snapshot push */;
  completed?: string[] /** List of completed assets */;
  pending?: string[] /** List of pending assets */;
};

export type SnapshotsAssetsStatusResponseDTO = {
  data: SnapshotsAssetsStatusSchema[] /** The list of snapshot status */;
};
