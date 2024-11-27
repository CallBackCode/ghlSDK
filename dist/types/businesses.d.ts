export type BusinessDTO = {
    id: string;
    name: string;
    locationId: string;
    phone?: string;
    email?: string;
    website?: string;
    address?: string;
    city?: string;
    postalCode?: string;
    state?: string;
    country?: string;
    description?: string;
    updatedBy?: any;
    createdAt?: string;
    updatedAt?: string;
};
export type CreateBusinessDTO = {
    name: string;
    locationId: string;
    phone?: string;
    email?: string;
    website?: string;
    address?: string;
    city?: string;
    postalCode?: string;
    state?: string;
    country?: string;
    description?: string;
};
export type UpdateBusinessDTO = {
    name?: string;
    phone?: string;
    email?: string;
    website?: string;
    address?: string;
    city?: string;
    postalCode?: string;
    state?: string;
    country?: string;
    description?: string;
};
export type BusienssCreateUpdateResponseDTO = {
    success: boolean;
    business: BusinessDTO;
};
export type BusinessGetResponseDTO = {
    business: BusinessDTO;
};
export type BusinessSearchResponseDTO = {
    businesses: BusinessDTO[];
};
