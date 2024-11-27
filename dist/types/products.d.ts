type RecurringInterval = "day" | "week" | "month" | "year";
type RecurringDTO = {
    interval: RecurringInterval;
    intervalCount: number;
};
type MembershipOfferDTO = {
    _id: string;
    label: string;
    value: number;
};
type InternalSourceOptions = "agency_plan" | "funnel" | "membership";
type PriceMetaDTO = {
    source: string;
    stripePriceId: string;
    internalSource: InternalSourceOptions;
};
type PriceTypeOptions = "one_time" | "recurring";
export type ProductsPriceCreateDTO = {
    name: string;
    type: PriceTypeOptions;
    currency: string;
    amount: number;
    recurring?: RecurringDTO;
    description?: string;
    membershipOffers?: MembershipOfferDTO[];
    trialPeriod?: number;
    totalCycles?: number;
    setupFee?: number;
    variantOptionIds?: string[];
    compareAtPrice?: number;
    locationId: string;
    userId?: string;
    meta?: PriceMetaDTO;
    trackInventory?: boolean;
    availableQuantity?: number;
    allowOutOfStockPurchases?: boolean;
};
export type ProductsDefaultPriceResponseDTO = {
    _id: string;
    membershipOffers?: MembershipOfferDTO[];
    variantOptionIds?: string[];
    locationId: string;
    product?: string;
    userId?: string;
    name: string;
    type: PriceTypeOptions;
    currency: string;
    amount: number;
    recurring?: RecurringDTO;
    createdAt?: string;
    updatedAt?: string;
    compareAtPrice?: number;
    trackInventory?: boolean;
    availableQuantity?: number;
    allowOutOfStockPurchases?: boolean;
};
export type ProductsPriceCreateResponseDTO = ProductsDefaultPriceResponseDTO;
export type ProductsPriceListResponseDTO = {
    prices: ProductsDefaultPriceResponseDTO[];
    total: number;
};
export type ProductsPriceGetResponseDTO = ProductsDefaultPriceResponseDTO;
export type ProductsPriceUpdateDTO = ProductsPriceCreateDTO;
export type ProductsPriceUpdateResponseDTO = ProductsDefaultPriceResponseDTO;
type ProductVariantOptionDTO = {
    id: string;
    name: string;
};
type ProductVariantDTO = {
    id: string;
    name: string;
    options: ProductVariantOptionDTO[];
};
type ProductMetaDTO = {
    id: string;
    title: string;
    url: string;
    type: "image" | "video";
    isFeatured?: boolean;
};
type ProductType = "DIGITAL" | "PHYSICAL" | "SERVICE";
export type ProductsGetResponseDTO = {
    _id: string;
    description?: string;
    variants: ProductVariantDTO[];
    medias: ProductMetaDTO[];
    locationId: string;
    name: string;
    productType: ProductType;
    availableInStore?: boolean;
    userId?: string;
    createdAt: string;
    updatedAt: string;
    statementDescriptor?: string;
    image?: string;
};
export type ProductsDeleteResponseDTO = {
    status: boolean;
};
export type ProductsPriceDeleteResponseDTO = ProductsDeleteResponseDTO;
export type ProductsCreateDTO = {
    name: string;
    locationId: string;
    description?: string;
    productType: ProductType;
    image?: string;
    statementDescriptor?: string;
    availableInStore?: boolean;
    medias?: ProductMetaDTO[];
    variants: ProductVariantDTO[];
};
export type ProductsCreateResponseDTO = ProductsGetResponseDTO;
export type ProductsUpdateDTO = ProductsCreateDTO;
export type ProductsUpdateResponseDTO = ProductsGetResponseDTO;
export type ProductsDefaultResponseDTO = ProductsGetResponseDTO;
type ListProductStats = {
    total: number;
};
export type ProductsListResponseDTO = {
    products: ProductsGetResponseDTO[];
    total: ListProductStats;
};
export {};
