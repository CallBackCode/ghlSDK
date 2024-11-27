export declare const workflows: {
    add: (contactId: string, workflowId: string, options: import("../../../types/contacts").ContactCreateWorkflowDTO, authToken: string) => Promise<(import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/contacts").ContactsWorkflowSuccessfulResponseDTO) | null>;
    remove: (contactId: string, workflowId: string, authToken: string) => Promise<(import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/_global").SuccededDeleteDTO) | null>;
};
