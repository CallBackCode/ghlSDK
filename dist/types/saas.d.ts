export type SaasSubscriptionUpdateDTO = {
    subscriptionId: string /** The ID of the subscription to update */;
    customerId: string /** The ID of the customer to update */;
    companyId: string /** The ID of the company to update */;
};
export type SaasSubscriptionGetResponseDTO = {
    message: string /** The message of the response */;
    status: number /** The status of the response */;
    data: string[] /** The data of the response */;
    traceId: string /** The trace ID of the response */;
};
export type SaasSubscriptionBulkDisableDTO = {
    locationIds: string[] /** The IDs of the locations to disable */;
};
export type SaasSubscriptionEnableDTO = {
    stripeAccountId: string /** The Stripe account ID */;
    name: string /** The name of the subscription */;
    email: string /** The email of the subscription */;
    stripeCustomerId: string /** The Stripe customer ID */;
    companyId: string /** The ID of the company */;
};
export type SaasSubscriptionPauseLocationDTO = {
    paused: boolean /** Whether the location is paused */;
    companyId: string /** The ID of the company */;
};
type UpdateRebillingProductOptions = "contentAI" | "workflow_premium_actions" | "workflow_ai" | "conversationAI" | "whatsApp" | "reviewsAI" | "Phone" | "Email";
type UpdateRebillingConfigSchema = {
    optIn: boolean /** Whether the location is paused */;
    enabled: boolean /** Whether the location is paused */;
    markup: number /** Whether the location is paused */;
};
export type SaasRebillingUpdateDTO = {
    locationIds: string[] /** The ID of the location to update */;
    product: UpdateRebillingProductOptions /** The product to update */;
    config: UpdateRebillingConfigSchema /** The configuration to update */;
};
export {};
