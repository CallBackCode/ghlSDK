export declare const socialPlanner: {
    oauth: {
        google: {
            start: () => void;
            getLocations: () => void;
            setLocations: () => void;
        };
        facebook: {
            start: () => void;
            getPages: () => void;
            attachPages: () => void;
        };
        instagram: {
            start: () => void;
            getAccounts: () => void;
            attachAccounts: () => void;
        };
        linkedin: {
            start: () => void;
            getPages: () => void;
            attachPages: () => void;
        };
        twitter: {
            start: () => void;
            getProfile: () => void;
            attachProfile: () => void;
        };
        tiktok: {
            startPersonal: () => void;
            getPersonal: () => void;
            startBusiness: () => void;
            getBusienss: () => void;
            attachProfile: () => void;
        };
    };
    post: {
        get: () => void;
        search: () => void;
        create: () => void;
        update: () => void;
        delete: () => void;
    };
    account: {
        get: () => void;
        delete: () => void;
    };
    csv: {
        uploadCSV: () => void;
        getStatus: () => void;
        getPost: () => void;
        setAccounts: () => void;
        startFinalize: () => void;
        deleteCSV: () => void;
        deletePost: () => void;
    };
    categories: {
        get: () => void;
        search: () => void;
    };
    tags: {
        get: () => void;
        search: () => void;
    };
};
