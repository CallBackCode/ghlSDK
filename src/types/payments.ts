type PaymentsWLProviderOptions = "authorize-net" | "nmi";

export type PaymentsWLProviderCreateDTO = {
  altId: string; // location Id / company Id based on altType
  altType: "location"; // Alt Type (location)
  uniqueName: string; // A unique name given to the integration provider, uniqueName must start and end with a character. Only lowercase characters and hyphens (-) are supported
  title: string; // The title or name of the integration provider.
  provider: PaymentsWLProviderOptions; // The type of payment provider associated with the integration provider.
  description: string; // A brief description providing additional information about the integration provider.
  imageUrl: string; // The URL to an image representing the integration provider. The imageUrl should start with "https://" and ensure that this URL is publicly accessible.
};

export type PaymentsIntegrationProviderSchema = {
  _id: string; // The unique identifier of the integration provider.
  altId: string; // The altId / locationId of the integration provider.
  altType: string; // The altType of the integration provider.
  title: string; // The title or name of the integration provider.
  route: string; // The route name associated with the integration provider.
  provider: string; // The payment provider associated with the integration provider.
  description: string; // A brief description providing additional information about the integration provider.
  imageUrl: string; // The URL to an image representing the integration provider.
  createdAt: string; // The timestamp when the integration provider was created. (2024-02-13T10:43:41.026Z)
  updatedAt: string; // The timestamp when the integration provider was last updated. (2024-02-13T10:43:41.026Z)
};

export type PaymentsWLProviderCreateResponseDTO =
  PaymentsIntegrationProviderSchema;

export type PaymentsWLProviderListResponseDTO = {
  providers: PaymentsIntegrationProviderSchema[];
};

type PaymentsOrderSourceMeta = {
  domain?: string; // Domain of the source.
  pageId?: string; // Page id of the source.
  pageUrl?: string; // Page url of the source.
  stepId?: string; // Step id of the source.
};

export type PaymentsOrderResponseSchema = {
  _id: string; // The unique identifier for the order.
  altId: string; // AltId is the unique identifier eg: location id.
  altType: string; // AltType is the type of identifier.
  status: string; // The status of the order (e.g., completed).
  sourceType: string; // Source type of order (eg: funnel).
  createdAt: string; // The creation timestamp of the order. (2023-11-20T10:23:36.515Z)
  updatedAt: string; // The last update timestamp of the order. (2024-01-23T09:57:04.846Z)
  contactId?: string; // Contact id corresponding to the order.
  contactName?: string; // Contact name corresponding to the order.
  contactEmail?: string; // Contact email corresponding to the order.
  currency?: string; // Currency in which order was created.
  amount?: number; // Order value.
  subtotal?: number; // Order sub-total value.
  discount?: number; // Discount value on order.
  liveMode?: boolean; // Order is in live / test mode.
  totalProducts?: number; // Total products in an order.
  sourceName?: string; // Source name for the order.
  sourceId?: string; // Source id for the order.
  sourceMeta?: PaymentsOrderSourceMeta; // Meta content for the source of order.
  couponCode?: string; // Coupon code for the order.
  sourceSubType?: string; // Source sub-type for the order.
  fulfillmentStatus?: string; // Fulfillment status of the order.
  onetimeProducts?: number; // Total one time products in an order.
  recurringProducts?: number; // Total recurring time products in an order.
};

export type PaymentsOrderListResponseDTO = {
  data: PaymentsOrderResponseSchema[];
  totalCount: number;
};

export type PaymentsAmountSummarySchema = {
  subtotal: number; // Subtotal amount.
  discount?: number; // Discount amount.
};

type PaymentsOrderSourceType =
  | "funnel"
  | "website"
  | "invoice"
  | "calendar"
  | "text2Pay"
  | "document_contracts"
  | "membership"
  | "mobile_app"
  | "communities"
  | "point_of_sale"
  | "manual"
  | "form"
  | "survey"
  | "payment_link"
  | "external";

type PaymentsOrderSourceSubType =
  | "one_step_order_form"
  | "two_step_order_form"
  | "upsell"
  | "tap_to_pay"
  | "card_payment"
  | "store"
  | "contact_view"
  | "email_campaign"
  | "payments_dashboard"
  | "shopify";

