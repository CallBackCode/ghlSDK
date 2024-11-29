export declare const GHL: {
    businesses: {
        get: (businessId: import("./types/businesses").BusinessDTO["id"], authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/businesses").BusinessGetResponseDTO) | null>;
        listByLocation: (locationId: import("./types/businesses").BusinessDTO["locationId"], authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/businesses").BusinessSearchResponseDTO) | null>;
        create: (options: import("./types/businesses").CreateBusinessDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/businesses").BusienssCreateUpdateResponseDTO) | null>;
        update: (businessId: import("./types/businesses").BusinessDTO["id"], options: import("./types/businesses").UpdateBusinessDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/businesses").BusienssCreateUpdateResponseDTO) | null>;
        delete: (businessId: import("./types/businesses").BusinessDTO["id"], authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/_global").SuccessDeleteDTO) | null>;
    };
    calendars: {
        get: (calendarId: import("./types/calendars").CalendarDTO["id"], authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/calendars").CalendarByIdSuccessfulResponseDTO) | null>;
        search: (options: {
            locationId: string;
            showDrafted?: boolean;
            groupId?: string;
        }, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/calendars").CalendarsGetSuccessfulResponseDTO) | null>;
        create: (options: import("./types/calendars").CalendarCreateDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/calendars").CalendarByIdSuccessfulResponseDTO) | null>;
        update: (calendarId: import("./types/calendars").CalendarDTO["id"], options: import("./types/calendars").CalendarUpdateDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/calendars").CalendarByIdSuccessfulResponseDTO) | null>;
        delete: (calendarId: import("./types/calendars").CalendarDTO["id"], authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/_global").SuccessDeleteDTO) | null>;
        freeSlots: {
            get: (calendarId: import("./types/calendars").CalendarDTO["id"], options: import("./types/calendars").CalendarGetFreeSlotsDTO, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/calendars").CalendarGetSlotsSuccessfulResponseDto> | null;
        };
        groups: {
            search: (locationId: import("./types/calendars").CalendarGroupDTO["locationId"], authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/calendars").CalendarAllGroupsSuccessfulResponseDTO> | null;
            create: (options: import("./types/calendars").CalendarGroupCreateDTO, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/calendars").CalendarGroupCreateSuccessfulResponseDTO> | null;
            update: (groupId: import("./types/calendars").CalendarGroupDTO["id"], options: import("./types/calendars").CalendarGroupUpdateDTO, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/calendars").CalendarCreateUpdateBlockedSlotSuccessfulResponseDTO> | null;
            delete: (groupId: import("./types/calendars").CalendarGroupDTO["id"], authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/_global").SuccessDeleteDTO> | null;
            disable: (groupId: import("./types/calendars").CalendarGroupDTO["id"], options: {
                isActive: boolean;
            }, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | {
                success: true;
            }> | null;
            validateSlug: (options: import("./types/calendars").CalendarValidateGroupSlugPostBodyDTO, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/calendars").CalendarValidateGroupSlugSuccessResponseDTO> | null;
        };
        appointments: {
            get: (calendarId: import("./types/calendars").CalendarEventDTO["id"], authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/calendars").CalendarGetEventSuccessfulResponseDTO> | null;
            search: (options: {
                locationId: string;
                startTime: string;
                endTime: string;
                calendarId?: string;
                groupId?: string;
                userId?: string;
            }, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/calendars").CalendarGetEventsSuccessfulResponseDTO> | null;
            create: (options: import("./types/calendars").CalendarAppointmentCreateUpdateSchemaDTO, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/calendars").CalendarCreateUpdateBlockedSlotSuccessfulResponseDTO> | null;
            update: (eventId: import("./types/calendars").CalendarEventDTO["id"], options: Partial<import("./types/calendars").CalendarAppointmentCreateUpdateSchemaDTO>, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/calendars").CalendarCreateUpdateBlockedSlotSuccessfulResponseDTO> | null;
            delete: (eventId: import("./types/calendars").CalendarEventDTO["id"], authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/_global").SuccededDeleteDTO> | null;
        };
        notes: {
            search: (appointmentId: import("./types/calendars").CalendarEventDTO["id"], options: {
                limit: number;
                offset: number;
            }, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/calendars").CalendarGetNotesDTO> | null;
            create: (appointmentId: import("./types/calendars").CalendarEventDTO["id"], options: import("./types/contacts").ContactNotesDTO, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/calendars").CalendarGetCreateUpdateNoteSuccessfulResponseDto> | null;
            update: (appointmentId: import("./types/calendars").CalendarEventDTO["id"], noteId: import("./types/calendars").CalendarGetNoteSchemaDTO["id"], options: import("./types/contacts").ContactNotesDTO, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/calendars").CalendarGetCreateUpdateNoteSuccessfulResponseDto> | null;
            delete: (appointmentId: import("./types/calendars").CalendarEventDTO["id"], noteId: import("./types/calendars").CalendarGetNoteSchemaDTO["id"], authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/_global").SuccessDeleteDTO> | null;
        };
        blocks: {
            search: (options: {
                locationId: string;
                startTime: string;
                endTime: string;
                calendarId?: string;
                groupId?: string;
                userId?: string;
            }, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/calendars").CalendarGetEventsSuccessfulResponseDTO> | null;
            create: (options: import("./types/calendars").CalendarBlockSlotCreateSchemaDTO, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/calendars").CalendarCreateUpdateBlockedSlotSuccessfulResponseDTO> | null;
            update: (eventId: import("./types/calendars").CalendarEventDTO["id"], options: import("./types/calendars").CalendarBlockSlotEditSchemaDTO, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/calendars").CalendarAppointmentSchemaResponseDTO> | null;
            delete: (eventId: import("./types/calendars").CalendarEventDTO["id"], authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/_global").SuccededDeleteDTO> | null;
        };
        resources: {
            get: (resourceId: string, resourceType: import("./types/calendars").CalendarResourceTypeDTO, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/calendars").CalendarResourceDTO> | null;
            search: (resourceType: import("./types/calendars").CalendarResourceTypeDTO[], options: {
                locationId: import("./types/calendars").CalendarResourceDTO["locationId"];
                limit: number;
                skip: number;
            }, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/calendars").CalendarResourceDTO> | null;
            create: (resourceType: import("./types/calendars").CalendarResourceTypeDTO, options: import("./types/calendars").CalendarCreateResourceDTO, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/calendars").CalendarResourceResponseDTO> | null;
            update: (resourceId: string, resourceType: import("./types/calendars").CalendarResourceTypeDTO, options: Partial<import("./types/calendars").CalendarCreateResourceDTO & {
                isActive: boolean;
            }>, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/calendars").CalendarResourceResponseDTO) | null>;
            delete: (resourceId: string, resourceType: import("./types/calendars").CalendarResourceTypeDTO, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/_global").SuccessDeleteDTO> | null;
        };
    };
    campaigns: {
        search: (options: {
            locationId: string;
            status?: string;
        }, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/campaigns").CampaignsSuccessfulResponseDto) | null>;
    };
    companies: {
        get: (companyId: import("./types/companies").CompaniesGetByIdDTO["id"], authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/companies").CompaniesGetByIdSuccessfulResponseDTO) | null>;
    };
    contacts: {
        get: (contactId: import("./types/contacts").ContactDTO["id"], authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/contacts").ContactByIdSuccessfulResponseDTO) | null>;
        search: (options: import("./types/contacts").ContactSearchOptions, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/contacts").ContactSearchSuccessResponseDTO) | null>;
        findDuplicates: (options: {
            locationId: string;
            email?: string;
            phone?: string;
        }, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/contacts").ConrtactSearchDuplicatesDTO) | null>;
        create: (options: import("./types/contacts").ContactCreateDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/contacts").ContactByIdSuccessfulResponseDTO) | null>;
        update: (contactId: import("./types/contacts").ContactDTO["id"], options: import("./types/contacts").ContactUpdateDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/contacts").ContactUpdateSuccessfulResponseDTO) | null>;
        upsert: (options: import("./types/contacts").ContactUpsertDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/contacts").ContactUpsertSuccessfulResponseDTO) | null>;
        delete: (contactId: import("./types/contacts").ContactDTO["id"], authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/_global").SuccededDeleteDTO) | null>;
        tasks: {
            get: (contactId: import("./types/contacts").ContactDTO["id"], taskId: import("./types/contacts").ContactTaskDTO["id"], authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/contacts").ContactTaskByIsSuccessfulResponseDTO) | null>;
            search: (contactId: import("./types/contacts").ContactDTO["id"], authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/contacts").ContactTasksListSuccessfulResponseDTO) | null>;
            create: (contactId: import("./types/contacts").ContactDTO["id"], options: import("./types/contacts").ContactCreateTaskParamsDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/contacts").ContactTaskByIsSuccessfulResponseDTO) | null>;
            update: (contactId: import("./types/contacts").ContactDTO["id"], taskId: import("./types/contacts").ContactTaskDTO["id"], options: import("./types/contacts").ContactUpdateTaskBodyDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/contacts").ContactTaskByIsSuccessfulResponseDTO) | null>;
            updateStatus: (contactId: import("./types/contacts").ContactDTO["id"], taskId: import("./types/contacts").ContactTaskDTO["id"], options: import("./types/contacts").ContactUpdateTaskStatusParamsDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/contacts").ContactTaskByIsSuccessfulResponseDTO) | null>;
            delete: (contactId: import("./types/contacts").ContactDTO["id"], taskId: import("./types/contacts").ContactTaskDTO["id"], authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/_global").SuccededDeleteDTO) | null>;
        };
        appointments: {
            search: (contactId: import("./types/contacts").ContactDTO["id"], authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/contacts").ContactGetEventsSuccessfulResponseDTO) | null>;
        };
        tags: {
            add: (contactId: string, options: import("./types/contacts").ContactTagsDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/contacts").ContactTagsDTO) | null>;
            remove: (contactId: string, options: import("./types/contacts").ContactTagsDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/contacts").ContactTagsDTO) | null>;
        };
        notes: {
            get: (contactId: import("./types/contacts").ContactDTO["id"], noteId: import("./types/contacts").ContactGetNoteDTO["id"], authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/contacts").ContactGetCreateUpdateNoteSuccessfulResponseDto) | null>;
            search: (contactId: import("./types/contacts").ContactDTO["id"], authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/contacts").ContactGetCreateUpdateNoteSuccessfulResponseDto) | null>;
            create: (contactId: import("./types/contacts").ContactDTO["id"], options: import("./types/contacts").ContactNotesDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/contacts").ContactGetCreateUpdateNoteSuccessfulResponseDto) | null>;
            update: (contactId: import("./types/contacts").ContactDTO["id"], noteId: import("./types/contacts").ContactGetNoteDTO["id"], options: import("./types/contacts").ContactNotesDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/contacts").ContactGetCreateUpdateNoteSuccessfulResponseDto) | null>;
            delete: (contactId: import("./types/contacts").ContactDTO["id"], noteId: import("./types/contacts").ContactGetNoteDTO["id"], authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/_global").SuccededDeleteDTO) | null>;
        };
        campaigns: {
            search: (options: {
                locationId: string;
                status?: string;
            }, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/campaigns").CampaignsSuccessfulResponseDto) | null>;
        };
        workflows: {
            add: (contactId: string, workflowId: string, options: import("./types/contacts").ContactCreateWorkflowDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/contacts").ContactsWorkflowSuccessfulResponseDTO) | null>;
            remove: (contactId: string, workflowId: string, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/_global").SuccededDeleteDTO) | null>;
        };
        followers: {
            add: (contactId: string, options: import("./types/contacts").ContactFollowersDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/contacts").ContactAddFollowersSuccessfulResponseDTO) | null>;
            remove: (contactId: string, options: import("./types/contacts").ContactFollowersDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/contacts").ContactDeleteFollowersSuccessfulResponseDTO) | null>;
        };
    };
    conversations: {
        get: (conversationId: import("./types/conversations").ConversationDTO["id"], authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/conversations").ConversationGetByIdResponse) | null>;
        search: (options: import("./types/conversations").ConversationSearchParams, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/conversations").ConversationSendResponseDTO) | null>;
        create: (options: import("./types/conversations").CreateConversationDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/conversations").ConversationGetSuccessfulResponse) | null>;
        update: (conversationId: import("./types/conversations").ConversationDTO["id"], options: import("./types/conversations").ConversationUpdateDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/conversations").ConversationGetSuccessfulResponse) | null>;
        delete: (conversationId: import("./types/conversations").ConversationDTO["id"], authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/_global").SuccessDeleteDTO) | null>;
        emails: {
            get: (emailMessageId: import("./types/conversations").ConversationGetEmailMessageResponseDTO["id"], authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/conversations").ConversationGetEmailMessageResponseDTO) | null>;
            cancelScheduled: (emailMessageId: import("./types/conversations").ConversationGetEmailMessageResponseDTO["id"], authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/conversations").ConversationCancelScheduledResponseDTO) | null>;
        };
        messages: {
            get: (messageId: import("./types/conversations").ConversationGetMessageResponseDTO["id"], authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/conversations").ConversationGetMessageResponseDTO) | null>;
            search: (conversationId: string, options: {
                lastMessageId?: string;
                limit?: number;
                type?: string;
            }, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/conversations").ConversationGetMessagesByResponseDTO) | null>;
            send: (options: import("./types/conversations").ConversationSendMessageBodyDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/conversations").ConversationSendMessageResponseDTO) | null>;
            addInbound: (options: import("./types/conversations").ConversationProcessMessageBodyDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/conversations").ConversationProcessMessageResponseDto) | null>;
            addExternalOutboundCall: (options: import("./types/conversations").ConversationProcessOutboundMessageBodyDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/conversations").ConversationProcessMessageResponseDto) | null>;
            cancelScheduled: (messageId: import("./types/conversations").ConversationGetMessageResponseDTO["id"], authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/conversations").ConversationCancelScheduledResponseDTO) | null>;
            uploadFileAttachments: (options: import("./types/conversations").ConversationUploadFilesDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/conversations").ConversationUploadFilesResponseDTO | import("./types/conversations").ConversationUploadFilesErrorResponseDto) | null>;
            updateStatus: (messageId: import("./types/conversations").ConversationGetMessageResponseDTO["id"], options: import("./types/conversations").ConversationUpdateMessageStatusDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/conversations").ConversationSendMessageResponseDTO) | null>;
            getTranscript: (locationId: string, messageId: import("./types/conversations").ConversationGetMessageResponseDTO["id"], authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/conversations").ConverstationGetMessageTranscriptionResponseDTO) | null>;
        };
    };
    courses: {
        import: (options: import("./types/courses").CoursePublicExporterPayload, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO) | null>;
    };
    emails: {
        search: (options: import("./types/emails").EmailsSearchOptions, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/emails").EmailsFetchBuilderSuccesfulResponseDTO) | null>;
        create: (options: import("./types/emails").EmailsCreateBuilderDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/emails").EmailsCreateBuilderSuccesfulResponseDTO) | null>;
        update: (options: import("./types/emails").EmailsSaveBuilderDataDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/emails").EmailsBuilderUpdateSuccessfulDTO) | null>;
        delete: (locationId: string, templateId: string, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/emails").EmailsDeleteBuilderSuccesfulResponseDTO) | null>;
    };
    forms: {
        search: (options: import("./types/forms").FormsSearchOptions, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/forms").FormsSuccessfulResponseDTO) | null>;
        submissions: {
            search: (options: import("./types/forms").FormsSubmissionsSearchOptions, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/forms").FormsSubmissionsSuccessfulResponseDTO) | null>;
        };
    };
    invoices: {
        get: (invoiceId: string, options: import("./types/invoices").InvoicesVoidDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/invoices").InvoicesGetResponseDTO) | null>;
        search: (options: import("./types/invoices").InvoicesSearchOptions, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/invoices").InvoicesListResponseDTO) | null>;
        create: (options: import("./types/invoices").InvoicesCreateDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/invoices").InvoicesCreateResponseDTO) | null>;
        update: (invoiceId: string, options: import("./types/invoices").InvoicesUpdateDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/invoices").InvoicesCreateResponseDTO) | null>;
        delete: (invoiceId: string, options: {
            altId: string;
            altType: "location";
        }, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/invoices").InvoicesCreateResponseDTO) | null>;
        send: (invoiceId: string, options: import("./types/invoices").InvoicesSendDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/invoices").InvoicesSendResponseDTO) | null>;
        void: (invoiceId: string, options: import("./types/invoices").InvoicesVoidDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/invoices").InvoicesCreateResponseDTO) | null>;
        recordPayment: (invoiceId: string, options: import("./types/invoices").InvoicesRecordPaymentDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/invoices").InvoicesRecordPaymentResponseDTO) | null>;
        generateInvoiceNumber: (options: import("./types/invoices").InvoicesVoidDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/invoices").InvoicesGenerateNumberResponseDTO) | null>;
        templates: {
            get: (templateId: string, options: import("./types/invoices").InvoicesVoidDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/invoices").InvoicesGetTemplateResponseDTO) | null>;
            search: (options: import("./types/invoices").InvoicesScheduleSearchOptions, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/invoices").InvoicesListTemplatesResponseDTO) | null>;
            create: (options: import("./types/invoices").InvoicesCreateTemplateDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/invoices").InvoicesGetTemplateResponseDTO) | null>;
            update: (templateId: string, options: import("./types/invoices").InvoicesUpdateTemplateDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/invoices").InvoicesGetTemplateResponseDTO) | null>;
            delete: (templateId: string, options: import("./types/invoices").InvoicesVoidDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/_global").SuccessDeleteDTO) | null>;
        };
        schedules: {
            get: (scheduleId: string, options: import("./types/invoices").InvoicesVoidDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/invoices").InvoicesScheduleResponseDTO) | null>;
            search: (options: import("./types/invoices").InvoicesScheduleSearchOptions, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/invoices").InvoicesListSchedulesResponseDTO) | null>;
            create: (options: import("./types/invoices").InvoicesCreateScheduleDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/invoices").InvoicesGetScheduleResponseDTO) | null>;
            update: (scheduleId: string, options: import("./types/invoices").InvoicesUpdateScheduleDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/invoices").InvoicesGetScheduleResponseDTO) | null>;
            delete: (scheduleId: string, options: import("./types/invoices").InvoicesCancelScheduleDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/_global").SuccessDeleteDTO) | null>;
            startSchedule: (scheduleId: string, options: import("./types/invoices").InvoicesScheduleDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/invoices").InvoicesScheduleResponseDTO) | null>;
            manageAutoPay: (scheduleId: string, options: import("./types/invoices").InvoicesScheduleDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/invoices").InvoicesScheduleResponseDTO) | null>;
            cancelScheduled: (scheduleId: string, options: import("./types/invoices").InvoicesCancelScheduleDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/invoices").InvoicesScheduleResponseDTO) | null>;
        };
        text2pay: {
            createAndSend: (options: import("./types/invoices").InvoicesTTPDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/invoices").InvoicesTTPResponseDTO) | null>;
        };
    };
    triggerLinks: {
        search: (options: {
            locationId: string;
        }, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/triggerLinks").LinksSearchResponseDTO) | null>;
        create: (options: import("./types/triggerLinks").LinksDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/triggerLinks").LinksGetResponseDTO) | null>;
        update: (linkId: string, options: import("./types/triggerLinks").LinksUpdateDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/triggerLinks").LinksGetResponseDTO) | null>;
        delete: (linkId: string, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/_global").SuccededDeleteDTO) | null>;
    };
    locations: {
        get: (locationId: string, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/locations").LocationsGetByIdResponseDTO) | null>;
        search: (options: import("./types/locations").LocationsSearchOptions, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/locations").LocationsSearchResponseDTO) | null>;
        create: (options: import("./types/locations").LocationsCreateDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/locations").LocationsCreateResponseDTO) | null>;
        update: (locationId: string, options: import("./types/locations").LocationsUpdateDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/locations").LocationsCreateResponseDTO) | null>;
        delete: (locationId: string, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/locations").LocationsDeleteResponseDTO) | null>;
        customFields: {
            get: (locationId: string, customFieldId: string, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/locations").LocationsCFResponseDTO> | null;
            search: (locationId: string, options: import("./types/locations").LocationsCFSearchParamsDTO, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/locations").LocationsCFsResponseDTO> | null;
            create: (locationId: string, options: import("./types/locations").LocationsCFCreateDTO, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/locations").LocationsCVResponseDTO> | null;
            update: (locationId: string, customFieldId: string, options: import("./types/locations").LocationsCFUpdateDTO, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/locations").LocationsCFResponseDTO> | null;
            delete: (locationId: string, customFieldId: string, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/_global").SuccededDeleteDTO> | null;
        };
        customValues: {
            get: (locationId: string, customValueId: string, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/locations").LocationsCVResponseDTO> | null;
            search: (locationId: string, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/locations").LocationsCFsResponseDTO> | null;
            create: (locationId: string, options: import("./types/locations").LocationsCVDTO, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/locations").LocationsCVResponseDTO> | null;
            update: (locationId: string, customValueId: string, options: import("./types/locations").LocationsCVDTO, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/locations").LocationsCVResponseDTO> | null;
            delete: (locationId: string, customValueId: string, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/_global").SuccededDeleteDTO> | null;
        };
        tags: {
            get: (locationId: string, tagId: string, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/locations").LocationsTagResponseDTO> | null;
            search: (locationId: string, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/locations").LocationsTagsResponseDTO> | null;
            create: (locationId: string, options: import("./types/locations").LocationsTagBodySchema, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/locations").LocationsTagResponseDTO> | null;
            update: (locationId: string, tagId: string, options: import("./types/locations").LocationsTagBodySchema, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/locations").LocationsTagResponseDTO> | null;
            delete: (locationId: string, tagId: string, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/_global").SuccededDeleteDTO> | null;
        };
        tasks: {
            search: (locationId: string, options: import("./types/locations").LocationsTaskSearchParamsDTO, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/locations").LocationsTaskListResponseDTO> | null;
        };
        timezones: {
            search: (locationId: string, authToken: string) => Promise<any> | null;
        };
    };
    blogs: {
        getAuthors: (options: {
            locationId: string;
            limit: number;
            offset: number;
        }, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/blogs").BlogsAuthorsResponseDTO) | null>;
        getCategories: (options: {
            locationId: string;
            limit: number;
            offset: number;
        }, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/blogs").BlogsCategoriesResponseDTO) | null>;
        checkSlug: (options: {
            locationId: string;
            urlSlug: string;
            postId?: string;
        }, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/blogs").BlogsCheckUrlSlugResponseDTO) | null>;
        create: (options: import("./types/blogs").BlogsCreatePostParams, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/blogs").BlogsCreatePostResponseDTO) | null>;
        update: (postId: string, options: import("./types/blogs").BlogsUpdatePostParams, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/blogs").BlogsUpdatePostResponseDTO) | null>;
    };
    funnels: {
        listFunnels: (options: {
            locationId: string;
            category?: string;
            limit?: string;
            name?: string;
            offset?: string;
            parentId?: string;
            type?: string;
        }, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/funnels").FunnelsListResponseDTO) | null>;
        listPages: (options: {
            locationId: string;
            funnelId: string;
            limit: number;
            offset: number;
            name?: string;
        }, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/funnels").FunnelsPageResponseDTO) | null>;
        countPages: (options: {
            locationId: string;
            funnelId: string;
            name?: string;
        }, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/funnels").FunnelsPageCountResponseDTO) | null>;
        redirects: {
            search: (options: {
                locationId: string;
                limit: number;
                offset: number;
                search?: string;
            }, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/funnels").FunnelsRedirectListResponseDTO) | null>;
            create: (options: import("./types/funnels").FunnelsRedirectCreateParams, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/funnels").FunnelsRedirectCreateResponseDTO> | null;
            update: (redirectId: string, options: import("./types/funnels").FunnelsRedirectUpdateParams, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/funnels").FunnelsRedirectCreateResponseDTO> | null;
            delete: (locationId: string, redirectId: string, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/funnels").FunnelsRedirectDeleteResponseDTO> | null;
        };
    };
    opportunities: {
        get: (opportuniyId: string, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/opportunities").OpportunitiesCreateResponseDTO) | null>;
        create: (options: import("./types/opportunities").OpportunitiesCreateDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/opportunities").OpportunitiesCreateResponseDTO) | null>;
        update: (opportunityId: string, options: import("./types/opportunities").OpportunityUpdateDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/opportunities").OpportunitiesCreateResponseDTO) | null>;
        updateStatus: (opportunityId: string, options: import("./types/opportunities").OpportunitiesUpdateStatusDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/opportunities").OpportunitiesCreateResponseDTO) | null>;
        upsert: (options: import("./types/opportunities").OpportunitiesUpsertDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/opportunities").OpportunitiesUpsertResponseDTO) | null>;
        delete: (opportunityId: string, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/_global").SuccededDeleteDTO) | null>;
        followers: {
            add: (opportunityId: string, options: import("./types/opportunities").OpportunitiesFollowersDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/opportunities").OpportunitiesAddFollowersResponseDTO) | null>;
            remove: (opportunityId: string, options: import("./types/opportunities").OpportunitiesFollowersDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/opportunities").OpportunitiesRemoveFollowersResponseDTO) | null>;
        };
    };
    pipelines: {
        list: (locationId: string, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/pipelines").PipelinesGetResponseDTO) | null>;
    };
    payments: {
        integrations: {
            create: (options: import("./types/payments").PaymentsWLProviderCreateDTO, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/payments").PaymentsIntegrationProviderSchema> | null;
            search: (options: {
                altId: string;
                altType: "location";
                limit?: number;
                offset?: number;
            }, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/payments").PaymentsWLProviderListResponseDTO) | null>;
        };
        orders: {
            get: (orderId: string, options: import("./types/payments").PaymentsOrderFullfillmentsGetOptions, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/payments").PaymentsOrderGetResponseDTO> | null;
            list: (options: import("./types/payments").PaymentsOrderFullfillmentsSearchOptions, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/payments").PaymentsOrderListResponseDTO> | null;
            fullfillments: {
                list: (orderId: string, options: {
                    altId: string;
                    altType: string;
                }, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/payments").PaymentsFullfillmentListResponseDTO> | null;
                create: (orderId: string, options: import("./types/payments").PaymentsFullfillmentCreateDTO, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/payments").PaymentsFullfillmentListResponseDTO> | null;
            };
        };
        transactions: {
            get: (transactionId: string, options: {
                altId: string;
                altType: string;
                locationId?: string;
            }, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/payments").PaymentsTxnGetResponseDTO> | null;
            search: (options: import("./types/payments").PaymentsTransactionsSearchOptions, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/payments").PaymentsTxnListResponseDTO> | null;
        };
        subscriptions: {
            get: (subscriptionId: string, options: {
                altId: string;
                altType: string;
            }, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/payments").PaymentsSubscriptionGetResponseDTO> | null;
            search: (options: import("./types/payments").PaymentsSubscriptionsSearchOptions, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/payments").PaymentsSubscriptionListResponseDTO> | null;
        };
        customProviders: {
            create: (locationId: string, options: import("./types/payments").PaymentsCustomProviderCreateDTO, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/payments").PaymentsCustomProviderGetResponseDTO> | null;
            delete: (locationId: string, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/_global").SuccessDeleteDTO> | null;
            config: {
                get: (locationId: string, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/payments").PaymentsCustomProviderGetResponseDTO> | null;
                create: (locationId: string, options: import("./types/payments").PaymentsCustomProviderConnectSchema, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/payments").PaymentsCustomProviderGetResponseDTO> | null;
                disconnect: (locationId: string, options: import("./types/payments").PaymentsCustomProviderDeleteResponseDTO, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/payments").PaymentsCustomProviderDisconnectResponseDTO> | null;
            };
        };
    };
    products: {
        get: (locationId: string, productId: string, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/products").ProductsGetResponseDTO> | null;
        search: (productId: string, options: {
            locationId: string;
            ids?: string;
            limit?: number;
            offset?: number;
        }, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/products").ProductsPriceListResponseDTO> | null;
        create: (options: import("./types/products").ProductsCreateDTO, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/products").ProductsGetResponseDTO> | null;
        update: (productId: string, options: import("./types/products").ProductsUpdateDTO, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/products").ProductsGetResponseDTO> | null;
        delete: (locationId: string, productId: string, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/products").ProductsDeleteResponseDTO> | null;
        prices: {
            get: (locationId: string, productId: string, priceId: string, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/products").ProductsDefaultPriceResponseDTO> | null;
            search: (productId: string, options: {
                locationId: string;
                ids?: string;
                limit?: number;
                offset?: number;
            }, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/products").ProductsPriceListResponseDTO> | null;
            create: (productId: string, options: import("./types/products").ProductsPriceCreateDTO, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/products").ProductsDefaultPriceResponseDTO> | null;
            update: (productId: string, priceId: string, options: import("./types/products").ProductsPriceUpdateDTO, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/products").ProductsDefaultPriceResponseDTO> | null;
            delete: (locationId: string, productId: string, priceId: string, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/products").ProductsDeleteResponseDTO> | null;
        };
    };
    saas: {
        get: (options: import("./types/saas").SaasSubscriptionUpdateDTO, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/saas").SaasSubscriptionGetResponseDTO> | null;
        update: (locationId: string, options: import("./types/saas").SaasSubscriptionUpdateDTO, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO> | null;
        enable: (locationId: string, options: import("./types/saas").SaasSubscriptionEnableDTO, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO> | null;
        disable: (companyId: string, options: import("./types/saas").SaasSubscriptionBulkDisableDTO, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO> | null;
        pause: (locationId: string, options: import("./types/saas").SaasSubscriptionPauseLocationDTO, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO> | null;
        rebilling: {
            update: (companyId: string, options: import("./types/saas").SaasRebillingUpdateDTO, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO> | null;
        };
    };
    snapshots: {
        get: (companyId: string, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/snapshots").SnapshotsGetResponseDTO> | null;
        getLastPush: (companyId: string, locationId: string, snapshotId: string, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/snapshots").SnapshotsStatusResponseDTO> | null;
        getPushByDates: (snapshotId: string, options: {
            companyId: string;
            from: string;
            lastDoc: string;
            limit: string;
            to: string;
        }, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/snapshots").SnapshotsStatusResponseDTO> | null;
        createShareLink: (options: import("./types/snapshots").SnapshotsSharelinkCreateDTO, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/snapshots").SnapshotsSharelinkCreateResponseDTO> | null;
    };
    surveys: {
        get: (options: {
            locationId: string;
            type?: string;
            limit?: number;
            skip?: number;
        }, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/surveys").SuverysGetResponseSchema> | null;
        getSubmissions: (options: {
            locationId: string;
            limit?: number;
            page?: number;
            startAt?: string;
            endAt?: string;
            q?: string;
            surveyId?: string;
        }, authToken: string) => Promise<import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/surveys").SurveySubmissionsGetResponseDTO> | null;
    };
    users: {
        get: (userId: string, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | {
            id?: string;
            name?: string;
            firstName?: string;
            lastName?: string;
            email?: string;
            phone?: string;
            extension?: string;
            permissions?: {
                campaignsEnabled?: boolean;
                campaignsReadOnly?: boolean;
                contactsEnabled?: boolean;
                workflowsEnabled?: boolean;
                workflowsReadOnly?: boolean;
                triggersEnabled?: boolean;
                funnelsEnabled?: boolean;
                websitesEnabled?: boolean;
                opportunitiesEnabled?: boolean;
                dashboardStatsEnabled?: boolean;
                bulkRequestsEnabled?: boolean;
                appointmentsEnabled?: boolean;
                reviewsEnabled?: boolean;
                onlineListingsEnabled?: boolean;
                phoneCallEnabled?: boolean;
                conversationsEnabled?: boolean;
                assignedDataOnly?: boolean;
                adwordsReportingEnabled?: boolean;
                membershipEnabled?: boolean;
                facebookAdsReportingEnabled?: boolean;
                attributionsReportingEnabled?: boolean;
                settingsEnabled?: boolean;
                tagsEnabled?: boolean;
                leadValueEnabled?: boolean;
                marketingEnabled?: boolean;
                agentReportingEnabled?: boolean;
                botService?: boolean;
                socialPlanner?: boolean;
                bloggingEnabled?: boolean;
                invoiceEnabled?: boolean;
                affiliateManagerEnabled?: boolean;
                contentAiEnabled?: boolean;
                refundsEnabled?: boolean;
                recordPaymentEnabled?: boolean;
                cancelSubscriptionEnabled?: boolean;
                paymentsEnabled?: boolean;
                communitiesEnabled?: boolean;
                exportPaymentsEnabled?: boolean;
            };
            scopes?: "campaigns.readonly" | "campaigns.write" | "calendars/events.write" | "calendars/events.readonly" | "contacts.write" | "contacts/bulkActions.write" | "workflows.readonly" | "workflows.write" | "triggers.write" | "funnels.write" | "websites.write" | "medias.write" | "medias.readonly" | "opportunities.write" | "opportunities/leadValue.readonly" | "reporting/phone.readonly" | "reporting/adwords.readonly" | "reporting/facebookAds.readonly" | "reporting/attributions.readonly" | "reporting/agent.write" | "reporting/agent.readonly" | "reporting/reports.write" | "reporting/reports.readonly" | "payments.write" | "payments/refunds.write" | "payments/records.write" | "payments/exports.write" | "payments/subscriptionsCancel.write" | "invoices.write" | "invoices.readonly" | "invoices/schedule.readonly" | "invoices/schedule.write" | "invoices/template.readonly" | "invoices/template.write" | "reputation/review.write" | "reputation/listing.write" | "conversations.write" | "conversations.readonly" | "conversations/message.readonly" | "conversations/message.write" | "contentAI.write" | "dashboard/stats.readonly" | "locations/tags.write" | "locations/tags.readonly" | "marketing.write" | "eliza.write" | "settings.write" | "socialplanner/post.write" | "marketing/affiliate.write" | "blogs.write" | "membership.write" | "communities.write" | "certificates.write" | "certificates.readonly" | "adPublishing.write" | "adPublishing.readonly" | "private-integration-location.readonly" | "private-integration-location.write" | "private-integration-company.readonly" | "private-integration-company.write" | "native-integrations.readonly" | "native-integrations.write" | "wordpress.write" | "wordpress.read" | "custom-menu-link.readonly" | "custom-menu-link.write";
            roles?: {
                type?: "account" | "agency";
                role?: "admin" | "user";
                locationIds?: string[];
                restrictSubAccount?: boolean;
            };
            deleted?: boolean;
        }) | null>;
        search: (options: import("./types/users").UsersSearchOptions, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/users").UsersSearchResponseDTO) | null>;
        listByLocation: (companyId: string, locationId: string, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/users").UsersGetResponseDTO) | null>;
        create: (options: import("./types/users").UsersCreateDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | {
            id?: string;
            name?: string;
            firstName?: string;
            lastName?: string;
            email?: string;
            phone?: string;
            extension?: string;
            permissions?: {
                campaignsEnabled?: boolean;
                campaignsReadOnly?: boolean;
                contactsEnabled?: boolean;
                workflowsEnabled?: boolean;
                workflowsReadOnly?: boolean;
                triggersEnabled?: boolean;
                funnelsEnabled?: boolean;
                websitesEnabled?: boolean;
                opportunitiesEnabled?: boolean;
                dashboardStatsEnabled?: boolean;
                bulkRequestsEnabled?: boolean;
                appointmentsEnabled?: boolean;
                reviewsEnabled?: boolean;
                onlineListingsEnabled?: boolean;
                phoneCallEnabled?: boolean;
                conversationsEnabled?: boolean;
                assignedDataOnly?: boolean;
                adwordsReportingEnabled?: boolean;
                membershipEnabled?: boolean;
                facebookAdsReportingEnabled?: boolean;
                attributionsReportingEnabled?: boolean;
                settingsEnabled?: boolean;
                tagsEnabled?: boolean;
                leadValueEnabled?: boolean;
                marketingEnabled?: boolean;
                agentReportingEnabled?: boolean;
                botService?: boolean;
                socialPlanner?: boolean;
                bloggingEnabled?: boolean;
                invoiceEnabled?: boolean;
                affiliateManagerEnabled?: boolean;
                contentAiEnabled?: boolean;
                refundsEnabled?: boolean;
                recordPaymentEnabled?: boolean;
                cancelSubscriptionEnabled?: boolean;
                paymentsEnabled?: boolean;
                communitiesEnabled?: boolean;
                exportPaymentsEnabled?: boolean;
            };
            scopes?: "campaigns.readonly" | "campaigns.write" | "calendars/events.write" | "calendars/events.readonly" | "contacts.write" | "contacts/bulkActions.write" | "workflows.readonly" | "workflows.write" | "triggers.write" | "funnels.write" | "websites.write" | "medias.write" | "medias.readonly" | "opportunities.write" | "opportunities/leadValue.readonly" | "reporting/phone.readonly" | "reporting/adwords.readonly" | "reporting/facebookAds.readonly" | "reporting/attributions.readonly" | "reporting/agent.write" | "reporting/agent.readonly" | "reporting/reports.write" | "reporting/reports.readonly" | "payments.write" | "payments/refunds.write" | "payments/records.write" | "payments/exports.write" | "payments/subscriptionsCancel.write" | "invoices.write" | "invoices.readonly" | "invoices/schedule.readonly" | "invoices/schedule.write" | "invoices/template.readonly" | "invoices/template.write" | "reputation/review.write" | "reputation/listing.write" | "conversations.write" | "conversations.readonly" | "conversations/message.readonly" | "conversations/message.write" | "contentAI.write" | "dashboard/stats.readonly" | "locations/tags.write" | "locations/tags.readonly" | "marketing.write" | "eliza.write" | "settings.write" | "socialplanner/post.write" | "marketing/affiliate.write" | "blogs.write" | "membership.write" | "communities.write" | "certificates.write" | "certificates.readonly" | "adPublishing.write" | "adPublishing.readonly" | "private-integration-location.readonly" | "private-integration-location.write" | "private-integration-company.readonly" | "private-integration-company.write" | "native-integrations.readonly" | "native-integrations.write" | "wordpress.write" | "wordpress.read" | "custom-menu-link.readonly" | "custom-menu-link.write";
            roles?: {
                type?: "account" | "agency";
                role?: "admin" | "user";
                locationIds?: string[];
                restrictSubAccount?: boolean;
            };
            deleted?: boolean;
        }) | null>;
        update: (userId: string, options: import("./types/users").UsersUpdateDTO, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | {
            id?: string;
            name?: string;
            firstName?: string;
            lastName?: string;
            email?: string;
            phone?: string;
            extension?: string;
            permissions?: {
                campaignsEnabled?: boolean;
                campaignsReadOnly?: boolean;
                contactsEnabled?: boolean;
                workflowsEnabled?: boolean;
                workflowsReadOnly?: boolean;
                triggersEnabled?: boolean;
                funnelsEnabled?: boolean;
                websitesEnabled?: boolean;
                opportunitiesEnabled?: boolean;
                dashboardStatsEnabled?: boolean;
                bulkRequestsEnabled?: boolean;
                appointmentsEnabled?: boolean;
                reviewsEnabled?: boolean;
                onlineListingsEnabled?: boolean;
                phoneCallEnabled?: boolean;
                conversationsEnabled?: boolean;
                assignedDataOnly?: boolean;
                adwordsReportingEnabled?: boolean;
                membershipEnabled?: boolean;
                facebookAdsReportingEnabled?: boolean;
                attributionsReportingEnabled?: boolean;
                settingsEnabled?: boolean;
                tagsEnabled?: boolean;
                leadValueEnabled?: boolean;
                marketingEnabled?: boolean;
                agentReportingEnabled?: boolean;
                botService?: boolean;
                socialPlanner?: boolean;
                bloggingEnabled?: boolean;
                invoiceEnabled?: boolean;
                affiliateManagerEnabled?: boolean;
                contentAiEnabled?: boolean;
                refundsEnabled?: boolean;
                recordPaymentEnabled?: boolean;
                cancelSubscriptionEnabled?: boolean;
                paymentsEnabled?: boolean;
                communitiesEnabled?: boolean;
                exportPaymentsEnabled?: boolean;
            };
            scopes?: "campaigns.readonly" | "campaigns.write" | "calendars/events.write" | "calendars/events.readonly" | "contacts.write" | "contacts/bulkActions.write" | "workflows.readonly" | "workflows.write" | "triggers.write" | "funnels.write" | "websites.write" | "medias.write" | "medias.readonly" | "opportunities.write" | "opportunities/leadValue.readonly" | "reporting/phone.readonly" | "reporting/adwords.readonly" | "reporting/facebookAds.readonly" | "reporting/attributions.readonly" | "reporting/agent.write" | "reporting/agent.readonly" | "reporting/reports.write" | "reporting/reports.readonly" | "payments.write" | "payments/refunds.write" | "payments/records.write" | "payments/exports.write" | "payments/subscriptionsCancel.write" | "invoices.write" | "invoices.readonly" | "invoices/schedule.readonly" | "invoices/schedule.write" | "invoices/template.readonly" | "invoices/template.write" | "reputation/review.write" | "reputation/listing.write" | "conversations.write" | "conversations.readonly" | "conversations/message.readonly" | "conversations/message.write" | "contentAI.write" | "dashboard/stats.readonly" | "locations/tags.write" | "locations/tags.readonly" | "marketing.write" | "eliza.write" | "settings.write" | "socialplanner/post.write" | "marketing/affiliate.write" | "blogs.write" | "membership.write" | "communities.write" | "certificates.write" | "certificates.readonly" | "adPublishing.write" | "adPublishing.readonly" | "private-integration-location.readonly" | "private-integration-location.write" | "private-integration-company.readonly" | "private-integration-company.write" | "native-integrations.readonly" | "native-integrations.write" | "wordpress.write" | "wordpress.read" | "custom-menu-link.readonly" | "custom-menu-link.write";
            roles?: {
                type?: "account" | "agency";
                role?: "admin" | "user";
                locationIds?: string[];
                restrictSubAccount?: boolean;
            };
            deleted?: boolean;
        }) | null>;
        delete: (userId: string, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/users").UsersDeleteDTO) | null>;
    };
    workflows: {
        search: (locationId: string, authToken: string) => Promise<(import("./types/_global").BadRequestDTO | import("./types/_global").UnauthorizedDTO | import("./types/_global").UnprocessableDTO | import("./types/workflows").WorkflowsSearchResponseDTO) | null>;
    };
};
export default GHL;
