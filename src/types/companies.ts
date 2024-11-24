export type CompaniesIOnboardingDTO = {
  pending: boolean; // If the Industry is pending (true)
  haveWebsite?: boolean; // If the Industry has a website (true)
  websiteUrl?: string; // The URL of the Industry's website (https://www.example.com)
  industryServed?: string; // The Industry served by the Industry (Healthcare)
  customerCount?: string; // The number of customers the Industry has (100)
  tools?: string[]; // The tools used by the Industry
  conversationDemo?: boolean; // If the Industry has a conversation demo (true)
  location?: boolean; // If the Industry has a location (true)
  locationId?: string; // The ID of the Industry's location (123)
};

export type CompaniesEndTrialDTO = {
  trial_end_req_by: string;
  trial_ended_on: string; // The date the trial ended (2023-08-02T00:00:00.000Z)
};

export enum CompaniesAgencyProAddonActivePlansEnum {
  ReviewsMonthly150 = "reviews_monthly_150",
  ListingMonthly50 = "listing_monthly_50",
  ConversationsMonthly100 = "conversations_monthly_100",
  PrioritySupportMonthly300 = "priority-support_monthly_300",
  PrioritySupportAnnual300 = "priority-support_annual_300",
  PrioritySupportMonthly300Legacy = "priority-support_monthly_300_legacy",
  PrioritySupportAnnual300Legacy = "priority-support_annual_300_legacy",
  PrioritySupportMonthly240July = "priority-support_monthly_240_july",
  HipaaMonthly297 = "hipaa_monthly_297",
  HipaaAnnual297 = "hipaa_annual_297",
  HipaaMonthly297Legacy = "hipaa_monthly_297_legacy",
  AgencyProPlusMonthly399 = "agency-pro-plus_monthly_399",
  AgencyProPlusAnnual399 = "agency-pro-plus_annual_399",
}

export type CompaniesAgencyProAddOnDTO = {
  is_active: boolean; // If the Agency Pro Add-On is active (true)
  agency_pro_addon_subscription_id: string; // The ID of the Agency Pro Add-On subscription (price_a21hvDAS456asc)
  agency_pro_addon_active_plan: CompaniesAgencyProAddonActivePlansEnum; // The active plan of the Agency Pro Add-On (reviews_monthly_150)
};

export type CompaniesReactivationAttemptDTO = {
  attempted_on: string; // The date the reactivation was attempted (2023-08-02T00:00:00.000Z)
  attempted_by: string; // The user who attempted the reactivation (john.doe@example.com)
  invoice_id: string; // The ID of the invoice (in_1NZoVqFpU9DlKp7RclfCqtIF)
};

export type CompaniesDowngradeDTO = {
  attempted_on: string; // The date the downgrade was attempted (2023-08-02T00:00:00.000Z)
  attempted_by: string; // The user who attempted the downgrade (john.doe@example.com)
  previous_plan: string; // The previous plan of the Industry ($497 / month)
  current_plan: string; // The current plan of the Industry ($297 / month)
  reason: string; // The reason for the downgrade (Expensive)
};

export enum CompanySubscriptionStatusEnum {
  Pending = "pending",
  Approved = "approved",
  Rejected = "rejected",
}

export type CompaniesPauseSubscriptionInfoDTO = {
  requested_on: string; // The date the pause was requested (2023-08-02T00:00:00.000Z)
  req_by: string; // The user who requested the pause
  reason: string; // The reason for the pause (Expensive)
  status: CompanySubscriptionStatusEnum; // The status of the pause request (pending)
  processed_on: string; // The date the pause was processed (2023-08-02T00:00:00.000Z)
};

export type CompaniesBillingInfoDTO = {
  first_trial_extension_processed_on?: string; // The date the first trial extension was processed (2023-08-02T00:00:00.000Z)
  first_trial_extension_reason?: string; // The reason for the first trial extension (Expensive)
  second_trial_extension_processed_on?: string; // The date the second trial extension was processed (2023-08-02T00:00:00.000Z)
  second_trial_extension_reason?: string; // The reason for the second trial extension (Expensive)
  pause_subscription_requested_on?: string; // The date the pause was requested (2023-08-02T00:00:00.000Z)
  pause_subscription_reason?: string; // The reason for the pause (Expensive)
  pause_subscription_status?: CompanySubscriptionStatusEnum; // The status of the pause request (pending)
  pause_subscription_req_processed_on: string; // The date the pause was processed (2023-08-02T00:00:00.000Z)
  pause_subscription_req_by: string; // The user who requested the pause (john.doe@example.com)
  end_trial_early?: CompaniesEndTrialDTO; // The information about the early trial end
  agency_pro_addon?: CompaniesAgencyProAddOnDTO; // The information about the Agency Pro Add-On
  coupons_added?: string[]; // The coupons added to the Industry
  reactivation_attempt?: CompaniesReactivationAttemptDTO; // The information about the reactivation attempt
  downgrade?: CompaniesDowngradeDTO; // The information about the downgrade
  first_payment_date?: string; // The date of the first payment (2023-08-02T00:00:00.000Z)
  pause_subscription_info?: CompaniesPauseSubscriptionInfoDTO; // The information about the pause subscription
};