export type PaymentsOrderSourceSchema = {
  id?: string; // Source id for the order.
  type?: PaymentsOrderSourceType; // Source type of order (eg: funnel).
  subType?: PaymentsOrderSourceSubType; // Source sub-type for the order.
  name?: string; // Source name for the order.
  meta: PaymentsOrderSourceMeta; // Meta content for the source of order.
};

type PaymentsOrderContactSnapshotSchema = {
  first_name?: string; // First name of the contact.
  last_name?: string; // Last name of the contact.
  email?: string; // Email of the contact.
  company_name?: string; // Company name of the contact.
  location_id?: string; // Location id of the contact.
  type?: string; // Type of the contact.
};

type PaymentsOrderItemProductSchema = {
  name?: string; // Name of the product.
  productType?: string; // Type of the product.
};

type PaymentsOrderItemSchema = {
  _id?: string; // Item id.
  authorizeAmount?: number; // Authorize amount.
  locationId?: string; // Location id.
  name?: string; // Name of the product.
  price?: {}; // Price details of the product.
  product?: PaymentsOrderItemProductSchema; // Product details of the item.
};

type PaymentsOrderCouponSchema = {
  _id?: string; // Coupon id.
  code?: string; // Coupon code.
};

type PaymentsOrderMeta = {
  couponSessionExpired?: boolean; // Coupon session expired.
  [key: string]: any; // Any other meta content.
};

export type PaymentsOrderGetResponseDTO = {
  _id: string; // The unique identifier for the order.
  altId: string; // AltId is the unique identifier eg: location id.
  altType: string; // AltType is the type of identifier.
  contactId?: string; // Contact id corresponding to the order.
  currency?: string; // Currency in which order was created.
  amount?: number; // Order value.
  status: string; // The status of the order (e.g., completed).
  liveMode?: boolean; // Order is in live / test mode.
  createdAt: string; // The creation timestamp of the order. (2023-11-20T10:23:36.515Z)
  updatedAt: string; // The last update timestamp of the order. (2024-01-23T09:57:04.846Z)
  fulfillmentStatus?: string; // Fulfillment status of the order.
  contactSnapshot?: PaymentsOrderContactSnapshotSchema; // Contact snapshot details of the order.
  amountSummary?: PaymentsAmountSummarySchema; // Amount details of the order.
  source?: PaymentsOrderSourceSchema; // Source details of the order.
  items?: PaymentsOrderItemSchema[]; // Item details of the order.
  coupon?: PaymentsOrderCouponSchema; // Coupon details of the order.
  trackingId?: string; // Tracking id of the order.
  fingerprint?: string; // Fingerprint id of the order.
  meta?: PaymentsOrderMeta; // Meta details of the order.
  markAsTest?: boolean; // Is test order.
  traceId?: string; // Trace id of the order.
};

export type PaymentsFullfillmentTrackingSchema = {
  trackingNumber?: string; // Tracking number provided by the shipping carrier
  shippingCarrier?: string; // Shipping carrier name
  trackingUrl?: string; // Tracking URL
};

export type PaymentsFullfillmentItemsSchema = {
  priceId: string; // The id of product price
  qty: number; // The no of quantity of the item
};

export type PaymentsFullfillmentCreateDTO = {
  altId: string; // Location Id or Agency Id
  altType: "location"; // Allowed value: location
  trackings: PaymentsFullfillmentTrackingSchema[]; // Fulfillment tracking information
  items: PaymentsFullfillmentItemsSchema[]; // Fulfilled items
  notifyCustomer: boolean; // Need to send a notification to customer
};

export type PaymentsProductVariantOptionSchema = {
  id: string; // The unique identifier of the product variant.
  name: string; // The name of the product variant.
};

export type PaymentsProductVariantSchema = {
  id: string; // The unique identifier of the product variant.
  name: string; // The name of the product variant.
  options: PaymentsProductVariantOptionSchema[]; // An array of options for the variant.
};

type PaymentsProductMediaTypes = "image" | "video";

export type PaymentsProductMediaDTO = {
  id: string; // The unique identifier for the media.
  url: string; // The URL where the media file is stored.
  type: PaymentsProductMediaTypes; // The type of the media file (e.g., image, video will be supporting soon).
  title?: string; // The title of the media file.
  isFeatured?: boolean; // Indicates whether the media is featured.
  priceIds?: string[]; // Mongo ObjectIds of the prices for which the media is assigned
};

