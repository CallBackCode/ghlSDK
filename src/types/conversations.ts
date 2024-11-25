export type ConvStartAfterDate = {
  startAfterDate: number; // Search to begin after the specified date - should contain the sort value of the last document (1600854)
};

export type ConvStartAfterArrayNumber = {
  startAfterDate: number[]; // Search to begin after the specified date - should contain the sort value of the last document ([1600854,1600851])
};

enum ConversationMessageTypeNumbered {
  TYPE_CALL,
  TYPE_SMS,
  TYPE_EMAIL,
  TYPE_SMS_REVIEW_REQUEST,
  TYPE_WEBCHAT,
  TYPE_SMS_NO_SHOW_REQUEST,
  TYPE_CAMPAIGN_SMS,
  TYPE_CAMPAIGN_CALL,
  TYPE_CAMPAIGN_EMAIL,
  TYPE_CAMPAIGN_VOICEMAIL,
  TYPE_FACEBOOK,
  TYPE_CAMPAIGN_FACEBOOK,
  TYPE_CAMPAIGN_MANUAL_CALL,
  TYPE_CAMPAIGN_MANUAL_SMS,
  TYPE_GMB,
  TYPE_CAMPAIGN_GMB,
  TYPE_REVIEW,
  TYPE_INSTAGRAM,
  TYPE_WHATSAPP,
  TYPE_CUSTOM_SMS,
  TYPE_CUSTOM_EMAIL,
  TYPE_CUSTOM_PROVIDER_SMS,
  TYPE_CUSTOM_PROVIDER_EMAIL,
  TYPE_IVR_CALL,
  TYPE_ACTIVITY_CONTACT,
  TYPE_ACTIVITY_INVOICE,
  TYPE_ACTIVITY_PAYMENT,
  TYPE_ACTIVITY_OPPORTUNITY,
  TYPE_LIVE_CHAT,
  TYPE_LIVE_CHAT_INFO_MESSAGE,
  TYPE_ACTIVITY_APPOINTMENT,
  TYPE_FACEBOOK_COMMENT,
  TYPE_INSTAGRAM_COMMENT,
  TYPE_ACTIVITY,
}

type ConversationMessageTypeString =
  | "TYPE_CALL"
  | "TYPE_SMS"
  | "TYPE_EMAIL"
  | "TYPE_SMS_REVIEW_REQUEST"
  | "TYPE_WEBCHAT"
  | "TYPE_SMS_NO_SHOW_REQUEST"
  | "TYPE_CAMPAIGN_SMS"
  | "TYPE_CAMPAIGN_CALL"
  | "TYPE_CAMPAIGN_EMAIL"
  | "TYPE_CAMPAIGN_VOICEMAIL"
  | "TYPE_FACEBOOK"
  | "TYPE_CAMPAIGN_FACEBOOK"
  | "TYPE_CAMPAIGN_MANUAL_CALL"
  | "TYPE_CAMPAIGN_MANUAL_SMS"
  | "TYPE_GMB"
  | "TYPE_CAMPAIGN_GMB"
  | "TYPE_REVIEW"
  | "TYPE_INSTAGRAM"
  | "TYPE_WHATSAPP"
  | "TYPE_CUSTOM_SMS"
  | "TYPE_CUSTOM_EMAIL"
  | "TYPE_CUSTOM_PROVIDER_SMS"
  | "TYPE_CUSTOM_PROVIDER_EMAIL"
  | "TYPE_IVR_CALL"
  | "TYPE_ACTIVITY_CONTACT"
  | "TYPE_ACTIVITY_INVOICE"
  | "TYPE_ACTIVITY_PAYMENT"
  | "TYPE_ACTIVITY_OPPORTUNITY"
  | "TYPE_LIVE_CHAT"
  | "TYPE_LIVE_CHAT_INFO_MESSAGE"
  | "TYPE_ACTIVITY_APPOINTMENT"
  | "TYPE_FACEBOOK_COMMENT"
  | "TYPE_INSTAGRAM_COMMENT"
  | "TYPE_ACTIVITY";

type ConversationMessageType =
  | "SMS"
  | "Email"
  | "WhatsApp"
  | "GMB"
  | "IG"
  | "FB"
  | "Custom"
  | "Live_Chat";

