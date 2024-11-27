export declare const prices: {
    get: (locationId: string, productId: string, priceId: string, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/products").ProductsDefaultPriceResponseDTO> | null;
    search: (productId: string, options: {
        locationId: string;
        ids?: string;
        limit?: number;
        offset?: number;
    }, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/products").ProductsPriceListResponseDTO> | null;
    create: (productId: string, options: import("../../../types/products").ProductsPriceCreateDTO, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/products").ProductsDefaultPriceResponseDTO> | null;
    update: (productId: string, priceId: string, options: import("../../../types/products").ProductsPriceUpdateDTO, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/products").ProductsDefaultPriceResponseDTO> | null;
    delete: (locationId: string, productId: string, priceId: string, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/products").ProductsDeleteResponseDTO> | null;
};