export type PaymentsProductLabelDTO = {
  title: string; // The content for the product label.
  startDate?: string; // Start date in YYYY-MM-DDTHH:mm:ssZ format (2024-06-30T05:43:39.000Z)
  endDate?: string; // Start date in YYYY-MM-DDTHH:mm:ssZ format (2024-06-30T05:43:39.000Z)
};

export type PaymentsProductSEODTO = {
  title?: string; // SEO title of the product which will be displayed in the preview
  description?: string; // SEO Description for the product which will be displayed in the preview
};

export type PaymentsProductDefaultResponseDTO = {
  _id: string; // The unique identifier for the product.
  description?: string; // product description
  variants?: PaymentsProductVariantSchema[]; // An array of variants for the product.
  medias?: PaymentsProductMediaDTO[]; // An array of medias for the product.
  locationId: string; // The unique identifier for the location.
  name: string; // The name of the product.
  productType: string; // The type of the product (e.g., PHYSICAL).
  availableInStore?: boolean; // Indicates whether the product is available in-store.
  userId?: string; // The unique identifier for the user who created the product.
  createdAt: string; // The creation timestamp of the product. (2023-11-20T10:23:36.515Z)
  updatedAt: string; // The last update timestamp of the product. (2024-01-23T09:57:04.846Z)
  statementDescriptor?: string; // The statement descriptor for the product.
  image?: string; // The URL for the product image.
  collectionIds?: string[]; // An array of category Ids for the product.
  isTaxesEnabled?: boolean; // Is automatic attachment of taxes enabled for the product
  taxes?: string[]; // An array of ids of Taxes attached to the Product.
  isLabelEnabled?: boolean; // Is product label enabled
  label?: PaymentsProductLabelDTO; // The product label details
  slug?: string; // The slug of the product by which the product will be navigated
  seo?: PaymentsProductSEODTO; // The SEO information for the product requested
};

export type PaymentsMembershipOfferSchema = {
  _id: string; // The unique identifier for the membership offer.
  label: string; // Membership offer label
  value: string; // Membership offer value
};

type PaymentsInvervalTypes = "day" | "week" | "month" | "year";

export type PaymentsRecurringDTO = {
  inverval: PaymentsInvervalTypes; // The interval of the recurring product.
  intervalCount: number; // The interval count of the recurring product.
};

type PaymentsPriceTypeOptions = "one_time" | "recurring";

export type PaymentsPriceDefaultResponseDTO = {
  _id: string; // The unique identifier for the price.
  membershipOffers?: PaymentsMembershipOfferSchema[]; // An array of membership offers associated with the price.
  variantOptionIds?: string[]; // An array of variant option IDs associated with the price.
  locationId?: string; // The unique identifier for the location.
  product?: string; // The unique identifier for the associated product.
  userId?: string; // The unique identifier for the user.
  name: string; // The name of the price.
  type: PaymentsPriceTypeOptions; // The type of the price (e.g., one_time).
  currency: string; // The currency code for the price.
  amount: number; // The amount of the price.
  recurring?: PaymentsRecurringDTO; // The recurring details of the price (if type is recurring).
  createdAt?: string; // The creation timestamp of the price. (2023-11-20T10:23:38.645Z)
  updatedAt?: string; // The last update timestamp of the price. (2024-01-23T09:57:04.852Z)
  compareAtPrice?: number; // The compare-at price for comparison purposes.
  trackInventory?: boolean; // Indicates whether inventory tracking is enabled.
  availableQuantity?: number; // Available inventory stock quantity
  allowOutOfStockPurchases?: boolean; // Continue selling when out of stock
};

export type PaymentsFullfilledItemSchema = {
  _id: string; // The id of product price
  name: string; // Name of the product
  product: PaymentsProductDefaultResponseDTO; // Product details
  price: PaymentsPriceDefaultResponseDTO; // Price details
  qty: number; // The no of quantity of the current fulfilled item
};

export type PaymentsFullfillmentSchema = {
  _id: string; // The unique identifier for the fulfillment item.
  altId: string; // Location Id or Agency Id
  altType: "location"; // Allowed value: location
  trackings: PaymentsFullfillmentTrackingSchema[]; // Fulfillment tracking information
  items: PaymentsFullfilledItemSchema[]; // Fulfilled items
  createdAt: string; // created at (2023-12-12T09:27:42.355Z)
  updatedAt: string; // updated at (2023-12-12T09:27:42.355Z)
};

