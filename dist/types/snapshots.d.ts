export type SnapshotsSchema = {
    id?: string;
    name?: string;
    type?: string;
};
export type SnapshotsGetResponseDTO = {
    snapshots?: SnapshotsSchema[];
};
type ShareType = "link" | "permanent_link" | "agency_link" | "location_link";
export type SnapshotsSharelinkCreateDTO = {
    snapshot_id: string;
    share_type: ShareType;
    relationship_number?: string;
    share_location_id?: string;
};
export type SnapshotsSharelinkCreateResponseDTO = {
    id?: string;
    shareLink?: string;
};
export type SnapshotsStatusSchema = {
    id?: string;
    locationId?: string;
    status?: string;
    dateAdded?: string;
};
export type SnapshotsStatusResponseDTO = {
    data: SnapshotsStatusSchema[];
};
export type SnapshotsAssetsStatusSchema = {
    id?: string;
    locationId?: string;
    status?: string;
    completed?: string[];
    pending?: string[];
};
export type SnapshotsAssetsStatusResponseDTO = {
    data: SnapshotsAssetsStatusSchema[];
};
export {};
