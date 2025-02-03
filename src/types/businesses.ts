import { CountryCodes } from "./_global";

export namespace Businesses {
  /**
   * A business object.
   *
   * @requires [id, name, locationId]
   * @memberof Businesses
   * @example
   * ```ts
   * const business: Businesses.DTO = {
   *  id: "63771dcac1116f0e21de8e12",
   *  name: "Microsoft",
   *  locationId: "63771dcac1116f0e21de8e12",
   *  phone: "+1234567890",
   *  email: "info@business.com",
   *  website: "business.com",
   *  address: "123 Business St",
   *  city: "Beverly Hills",
   *  postalCode: "90210",
   *  state: "California",
   *  country: "US",
   *  description: "Business Description",
   *  updatedBy: {},
   *  createdAt: "2021-10-01T00:00:00.000Z",
   *  updatedAt: "2021-10-01T00:00:00.000Z",
   * };
   * ```
   *
   * @property {string} [id] - The unique identifier of the business.
   * @example "63771dcac1116f0e21de8e12"
   *
   * @property {string} [name] - The name of the business.
   * @example "Microsoft"
   *
   * @property {string} [locationId] - The location id of the business.
   * @example "63771dcac1116f0e21de8e12"
   *
   * @property {string} [phone] - The phone number of the business.
   * @example "+1234567890"
   *
   * @property {string} [email] - The email of the business.
   * @example "info@business.com"
   *
   * @property {string} [website] - The website of the business.
   * @example "business.com"
   *
   * @property {string} [address] - The address of the business.
   * @example "123 Business St"
   *
   * @property {string} [city] - The city of the business.
   * @example "Beverly Hills"
   *
   * @property {string} [postalCode] - The postal code of the business.
   * @example "90210"
   *
   * @property {string} [state] - The state of the business.
   * @example "California"
   *
   * @property {CountryCodes} [country] - The country of the business.
   * @example "US"
   *
   * @property {string} [description] - The description of the business.
   * @example "Business Description"
   *
   * @property {any} [updatedBy] - Information on the user who last updated the business.
   * @example {}
   *
   * @property {string} [createdAt] - The date and time the business was created. (ISO 8601: YYYY-MM-DDTHH:MM:SS.MMMZ)
   * @example "2021-10-01T00:00:00.000Z"
   *
   * @property {string} [updatedAt] - The date and time the business was last updated. (ISO 8601: YYYY-MM-DDTHH:MM:SS.MMMZ)
   * @example "2021-10-01T00:00:00.000Z"
   */
  export type DTO = {
    /**
     * The unique identifier of the business.
     *
     * @required
     * @type {string}
     * @memberof DTO
     * @example "63771dcac1116f0e21de8e12"
     */
    id: string;

    /**
     * The name of the business.
     *
     * @required
     * @type {string}
     * @memberof DTO
     * @example "Microsoft"
     */
    name: string;

    /**
     * The location id of the business.
     *
     * @required
     * @type {string}
     * @memberof DTO
     * @example "63771dcac1116f0e21de8e12"
     */
    locationId: string;

    /**
     * The phone number of the business.
     *
     * @type {string}
     * @memberof DTO
     * @example "+1234567890"
     */
    phone?: string;

    /**
     * The email of the business.
     *
     * @type {string}
     * @memberof DTO
     * @example "info@business.com"
     */
    email?: string;

    /**
     * The website of the business.
     *
     * @type {string}
     * @memberof DTO
     * @example "business.com"
     */
    website?: string;

    /**
     * The address of the business.
     *
     * @type {string}
     * @memberof DTO
     * @example "123 Business St"
     */
    address?: string;

    /**
     * The city of the business.
     *
     * @type {string}
     * @memberof DTO
     * @example "Beverly Hills"
     */
    city?: string;

    /**
     * The postal code of the business.
     *
     * @type {string}
     * @memberof DTO
     * @example "90210"
     */
    postalCode?: string;

    /**
     * The state of the business.
     *
     * @type {string}
     * @memberof DTO
     * @example "California"
     */
    state?: string;

    /**
     * The country of the business.
     *
     * @type {CountryCodes}
     * @memberof DTO
     * @example "US"
     */
    country?: CountryCodes;

    /**
     * The description of the business.
     *
     * @type {string}
     * @memberof DTO
     * @example "Business Description"
     */
    description?: string;

    /**
     * Information on the user who last updated the business.
     *
     * @type {any}
     * @memberof DTO
     * @example {}
     */
    updatedBy?: any /** Business Last Updated By (User Object) */;

    /**
     * The date and time the business was created. (ISO 8601: YYYY-MM-DDTHH:MM:SS.MMMZ)
     *
     * @type {string}
     * @memberof DTO
     * @example "2021-10-01T00:00:00.000Z"
     */
    createdAt?: string;

    /**
     * The date and time the business was last updated. (ISO 8601: YYYY-MM-DDTHH:MM:SS.MMMZ)
     *
     * @type {string}
     * @memberof DTO
     * @example "2021-10-01T00:00:00.000Z"
     */
    updatedAt?: string;
  };

