type PaymentsWLProviderOptions = "authorize-net" | "nmi";
export type PaymentsWLProviderCreateDTO = {
    altId: string;
    altType: "location";
    uniqueName: string;
    title: string;
    provider: PaymentsWLProviderOptions;
    description: string;
    imageUrl: string;
};
export type PaymentsIntegrationProviderSchema = {
    _id: string;
    altId: string;
    altType: string;
    title: string;
    route: string;
    provider: string;
    description: string;
    imageUrl: string;
    createdAt: string;
    updatedAt: string;
};
export type PaymentsWLProviderCreateResponseDTO = PaymentsIntegrationProviderSchema;
export type PaymentsWLProviderListResponseDTO = {
    providers: PaymentsIntegrationProviderSchema[];
};
type PaymentsOrderSourceMeta = {
    domain?: string;
    pageId?: string;
    pageUrl?: string;
    stepId?: string;
};
export type PaymentsOrderResponseSchema = {
    _id: string;
    altId: string;
    altType: string;
    status: string;
    sourceType: string;
    createdAt: string;
    updatedAt: string;
    contactId?: string;
    contactName?: string;
    contactEmail?: string;
    currency?: string;
    amount?: number;
    subtotal?: number;
    discount?: number;
    liveMode?: boolean;
    totalProducts?: number;
    sourceName?: string;
    sourceId?: string;
    sourceMeta?: PaymentsOrderSourceMeta;
    couponCode?: string;
    sourceSubType?: string;
    fulfillmentStatus?: string;
    onetimeProducts?: number;
    recurringProducts?: number;
};
export type PaymentsOrderListResponseDTO = {
    data: PaymentsOrderResponseSchema[];
    totalCount: number;
};
export type PaymentsAmountSummarySchema = {
    subtotal: number;
    discount?: number;
};
type PaymentsOrderSourceType = "funnel" | "website" | "invoice" | "calendar" | "text2Pay" | "document_contracts" | "membership" | "mobile_app" | "communities" | "point_of_sale" | "manual" | "form" | "survey" | "payment_link" | "external";
type PaymentsOrderSourceSubType = "one_step_order_form" | "two_step_order_form" | "upsell" | "tap_to_pay" | "card_payment" | "store" | "contact_view" | "email_campaign" | "payments_dashboard" | "shopify";
export type PaymentsOrderSourceSchema = {
    id?: string;
    type?: PaymentsOrderSourceType;
    subType?: PaymentsOrderSourceSubType;
    name?: string;
    meta: PaymentsOrderSourceMeta;
};
type PaymentsOrderContactSnapshotSchema = {
    first_name?: string;
    last_name?: string;
    email?: string;
    company_name?: string;
    location_id?: string;
    type?: string;
};
type PaymentsOrderItemProductSchema = {
    name?: string;
    productType?: string;
};
type PaymentsOrderItemSchema = {
    _id?: string;
    authorizeAmount?: number;
    locationId?: string;
    name?: string;
    price?: {};
    product?: PaymentsOrderItemProductSchema;
};
type PaymentsOrderCouponSchema = {
    _id?: string;
    code?: string;
};
type PaymentsOrderMeta = {
    couponSessionExpired?: boolean;
    [key: string]: any;
};
export type PaymentsOrderGetResponseDTO = {
    _id: string;
    altId: string;
    altType: string;
    contactId?: string;
    currency?: string;
    amount?: number;
    status: string;
    liveMode?: boolean;
    createdAt: string;
    updatedAt: string;
    fulfillmentStatus?: string;
    contactSnapshot?: PaymentsOrderContactSnapshotSchema;
    amountSummary?: PaymentsAmountSummarySchema;
    source?: PaymentsOrderSourceSchema;
    items?: PaymentsOrderItemSchema[];
    coupon?: PaymentsOrderCouponSchema;
    trackingId?: string;
    fingerprint?: string;
    meta?: PaymentsOrderMeta;
    markAsTest?: boolean;
    traceId?: string;
};
export type PaymentsFullfillmentTrackingSchema = {
    trackingNumber?: string;
    shippingCarrier?: string;
    trackingUrl?: string;
};
export type PaymentsFullfillmentItemsSchema = {
    priceId: string;
    qty: number;
};
export type PaymentsFullfillmentCreateDTO = {
    altId: string;
    altType: "location";
    trackings: PaymentsFullfillmentTrackingSchema[];
    items: PaymentsFullfillmentItemsSchema[];
    notifyCustomer: boolean;
};
export type PaymentsProductVariantOptionSchema = {
    id: string;
    name: string;
};
export type PaymentsProductVariantSchema = {
    id: string;
    name: string;
    options: PaymentsProductVariantOptionSchema[];
};
type PaymentsProductMediaTypes = "image" | "video";
export type PaymentsProductMediaDTO = {
    id: string;
    url: string;
    type: PaymentsProductMediaTypes;
    title?: string;
    isFeatured?: boolean;
    priceIds?: string[];
};
export type PaymentsProductLabelDTO = {
    title: string;
    startDate?: string;
    endDate?: string;
};
export type PaymentsProductSEODTO = {
    title?: string;
    description?: string;
};
export type PaymentsProductDefaultResponseDTO = {
    _id: string;
    description?: string;
    variants?: PaymentsProductVariantSchema[];
    medias?: PaymentsProductMediaDTO[];
    locationId: string;
    name: string;
    productType: string;
    availableInStore?: boolean;
    userId?: string;
    createdAt: string;
    updatedAt: string;
    statementDescriptor?: string;
    image?: string;
    collectionIds?: string[];
    isTaxesEnabled?: boolean;
    taxes?: string[];
    isLabelEnabled?: boolean;
    label?: PaymentsProductLabelDTO;
    slug?: string;
    seo?: PaymentsProductSEODTO;
};
export type PaymentsMembershipOfferSchema = {
    _id: string;
    label: string;
    value: string;
};
type PaymentsInvervalTypes = "day" | "week" | "month" | "year";
export type PaymentsRecurringDTO = {
    inverval: PaymentsInvervalTypes;
    intervalCount: number;
};
type PaymentsPriceTypeOptions = "one_time" | "recurring";
export type PaymentsPriceDefaultResponseDTO = {
    _id: string;
    membershipOffers?: PaymentsMembershipOfferSchema[];
    variantOptionIds?: string[];
    locationId?: string;
    product?: string;
    userId?: string;
    name: string;
    type: PaymentsPriceTypeOptions;
    currency: string;
    amount: number;
    recurring?: PaymentsRecurringDTO;
    createdAt?: string;
    updatedAt?: string;
    compareAtPrice?: number;
    trackInventory?: boolean;
    availableQuantity?: number;
    allowOutOfStockPurchases?: boolean;
};
export type PaymentsFullfilledItemSchema = {
    _id: string;
    name: string;
    product: PaymentsProductDefaultResponseDTO;
    price: PaymentsPriceDefaultResponseDTO;
    qty: number;
};
export type PaymentsFullfillmentSchema = {
    _id: string;
    altId: string;
    altType: "location";
    trackings: PaymentsFullfillmentTrackingSchema[];
    items: PaymentsFullfilledItemSchema[];
    createdAt: string;
    updatedAt: string;
};
export type PaymentsFullfillmentListResponseDTO = {
    status: boolean;
    data: PaymentsFullfillmentSchema;
};
export type PaymentsFullfillmentCreateResponseDTO = PaymentsFullfillmentListResponseDTO;
type PaymentsTxnChargeSnapshotSchema = {
    id?: string;
    object?: string;
    account_country?: string;
    account_name?: string;
};
type PaymentsTxnMethods = {
    [key: string]: {
        [key: string]: string;
    };
};
export type PaymentsTxnResponseSchema = {
    _id: string;
    altId: string;
    altType: string;
    contactId?: string;
    contactName?: string;
    contactEmail?: string;
    currency?: string;
    amount?: number;
    status: string;
    liveMode?: boolean;
    entityType?: string;
    entityId?: string;
    entitySourceType: PaymentsOrderSourceType;
    entitySourceSubType?: PaymentsOrderSourceSubType;
    entitySourceName?: string;
    entitySourceId?: string;
    entitySourceMeta?: PaymentsOrderSourceMeta;
    subscriptionId?: string;
    chargeId?: string;
    chargeSnapshot?: PaymentsTxnChargeSnapshotSchema;
    paymentProviderType?: string;
    paymentProviderConnectedAccount?: string;
    ipAddress?: string;
    createdAt: string;
    updatedAt: string;
    amountRefunded?: number;
    paymentMethod?: PaymentsTxnMethods;
};
export type PaymentsTxnListResponseDTO = {
    data: PaymentsTxnResponseSchema[];
    totalCount: number;
};
type PaymentTxnPaymentProviderSchema = {
    type?: string;
    connectedAccount?: {
        _id?: string;
        accountId?: string;
    };
};
type PaymentTxnQBResponseSchema = {
    domain?: string;
    sparse?: boolean;
    Id?: string;
    SyncToken?: string;
    TotalAmt?: number;
};
export type PaymentsTxnGetResponseDTO = {
    _id: string;
    altId: string;
    altType: string;
    contactId?: string;
    contactSnapshot?: PaymentsOrderContactSnapshotSchema;
    currency?: string;
    amount?: number;
    status?: string;
    liveMode?: boolean;
    createdAt: string;
    updatedAt: string;
    entityType?: string;
    entityId?: string;
    entitySource?: PaymentsOrderSourceSchema;
    chargeId?: string;
    chargeSnapshot?: PaymentsTxnChargeSnapshotSchema;
    invoiceId?: string;
    subscriptionId?: string;
    paymentProvider?: PaymentTxnPaymentProviderSchema;
    ipAddress?: string;
    meta?: PaymentsOrderSourceMeta;
    markAsTest?: boolean;
    isParent?: boolean;
    amountRefunded?: number;
    receiptId?: string;
    qboSynced?: boolean;
    qboResponse?: PaymentTxnQBResponseSchema;
    traceId?: string;
};
type PaymentsSubscriptionSnapshotSchema = {
    status?: string;
    status_update_time?: string;
    id?: string;
    plan_id?: string;
    start_time?: string;
    quantity?: number;
};
export type PaymentsSubscriptionResponseSchema = {
    _id: string;
    altId: string;
    altType: string;
    contactId?: string;
    contactName?: string;
    contactEmail?: string;
    currency?: string;
    amount?: number;
    status: string;
    liveMode?: boolean;
    entityType?: string;
    entityId?: string;
    entitySourceType: PaymentsOrderSourceType;
    entitySourceName?: string;
    entitySourceId?: string;
    entitySourceMeta?: PaymentsOrderSourceMeta;
    subscriptionId?: string;
    subscriptionSnapshot?: PaymentsSubscriptionSnapshotSchema;
    paymentProviderType?: string;
    paymentProviderConnectedAccount?: string;
    ipAddress?: string;
    createdAt: string;
    updatedAt: string;
};
export type PaymentsSubscriptionListResponseDTO = {
    data: PaymentsSubscriptionResponseSchema[];
    totalCount: number;
};
type PaymentsSubscriptionCouponSchema = {
    _id?: string;
    usageCount?: number;
    altId?: string;
    altType?: string;
    name?: string;
    code?: string;
    discountType?: string;
    discountValue?: number;
};
type PaymentsSubscriptionScheduleSchema = {
    collection?: string;
    id?: string;
};
type PaymentsSubscriptionAutoPaymentSchema = {
    customerId?: string;
    paymentMethodId?: string;
};
type PaymentsSubscriptionRecurringProductSchema = {
    locationId?: string;
    funnel?: string;
    step?: string;
    name?: string;
};
export type PaymentsSubscriptionGetResponseDTO = {
    _id: string;
    altId: string;
    altType: string;
    contactId?: string;
    contactSnapshot?: PaymentsOrderContactSnapshotSchema;
    coupon?: PaymentsSubscriptionCouponSchema;
    currency?: string;
    amount?: number;
    status: string;
    liveMode?: boolean;
    entityType?: string;
    entityId?: string;
    entitySource?: PaymentsOrderSourceSchema;
    subscriptionId?: string;
    subscriptionSnapshot?: PaymentsSubscriptionSnapshotSchema;
    paymentProvider?: PaymentTxnPaymentProviderSchema;
    ipAddress?: string;
    createdAt: string;
    updatedAt: string;
    meta?: PaymentsOrderMeta;
    markAsTest?: boolean;
    schedule?: PaymentsSubscriptionScheduleSchema;
    autoPayment?: PaymentsSubscriptionAutoPaymentSchema;
    recurringProduct?: PaymentsSubscriptionRecurringProductSchema;
    canceledAt?: string;
    canceledBy?: string;
    traceId?: string;
};
export type PaymentsCustomProviderCreateDTO = {
    name: string;
    description: string;
    paymentsUrl: string;
    queryUrl: string;
    imageUrl: string;
};
export type PaymentsCustomProviderConnectSchema = {
    live?: {
        apiKey: string;
        publishableKey: string;
    };
    test?: {
        apiKey: string;
        publishableKey: string;
    };
};
type PaymentsCustomProviderConnectLiveSchema = {
    live: {
        apiKey: string;
        publishableKey: string;
        liveMode?: boolean;
    };
    test: {
        apiKey: string;
        publishableKey: string;
        liveMode?: boolean;
    };
};
export type PaymentsCustomProviderCreateResponseDTO = PaymentsCustomProviderGetResponseDTO;
export type PaymentsCustomProviderKeysSchema = {
    apiKey: string;
    publishableKey: string;
};
export type PaymentsCustomProviderConnectResponseDTO = {
    _id: string;
    locationId: string;
    marketplaceAppId: string;
    name: string;
    description: string;
    paymentsUrl: string;
    queryUrl: string;
    imageUrl: string;
    paymentProvider?: PaymentsCustomProviderConnectLiveSchema;
    deleted: boolean;
    createdAt: string;
    updatedAt: string;
    traceId: string;
};
export interface PaymentsCustomProviderGetResponseDTO extends PaymentsCustomProviderConnectResponseDTO {
    paymentProvider: PaymentsCustomProviderConnectLiveSchema;
}
export type PaymentsCustomProviderDeleteResponseDTO = {
    liveMode: boolean;
};
export type PaymentsCustomProviderDisconnectResponseDTO = {
    success: boolean;
};
export type PaymentsOrderFullfillmentsSearchOptions = {
    altId: string;
    altType: "location";
    contactId?: string;
    endAt?: string;
    funnelProductIds?: string;
    limit?: number;
    locationId?: string;
    offset?: number;
    paymentMode?: string;
    search?: string;
    startAt?: string;
    status?: string;
};
export type PaymentsOrderFullfillmentsSearchParams = {
    altId: string;
    altType: string;
    contactId?: string;
    endAt?: string;
    funnelProductIds?: string;
    limit?: string;
    locationId?: string;
    offset?: string;
    paymentMode?: string;
    search?: string;
    startAt?: string;
    status?: string;
};
export type PaymentsOrderFullfillmentsGetOptions = {
    altId: string;
    altType: string;
    locationId?: string;
};
export type PaymentsSubscriptionsSearchOptions = {
    altId: string;
    altType: "location";
    contactId?: string;
    endAt?: string;
    entityId?: string;
    entitySourceType?: string;
    id?: string;
    limit?: number;
    offset?: number;
    paymentMode?: string;
    search?: string;
    startAt?: string;
};
export type PaymentsSubscriptionsSearchParams = {
    altId: string;
    altType: string;
    contactId?: string;
    endAt?: string;
    entityId?: string;
    entitySourceType?: string;
    id?: string;
    limit?: string;
    offset?: string;
    paymentMode?: string;
    search?: string;
    startAt?: string;
};
export type PaymentsTransactionsSearchOptions = {
    altId: string;
    altType: string;
    contactId?: string;
    endAt?: string;
    entityId?: string;
    entitySourceSubType?: string;
    entitySourceType?: string;
    limit?: number;
    locationId?: string;
    offset?: number;
    paymentMode?: string;
    search?: string;
    startAt?: string;
    subscriptionId?: string;
};
export type PaymentsTransactionsSearchParams = {
    altId: string;
    altType: string;
    contactId?: string;
    endAt?: string;
    entityId?: string;
    entitySourceSubType?: string;
    entitySourceType?: string;
    limit?: string;
    locationId?: string;
    offset?: string;
    paymentMode?: string;
    search?: string;
    startAt?: string;
    subscriptionId?: string;
};
export {};
