export type ConvStartAfterDate = {
    startAfterDate: number;
};
export type ConvStartAfterArrayNumber = {
    startAfterDate: number[];
};
declare enum ConversationMessageTypeNumbered {
    TYPE_CALL = 0,
    TYPE_SMS = 1,
    TYPE_EMAIL = 2,
    TYPE_SMS_REVIEW_REQUEST = 3,
    TYPE_WEBCHAT = 4,
    TYPE_SMS_NO_SHOW_REQUEST = 5,
    TYPE_CAMPAIGN_SMS = 6,
    TYPE_CAMPAIGN_CALL = 7,
    TYPE_CAMPAIGN_EMAIL = 8,
    TYPE_CAMPAIGN_VOICEMAIL = 9,
    TYPE_FACEBOOK = 10,
    TYPE_CAMPAIGN_FACEBOOK = 11,
    TYPE_CAMPAIGN_MANUAL_CALL = 12,
    TYPE_CAMPAIGN_MANUAL_SMS = 13,
    TYPE_GMB = 14,
    TYPE_CAMPAIGN_GMB = 15,
    TYPE_REVIEW = 16,
    TYPE_INSTAGRAM = 17,
    TYPE_WHATSAPP = 18,
    TYPE_CUSTOM_SMS = 19,
    TYPE_CUSTOM_EMAIL = 20,
    TYPE_CUSTOM_PROVIDER_SMS = 21,
    TYPE_CUSTOM_PROVIDER_EMAIL = 22,
    TYPE_IVR_CALL = 23,
    TYPE_ACTIVITY_CONTACT = 24,
    TYPE_ACTIVITY_INVOICE = 25,
    TYPE_ACTIVITY_PAYMENT = 26,
    TYPE_ACTIVITY_OPPORTUNITY = 27,
    TYPE_LIVE_CHAT = 28,
    TYPE_LIVE_CHAT_INFO_MESSAGE = 29,
    TYPE_ACTIVITY_APPOINTMENT = 30,
    TYPE_FACEBOOK_COMMENT = 31,
    TYPE_INSTAGRAM_COMMENT = 32,
    TYPE_ACTIVITY = 33
}
type ConversationMessageTypeString = "TYPE_CALL" | "TYPE_SMS" | "TYPE_EMAIL" | "TYPE_SMS_REVIEW_REQUEST" | "TYPE_WEBCHAT" | "TYPE_SMS_NO_SHOW_REQUEST" | "TYPE_CAMPAIGN_SMS" | "TYPE_CAMPAIGN_CALL" | "TYPE_CAMPAIGN_EMAIL" | "TYPE_CAMPAIGN_VOICEMAIL" | "TYPE_FACEBOOK" | "TYPE_CAMPAIGN_FACEBOOK" | "TYPE_CAMPAIGN_MANUAL_CALL" | "TYPE_CAMPAIGN_MANUAL_SMS" | "TYPE_GMB" | "TYPE_CAMPAIGN_GMB" | "TYPE_REVIEW" | "TYPE_INSTAGRAM" | "TYPE_WHATSAPP" | "TYPE_CUSTOM_SMS" | "TYPE_CUSTOM_EMAIL" | "TYPE_CUSTOM_PROVIDER_SMS" | "TYPE_CUSTOM_PROVIDER_EMAIL" | "TYPE_IVR_CALL" | "TYPE_ACTIVITY_CONTACT" | "TYPE_ACTIVITY_INVOICE" | "TYPE_ACTIVITY_PAYMENT" | "TYPE_ACTIVITY_OPPORTUNITY" | "TYPE_LIVE_CHAT" | "TYPE_LIVE_CHAT_INFO_MESSAGE" | "TYPE_ACTIVITY_APPOINTMENT" | "TYPE_FACEBOOK_COMMENT" | "TYPE_INSTAGRAM_COMMENT" | "TYPE_ACTIVITY";
type ConversationMessageType = "SMS" | "Email" | "WhatsApp" | "GMB" | "IG" | "FB" | "Custom" | "Live_Chat";
type ConversationType = "TYPE_PHONE" | "TYPE_EMAIL" | "TYPE_FB_MESSENGER" | "TYPE_REVIEW";
export type ConversationSchema = {
    id: string;
    contactId: string;
    locationId: string;
    lastMessageBody: string;
    lastMessageType: ConversationMessageTypeString;
    type: ConversationType;
    unreadCount: number;
    fullName: string;
    contactName: string;
    email: string;
    phone: string;
};
export type ConversationSendResponseDTO = {
    conversations: ConversationSchema[];
    total: number;
};
export type CreateConversationDTO = {
    locationId: string;
    contactId: string;
};
export type ConversationDTO = {
    deleted: boolean;
    locationId: string;
    contactId: string;
    id?: string;
    assignedTo?: string;
    userId?: string;
    lastMessageBody?: string;
    lastMessageDate?: string;
    lastMessageType?: ConversationMessageTypeString;
    type?: ConversationType;
    unreadCount?: number;
    inbox?: boolean;
    starred?: boolean;
};
export type ConversationGetSuccessfulResponse = {
    success: boolean;
    conversation: ConversationDTO;
};
export type ConversationGetByIdResponse = {
    id: string;
    contactId: string;
    locationId: string;
    deleted: boolean;
    inbox: boolean;
    type: ConversationType;
    unreadCount: number;
    assignedTo: string;
    starred: boolean;
};
export type ConversationUpdateDTO = {
    locationId: string;
    unreadCount?: number;
    starred?: boolean;
    feedback?: object;
};
export type ConversationDirection = "inbound" | "outbound";
export type ConversationStatus = "pending" | "scheduled" | "sent" | "delivered" | "read" | "undelivered" | "connected" | "failed" | "opened";
export type ConversationSource = "workflow" | "bulk_actions" | "campaign" | "api" | "app";
export type ConversationGetEmailMessageResponseDTO = {
    id: string;
    threadId: string;
    locationId: string;
    contactId: string;
    conversationId: string;
    dateAdded: string;
    body: string;
    direction: ConversationDirection;
    contentType: string;
    attachments: string[];
    from: string;
    to: string[];
    replyToMessageId?: string;
    source: ConversationSource;
    altId: string;
    subject?: string;
    status: ConversationStatus;
    provider: string;
    cc: string[];
    bcc?: string[];
};
export type ConversationCancelScheduledResponseDTO = {
    status: string;
    message: string;
};
export type ConversationGetMessageResponseDTO = {
    id: string;
    type: ConversationMessageTypeNumbered;
    messageType: ConversationMessageTypeString;
    locationId: string;
    contactId: string;
    conversationId: string;
    dateAdded: string;
    direction: ConversationDirection;
    contentType: string;
    body?: string;
    attachments?: string[];
    status?: ConversationStatus;
    meta?: object;
    source?: ConversationSource;
    userId?: string;
};
export type ConversationGetMessagesByResponseDTO = {
    lastMessageId: string;
    nextPage: boolean;
    messages: ConversationGetMessageResponseDTO[];
};
type ConversationReplyMode = "reply" | "reply_all";
export type ConversationSendMessageBodyDTO = {
    type: ConversationMessageType;
    contactId: string;
    appointmentId?: string;
    attachments?: string[];
    emailFrom?: string;
    emailCc?: string[];
    emailBcc?: string[];
    html?: string;
    message?: string;
    replyMessageId?: string;
    templateId?: string;
    scheduledTimestamp?: number;
    conversationProviderId?: string;
    emailTo?: string;
    emailReplyMode?: ConversationReplyMode;
    fromNumber?: string;
    toNumber?: string;
};
export type ConversationSendMessageResponseDTO = {
    conversationId: string;
    messageId: string;
    emailMessageId?: string;
    messageIds?: string[];
    msg?: string;
};
type ConversationCallStatus = "pending" | "completed" | "answered" | "busy" | "no-answer" | "failed" | "canceled" | "voicemail";
type ConversationCallDataDTO = {
    to: string;
    from: string;
    status: ConversationCallStatus;
};
export type ConversationProcessMessageBodyDTO = {
    conversationProviderId: string;
    conversationId: string;
    type: ConversationMessageType;
    attachments?: string[];
    message?: string;
    html?: string;
    subject?: string;
    emailFrom?: string;
    emailTo?: string;
    emailCc?: string[];
    emailBcc?: string[];
    emailMessageId?: string;
    altId?: string;
    direction?: ConversationDirection;
    date: string;
    call?: ConversationCallDataDTO;
};
export type ConversationProcessMessageResponseDto = {
    success: boolean;
    conversationId: string;
    messageId: string;
    message: string;
    contactId?: string;
    dateAdded?: string;
    emailMessageId?: string;
};
export type ConversationProcessOutboundMessageBodyDTO = {
    type: "Call";
    conversationId: string;
    conversationProviderId: string;
    attachments?: string[];
    altId?: string;
    date: string;
    call?: ConversationCallDataDTO;
};
export type ConversationUploadFilesDTO = {
    conversationId: string;
    locationId: "string";
    attachmentUrls: string;
};
export type ConversationUploadFilesResponseDTO = {
    uploadedFiles: object;
};
export type ConversationUploadFilesErrorResponseDto = {
    status: number;
    message: string;
};
export type ConversationErrorDTO = {
    code: number;
    type: string;
    message: string;
};
type ConversationUpdateMessageStatusOptions = "read" | "pending" | "delivered" | "failed";
export type ConversationUpdateMessageStatusDTO = {
    status: ConversationUpdateMessageStatusOptions;
    error?: ConversationErrorDTO;
    emailMessageId?: string;
    recipients: string[];
};
export type ConverstationGetMessageTranscriptionResponseDTO = {
    mediaChannel: ConversationMessageTypeNumbered;
    sentenceIndex: number;
    startTime: number;
    endTime: number;
    transcript: string;
    confidence: number;
};
export type ConversationSearchParams = {
    locationId: string;
    assignedTo?: string;
    contactId?: string;
    followers?: string;
    id?: string;
    lastMessageAction?: string;
    lastMessageDirection?: CanvasDirection;
    lastMessageType?: ConversationMessageTypeString;
    limit?: number;
    query?: string;
    scoreProfile?: string;
    scoreProfileMax?: number;
    scoreProfileMin?: number;
    sort?: "asc" | "desc";
    sortBy?: "last_manual_message_date" | "last_message_date" | "score_profile";
    sortScoreProfile?: string;
    startAfterDate?: number;
    status?: "all" | "read" | "unread" | "starred" | "recents";
};
export {};