  /**
   * The data required to create a business.
   *
   * @requires [name, locationId]
   * @memberof Businesses
   * @example
   * ```ts
   * const createDTO: Businesses.CreateDTO = {
   *  name: "Microsoft",
   *  locationId: "63771dcac1116f0e21de8e12",
   *  phone: "+1234567890",
   *  email: "info@business.com",
   *  website: "business.com",
   *  address: "123 Business St",
   *  city: "Beverly Hills",
   *  postalCode: "90210",
   *  state: "California",
   *  country: "US",
   *  description: "Business Description",
   * };
   * ```
   *
   * @property {string} [name] - The name of the business.
   * @example "Microsoft"
   *
   * @property {string} [locationId] - The location id of the business.
   * @example "63771dcac1116f0e21de8e12"
   *
   * @property {string} [phone] - The phone number of the business.
   * @example "+1234567890"
   *
   * @property {string} [email] - The email of the business.
   * @example "info@business.com"
   *
   * @property {string} [website] - The website of the business.
   * @example "business.com"
   *
   * @property {string} [address] - The address of the business.
   * @example "123 Business St"
   *
   * @property {string} [city] - The city of the business.
   * @example "Beverly Hills"
   *
   * @property {string} [postalCode] - The postal code of the business.
   * @example "90210"
   *
   * @property {string} [state] - The state of the business.
   * @example "California"
   *
   * @property {CountryCodes} [country] - The country of the business.
   * @example "US"
   *
   * @property {string} [description] - The description of the business.
   * @example "Business Description"
   */
  export type CreateDTO = {
    /**
     * The name of the business.
     *
     * @required
     * @type {string}
     * @memberof CreateDTO
     * @example "Microsoft"
     */
    name: string;

    /**
     * The location id of the business.
     *
     * @required
     * @type {string}
     * @memberof CreateDTO
     * @example "63771dcac1116f0e21de8e12"
     */
    locationId: string;

    /**
     * The phone number of the business.
     *
     * @type {string}
     * @memberof CreateDTO
     * @example "+1234567890"
     */
    phone?: string;

    /**
     * The email of the business.
     *
     * @type {string}
     * @memberof CreateDTO
     * @example "info@business.com"
     */
    email?: string;

    /**
     * The website of the business.
     *
     * @type {string}
     * @memberof CreateDTO
     * @example "business.com"
     */
    website?: string;

    /**
     * The address of the business.
     *
     * @type {string}
     * @memberof CreateDTO
     * @example "123 Business St"
     */
    address?: string;

    /**
     * The city of the business.
     *
     * @type {string}
     * @memberof CreateDTO
     * @example "Beverly Hills"
     */
    city?: string;

    /**
     * The postal code of the business.
     *
     * @type {string}
     * @memberof CreateDTO
     * @example "90210"
     */
    postalCode?: string;

    /**
     * The state of the business.
     *
     * @type {string}
     * @memberof CreateDTO
     * @example "California"
     */
    state?: string;

    /**
     * The country of the business.
     *
     * @type {CountryCodes}
     * @memberof CreateDTO
     * @example "US"
     */
    country?: string;

    /**
     * The description of the business.
     *
     * @type {string}
     * @memberof CreateDTO
     * @example "Business Description"
     */
    description?: string;
  };