export type PaymentsFullfillmentListResponseDTO = {
  status: boolean; // Status of the request
  data: PaymentsFullfillmentSchema; // Fulfilled items
};

export type PaymentsFullfillmentCreateResponseDTO =
  PaymentsFullfillmentListResponseDTO;

type PaymentsTxnChargeSnapshotSchema = {
  id?: string; // Charge id for transaction.
  object?: string; // Object of the charge.
  account_country?: string; // Account country for the charge.
  account_name?: string; // Account name for the charge.
};

type PaymentsTxnMethods = {
  [key: string]: {
    [key: string]: string;
  };
};

export type PaymentsTxnResponseSchema = {
  _id: string; // The unique identifier for the transaction.
  altId: string; // AltId is the unique identifier eg: location id.
  altType: string; // AltType is the type of identifier.
  contactId?: string; // Contact id corresponding to the transaction.
  contactName?: string; // Contact name corresponding to the transaction.
  contactEmail?: string; // Contact email corresponding to the transaction.
  currency?: string; // Currency in which transaction occurred.
  amount?: number; // Transaction value.
  status: string; // The status of the transaction (e.g., succeeded).
  liveMode?: boolean; // Transaction is in live / test mode.
  entityType?: string; // Entity type of transaction (eg: order).
  entityId?: string; // Entity id for the transaction. e.g: order id
  entitySourceType: PaymentsOrderSourceType; // Entity source type of transaction (eg: funnel).
  entitySourceSubType?: PaymentsOrderSourceSubType; // Entity source sub-type of the transactions.
  entitySourceName?: string; // Entity source name for the transaction.
  entitySourceId?: string; // Entity source id for the transaction.
  entitySourceMeta?: PaymentsOrderSourceMeta; // Meta content for the entity source of transaction.
  subscriptionId?: string; // Subscription id for transaction.
  chargeId?: string; // Charge id for transaction.
  chargeSnapshot?: PaymentsTxnChargeSnapshotSchema; // Charge snapshot of transaction.
  paymentProviderType?: string; // Payment provider for transaction.
  paymentProviderConnectedAccount?: string; // Payment provider account id for transaction.
  ipAddress?: string; // Ip address from where transaction was initiated.
  createdAt: string; // The creation timestamp of the transaction. (2023-11-20T10:23:36.515Z)
  updatedAt: string; // The last update timestamp of the transaction. (2024-01-23T09:57:04.846Z)
  amountRefunded?: number; // Transaction amount refunded.
  paymentMethod?: PaymentsTxnMethods; // Transaction payment method details.
};

export type PaymentsTxnListResponseDTO = {
  data: PaymentsTxnResponseSchema[];
  totalCount: number;
};

type PaymentTxnPaymentProviderSchema = {
  type?: string; // Payment provider type
  connectedAccount?: {
    _id?: string; // Connected account id
    accountId?: string; // Account id
  };
};

type PaymentTxnQBResponseSchema = {
  domain?: string; // Domain of the source.
  sparse?: boolean; // Sparse details.
  Id?: string; // Id of the transaction.
  SyncToken?: string; // Sync token of the transaction.
  TotalAmt?: number; // Total amount of the transaction.
};

export type PaymentsTxnGetResponseDTO = {
  _id: string; // The unique identifier for the transaction.
  altId: string; // AltId is the unique identifier eg: location id.
  altType: string; // AltType is the type of identifier.
  contactId?: string; // Contact id corresponding to the transaction.
  contactSnapshot?: PaymentsOrderContactSnapshotSchema; // Contact details of the transaction.
  currency?: string; // Currency in which transaction was made.
  amount?: number; // Transaction value.
  status?: string; // The status of the transaction (e.g., succeeded).
  liveMode?: boolean; // Transaction is in live / test mode.
  createdAt: string; // The creation timestamp of the transaction. (2023-11-20T10:23:36.515Z)
  updatedAt: string; // The last update timestamp of the transaction. (2024-01-23T09:57:04.846Z)
  entityType?: string; // Entity type of transaction (eg: order).
  entityId?: string; // Entity id for the transaction. e.g: order id
  entitySource?: PaymentsOrderSourceSchema; // Entity source details for the transaction.
  chargeId?: string; // Charge id for transaction.
  chargeSnapshot?: PaymentsTxnChargeSnapshotSchema; // Charge snapshot of transaction.
  invoiceId?: string; // Invoice id for the transaction.
  subscriptionId?: string; // Subscription id for transaction.
  paymentProvider?: PaymentTxnPaymentProviderSchema; // Payment provider details of the transaction.
  ipAddress?: string; // Ip address from where transaction was initiated.
  meta?: PaymentsOrderSourceMeta; // Meta details of the transaction.
  markAsTest?: boolean; // Is test transaction.
  isParent?: boolean; // Is parent transaction.
  amountRefunded?: number; // Transaction amount refunded.
  receiptId?: string; // Receipt id for transaction.
  qboSynced?: boolean; // Is transaction qbo synced.
  qboResponse?: PaymentTxnQBResponseSchema; // Qbo details of the transaction.
  traceId?: string; // Trace id of the transaction.
};