type ConversationType =
  | "TYPE_PHONE"
  | "TYPE_EMAIL"
  | "TYPE_FB_MESSENGER"
  | "TYPE_REVIEW";

export type ConversationSchema = {
  id: string; // Conversation Id (ABCHkzuJQ8ZMd4Te84GK)
  contactId: string; // Contact Id (ABCHkzuJQ8ZMd4Te84GK)
  locationId: string; // Location Id (ABCHkzuJQ8ZMd4Te84GK)
  lastMessageBody: string; // Last Message Body of the conversation (This is a sample message body)
  lastMessageType: ConversationMessageTypeString; // Last message type of the conversation (TYPE_SMS)
  type: ConversationType; // Type of the conversation (TYPE_PHONE)
  unreadCount: number; // Unread count of the messages in the conversation (1)
  fullName: string; // Full name of the contact (John Doe)
  contactName: string; // Name of the contact in case the Full Name is missing, may contain the company name or the contact email (John Doe Company)
  email: string; // Email of the contact (john@does.com)
  phone: string; // Phone number of the contact (+15550001234)
};

export type ConversationSendResponseDTO = {
  conversations: ConversationSchema[]; // List of conversations
  total: number; // Total number of conversations (20)
};

export type CreateConversationDTO = {
  locationId: string; // Location Id (ABCHkzuJQ8ZMd4Te84GK)
  contactId: string; // Contact Id (ABCHkzuJQ8ZMd4Te84GK)
};

export type ConversationDTO = {
  deleted: boolean; // Deleted status of the conversation (false)
  locationId: string; // Location Id (ABCHkzuJQ8ZMd4Te84GK)
  contactId: string; // Contact Id (ABCHkzuJQ8ZMd4Te84GK)
  id?: string; // Conversation Id (ABCHkzuJQ8ZMd4Te84GK)
  assignedTo?: string; // Assigned User Id (ABCHkzuJQ8ZMd4Te84GK)
  userId?: string; // User Id (ABCHkzuJQ8ZMd4Te84GK)
  lastMessageBody?: string; // Last Message Body of the conversation (This is a sample message body)
  lastMessageDate?: string; // Last message date of the conversation (1628008053263)
  lastMessageType?: ConversationMessageTypeString; // Last message type of the conversation (TYPE_SMS)
  type?: ConversationType; // Type of the conversation (TYPE_PHONE)
  unreadCount?: number; // Unread count of the messages in the conversation (1)
  inbox?: boolean; // Inbox status of the conversation (true)
  starred?: boolean; // Starred status of the conversation (true)
};

export type ConversationGetSuccessfulResponse = {
  success: boolean; // Success status of the response
  conversation: ConversationDTO; // Conversation object
};

export type ConversationGetByIdResponse = {
  id: string; // Conversation Id (ABCHkzuJQ8ZMd4Te84GK)
  contactId: string; // Contact Id (ABCHkzuJQ8ZMd4Te84GK)
  locationId: string; // Location Id (ABCHkzuJQ8ZMd4Te84GK)
  deleted: boolean; // Deleted status of the conversation (false)
  inbox: boolean; // Inbox status of the conversation (true)
  type: ConversationType; // Type of the conversation (TYPE_PHONE)
  unreadCount: number; // Unread count of the messages in the conversation (1)
  assignedTo: string; // Assigned User Id (ABCHkzuJQ8ZMd4Te84GK)
  starred: boolean; // Starred status of the conversation (true)
};

export type ConversationUpdateDTO = {
  locationId: string; // Location Id (ABCHkzuJQ8ZMd4Te84GK)
  unreadCount?: number; // Unread count of the messages in the conversation (1)
  starred?: boolean; // Starred status of the conversation (true)
  feedback?: object; // Feedback object
};

export type ConversationDirection = "inbound" | "outbound";

export type ConversationStatus =
  | "pending"
  | "scheduled"
  | "sent"
  | "delivered"
  | "read"
  | "undelivered"
  | "connected"
  | "failed"
  | "opened";

export type ConversationSource =
  | "workflow"
  | "bulk_actions"
  | "campaign"
  | "api"
  | "app";