  /**
   * The data required to update a business.
   *
   * @memberof Businesses
   * @example
   * ```ts
   * const updateDTO: Businesses.UpdateDTO = {
   *  name: "Microsoft",
   *  locationId: "63771dcac1116f0e21de8e12",
   *  phone: "+1234567890",
   *  email: "info@business.com",
   *  website: "business.com",
   *  address: "123 Business St",
   *  city: "Beverly Hills",
   *  postalCode: "90210",
   *  state: "California",
   *  country: "US",
   *  description: "Business Description",
   * };
   * ```
   *
   * @property {string} [name] - The name of the business.
   * @example "Microsoft"
   *
   * @property {string} [locationId] - The location id of the business.
   * @example "63771dcac1116f0e21de8e12"
   *
   * @property {string} [phone] - The phone number of the business.
   * @example "+1234567890"
   *
   * @property {string} [email] - The email of the business.
   * @example "info@business.com"
   *
   * @property {string} [website] - The website of the business.
   * @example "business.com"
   *
   * @property {string} [address] - The address of the business.
   * @example "123 Business St"
   *
   * @property {string} [city] - The city of the business.
   * @example "Beverly Hills"
   *
   * @property {string} [postalCode] - The postal code of the business.
   * @example "90210"
   *
   * @property {string} [state] - The state of the business.
   * @example "California"
   *
   * @property {CountryCodes} [country] - The country of the business.
   * @example "US"
   *
   * @property {string} [description] - The description of the business.
   * @example "Business Description"
   */
  export type UpdateDTO = {
    /**
     * The name of the business.
     *
     * @type {string}
     * @memberof UpdateDTO
     * @example "Microsoft"
     */
    name?: string;

    /**
     * The phone number of the business.
     *
     * @type {string}
     * @memberof UpdateDTO
     * @example "+1234567890"
     */
    phone?: string;

    /**
     * The email of the business.
     *
     * @type {string}
     * @memberof UpdateDTO
     * @example "info@business.com"
     */
    email?: string;

    /**
     * The website of the business.
     *
     * @type {string}
     * @memberof UpdateDTO
     * @example "business.com"
     */
    website?: string;

    /**
     * The address of the business.
     *
     * @type {string}
     * @memberof UpdateDTO
     * @example "123 Business St"
     */
    address?: string;

    /**
     * The city of the business.
     *
     * @type {string}
     * @memberof UpdateDTO
     * @example "Beverly Hills"
     */
    city?: string;

    /**
     * The postal code of the business.
     *
     * @type {string}
     * @memberof UpdateDTO
     * @example "90210"
     */
    postalCode?: string;

    /**
     * The state of the business.
     *
     * @type {string}
     * @memberof UpdateDTO
     * @example "California"
     */
    state?: string;

    /**
     * The country of the business.
     *
     * @type {CountryCodes}
     * @memberof UpdateDTO
     * @example "US"
     */
    country?: string;

    /**
     * The description of the business.
     *
     * @type {string}
     * @memberof UpdateDTO
     * @example "Business Description"
     */
    description?: string;
  };

