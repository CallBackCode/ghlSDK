export type BusinessDTO = {
  id: string /** Business Id (63771dcac1116f0e21de8e12) */;
  name: string /** Business Name (Microsoft) */;
  locationId: string /** Business Location Id (63771dcac1116f0e21de8e12) */;
  phone?: string /** Business Phone Number (+1234567890) */;
  email?: string /** Business Email (info@business.com) */;
  website?: string /** Business Website (business.com) */;
  address?: string /** Business Address (123 Business St) */;
  city?: string /** Business City (Seattle) */;
  postalCode?: string /** Business Postal Code (12345) */;
  state?: string /** Business State (Washington) */;
  country?: string /** Business Country (US) */;
  description?: string /** Business Description (Business Description) */;
  updatedBy?: any /** Business Last Updated By (User Object) */;
  createdAt?: string /** Business Creation Date / Time (2021-10-01T00:00:00.000Z) */;
  updatedAt?: string /** Business Last Updated Date / Time (2021-10-01T00:00:00.000Z) */;
};

export type CreateBusinessDTO = {
  name: string /** Business Name (Microsoft) */;
  locationId: string /** Business Location Id (63771dcac1116f0e21de8e12) */;
  phone?: string /** Business Phone Number (+1234567890) */;
  email?: string /** Business Email (info@business.com) */;
  website?: string /** Business Website (business.com) */;
  address?: string /** Business Address (123 Business St) */;
  city?: string /** Business City (Seattle) */;
  postalCode?: string /** Business Postal Code (12345) */;
  state?: string /** Business State (Washington) */;
  country?: string /** Business Country (US) */;
  description?: string /** Business Description (Business Description) */;
};

export type UpdateBusinessDTO = {
  name?: string /** Business Name (Microsoft) */;
  phone?: string /** Business Phone Number (+1234567890) */;
  email?: string /** Business Email (info@busienss.com) */;
  website?: string /** Business Website (business.com) */;
  address?: string /** Business Address (123 Business St) */;
  city?: string /** Business City (Seattle) */;
  postalCode?: string /** Business Postal Code (12345) */;
  state?: string /** Business State (Washington) */;
  country?: string /** Business Country (US) */;
  description?: string /** Business Description (Business Description) */;
};

export type BusienssCreateUpdateResponseDTO = {
  success: boolean /** Success Status (true) */;
  business: BusinessDTO /** Business Object (Business Object) */;
};

export type BusinessGetResponseDTO = {
  business: BusinessDTO /** Business Object (Business Object) */;
};

export type BusinessSearchResponseDTO = {
  businesses: BusinessDTO[] /** Array of Business Objects ([Business Object]) */;
};