export type ConversationGetEmailMessageResponseDTO = {
  id: string; // Email Message Id (ABCHkzuJQ8ZMd4Te84GK)
  threadId: string; // Message Id or thread Id (ABCHkzuJQ8ZMd4Te84GK)
  locationId: string; // Location Id (ABCHkzuJQ8ZMd4Te84GK)
  contactId: string; // Contact Id (ABCHkzuJQ8ZMd4Te84GK)
  conversationId: string; // Conversation Id (ABCHkzuJQ8ZMd4Te84GK)
  dateAdded: string; // Date added (2024-03-27T18:13:49.000Z)
  body: string; // Body of the email (Hi there)
  direction: ConversationDirection; // Direction of the email (inbound)
  contentType: string; // Content Type of the email (text/plain)
  attachments: string[]; // List of attachment URLs (["https://www.example.com/attachment1.pdf"])
  from: string; // Name and Email Id of the sender (John Doe <john@does.com>)
  to: string[]; // List of email Ids of the receivers (["jake@does.com", "jane@does.com"])
  replyToMessageId?: string; // In case of reply, email message Id of the reply to email (ABCHkzuJQ8ZMd4Te84GK)
  source: ConversationSource; // Email Message source (workflow)
  altId: string; // External Id (ABCHkzuJQ8ZMd4Te84GK)
  subject?: string; // Subject of the email (Order confirm)
  status: ConversationStatus; // Status of the email (pending)
  provider: string; // Provider of the email (Leadconnector)
  cc: string[]; // List of email Ids of the people in the cc field (["jake@does.com", "jane@does.com"])
  bcc?: string[]; // List of email Ids of the people in the bcc field (["jake@does.com", "jane@does.com"])
};

export type ConversationCancelScheduledResponseDTO = {
  status: string; // HTTP Status code of the request (404)
  message: string; // Message of the response (Failed cancel the scheduled message)
};

export type ConversationGetMessageResponseDTO = {
  id: string; // Message Id (ABCHkzuJQ8ZMd4Te84GK)
  type: ConversationMessageTypeNumbered; // Type of the message (1)
  messageType: ConversationMessageTypeString; // Type of the message as a string (SMS)
  locationId: string; // Location Id (ABCHkzuJQ8ZMd4Te84GK)
  contactId: string; // Contact Id (ABCHkzuJQ8ZMd4Te84GK)
  conversationId: string; // Conversation Id (ABCHkzuJQ8ZMd4Te84GK)
  dateAdded: string; // Date added (2024-03-27T18:13:49.000Z)
  direction: ConversationDirection; // Direction of the message (inbound)
  contentType: string; // Content Type of the message (text/plain)
  body?: string; // Body of the message (Hi there)
  attachments?: string[]; // List of attachment URLs (["https://www.example.com/attachment1.pdf"])
  status?: ConversationStatus; // Status of the message (pending)
  meta?: object; // Meta object will contain email, for message type 3 (email). messageIds is list of all email message ids under the message thread ({"email":{"messageIds":["p1mRSHeLDhAms5q0LMr4"]})
  source?: ConversationSource; // Message source (workflow)
  userId?: string; // User Id (ABCHkzuJQ8ZMd4Te84GK)
};

export type ConversationGetMessagesByResponseDTO = {
  lastMessageId: string; // Last Message Id (ABCHkzuJQ8ZMd4Te84GK)
  nextPage: boolean; // Next page status (true)
  messages: ConversationGetMessageResponseDTO[]; // List of messages
};

type ConversationReplyMode = "reply" | "reply_all";