  /**
   * The response data after creating or updating a business.
   *
   * @requires [success, business]
   * @memberof Businesses
   * @example
   * ```ts
   * const createUpdateResponseDTO: Businesses.CreateUpdateResponseDTO = {
   *  success: true,
   *  business: {
   *    id: "63771dcac1116f0e21de8e12",
   *    name: "Microsoft",
   *    locationId: "63771dcac1116f0e21de8e12",
   *    phone: "+1234567890",
   *    email: "info@business.com",
   *    website: "business.com",
   *    address: "123 Business St",
   *    city: "Beverly Hills",
   *    postalCode: "90210",
   *    state: "California",
   *    country: "US",
   *    description: "Business Description",
   *    updatedBy: {},
   *    createdAt: "2021-10-01T00:00:00.000Z",
   *    updatedAt: "2021-10-01T00:00:00.000Z",
   *  }
   * };
   * ```
   *
   * @property {boolean} [success] - Returns true if the operation was successful, otherwise false.
   * @example true
   *
   * @property {DTO} [business] - The business object.
   * @example
   * ```ts
   * const business: Businesses.DTO = {
   *  id: "63771dcac1116f0e21de8e12",
   *  name: "Microsoft",
   *  locationId: "63771dcac1116f0e21de8e12",
   *  phone: "+1234567890",
   *  email: "info@business.com",
   *  website: "business.com",
   *  address: "123 Business St",
   *  city: "Beverly Hills",
   *  postalCode: "90210",
   *  state: "California",
   *  country: "US",
   *  description: "Business Description",
   *  updatedBy: {},
   *  createdAt: "2021-10-01T00:00:00.000Z",
   *  updatedAt: "2021-10-01T00:00:00.000Z",
   * };
   * ```
   */
  export type CreateUpdateResponseDTO = {
    /**
     * Returns true if the operation was successful, otherwise false.
     *
     * @reqired
     * @type {boolean}
     * @memberof CreateUpdateResponseDTO
     * @example true
     */
    success: boolean;

    /**
     * The business object.
     *
     * @required
     * @type {DTO}
     * @memberof CreateUpdateResponseDTO
     * @example
     * ```ts
     * const business: Businesses.DTO = {
     *  id: "63771dcac1116f0e21de8e12",
     *  name: "Microsoft",
     *  locationId: "63771dcac1116f0e21de8e12",
     *  phone: "+1234567890",
     *  email: "info@business.com",
     *  website: "business.com",
     *  address: "123 Business St",
     *  city: "Beverly Hills",
     *  postalCode: "90210",
     *  state: "California",
     *  country: "US",
     *  description: "Business Description",
     *  updatedBy: {},
     *  createdAt: "2021-10-01T00:00:00.000Z",
     *  updatedAt: "2021-10-01T00:00:00.000Z",
     * };
     * ```
     *
     * @property {string} [id] - The unique identifier of the business.
     * @example "63771dcac1116f0e21de8e12"
     *
     * @property {string} [name] - The name of the business.
     * @example "Microsoft"
     *
     * @property {string} [locationId] - The location id of the business.
     * @example "63771dcac1116f0e21de8e12"
     *
     * @property {string} [phone] - The phone number of the business.
     * @example "+1234567890"
     *
     * @property {string} [email] - The email of the business.
     * @example "info@business.com"
     *
     * @property {string} [website] - The website of the business.
     * @example "business.com"
     *
     * @property {string} [address] - The address of the business.
     * @example "123 Business St"
     *
     * @property {string} [city] - The city of the business.
     * @example "Beverly Hills"
     *
     * @property {string} [postalCode] - The postal code of the business.
     * @example "90210"
     *
     * @property {string} [state] - The state of the business.
     * @example "California"
     *
     * @property {CountryCodes} [country] - The country of the business.
     * @example "US"
     *
     * @property {string} [description] - The description of the business.
     * @example "Business Description"
     *
     * @property {any} [updatedBy] - Information on the user who last updated the business.
     * @example {}
     *
     * @property {string} [createdAt] - The date and time the business was created. (ISO 8601: YYYY-MM-DDTHH:MM:SS.MMMZ)
     * @example "2021-10-01T00:00:00.000Z"
     *
     * @property {string} [updatedAt] - The date and time the business was last updated. (ISO 8601: YYYY-MM-DDTHH:MM:SS.MMMZ)
     * @example "2021-10-01T00:00:00.000Z"
     */
    business: DTO;
  };

