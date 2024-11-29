type PermissionsDTO = {
  campaignsEnabled?: boolean /** If the campaigns are enabled */;
  campaignsReadOnly?: boolean /** If the campaigns are read only */;
  contactsEnabled?: boolean /** If the contacts are enabled */;
  workflowsEnabled?: boolean /** If the workflows are enabled */;
  workflowsReadOnly?: boolean /** If the workflows are read only */;
  triggersEnabled?: boolean /** If the triggers are enabled */;
  funnelsEnabled?: boolean /** If the funnels are enabled */;
  websitesEnabled?: boolean /** If the websites are enabled */;
  opportunitiesEnabled?: boolean /** If the opportunities are enabled */;
  dashboardStatsEnabled?: boolean /** If the dashboard stats are enabled */;
  bulkRequestsEnabled?: boolean /** If the bulk requests are enabled */;
  appointmentsEnabled?: boolean /** If the appointments are enabled */;
  reviewsEnabled?: boolean /** If the reviews are enabled */;
  onlineListingsEnabled?: boolean /** If the online listings are enabled */;
  phoneCallEnabled?: boolean /** If the phone calls are enabled */;
  conversationsEnabled?: boolean /** If the conversations are enabled */;
  assignedDataOnly?: boolean /** If the assigned data only is enabled */;
  adwordsReportingEnabled?: boolean /** If the adwords reporting is enabled */;
  membershipEnabled?: boolean /** If the membership is enabled */;
  facebookAdsReportingEnabled?: boolean /** If the facebook ads reporting is enabled */;
  attributionsReportingEnabled?: boolean /** If the attributions reporting is enabled */;
  settingsEnabled?: boolean /** If the settings are enabled */;
  tagsEnabled?: boolean /** If the tags are enabled */;
  leadValueEnabled?: boolean /** If the lead value is enabled */;
  marketingEnabled?: boolean /** If the marketing is enabled */;
  agentReportingEnabled?: boolean /** If the agent reporting is enabled */;
  botService?: boolean /** If the bot service is enabled */;
  socialPlanner?: boolean /** If the social planner is enabled */;
  bloggingEnabled?: boolean /** If the blogging is enabled */;
  invoiceEnabled?: boolean /** If the invoice is enabled */;
  affiliateManagerEnabled?: boolean /** If the affiliate manager is enabled */;
  contentAiEnabled?: boolean /** If the content AI is enabled */;
  refundsEnabled?: boolean /** If the refunds are enabled */;
  recordPaymentEnabled?: boolean /** If the record payment is enabled */;
  cancelSubscriptionEnabled?: boolean /** If the cancel subscription is enabled */;
  paymentsEnabled?: boolean /** If the payments are enabled */;
  communitiesEnabled?: boolean /** If the communities are enabled */;
  exportPaymentsEnabled?: boolean /** If the export payments are enabled */;
};

type UserRoleOptions = "admin" | "user";

type UserTypeOptions = "account" | "agency";

type RoleSchema = {
  type?: UserTypeOptions /** The type of the role */;
  role?: UserRoleOptions /** The role */;
  locationIds?: string[] /** The location ids */;
  restrictSubAccount?: boolean /** If the sub account is restricted */;
};

type UserScopes =
  | "campaigns.readonly"
  | "campaigns.write"
  | "calendars/events.write"
  | "calendars/events.readonly"
  | "contacts.write"
  | "contacts/bulkActions.write"
  | "workflows.readonly"
  | "workflows.write"
  | "triggers.write"
  | "funnels.write"
  | "websites.write"
  | "medias.write"
  | "medias.readonly"
  | "opportunities.write"
  | "opportunities/leadValue.readonly"
  | "reporting/phone.readonly"
  | "reporting/adwords.readonly"
  | "reporting/facebookAds.readonly"
  | "reporting/attributions.readonly"
  | "reporting/agent.write"
  | "reporting/agent.readonly"
  | "reporting/reports.write"
  | "reporting/reports.readonly"
  | "payments.write"
  | "payments/refunds.write"
  | "payments/records.write"
  | "payments/exports.write"
  | "payments/subscriptionsCancel.write"
  | "invoices.write"
  | "invoices.readonly"
  | "invoices/schedule.readonly"
  | "invoices/schedule.write"
  | "invoices/template.readonly"
  | "invoices/template.write"
  | "reputation/review.write"
  | "reputation/listing.write"
  | "conversations.write"
  | "conversations.readonly"
  | "conversations/message.readonly"
  | "conversations/message.write"
  | "contentAI.write"
  | "dashboard/stats.readonly"
  | "locations/tags.write"
  | "locations/tags.readonly"
  | "marketing.write"
  | "eliza.write"
  | "settings.write"
  | "socialplanner/post.write"
  | "marketing/affiliate.write"
  | "blogs.write"
  | "membership.write"
  | "communities.write"
  | "certificates.write"
  | "certificates.readonly"
  | "adPublishing.write"
  | "adPublishing.readonly"
  | "private-integration-location.readonly"
  | "private-integration-location.write"
  | "private-integration-company.readonly"
  | "private-integration-company.write"
  | "native-integrations.readonly"
  | "native-integrations.write"
  | "wordpress.write"
  | "wordpress.read"
  | "custom-menu-link.readonly"
  | "custom-menu-link.write";

