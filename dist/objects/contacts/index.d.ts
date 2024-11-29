export declare const contacts: {
    get: (contactId: import("../../types/contacts").ContactDTO["id"], authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/contacts").ContactByIdSuccessfulResponseDTO) | null>;
    search: (options: import("../../types/contacts").ContactSearchOptions, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/contacts").ContactSearchSuccessResponseDTO) | null>;
    findDuplicates: (options: {
        locationId: string;
        email?: string;
        phone?: string;
    }, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/contacts").ContactsSearchDuplicatesDTO) | null>;
    create: (options: import("../../types/contacts").ContactCreateDTO, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/contacts").ContactByIdSuccessfulResponseDTO) | null>;
    update: (contactId: import("../../types/contacts").ContactDTO["id"], options: import("../../types/contacts").ContactUpdateDTO, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/contacts").ContactUpdateSuccessfulResponseDTO) | null>;
    upsert: (options: import("../../types/contacts").ContactUpsertDTO, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/contacts").ContactUpsertSuccessfulResponseDTO) | null>;
    delete: (contactId: import("../../types/contacts").ContactDTO["id"], authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/_global").SuccededDeleteDTO) | null>;
    tasks: {
        get: (contactId: import("../../types/contacts").ContactDTO["id"], taskId: import("../../types/contacts").ContactTaskDTO["id"], authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/contacts").ContactTaskByIsSuccessfulResponseDTO) | null>;
        search: (contactId: import("../../types/contacts").ContactDTO["id"], authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/contacts").ContactTasksListSuccessfulResponseDTO) | null>;
        create: (contactId: import("../../types/contacts").ContactDTO["id"], options: import("../../types/contacts").ContactCreateTaskParamsDTO, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/contacts").ContactTaskByIsSuccessfulResponseDTO) | null>;
        update: (contactId: import("../../types/contacts").ContactDTO["id"], taskId: import("../../types/contacts").ContactTaskDTO["id"], options: import("../../types/contacts").ContactUpdateTaskBodyDTO, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/contacts").ContactTaskByIsSuccessfulResponseDTO) | null>;
        updateStatus: (contactId: import("../../types/contacts").ContactDTO["id"], taskId: import("../../types/contacts").ContactTaskDTO["id"], options: import("../../types/contacts").ContactUpdateTaskStatusParamsDTO, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/contacts").ContactTaskByIsSuccessfulResponseDTO) | null>;
        delete: (contactId: import("../../types/contacts").ContactDTO["id"], taskId: import("../../types/contacts").ContactTaskDTO["id"], authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/_global").SuccededDeleteDTO) | null>;
    };
    appointments: {
        search: (contactId: import("../../types/contacts").ContactDTO["id"], authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/contacts").ContactGetEventsSuccessfulResponseDTO) | null>;
    };
    tags: {
        add: (contactId: string, options: import("../../types/contacts").ContactTagsDTO, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/contacts").ContactTagsDTO) | null>;
        remove: (contactId: string, options: import("../../types/contacts").ContactTagsDTO, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/contacts").ContactTagsDTO) | null>;
    };
    notes: {
        get: (contactId: import("../../types/contacts").ContactDTO["id"], noteId: import("../../types/contacts").ContactGetNoteDTO["id"], authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/contacts").ContactGetCreateUpdateNoteSuccessfulResponseDto) | null>;
        search: (contactId: import("../../types/contacts").ContactDTO["id"], authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/contacts").ContactGetCreateUpdateNoteSuccessfulResponseDto) | null>;
        create: (contactId: import("../../types/contacts").ContactDTO["id"], options: import("../../types/contacts").ContactNotesDTO, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/contacts").ContactGetCreateUpdateNoteSuccessfulResponseDto) | null>;
        update: (contactId: import("../../types/contacts").ContactDTO["id"], noteId: import("../../types/contacts").ContactGetNoteDTO["id"], options: import("../../types/contacts").ContactNotesDTO, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/contacts").ContactGetCreateUpdateNoteSuccessfulResponseDto) | null>;
        delete: (contactId: import("../../types/contacts").ContactDTO["id"], noteId: import("../../types/contacts").ContactGetNoteDTO["id"], authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/_global").SuccededDeleteDTO) | null>;
    };
    campaigns: {
        search: (options: {
            locationId: string;
            status?: string;
        }, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/campaigns").CampaignsSuccessfulResponseDto) | null>;
    };
    workflows: {
        add: (contactId: string, workflowId: string, options: import("../../types/contacts").ContactCreateWorkflowDTO, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/contacts").ContactsWorkflowSuccessfulResponseDTO) | null>;
        remove: (contactId: string, workflowId: string, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/_global").SuccededDeleteDTO) | null>;
    };
    followers: {
        add: (contactId: string, options: import("../../types/contacts").ContactFollowersDTO, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/contacts").ContactAddFollowersSuccessfulResponseDTO) | null>;
        remove: (contactId: string, options: import("../../types/contacts").ContactFollowersDTO, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/contacts").ContactDeleteFollowersSuccessfulResponseDTO) | null>;
    };
};