export type CompaniesGetByIdDTO = {
  id?: string; // The ID of the Industry (5DP4iH6HLkQsiKESj6rh)
  name?: string; // The name of the Industry (Tesla inc)
  email?: string; // The email of the Industry (john.doe@example.com)
  logoUrl?: string; // The URL of the Industry's logo (https://firebasestorage.googleapis.com/v0/b/leadconnector.appspot.com/o/companyPhotos%2F5DP4iH6HLkQsiKESj6rh.gif?alt=media&token=2aec9720-59a7-46af-a187-d4a2774ee873)
  phone?: string; // The phone number of the Industry (+1202-555-0107)
  website?: string; // The URL of the Industry's website (https://www.tesla.com)
  domain?: string; // The domain of the Industry (https://app.myawesomedomain.com)
  spareDomain?: string; // The spare domain of the Industry (link.msgsndr.com)
  privacyPolicy?: string; // The URL of the Industry's privacy policy (https://app.leadconnectorhq.com/privacy)
  termsConditions?: string; // The URL of the Industry's terms and conditions (https://app.leadconnectorhq.com/terms)
  theme?: string; // The theme of the Industry (default-dark-v1)
  address?: string; // The address of the Industry (3500 Deer Creek Road)
  city?: string; // The city of the Industry (Beverly Hills)
  postalCode?: string; // The postal code of the Industry (90210)
  country?: string; // The country of the Industry (US)
  state?: string; // The state of the Industry (CA)
  timezone?: string; // The timezone of the Industry (America/Los_Angeles)
  relationshipNumber?: string; // The relationship number of the Industry (x-xxx-xxx)
  faviconUrl?: string; // The URL of the Industry's favicon (https://firebasestorage.googleapis.com/v0/b/leadconnector.appspot.com/o/companyPhotos%2F5DP4iH6HLkQsiKESj6rh.gif?alt=media&token=2aec9720-59a7-46af-a187-d4a2774ee873)
  subdomain?: string; // The subdomain of the Industry (https://app.myawesomedomain.com/subdomain)
  plan?: number; // The plan of the Industry (1)
  currency?: string; // The currency of the Industry (USD)
  customerType?: string; // The type of customer (agency)
  termsOfServiceVersion?: string; // The version of the terms of service (06/01/2022)
  termsOfServiceAcceptedBy?: string; // The user who accepted the terms of service (SDfdf355Dfggdee)
  termsOfServiceAcceptedDate?: string; // The date the terms of service were accepted (2023-08-02T00:00:00.000Z)
  privacyPolicyVersion?: string; // The version of the privacy policy (06/01/2022)
  privacyPolicyAcceptedBy?: string; // The user who accepted the privacy policy (SDfdf355Dfggdee)
  privacyPolicyAcceptedDate?: string; // The date the privacy policy was accepted (2023-08-02T00:00:00.000Z)
  affiliatePolicyVersion?: string; // The version of the affiliate policy (06/01/2022)
  affiliatePolicyAcceptedBy?: string; // The user who accepted the affiliate policy (SDfdf355Dfggdee)
  affiliatePolicyAcceptedDate?: string; // The date the affiliate policy was accepted (2023-08-02T00:00:00.000Z)
  twilioTrialMode?: boolean; // If the Industry is in Twilio trial mode (true)
  twilioFreeCredits?: number; // The number of Twilio free credits (100)
  isReselling?: boolean; // If the Industry is reselling (true)
  onboardingInfo?: CompaniesIOnboardingDTO; // The onboarding information of the Industry
  stripeId?: string; // The ID of the Industry's Stripe account (acct_1J2k3l4m5n6o7p8q)
  upgradeEnabledForClients?: boolean; // If the upgrade plan is enabled for clients (true)
  cancelEnabledForClients?: boolean; // If the cancel plan is enabled for clients (true)
  autoSuspendEnabled?: boolean; // If auto suspend is enabled (true)
  saasSettings?: object; // The SaaS settings of the Industry ({"agencyDashboardVisibleTo":"string","stripeConnectInitiatedBy":"string"})
  stripeActivePlan?: string; // The active plan of the Industry (agency_monthly_297)
  stripeConnectId?: string; // The ID of the Industry's Stripe Connect account (acct_1J2k3l4m5n6o7p8q)
  enableDepreciatedFeatures?: boolean; // If the deprecated features are enabled (true)
  premiumUpgraded?: boolean; // If the Industry has upgraded to premium - defaults to fasle (true)
  status?: string; // The status of the Industry (active-trial)
  locationCount?: number; // The number of locations the Industry has (10)
  disableEmailService?: boolean; // If the email service is disabled (true)
  billingInfo?: CompaniesBillingInfoDTO; // The billing information of the Industry
};

export type CompaniesGetByIdSuccessfulResponseDTO = {
  company: CompaniesGetByIdDTO;
};
