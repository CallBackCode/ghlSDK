export declare const snapshots: {
    get: (companyId: string, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/snapshots").SnapshotsGetResponseDTO> | null;
    getLastPush: (companyId: string, locationId: string, snapshotId: string, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/snapshots").SnapshotsStatusResponseDTO> | null;
    getPushByDates: (snapshotId: string, options: {
        companyId: string;
        from: string;
        lastDoc: string;
        limit: string;
        to: string;
    }, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/snapshots").SnapshotsStatusResponseDTO> | null;
    createShareLink: (options: import("../../types/snapshots").SnapshotsSharelinkCreateDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/snapshots").SnapshotsSharelinkCreateResponseDTO> | null;
};