export type ConversationSendMessageBodyDTO = {
  type: ConversationMessageType; // Type of the message (SMS)
  contactId: string; // Contact Id (ABCHkzuJQ8ZMd4Te84GK)
  appointmentId?: string; // Appointment Id (ABCHkzuJQ8ZMd4Te84GK)
  attachments?: string[]; // List of attachment URLs (["https://www.example.com/attachment1.pdf"])
  emailFrom?: string; // Email From (john@does.com)
  emailCc?: string[]; // List of email Ids of the people in the cc field (["jake@does.com", "jane@does.com"])
  emailBcc?: string[]; // List of email Ids of the people in the bcc field (["jake@does.com", "jane@does.com"])
  html?: string; // HTML content of the email (Hi there)
  message?: string; // Body of the message (Hi there)
  replyMessageId?: string; // In case of reply, message Id of the reply to message (ABCHkzuJQ8ZMd4Te84GK)
  templateId?: string; // Template Id (ABCHkzuJQ8ZMd4Te84GK)
  scheduledTimestamp?: number; // Scheduled Timestamp (1669287863)
  conversationProviderId?: string; // Conversation Provider Id (ABCHkzuJQ8ZMd4Te84GK)
  emailTo?: string; // Email To (john@does.com)
  emailReplyMode?: ConversationReplyMode; // Email Reply Mode (reply)
  fromNumber?: string; // From Number (+1499499299)
  toNumber?: string; // To Number (+1439499299)
};

export type ConversationSendMessageResponseDTO = {
  conversationId: string; // Conversation Id (ABCHkzuJQ8ZMd4Te84GK)
  messageId: string; // Main Message Id (ABCHkzuJQ8ZMd4Te84GK)
  emailMessageId?: string; // The email message id (only for Email type). Use this ID to send inbound replies to GHL to create a threaded email.(ABCHkzuJQ8ZMd4Te84GK)
  messageIds?: string[]; // When sending via the GMB channel, we will be returning list of messageIds instead of single messageId. (["ABCHkzuJQ8ZMd4Te84GK"])
  msg?: string; // Additional response message (Message queued successfully)
};

type ConversationCallStatus =
  | "pending"
  | "completed"
  | "answered"
  | "busy"
  | "no-answer"
  | "failed"
  | "canceled"
  | "voicemail";

type ConversationCallDataDTO = {
  to: string; // Phone number of the receiver (+15037081210)
  from: string; // Phone number of the dialer (+15037081210)
  status: ConversationCallStatus; // Call status (completed)
};

export type ConversationProcessMessageBodyDTO = {
  conversationProviderId: string; // Conversation Provider Id (ABCHkzuJQ8ZMd4Te84GK)
  type: ConversationMessageType; // Type of the message (SMS)
  attachments?: string[]; // List of attachment URLs (["https://www.example.com/attachment1.pdf"])
  message?: string; // Body of the message (Hi there)
  conversationId: string; // Conversation Id (ABCHkzuJQ8ZMd4Te84GK)
  html?: string; // HTML content of the email (Hi there)
  subject?: string; // Subject of the email (Order confirm)
  emailFrom?: string; // Email From (john@does.com)
  emailTo?: string; // Email To (jake@does.com)
  emailCc?: string[]; // List of email Ids of the people in the cc field (["jake@does.com", "jane@does.com"])
  emailBcc?: string[]; // List of email Ids of the people in the bcc field (["jake@does.com", "jane@does.com"])
  emailMessageId?: string; // Email Message Id (ABCHkzuJQ8ZMd4Te84GK)
  altId?: string; // External Id (ABCHkzuJQ8ZMd4Te84GK)
  direction?: ConversationDirection; // Direction of the message (inbound)
  date: string; // Date of the inbound message (2024-03-27T18:13:49.000Z)
  call?: ConversationCallDataDTO; // Call object
};

export type ConversationProcessMessageResponseDto = {
  success: boolean; // Success status of the response (true)
  conversationId: string; // Conversation Id (ABCHkzuJQ8ZMd4Te84GK)
  messageId: string; // Main Message Id (ABCHkzuJQ8ZMd4Te84GK)
  message: string; // Additional response message (Message queued successfully)
  contactId?: string; // Contact Id (ABCHkzuJQ8ZMd4Te84GK)
  dateAdded?: string; // Date added (2024-03-27T18:13:49.000Z)
  emailMessageId?: string; // Email Message Id (ABCHkzuJQ8ZMd4Te84GK)
};

export type ConversationProcessOutboundMessageBodyDTO = {
  type: "Call"; // Type of the message (SMS)
  conversationId: string; // Conversation Id (ABCHkzuJQ8ZMd4Te84GK)
  conversationProviderId: string; // Conversation Provider Id (ABCHkzuJQ8ZMd4Te84GK)
  attachments?: string[]; // List of attachment URLs (["https://www.example.com/attachment1.pdf"])
  altId?: string; // External Id (ABCHkzuJQ8ZMd4Te84GK)
  date: string; // Date of the outbound message (2024-03-27T18:13:49.000Z)
  call?: ConversationCallDataDTO; // Call object
};