type PaymentsSubscriptionSnapshotSchema = {
  status?: string; // Subscription status.
  status_update_time?: string; // Subscription status update time.
  id?: string; // Subscription id.
  plan_id?: string; // Subscription plan id.
  start_time?: string; // Subscription start time. (2022-08-16T11:05:31Z)
  quantity?: number; // Subscription quantity.
};

export type PaymentsSubscriptionResponseSchema = {
  _id: string; // The unique identifier for the subscription.
  altId: string; // AltId is the unique identifier eg: location id.
  altType: string; // AltType is the type of identifier.
  contactId?: string; // Contact id corresponding to the subscription.
  contactName?: string; // Contact name corresponding to the subscription.
  contactEmail?: string; // Contact email corresponding to the subscription.
  currency?: string; // Currency in which subscription occurred.
  amount?: number; // Subscription value.
  status: string; // The status of the subscription (e.g., succeeded).
  liveMode?: boolean; // Subscription is in live / test mode.
  entityType?: string; // Entity type of subscription (eg: order).
  entityId?: string; // Entity id for the subscription. e.g: order id
  entitySourceType: PaymentsOrderSourceType; // Entity source type of subscription (eg: funnel).
  entitySourceName?: string; // Entity source name for the subscription.
  entitySourceId?: string; // Entity source id for the subscription.
  entitySourceMeta?: PaymentsOrderSourceMeta; // Meta content for the entity source of subscription.
  subscriptionId?: string; // Subscription id for subscription.
  subscriptionSnapshot?: PaymentsSubscriptionSnapshotSchema; // Snapshot of subscription.
  paymentProviderType?: string; // Payment provider for subscription.
  paymentProviderConnectedAccount?: string; // Payment provider connected account id for subscription.
  ipAddress?: string; // Ip address from where subscription was initiated.
  createdAt: string; // The creation timestamp of the subscription. (2023-11-20T10:23:36.515Z)
  updatedAt: string; // The last update timestamp of the subscription. (2024-01-23T09:57:04.846Z)
};

export type PaymentsSubscriptionListResponseDTO = {
  data: PaymentsSubscriptionResponseSchema[];
  totalCount: number;
};

type PaymentsSubscriptionCouponSchema = {
  _id?: string; // Coupon id.
  usageCount?: number; // Coupon usage count.
  altId?: string; // Coupon alt id.
  altType?: string; // Coupon alt type.
  name?: string; // Coupon name.
  code?: string; // Coupon code.
  discountType?: string; // Coupon discount type.
  discountValue?: number; // Coupon discount value.
};

type PaymentsSubscriptionScheduleSchema = {
  collection?: string; // Collection of the schedule.
  id?: string; // Id of the schedule.
};

type PaymentsSubscriptionAutoPaymentSchema = {
  customerId?: string; // Customer id for auto payment.
  paymentMethodId?: string; // Payment method id for auto payment.
};

type PaymentsSubscriptionRecurringProductSchema = {
  locationId?: string; // Location id for recurring product.
  funnel?: string; // Funnel id for recurring product.
  step?: string; // Step id for recurring product.
  name?: string; // Name of the recurring product.
};