type UsersSchema = {
  id?: string /** The user ID */;
  name?: string /** The name */;
  firstName?: string /** The first name */;
  lastName?: string /** The last name */;
  email?: string /** The email */;
  phone?: string /** The phone */;
  extension?: string /** The extension */;
  permissions?: PermissionsDTO /** The permissions */;
  scopes?: UserScopes /** The scopes */;
  roles?: RoleSchema /** The roles */;
  deleted?: boolean /** If the user is deleted */;
};

export type UsersSearchResponseDTO = {
  users: UsersSchema[] /** The list of users */;
  count: number /** The total number of users */;
};

export type UsersGetResponseDTO = {
  users: UsersSchema[] /** The user */;
};

export type UsersResponseDTO = UsersSchema;

export type UsersCreateDTO = {
  companyId: string /** The company ID (required all on creates regardless of user role) (agency authentication required if not account level user) */;
  firstName: string /** The first name */;
  lastName: string /** The last name */;
  email: string /** The email */;
  password?: string /** The password */;
  phone?: string /** The phone */;
  type: UserTypeOptions /** The type ("account" | "agency") */;
  role: UserRoleOptions /** The role ("admin" | "user") */;
  isEjectedUser: boolean /** If the user is ejected */;
  locationIds: string[] /** The location ids */;
  permissions?: PermissionsDTO /** The permissions */;
  scopes?: UserScopes /** The scopes */;
  scopesAssignedToOnly?: UserScopes /** The scopes assigned */;
  profilePhoto?: string /** The profile photo */;
};

export type UsersUpdateDTO = {
  companyId?: string /** The company ID (required if using agency authentication) (agency authentication required if not account level user) */;
  isEjectedUser?: boolean /** If the user is ejected */;
  firstName?: string /** The first name */;
  lastName?: string /** The last name */;
  email?: string /** The email */;
  emailChangeOTP?: string /** The email change OTP */;
  password?: string /** The password */;
  phone?: string /** The phone */;
  type?: UserTypeOptions /** The type ("account" | "agency") */;
  role?: UserRoleOptions /** The role ("admin" | "user") */;
  locationIds?: string[] /** The location ids */;
  permissions?: PermissionsDTO /** The permissions */;
  scopes?: UserScopes /** The scopes */;
  scopesAssignedToOnly?: UserScopes /** The scopes assigned */;
  profilePhoto?: string /** The profile photo */;
};

export type UsersDeleteDTO = {
  succeeded: boolean /** If the user is deleted */;
  message: string /** The message */;
};

export type UsersSearchOptions = {
  companyId: string /** The company ID */;
  ids?: string /** The user IDs */;
  enabled2waySync?: boolean /** If the 2 way sync is enabled */;
  limit?: string /** The number of items to return */;
  locationId?: string /** The location ID */;
  query?: string /** The search term */;
  role?: UserRoleOptions /** The role */;
  skip?: string /** No of results to be skipped before returning the result */;
  sort?: string /** The field on which sort is applied in which the results need to be sorted */;
  sortDirection?: string /** The direction in which the results need to be sorted */;
  type?: UserTypeOptions /** Type of the users to be filtered in the search */;
};

export type UsersSearchParams = {
  companyId: string /** The company ID */;
  ids?: string /** The user IDs */;
  enabled2waySync?: string /** If the 2 way sync is enabled */;
  limit?: string /** The number of items to return */;
  locationId?: string /** The location ID */;
  query?: string /** The search term */;
  role?: string /** The role */;
  skip?: string /** No of results to be skipped before returning the result */;
  sort?: string /** The field on which sort is applied in which the results need to be sorted */;
  sortDirection?: string /** The direction in which the results need to be sorted */;
  type?: string /** Type of the users to be filtered in the search */;
};
