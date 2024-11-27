export type SaasSubscriptionUpdateDTO = {
    subscriptionId: string;
    customerId: string;
    companyId: string;
};
export type SaasSubscriptionGetResponseDTO = {
    message: string;
    status: number;
    data: string[];
    traceId: string;
};
export type SaasSubscriptionBulkDisableDTO = {
    locationIds: string[];
};
export type SaasSubscriptionEnableDTO = {
    stripeAccountId: string;
    name: string;
    email: string;
    stripeCustomerId: string;
    companyId: string;
};
export type SaasSubscriptionPauseLocationDTO = {
    paused: boolean;
    companyId: string;
};
type UpdateRebillingProductOptions = "contentAI" | "workflow_premium_actions" | "workflow_ai" | "conversationAI" | "whatsApp" | "reviewsAI" | "Phone" | "Email";
type UpdateRebillingConfigSchema = {
    optIn: boolean;
    enabled: boolean;
    markup: number;
};
export type SaasRebillingUpdateDTO = {
    locationIds: string[];
    product: UpdateRebillingProductOptions;
    config: UpdateRebillingConfigSchema;
};
export {};