export type PaymentsSubscriptionGetResponseDTO = {
  _id: string; // The unique identifier for the subscription.
  altId: string; // AltId is the unique identifier eg: location id.
  altType: string; // AltType is the type of identifier.
  contactId?: string; // Contact id corresponding to the subscription.
  contactSnapshot?: PaymentsOrderContactSnapshotSchema; // Contact details of the subscription.
  coupon?: PaymentsSubscriptionCouponSchema; // Coupon details of the subscription.
  currency?: string; // Currency in which subscription was made.
  amount?: number; // Subscription value.
  status: string; // The status of the subscription (e.g., succeeded).
  liveMode?: boolean; // Subscription is in live / test mode.
  entityType?: string; // Entity type of subscription (eg: order).
  entityId?: string; // Entity id for the subscription. e.g: order id
  entitySource?: PaymentsOrderSourceSchema; // Entity source details for the subscription.
  subscriptionId?: string; // Subscription id for subscription.
  subscriptionSnapshot?: PaymentsSubscriptionSnapshotSchema; // Snapshot of subscription.
  paymentProvider?: PaymentTxnPaymentProviderSchema; // Payment provider details for the subscription.
  ipAddress?: string; // Ip address from where subscription was initiated.
  createdAt: string; // The creation timestamp of the subscription. (2023-11-20T10:23:36.515Z)
  updatedAt: string; // The last update timestamp of the subscription. (2024-01-23T09:57:04.846Z)
  meta?: PaymentsOrderMeta; // Meta details of the subscription.
  markAsTest?: boolean; // Is test subscription.
  schedule?: PaymentsSubscriptionScheduleSchema; // Scedule details for the subscription.
  autoPayment?: PaymentsSubscriptionAutoPaymentSchema; // Auto payment details of the subscription.
  recurringProduct?: PaymentsSubscriptionRecurringProductSchema; // Recurring product details of the subscription.
  canceledAt?: string; // Cancellation timestamp of the subscription.
  canceledBy?: string; // User id who cancelled the subscription.
  traceId?: string; // Trace id of the subscription.
};

export type PaymentsCustomProviderCreateDTO = {
  name: string; // The name of the custom provider.
  description: string; // A brief description providing additional information about the custom provider.
  paymentsUrl: string; // This url will be loaded in iFrame to start a payment session.
  queryUrl: string; // The url used for querying payments related events. Ex. verify, refund, subscription etc.
  imageUrl: string; // The URL to an image representing the custom provider.
};

export type PaymentsCustomProviderConnectSchema = {
  live?: {
    apiKey: string; // API key for the custom provider
    publishableKey: string; // Publishable key for the custom provider
  };
  test?: {
    apiKey: string; // API key for the custom provider
    publishableKey: string; // Publishable key for the custom provider
  };
};

type PaymentsCustomProviderConnectLiveSchema = {
  live: {
    apiKey: string; // API key for the custom provider
    publishableKey: string; // Publishable key for the custom provider
    liveMode?: boolean; // Live mode status
  };
  test: {
    apiKey: string; // API key for the custom provider
    publishableKey: string; // Publishable key for the custom provider
    liveMode?: boolean; // Live mode status
  };
};

export type PaymentsCustomProviderCreateResponseDTO =
  PaymentsCustomProviderGetResponseDTO;

export type PaymentsCustomProviderKeysSchema = {
  apiKey: string; // API key for the custom provider
  publishableKey: string; // Publishable key for the custom provider
};

export type PaymentsCustomProviderConnectResponseDTO = {
  _id: string; // The unique identifier for the custom provider.
  locationId: string; // Location id
  marketplaceAppId: string; // The application id of marketplace
  name: string; // The name of the custom provider.
  description: string; // A brief description providing additional information about the custom provider.
  paymentsUrl: string; // This url will be loaded in iFrame to start a payment session.
  queryUrl: string; // The url used for querying payments related events. Ex. verify, refund, subscription etc.
  imageUrl: string; // The URL to an image representing the custom provider.
  paymentProvider?: PaymentsCustomProviderConnectLiveSchema; // Payment provider details.
  deleted: boolean; // Whether the config is deleted or not. true represents config is deleted
  createdAt: string; // The creation timestamp of the custom provider. (2023-11-20T10:23:36.515Z)
  updatedAt: string; // The last update timestamp of the custom provider. (2024-01-23T09:57:04.846Z)
  traceId: string; // Trace id of the custom provider.
};

export interface PaymentsCustomProviderGetResponseDTO
  extends PaymentsCustomProviderConnectResponseDTO {
  paymentProvider: PaymentsCustomProviderConnectLiveSchema; // Payment provider details.
}

export type PaymentsCustomProviderDeleteResponseDTO = {
  liveMode: boolean; // The status of the Custom Provider
};

export type PaymentsCustomProviderDisconnectResponseDTO = {
  success: boolean; // The status of the Custom Provider
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