  /**
   * The response data after getting a business.
   *
   * @requires [business]
   * @memberof Businesses
   * @example
   * ```ts
   * const getResponseDTO: Businesses.GetResponseDTO = {
   *  business: {
   *    id: "63771dcac1116f0e21de8e12",
   *    name: "Microsoft",
   *    locationId: "63771dcac1116f0e21de8e12",
   *    phone: "+1234567890",
   *    email: "info@business.com",
   *    website: "business.com",
   *    address: "123 Business St",
   *    city: "Beverly Hills",
   *    postalCode: "90210",
   *    state: "California",
   *    country: "US",
   *    description: "Business Description",
   *    updatedBy: {},
   *    createdAt: "2021-10-01T00:00:00.000Z",
   *    updatedAt: "2021-10-01T00:00:00.000Z",
   *  }
   * };
   * ```
   *
   * @property {DTO} [business] - The business object.
   * @example
   * ```ts
   * const business: Businesses.DTO = {
   *  id: "63771dcac1116f0e21de8e12",
   *  name: "Microsoft",
   *  locationId: "63771dcac1116f0e21de8e12",
   *  phone: "+1234567890",
   *  email: "info@business.com"
   *  website: "business.com",
   *  address: "123 Business St",
   *  city: "Beverly Hills",
   *  postalCode: "90210",
   *  state: "California",
   *  country: "US",
   *  description: "Business Description",
   *  updatedBy: {},
   *  createdAt: "2021-10-01T00:00:00.000Z",
   *  updatedAt: "2021-10-01T00:00:00.000Z",
   * };
   * ```
   */
  export type GetResponseDTO = {
    /**
     * The business object.
     *
     * @required
     * @type {DTO}
     * @memberof GetResponseDTO
     * @example
     * ```ts
     * const business: Businesses.DTO = {
     *  id: "63771dcac1116f0e21de8e12",
     *  name: "Microsoft",
     *  locationId: "63771dcac1116f0e21de8e12",
     *  phone: "+1234567890",
     *  email: "info@business.com",
     *  website: "business.com",
     *  address: "123 Business St",
     *  city: "Beverly Hills",
     *  postalCode: "90210",
     *  state: "California",
     *  country: "US",
     *  description: "Business Description",
     *  updatedBy: {},
     *  createdAt: "2021-10-01T00:00:00.000Z",
     *  updatedAt: "2021-10-01T00:00:00.000Z",
     * };
     * ```
     *
     * @property {string} [id] - The unique identifier of the business.
     * @example "63771dcac1116f0e21de8e12"
     *
     * @property {string} [name] - The name of the business.
     * @example "Microsoft"
     *
     * @property {string} [locationId] - The location id of the business.
     * @example "63771dcac1116f0e21de8e12"
     *
     * @property {string} [phone] - The phone number of the business.
     * @example "+1234567890"
     *
     * @property {string} [email] - The email of the business.
     * @example "info@business.com"
     *
     * @property {string} [website] - The website of the business.
     * @example "business.com"
     *
     * @property {string} [address] - The address of the business.
     * @example "123 Business St"
     *
     * @property {string} [city] - The city of the business.
     * @example "Beverly Hills"
     *
     * @property {string} [postalCode] - The postal code of the business.
     * @example "90210"
     *
     * @property {string} [state] - The state of the business.
     * @example "California"
     *
     * @property {CountryCodes} [country] - The country of the business.
     * @example "US"
     *
     * @property {string} [description] - The description of the business.
     * @example "Business Description"
     *
     * @property {any} [updatedBy] - Information on the user who last updated the business.
     * @example {}
     *
     * @property {string} [createdAt] - The date and time the business was created. (ISO 8601: YYYY-MM-DDTHH:MM:SS.MMMZ)
     * @example "2021-10-01T00:00:00.000Z"
     *
     * @property {string} [updatedAt] - The date and time the business was last updated. (ISO 8601: YYYY-MM-DDTHH:MM:SS.MMMZ)
     * @example "2021-10-01T00:00:00.000Z"
     */
    business: DTO;
  };