export type ConversationUploadFilesDTO = {
  conversationId: string; // Conversation Id (ABCHkzuJQ8ZMd4Te84GK)
  locationId: "string"; // Location Id (ABCHkzuJQ8ZMd4Te84GK)
  attachmentUrls: string; // Attachment URLs (https://www.example.com/attachment1.pdf)
};

export type ConversationUploadFilesErrorResponseDto = {
  status: number; // HTTP Status code of the request (404)
  message: string; // Message of the response (Failed to upload the files)
};

export type ConversationErrorDTO = {
  code: number; // Error code (404)
  type: string; // Error type (saas)
  message: string; // Error message (There was an error from the provider)
};

type ConversationUpdateMessageStatusOptions =
  | "read"
  | "pending"
  | "delivered"
  | "failed";

export type ConversationUpdateMessageStatusDTO = {
  status: ConversationUpdateMessageStatusOptions; // Message status (read)
  error?: ConversationErrorDTO; // Error object from the conversation provider
  emailMessageId?: string; // Email message Id (ABCHkzuJQ8ZMd4Te84GK)
  recipients: string[]; // Email delivery status for additional email recipients (["jake@does.com", "jane@does.com"])
};

export type ConverstationGetMessageTranscriptionResponseDTO = {
  mediaChannel: ConversationMessageTypeNumbered; // Media channel describes the user interaction channel (1)
  sentenceIndex: number; // Index of the sentence in the transcription (1)
  startTime: number; // Start time of the sentence in milliseconds (34)
  endTime: number; // End time of the sentence in milliseconds (45)
  transcript: string; // Transcript of the sentence (This call may be recorded for quality assurance purposes.)
  confidence: number; // Confidence of the transcription (0.5)
};

export type ConversationSearchParams = {
  locationId: string; // Location Id (ABCHkzuJQ8ZMd4Te84GK)
  assignedTo?: string; // Assigned to user Id. Multiple values are comma separated. "unassigned" is used to fetch all unassigned conversations (ABCHkzuJQ8ZMd4Te84GK,fGiae4CHkzoskh8thsik)
  contactId?: string; // Contact Id (9VEmS0si86GW6gXWU89b)
  followers?: string; // User Id of the follower. Multiple values are comma separated. (ABCHkzuJQ8ZMd4Te84GK,fGiae4CHkzoskh8thsik)
  id?: string; // Id of the conversation (ABCHkzuJQ8ZMd4Te84GK)
  lastMessageAction?: string; // Action of the last outbound message in the conversation as string (manual)
  lastMessageDirection?: CanvasDirection; // Direction of the last message in the conversation as string (inbound)
  lastMessageType?: ConversationMessageTypeString; // Type of the last message in the conversation as a string (TYPE_SMS)
  limit?: number; // Limit of conversations (20)
  query?: string; // Search paramater as a string (Search string)
  scoreProfile?: string; // Id of score profile on which conversations should get filtered out, works with scoreProfileMin & scoreProfileMax (ABCHkzuJQ8ZMd4Te84GK)
  scoreProfileMax?: number; // Maximum value for score (ABCHkzuJQ8ZMd4Te84GK)
  scoreProfileMin?: number; // Minimum value for score (ABCHkzuJQ8ZMd4Te84GK)
  sort?: "asc" | "desc"; // Sort paramater (asc)
  sortBy?: "last_manual_message_date" | "last_message_date" | "score_profile"; // Sorting of the conversation to be filtered as - manual messages or all messages (last_message_date)
  sortScoreProfile?: string; // Id of score profile on which sortBy.ScoreProfile should sort on (ABCHkzuJQ8ZMd4Te84GK)
  startAfterDate?: number; // Search to begin after the specified date - should contain the sort value of the last document (1600854)
  status?: "all" | "read" | "unread" | "starred" | "recents"; // The status of the conversation to be filtered - all, read, unread, starred (all)
};
