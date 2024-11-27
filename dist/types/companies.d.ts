export type CompaniesIOnboardingDTO = {
    pending: boolean;
    haveWebsite?: boolean;
    websiteUrl?: string;
    industryServed?: string;
    customerCount?: string;
    tools?: string[];
    conversationDemo?: boolean;
    location?: boolean;
    locationId?: string;
};
export type CompaniesEndTrialDTO = {
    trial_end_req_by: string;
    trial_ended_on: string;
};
export declare enum CompaniesAgencyProAddonActivePlansEnum {
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
    AgencyProPlusAnnual399 = "agency-pro-plus_annual_399"
}
export type CompaniesAgencyProAddOnDTO = {
    is_active: boolean;
    agency_pro_addon_subscription_id: string;
    agency_pro_addon_active_plan: CompaniesAgencyProAddonActivePlansEnum;
};
export type CompaniesReactivationAttemptDTO = {
    attempted_on: string;
    attempted_by: string;
    invoice_id: string;
};
export type CompaniesDowngradeDTO = {
    attempted_on: string;
    attempted_by: string;
    previous_plan: string;
    current_plan: string;
    reason: string;
};
export declare enum CompanySubscriptionStatusEnum {
    Pending = "pending",
    Approved = "approved",
    Rejected = "rejected"
}
export type CompaniesPauseSubscriptionInfoDTO = {
    requested_on: string;
    req_by: string;
    reason: string;
    status: CompanySubscriptionStatusEnum;
    processed_on: string;
};
export type CompaniesBillingInfoDTO = {
    first_trial_extension_processed_on?: string;
    first_trial_extension_reason?: string;
    second_trial_extension_processed_on?: string;
    second_trial_extension_reason?: string;
    pause_subscription_requested_on?: string;
    pause_subscription_reason?: string;
    pause_subscription_status?: CompanySubscriptionStatusEnum;
    pause_subscription_req_processed_on: string;
    pause_subscription_req_by: string;
    end_trial_early?: CompaniesEndTrialDTO;
    agency_pro_addon?: CompaniesAgencyProAddOnDTO;
    coupons_added?: string[];
    reactivation_attempt?: CompaniesReactivationAttemptDTO;
    downgrade?: CompaniesDowngradeDTO;
    first_payment_date?: string;
    pause_subscription_info?: CompaniesPauseSubscriptionInfoDTO;
};
export type CompaniesGetByIdDTO = {
    id?: string;
    name?: string;
    email?: string;
    logoUrl?: string;
    phone?: string;
    website?: string;
    domain?: string;
    spareDomain?: string;
    privacyPolicy?: string;
    termsConditions?: string;
    theme?: string;
    address?: string;
    city?: string;
    postalCode?: string;
    country?: string;
    state?: string;
    timezone?: string;
    relationshipNumber?: string;
    faviconUrl?: string;
    subdomain?: string;
    plan?: number;
    currency?: string;
    customerType?: string;
    termsOfServiceVersion?: string;
    termsOfServiceAcceptedBy?: string;
    termsOfServiceAcceptedDate?: string;
    privacyPolicyVersion?: string;
    privacyPolicyAcceptedBy?: string;
    privacyPolicyAcceptedDate?: string;
    affiliatePolicyVersion?: string;
    affiliatePolicyAcceptedBy?: string;
    affiliatePolicyAcceptedDate?: string;
    twilioTrialMode?: boolean;
    twilioFreeCredits?: number;
    isReselling?: boolean;
    onboardingInfo?: CompaniesIOnboardingDTO;
    stripeId?: string;
    upgradeEnabledForClients?: boolean;
    cancelEnabledForClients?: boolean;
    autoSuspendEnabled?: boolean;
    saasSettings?: object;
    stripeActivePlan?: string;
    stripeConnectId?: string;
    enableDepreciatedFeatures?: boolean;
    premiumUpgraded?: boolean;
    status?: string;
    locationCount?: number;
    disableEmailService?: boolean;
    billingInfo?: CompaniesBillingInfoDTO;
};
export type CompaniesGetByIdSuccessfulResponseDTO = {
    company: CompaniesGetByIdDTO;
};