  /**
   * The response data after getting a business.
   *
   * @requires [businesses]
   * @memberof Businesses
   * @example
   * ```ts
   * const getResponseDTO: Businesses.GetResponseDTO = {
   *  businesses: [{
   *    id: "63771dcac1116f0e21de8e12",
   *    name: "Microsoft",
   *    locationId: "63771dcac1116f0e21de8e12",
   *    phone: "+1234567890",
   *    email: "info@business.com",
   *    website: "business.com",
   *    address: "123 Business St",
   *    city: "Beverly Hills",
   *    postalCode: "90210",
   *    state: "California",
   *    country: "US",
   *    description: "Business Description",
   *    updatedBy: {},
   *    createdAt: "2021-10-01T00:00:00.000Z",
   *    updatedAt: "2021-10-01T00:00:00.000Z",
   *  }]
   * };
   * ```
   *
   * @property {DTO[]} [businesses] - The business object.
   * @example
   * ```ts
   * const businesses: Businesses.DTO[] = [{
   *  id: "63771dcac1116f0e21de8e12",
   *  name: "Microsoft",
   *  locationId: "63771dcac1116f0e21de8e12",
   *  phone: "+1234567890",
   *  email: "info@business.com"
   *  website: "business.com",
   *  address: "123 Business St",
   *  city: "Beverly Hills",
   *  postalCode: "90210",
   *  state: "California",
   *  country: "US",
   *  description: "Business Description",
   *  updatedBy: {},
   *  createdAt: "2021-10-01T00:00:00.000Z",
   *  updatedAt: "2021-10-01T00:00:00.000Z",
   * }];
   * ```
   */
  export type SearchResponseDTO = {
    /**
     * The business object.
     *
     * @required
     * @type {DTO[]}
     * @memberof SearchResponseDTO
     * @example
     * ```ts
     * const businesses: Businesses.DTO[] = [{
     *  id: "63771dcac1116f0e21de8e12",
     *  name: "Microsoft",
     *  locationId: "63771dcac1116f0e21de8e12",
     *  phone: "+1234567890",
     *  email: "info@business.com"
     *  website: "business.com",
     *  address: "123 Business St",
     *  city: "Beverly Hills",
     *  postalCode: "90210",
     *  state: "California",
     *  country: "US",
     *  description: "Business Description",
     *  updatedBy: {},
     *  createdAt: "2021-10-01T00:00:00.000Z",
     *  updatedAt: "2021-10-01T00:00:00.000Z",
     * }];
     *
     *
     * @property {string} [id] - The unique identifier of the business.
     * @example "63771dcac1116f0e21de8e12"
     *
     * @property {string} [name] - The name of the business.
     * @example "Microsoft"
     *
     * @property {string} [locationId] - The location id of the business.
     * @example "63771dcac1116f0e21de8e12"
     *
     * @property {string} [phone] - The phone number of the business.
     * @example "+1234567890"
     *
     * @property {string} [email] - The email of the business.
     * @example "info@business.com"
     *
     * @property {string} [website] - The website of the business.
     * @example "business.com"
     *
     * @property {string} [address] - The address of the business.
     * @example "123 Business St"
     *
     * @property {string} [city] - The city of the business.
     * @example "Beverly Hills"
     *
     * @property {string} [postalCode] - The postal code of the business.
     * @example "90210"
     *
     * @property {string} [state] - The state of the business.
     * @example "California"
     *
     * @property {CountryCodes} [country] - The country of the business.
     * @example "US"
     *
     * @property {string} [description] - The description of the business.
     * @example "Business Description"
     *
     * @property {any} [updatedBy] - Information on the user who last updated the business.
     * @example {}
     *
     * @property {string} [createdAt] - The date and time the business was created. (ISO 8601: YYYY-MM-DDTHH:MM:SS.MMMZ)
     * @example "2021-10-01T00:00:00.000Z"
     *
     * @property {string} [updatedAt] - The date and time the business was last updated. (ISO 8601: YYYY-MM-DDTHH:MM:SS.MMMZ)
     * @example "2021-10-01T00:00:00.000Z"
     */
    businesses: DTO[];
  };
}
