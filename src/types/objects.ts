import {
  SearchFilter,
  SearchFilterConfig,
  SearchSort,
  SuccessDeleteDTO,
} from "./_global";

/**
 * Objects represent entities in the CRM system, such as  Contacts, Companies, or Custom Objects.
 * Objects serve as a foundation for organising and managing data.
 *
 * Custom Objects:
 * Unlike Standard objects, Custom Objects allow users to define and structure their own data models.
 * Custom Objects offer flexibility by enabling users to specify:
 * Name of the Object
 * Fields and Field Types (e.g., single line text)
 * Searchable Properties (fields that can be indexed for searching)
 *
 * Primary Display Property (the main identifier used for displaying the record)
 */
export namespace Objects {
  /**
   * Records: Records are instances of an object.
   * Each record contains specific data according to the schema defined in its parent object.
   */
  export namespace Records {
    /**
     * MonetaryValue: Represents a monetary value in a specific currency.
     * It includes:
     * - currency: The currency of the monetary value, currently only "default" is supported.
     * - value: The numerical value of the monetary amount.
     * @typedef {Object} MonetaryValue
     * @memberof Objects.Records
     * @example
     * ```ts
     * {
     *   currency: "default",
     *   value: 100
     * }
     * ```
     *
     * @property {string} currency - The currency of the monetary value, currently only "default" is supported.
     * @property {number} value - The numerical value of the monetary amount.
     */
    type MonetaryValue = {
      currency: "default"; // Currently only "default" is supported, which is the location's currency.
      value: number; // The monetary value in the specified currency.
    };

    /**
     * FileValue: Represents a file associated with a record.
     * It includes:
     * - url: The URL of the file.
     * @typedef {Object} FileValue
     * @memberof Objects.Records
     * @example
     * ```ts
     * {
     *   url: "https://example.com/file.pdf"
     * }
     * ```
     *
     * @property {string} url - The URL of the file.
     * @example
     * ```ts
     * {
     *   url: "https://example.com/file.pdf"
     * }
     * ```
     */
    type FileValue = {
      /** url: The URL of the file.
       * @property {string} url - The URL of the file.
       */
      url: string; // The URL of the file.
    };

    /**
     * RecordProperties: Represents the properties of a record.
     * It can be of various types, including:
     * - string
     * - number
     * - boolean
     * - Date
     * - string[]
     * - MonetaryValue (for currency fields)
     * - FileValue (for file fields)
     * - null
     *
     * @typedef {string | number | boolean | Date | string[] | MonetaryValue | FileValue | null} RecordProperties
     */
    type RecordProperties =
      | string
      | number
      | boolean
      | Date
      | string[]
      | MonetaryValue
      | FileValue
      | null;

    /**
     * UpdateBody: The structure of the request body when creating a new record.
     * It includes the location ID, owners, followers, and properties of the record.
     *
     * @memberof Objects.Records* @example
     * ```ts
     * const params: Objects.Records.UpdateBody = {
     *  owners: ['1a2b3c4d5e6f7g8h9i0j'],
     *  followers: ['BqTwX8QFwXzpegMve9EQ', '9NkT25Vor1v4aQatFsv2'],
     *  properties: {
     *    "customer_number": 1424, - Number Field
     *    "ticket_name": "Customer not able login", - Single Line, Multi Line field
     *    "phone_number": "+917000000000", - Phone Field
     *    "money": { - Currency Field
     *       "currency": "default", - Only "default" supported today (Location's currency).
     *       "value": 100 - Support for more currencies coming soon!!!
     *     },
     *    "type_of_ticket": "option_1_internal_key", - Dropdown Single Select Field Or Radio Field
     *    "section_of_app": ["contacts", "smartlist"], - Dropdown Multiple Select Field and Checkbox Field
     *    "recieved_on": "2024-07-11", - Date Picker Field
     *    "my_files": [ - Files type Field
     *       {
     *         "url": "---url_of_file---"
     *       }
     *    ],
     *   // For Text Box List options:
     *   "my_textbox_list_key.label_1_key": "Value 1",
     *   "my_textbox_list_key.label_2_key": "Value 2"
     *   }
     * };
     * ```
     *
     * @property {string[]} owners - Array of one Owner (User) ID
     * @example '1a2b3c4d5e6f7g8h9i0j'
     *
     * @property {string[]} followers - Array of one or more Follower (User) IDs
     * @example ['BqTwX8QFwXzpegMve9EQ', '9NkT25Vor1v4aQatFsv2']
     *
     * @property {RecordProperties} properties - The properties of the object.
     * @example '
     *  properties: {
     *    "customer_number": 1424, - Number Field
     *    "ticket_name": "Customer not able login", - Single Line, Multi Line field
     *    "phone_number": "+917000000000", - Phone Field
     *    "money": { - Currency Field
     *       "currency": "default", - Only "default" supported today (Location's currency).
     *       "value": 100 - Support for more currencies coming soon!!!
     *     },
     *    "type_of_ticket": "option_1_internal_key", - Dropdown Single Select Field Or Radio Field
     *    "section_of_app": ["contacts", "smartlist"], - Dropdown Multiple Select Field and Checkbox Field
     *    "recieved_on": "2024-07-11", - Date Picker Field
     *    "my_files": [ - Files type Field
     *       {
     *         "url": "---url_of_file---"
     *       }
     *    ],
     *   // For Text Box List options:
     *   "my_textbox_list_key.label_1_key": "Value 1",
     *   "my_textbox_list_key.label_2_key": "Value 2"
     *   }'
     */

    export type UpdateBody = {
      /**
       * owners: Array of one Owner (User) ID
       * @type {string[]}
       * @example ['1a2b3c4d5e6f7g8h9i0j']
       */
      owners: string[];

      /**
       * followers: Array of one or more Follower (User) IDs
       * @type {string[]}
       * @example ['BqTwX8QFwXzpegMve9EQ', '9NkT25Vor1v4aQatFsv2']
       */
      followers: string[];

      /**
       * properties: The properties of the object.
       * @type {Record<string, RecordProperties>}
       * @example
       * ```ts
       * properties: {
       *   "customer_number": 1424, // Number Field
       *   "ticket_name": "Customer not able login", // Single Line, Multi Line field
       *   "phone_number": "+917000000000", // Phone Field
       *   "money": { // Currency Field
       *     "currency": "default", // Only "default" supported today (Location's currency).
       *     "value": 100 // Support for more currencies coming soon!!!
       *   },
       *   "type_of_ticket": "option_1_internal_key", // Dropdown Single Select Field Or Radio Field
       *   "section_of_app": ["contacts", "smartlist"], // Dropdown Multiple Select Field and Checkbox Field
       *   "recieved_on": "2024-07-11", // Date Picker Field
       *   "my_files": [ // Files type Field
       *     {
       *       "url": "---url_of_file---"
       *     }
       *   ],
       *   // For Text Box List options:
       *   "my_textbox_list_key.label_1_key": "Value 1",
       *   "my_textbox_list_key.label_2_key": "Value 2"
       * }
       * ```
       */
      properties: Record<string, RecordProperties>;
    };

    /**
     * CreateBody: The structure of the request body when creating a new record.
     * It includes the location ID, owners, followers, and properties of the record.
     *
     * @requires locationId: The ID of the location where the record is created.
     * @memberof Objects.Records* @example
     * ```ts
     * const params: Objects.Records.CreateBody = {
     *  locationId: '502goXVW3lIExEQPOnd3',
     *  owners: ['1a2b3c4d5e6f7g8h9i0j'],
     *  followers: ['BqTwX8QFwXzpegMve9EQ', '9NkT25Vor1v4aQatFsv2'],
     *  properties: {
     *    "customer_number": 1424, - Number Field
     *    "ticket_name": "Customer not able login", - Single Line, Multi Line field
     *    "phone_number": "+917000000000", - Phone Field
     *    "money": { - Currency Field
     *       "currency": "default", - Only "default" supported today (Location's currency).
     *       "value": 100 - Support for more currencies coming soon!!!
     *     },
     *    "type_of_ticket": "option_1_internal_key", - Dropdown Single Select Field Or Radio Field
     *    "section_of_app": ["contacts", "smartlist"], - Dropdown Multiple Select Field and Checkbox Field
     *    "recieved_on": "2024-07-11", - Date Picker Field
     *    "my_files": [ - Files type Field
     *       {
     *         "url": "---url_of_file---"
     *       }
     *    ],
     *   // For Text Box List options:
     *   "my_textbox_list_key.label_1_key": "Value 1",
     *   "my_textbox_list_key.label_2_key": "Value 2"
     *   }
     * };
     * ```
     *
     * @property {string} locationId - The location ID of the object.
     * @example '502goXVW3lIExEQPOnd3'
     *
     * @property {string[]} owners - Array of one Owner (User) ID
     * @example '1a2b3c4d5e6f7g8h9i0j'
     *
     * @property {string[]} followers - Array of one or more Follower (User) IDs
     * @example ['BqTwX8QFwXzpegMve9EQ', '9NkT25Vor1v4aQatFsv2']
     *
     * @property {RecordProperties} properties - The properties of the object.
     * @example '
     *  properties: {
     *    "customer_number": 1424, - Number Field
     *    "ticket_name": "Customer not able login", - Single Line, Multi Line field
     *    "phone_number": "+917000000000", - Phone Field
     *    "money": { - Currency Field
     *       "currency": "default", - Only "default" supported today (Location's currency).
     *       "value": 100 - Support for more currencies coming soon!!!
     *     },
     *    "type_of_ticket": "option_1_internal_key", - Dropdown Single Select Field Or Radio Field
     *    "section_of_app": ["contacts", "smartlist"], - Dropdown Multiple Select Field and Checkbox Field
     *    "recieved_on": "2024-07-11", - Date Picker Field
     *    "my_files": [ - Files type Field
     *       {
     *         "url": "---url_of_file---"
     *       }
     *    ],
     *   // For Text Box List options:
     *   "my_textbox_list_key.label_1_key": "Value 1",
     *   "my_textbox_list_key.label_2_key": "Value 2"
     *   }'
     */

    export type CreateBody = UpdateBody & {
      /**
       * locationId: The location ID of the object.
       * @type {string}
       * @example '502goXVW3lIExEQPOnd3'
       */
      locationId: string;
    };

    /**
     * UpdateParams: The structure of the parameters when updating a record.
     *
     * @requires recordId: The ID of the record to be updated.
     * @requires objectId: The ID of the object to which the record belongs.
     * @requires locationId: The ID of the location where the record is updated.
     * @memberof Objects.Records
     * @example
     * ```ts
     * const params: Objects.Records.UpdateParams = {
     *   recordId: '1234567890abcdef',
     *   objectId: 'abcdef1234567890',
     *   locationId: '502goXVW3lIExEQPOnd3'
     * };
     * ```
     *
     * @property {string} recordId - The ID of the record to be updated.
     * @example '1234567890abcdef'
     *
     * @property {string} objectId - The ID of the object to which the record belongs.
     * @example 'abcdef1234567890'
     *
     * @property {string} locationId - The ID of the location where the record is updated.
     * @example '502goXVW3lIExEQPOnd3'
     */
    export type UpdateParams = {
      /**
       * recordId: The ID of the record to be updated.
       * @type {string}
       * @example '1234567890abcdef'
       */
      recordId: string;

      /**
       * objectId: The ID of the object to which the record belongs.
       * @type {string}
       * @example 'abcdef1234567890'
       */
      objectId: string;

      /**
       * locationId: The ID of the location where the record is updated.
       * @type {string}
       * @example '502goXVW3lIExEQPOnd3'
       */
      locationId: string;
    };

    /**
     * SearchParams: The structure of the parameters when searching for records.
     *
     * @requires schemaKey: The key of the object schema to search within.
     * @memberof Objects.Records
     * @example
     * ```ts
     * const params: Objects.Records.SearchParams = {
     *   schemaKey: '632c34b4c9b7da3358ac9891'
     * };
     * ```
     *
     * @property {string} schemaKey - The key of the object schema to search within.
     * @example '632c34b4c9b7da3358ac9891'
     */
    export type SearchParams = {
      /**
       * schemaKey: The key of the object schema to search within.
       * @type {string}
       * @example '632c34b4c9b7da3358ac9891'
       */
      schemaKey: string;
    };

    /**
     * SearchBody: The structure of the request body when searching for records.
     * It includes the location ID, page number, page limit, query, searchAfter, filters, and sort options.
     *
     * @memberof Objects.Records
     * @example
     * ```ts
     * const params: Objects.Records.SearchBody = {
     *  locationId: '502goXVW3lIExEQPOnd3',
     *  page: 1,
     *  pageLimit: 20,
     *  query: 'customer',
     *  searchAfter: ['1234567890abcdef', 1622547800000],
     *  filters: [
     *    {
     *      field: 'customer_number',
     *      operator: 'equals',
     *      value: 1424
     *    },
     *    {
     *      field: 'type_of_ticket',
     *      operator: 'in',
     *      value: ['option_1_internal_key', 'option_2_internal_key']
     *    }
     *  ],
     *  sort: [
     *    {
     *      field: 'recieved_on',
     *      direction: 'desc'
     *    }
     *  ]
     * };
     * ```
     *
     * @property {string} locationId - The ID of the location where the search is performed.
     * @example '502goXVW3lIExEQPOnd3'
     *
     * @property {number} page - The page number for pagination.
     * @example 1
     *
     * @property {number} pageLimit - The number of records per page.
     * @example 20
     *
     * @property {string} [query] - The search query string to filter records.
     * @example 'customer'
     *
     * @property {Array<string | number>} [searchAfter] - An array of values to use for pagination, typically the last record's ID and timestamp.
     * @example ['1234567890abcdef', 1622547800000]
     *
     * @property {Array<SearchFilter | SearchFilterConfig>} [filters] - An array of filters to apply to the search.
     * @example
     * ```ts
     * [
     *   {
     *     field: 'customer_number',
     *     operator: 'equals',
     *     value: 1424
     *   },
     *   {
     *     field: 'type_of_ticket',
     *     operator: 'in',
     *     value: ['option_1_internal_key', 'option_2_internal_key']
     *   }
     * ]
     * ```
     */
    export type SearchBody = {
      /**
       * locationId: The ID of the location where the search is performed.
       *
       * @type {string}
       * @example '502goXVW3lIExEQPOnd3'
       */
      locationId: string;

      /**
       * page: The page number for pagination.
       *
       * @type {number}
       * @example 1
       */
      page: number;

      /**
       * pageLimit: The number of records per page.
       *
       * @type {number}
       * @example 20
       */
      pageLimit: number;

      /**
       * query: The search query string to filter records.
       *
       * @type {string}
       * @example 'customer'
       */
      query?: string;

      /**
       * searchAfter: An array of values to use for pagination, typically the last record's ID and timestamp.
       *
       * @type {Array<string | number>}
       * @example ['1234567890abcdef', 1622547800000]
       */
      searchAfter?: Array<string | number>;

      /**
       * filters: An array of filters to apply to the search.
       * @type {Array<SearchFilter | SearchFilterConfig>}
       * @example
       * ```ts
       * [
       *   {
       *     field: 'customer_number',
       *     operator: 'equals',
       *     value: 1424
       *   },
       *   {
       *     field: 'type_of_ticket',
       *     operator: 'in',
       *     value: ['option_1_internal_key', 'option_2_internal_key']
       *   }
       * ]
       * ```
       */
      filters?: Array<SearchFilter | SearchFilterConfig>;

      /**
       * sort: An array of sort options to apply to the search results.
       * @type {Array<SearchSort>}
       * @example
       * ```ts
       * [
       *   {
       *     field: 'recieved_on',
       *     direction: 'desc'
       *   }
       * ]
       * ```
       */
      sort?: SearchSort[];
    };

    /**
     * GetParams: The structure of the parameters when retrieving a record.
     * @requires id: The ID of the record to be retrieved.
     * @requires schemaKey: The key of the object schema to which the record belongs.
     * @memberof Objects.Records
     * @example
     * ```ts
     * const params: Objects.Records.GetParams = {
     *   id: '1234567890abcdef',
     *   schemaKey: '632c34b4c9b7da3358ac9891'
     * };
     * ```
     *
     * @property {string} id - The ID of the record to be retrieved.
     * @example '1234567890abcdef'
     *
     * @property {string} schemaKey - The key of the object schema to which the record belongs.
     * @example '632c34b4c9b7da3358ac9891'
     */
    export type GetParams = {
      /**
       * id: The ID of the record to be retrieved.
       *
       * @type {string}
       * @example '1234567890abcdef'
       */
      id: string;

      /**
       * schemaKey: The key of the object schema to which the record belongs.
       *
       * @type {string}
       * @example '632c34b4c9b7da3358ac9891'
       */
      schemaKey: string;
    };

    /**
     * DeleteParams: The structure of the parameters when deleting a record.
     *
     * @requires id: The ID of the record to be deleted.
     * @requires schemaKey: The key of the object schema to which the record belongs.
     * @memberof Objects.Records
     * @example
     * ```ts
     * const params: Objects.Records.DeleteParams = {
     *  id: '1234567890abcdef',
     *  schemaKey: '632c34b4c9b7da3358ac9891'
     * };
     * ```
     *
     * @property {string} id - The ID of the record to be deleted.
     * @example '1234567890abcdef'
     *
     * @property {string} schemaKey - The key of the object schema to which the record belongs.
     * @example '632c34b4c9b7da3358ac9891'
     */
    export type DeleteParams = {
      /**
       * id: The ID of the record to be deleted.
       * @type {string}
       * @example '1234567890abcdef'
       */
      id: string;

      /**
       * schemaKey: The key of the object schema to which the record belongs.
       * @type {string}
       * @example '632c34b4c9b7da3358ac9891'
       */
      schemaKey: string;
    };

    /**
     * RecordDTO: The structure of a record data transfer object (DTO).
     * It includes the record's ID, object ID, location ID, owners, followers, properties, and timestamps for when the record was added and last updated.
     *
     * @memberof Objects.Records
     * @example
     * ```ts
     * const record: Objects.Records.RecordDTO = {
     *   id: '1234567890abcdef',
     *   objectId: 'abcdef1234567890',
     *   locationId: '502goXVW3lIExEQPOnd3',
     *   owner: ['1a2b3c4d5e6f7g8h9i0j'],
     *   followers: ['BqTwX8QFwXzpegMve9EQ', '9NkT25Vor1v4aQatFsv2'],
     *   properties: {
     *     "customer_number": 1424, // Number Field
     *     "ticket_name": "Customer not able login", // Single Line, Multi Line field
     *     "phone_number": "+917000000000", // Phone Field
     *     "money": { // Currency Field
     *       "currency": "default", // Only "default" supported today (Location's currency).
     *       "value": 100 // Support for more currencies coming soon!!!
     *     },
     *     "type_of_ticket": "option_1_internal_key", // Dropdown Single Select Field Or Radio Field
     *     "section_of_app": ["contacts", "smartlist"], // Dropdown Multiple Select Field and Checkbox Field
     *     "recieved_on": "2024-07-11", // Date Picker Field
     *     "my_files": [ // Files type Field
     *       {
     *         "url": "---url_of_file---"
     *       }
     *     ],
     *     // For Text Box List options:
     *     "my_textbox_list_key.label_1_key": "Value 1",
     *     "my_textbox_list_key.label_2_key": "Value 2"
     *   },
     *   dateAdded: '2024-07-11T10:00:00Z',
     *   dateUpdated: '2024-07-11T10:00:00Z'
     * };
     * ```
     *
     * @property {string} id - The unique identifier of the record.
     * @example '1234567890abcdef'
     *
     * @property {string} objectId - The ID of the object to which the record belongs.
     * @example 'abcdef1234567890'
     *
     * @property {string} locationId - The ID of the location where the record is stored.
     * @example '502goXVW3lIExEQPOnd3'
     *
     * @property {string[]} owner - Array of User IDs who own the record.
     * @example ['1a2b3c4d5e6f7g8h9i0j']
     *
     * @property {string[]} followers - Array of User IDs who follow the record.
     * @example ['BqTwX8QFwXzpegMve9EQ', '9NkT25Vor1v4aQatFsv2']
     *
     * @property {Record<string, RecordProperties>} properties - The properties of the record, where each key is a field name and the value is the field value.
     * @example
     * ```ts
     * properties: {
     *   "customer_number": 1424, // Number Field
     *   "ticket_name": "Customer not able login", // Single Line, Multi Line field
     *   "phone_number": "+917000000000", // Phone Field
     *   "money": { // Currency Field
     *     "currency": "default", // Only "default" supported today (Location's currency).
     *     "value": 100 // Support for more currencies coming soon!!!
     *   },
     *   "type_of_ticket": "option_1_internal_key", // Dropdown Single Select Field Or Radio Field
     *   "section_of_app": ["contacts", "smartlist"], // Dropdown Multiple Select Field and Checkbox Field
     *   "recieved_on": "2024-07-11", // Date Picker Field
     *   "my_files": [ // Files type Field
     *     {
     *       "url": "---url_of_file---"
     *     }
     *   ],
     *   // For Text Box List options:
     *   "my_textbox_list_key.label_1_key": "Value 1",
     *   "my_textbox_list_key.label_2_key": "Value 2"
     * }
     * ```
     *
     * @property {string} dateAdded - The date and time when the record was added, in ISO 8601 format.
     * @example '2024-07-11T10:00:00Z'
     *
     * @property {string} dateUpdated - The date and time when the record was last updated, in ISO 8601 format.
     * @example '2024-07-11T10:00:00Z'
     */
    export type RecordDTO = {
      /**
       * id: The unique identifier of the record.
       * @type {string}
       * @example '1234567890abcdef'
       */
      id: string;

      /**
       * objectId: The ID of the object to which the record belongs.
       * @type {string}
       * @example 'abcdef1234567890'
       */
      objectId: string;

      /**
       * locationId: The ID of the location where the record is stored.
       * @type {string}
       * @example '502goXVW3lIExEQPOnd3'
       */
      locationId: string;

      /**
       * owner: Array of User IDs who own the record.
       * @type {string[]}
       * @example ['1a2b3c4d5e6f7g8h9i0j']
       */
      owner: string[];

      /**
       * followers: Array of User IDs who follow the record.
       * @type {string[]}
       * @example ['BqTwX8QFwXzpegMve9EQ', '9NkT25Vor1v4aQatFsv2']
       */
      followers: string[];

      /**
       * properties: The properties of the record, where each key is a field name and the value is the field value.
       * @type {Record<string, RecordProperties>}
       * @example
       * ```ts
       * properties: {
       *   "customer_number": 1424, // Number Field
       *   "ticket_name": "Customer not able login", // Single Line, Multi Line field
       *   "phone_number": "+917000000000", // Phone Field
       *   "money": { // Currency Field
       *     "currency": "default", // Only "default" supported today (Location's currency).
       *     "value": 100 // Support for more currencies coming soon!!!
       *   },
       *   "type_of_ticket": "option_1_internal_key", // Dropdown Single Select Field Or Radio Field
       *   "section_of_app": ["contacts", "smartlist"], // Dropdown Multiple Select Field and Checkbox Field
       *   "recieved_on": "2024-07-11", // Date Picker Field
       *   "my_files": [ // Files type Field
       *     {
       *       "url": "---url_of_file---"
       *     }
       *   ],
       *   // For Text Box List options:
       *   "my_textbox_list_key.label_1_key": "Value 1",
       *   "my_textbox_list_key.label_2_key": "Value 2"
       * }
       * ```
       */
      properties: Record<string, RecordProperties>;

      /**
       * dateAdded: The date and time when the record was added, in ISO 8601 format.
       * @type {string}
       * @example '2024-07-11T10:00:00Z'
       */
      dateAdded: string;

      /**
       * dateUpdated: The date and time when the record was last updated, in ISO 8601 format.
       * @type {string}
       * @example '2024-07-11T10:00:00Z'
       */
      dateUpdated: string;
    };

    /**
     * SearchResponse: The structure of the search result for records.
     *
     * @memberof Objects.Records
     * @example
     * ```ts
     * const response: Objects.Records.SearchResponse = {
     *  records: [
     *   {
     *     id: '1234567890abcdef',
     *     objectId: 'abcdef1234567890',
     *     locationId: '502goXVW3lIExEQPOnd3',
     *     owner: ['1a2b3c4d5e6f7g8h9i0j'],
     *     followers: ['BqTwX8QFwXzpegMve9EQ', '9NkT25Vor1v4aQatFsv2'],
     *     properties: {
     *       "customer_number": 1424, // Number Field
     *       "ticket_name": "Customer not able login", // Single Line, Multi Line field
     *       "phone_number": "+917000000000", // Phone Field
     *       "money": { // Currency Field
     *         "currency": "default", // Only "default" supported today (Location's currency).
     *         "value": 100 // Support for more currencies coming soon!!!
     *       },
     *       "type_of_ticket": "option_1_internal_key", // Dropdown Single Select Field Or Radio Field
     *       "section_of_app": ["contacts", "smartlist"], // Dropdown Multiple Select Field and Checkbox Field
     *       "recieved_on": "2024-07-11", // Date Picker Field
     *       "my_files": [ // Files type Field
     *         {
     *           "url": "---url_of_file---"
     *         }
     *       ],
     *       // For Text Box List options:
     *       "my_textbox_list_key.label_1_key": "Value 1",
     *       "my_textbox_list_key.label_2_key": "Value 2"
     *     },
     *     dateAdded: '2024-07-11T10:00:00Z',
     *     dateUpdated: '2024-07-11T10:00:00Z'
     *   };
     * ];
     * ```
     *
     * @property {RecordDTO[]} records - An array of records that match the search criteria.
     * @example
     * ```ts
     * records: [
     *   {
     *     id: '1234567890abcdef',
     *     objectId: 'abcdef1234567890',
     *     locationId: '502goXVW3lIExEQPOnd3',
     *     owner: ['1a2b3c4d5e6f7g8h9i0j'],
     *     followers: ['BqTwX8QFwXzpegMve9EQ', '9NkT25Vor1v4aQatFsv2'],
     *     properties: {
     *       "customer_number": 1424, // Number Field
     *       "ticket_name": "Customer not able login", // Single Line, Multi Line field
     *       "phone_number": "+917000000000", // Phone Field
     *       "money": { // Currency Field
     *         "currency": "default", // Only "default" supported today (Location's currency).
     *         "value": 100 // Support for more currencies coming soon!!!
     *       },
     *       "type_of_ticket": "option_1_internal_key", // Dropdown Single Select Field Or Radio Field
     *       "section_of_app": ["contacts", "smartlist"], // Dropdown Multiple Select Field and Checkbox Field
     *       "recieved_on": "2024-07-11", // Date Picker Field
     *       "my_files": [ // Files type Field
     *         {
     *           "url": "---url_of_file---"
     *         }
     *       ],
     *       // For Text Box List options:
     *       "my_textbox_list_key.label_1_key": "Value 1",
     *       "my_textbox_list_key.label_2_key": "Value 2"
     *     },
     *     dateAdded: '2024-07-11T10:00:00Z',
     *     dateUpdated: '2024-07-11T10:00:00Z'
     *   };
     * ];
     * ```
     */
    export type SearchResponse = {
      records: RecordDTO[];
    };

    /**
     * GetResponse: The structure of the response when retrieving a record.
     * @memberof Objects.Records
     * @example
     * ```ts
     * const response: Objects.Records.GetResponse = {
     *   record: {
     *     id: '1234567890abcdef',
     *     objectId: 'abcdef1234567890',
     *     locationId: '502goXVW3lIExEQPOnd3',
     *     owner: ['1a2b3c4d5e6f7g8h9i0j'],
     *     followers: ['BqTwX8QFwXzpegMve9EQ', '9NkT25Vor1v4aQatFsv2'],
     *     properties: {
     *       "customer_number": 1424, // Number Field
     *       "ticket_name": "Customer not able login", // Single Line, Multi Line field
     *       "phone_number": "+917000000000", // Phone Field
     *       "money": { // Currency Field
     *         "currency": "default", // Only "default" supported today (Location's currency).
     *         "value": 100 // Support for more currencies coming soon!!!
     *       },
     *       "type_of_ticket": "option_1_internal_key", // Dropdown Single Select Field Or Radio Field
     *       "section_of_app": ["contacts", "smartlist"], // Dropdown Multiple Select Field and Checkbox Field
     *       "recieved_on": "2024-07-11", // Date Picker Field
     *       "my_files": [ // Files type Field
     *         {
     *           "url": "---url_of_file---"
     *         }
     *       ],
     *       // For Text Box List options:
     *       "my_textbox_list_key.label_1_key": "Value 1",
     *       "my_textbox_list_key.label_2_key": "Value 2"
     *     },
     *     dateAdded: '2024-07-11T10:00:00Z',
     *     dateUpdated: '2024-07-11T10:00:00Z'
     *   };
     * };
     * ```
     *
     * @property {RecordDTO} record - The record that was retrieved.
     * @example
     * ```ts
     * record: {
     *   id: '1234567890abcdef',
     *   objectId: 'abcdef1234567890',
     *   locationId: '502goXVW3lIExEQPOnd3',
     *   owner: ['1a2b3c4d5e6f7g8h9i0j'],
     *   followers: ['BqTwX8QFwXzpegMve9EQ', '9NkT25Vor1v4aQatFsv2'],
     *   properties: {
     *     "customer_number": 1424, // Number Field
     *     "ticket_name": "Customer not able login", // Single Line, Multi Line field
     *     "phone_number": "+917000000000", // Phone Field
     *     "money": { // Currency Field
     *       "currency": "default", // Only "default" supported today (Location's currency).
     *       "value": 100 // Support for more currencies coming soon!!!
     *     },
     *     "type_of_ticket": "option_1_internal_key", // Dropdown Single Select Field Or Radio Field
     *     "section_of_app": ["contacts", "smartlist"], // Dropdown Multiple Select Field and Checkbox Field
     *     "recieved_on": "2024-07-11", // Date Picker Field
     *     "my_files": [ // Files type Field
     *       {
     *         "url": "---url_of_file---"
     *       }
     *     ],
     *     // For Text Box List options:
     *     "my_textbox_list_key.label_1_key": "Value 1",
     *     "my_textbox_list_key.label_2_key": "Value 2"
     *   },
     *   dateAdded: '2024-07-11T10:00:00Z',
     *   dateUpdated: '2024-07-11T10:00:00Z'
     * };
     * ```
     */
    export type GetResponse = {
      /**
       * record: The record that was retrieved.
       * @type {RecordDTO}
       * @example
       * ```ts
       * record: {
       *   id: '1234567890abcdef',
       *   objectId: 'abcdef1234567890',
       *   locationId: '502goXVW3lIExEQPOnd3',
       *   owner: ['1a2b3c4d5e6f7g8h9i0j'],
       *   followers: ['BqTwX8QFwXzpegMve9EQ', '9NkT25Vor1v4aQatFsv2'],
       *   properties: {
       *     "customer_number": 1424, // Number Field
       *     "ticket_name": "Customer not able login", // Single Line, Multi Line field
       *     "phone_number": "+917000000000", // Phone Field
       *     "money": { // Currency Field
       *       "currency": "default", // Only "default" supported today (Location's currency).
       *       "value": 100 // Support for more currencies coming soon!!!
       *     },
       *     "type_of_ticket": "option_1_internal_key", // Dropdown Single Select Field Or Radio Field
       *     "section_of_app": ["contacts", "smartlist"], // Dropdown Multiple Select Field and Checkbox Field
       *     "recieved_on": "2024-07-11", // Date Picker Field
       *     "my_files": [ // Files type Field
       *       {
       *         "url": "---url_of_file---"
       *       }
       *     ],
       *     // For Text Box List options:
       *     "my_textbox_list_key.label_1_key": "Value 1",
       *     "my_textbox_list_key.label_2_key": "Value 2"
       *   },
       *   dateAdded: '2024-07-11T10:00:00Z',
       *   dateUpdated: '2024-07-11T10:00:00Z'
       * };
       * ```
       */
      record: RecordDTO;
    };

    /**
     * CreateResponse: The structure of the response when retrieving a record.
     * @memberof Objects.Records
     * @example
     * ```ts
     * const response: Objects.Records.CreateResponse = {
     *   record: {
     *     id: '1234567890abcdef',
     *     objectId: 'abcdef1234567890',
     *     locationId: '502goXVW3lIExEQPOnd3',
     *     owner: ['1a2b3c4d5e6f7g8h9i0j'],
     *     followers: ['BqTwX8QFwXzpegMve9EQ', '9NkT25Vor1v4aQatFsv2'],
     *     properties: {
     *       "customer_number": 1424, // Number Field
     *       "ticket_name": "Customer not able login", // Single Line, Multi Line field
     *       "phone_number": "+917000000000", // Phone Field
     *       "money": { // Currency Field
     *         "currency": "default", // Only "default" supported today (Location's currency).
     *         "value": 100 // Support for more currencies coming soon!!!
     *       },
     *       "type_of_ticket": "option_1_internal_key", // Dropdown Single Select Field Or Radio Field
     *       "section_of_app": ["contacts", "smartlist"], // Dropdown Multiple Select Field and Checkbox Field
     *       "recieved_on": "2024-07-11", // Date Picker Field
     *       "my_files": [ // Files type Field
     *         {
     *           "url": "---url_of_file---"
     *         }
     *       ],
     *       // For Text Box List options:
     *       "my_textbox_list_key.label_1_key": "Value 1",
     *       "my_textbox_list_key.label_2_key": "Value 2"
     *     },
     *     dateAdded: '2024-07-11T10:00:00Z',
     *     dateUpdated: '2024-07-11T10:00:00Z'
     *   };
     * };
     * ```
     *
     * @property {RecordDTO} record - The record that was retrieved.
     * @example
     * ```ts
     * record: {
     *   id: '1234567890abcdef',
     *   objectId: 'abcdef1234567890',
     *   locationId: '502goXVW3lIExEQPOnd3',
     *   owner: ['1a2b3c4d5e6f7g8h9i0j'],
     *   followers: ['BqTwX8QFwXzpegMve9EQ', '9NkT25Vor1v4aQatFsv2'],
     *   properties: {
     *     "customer_number": 1424, // Number Field
     *     "ticket_name": "Customer not able login", // Single Line, Multi Line field
     *     "phone_number": "+917000000000", // Phone Field
     *     "money": { // Currency Field
     *       "currency": "default", // Only "default" supported today (Location's currency).
     *       "value": 100 // Support for more currencies coming soon!!!
     *     },
     *     "type_of_ticket": "option_1_internal_key", // Dropdown Single Select Field Or Radio Field
     *     "section_of_app": ["contacts", "smartlist"], // Dropdown Multiple Select Field and Checkbox Field
     *     "recieved_on": "2024-07-11", // Date Picker Field
     *     "my_files": [ // Files type Field
     *       {
     *         "url": "---url_of_file---"
     *       }
     *     ],
     *     // For Text Box List options:
     *     "my_textbox_list_key.label_1_key": "Value 1",
     *     "my_textbox_list_key.label_2_key": "Value 2"
     *   },
     *   dateAdded: '2024-07-11T10:00:00Z',
     *   dateUpdated: '2024-07-11T10:00:00Z'
     * };
     * ```
     */
    export type CreateResponse = GetResponse;

    /**
     * UpdateResponse: The structure of the response when retrieving a record.
     * @memberof Objects.Records
     * @example
     * ```ts
     * const response: Objects.Records.UpdateResponse = {
     *   record: {
     *     id: '1234567890abcdef',
     *     objectId: 'abcdef1234567890',
     *     locationId: '502goXVW3lIExEQPOnd3',
     *     owner: ['1a2b3c4d5e6f7g8h9i0j'],
     *     followers: ['BqTwX8QFwXzpegMve9EQ', '9NkT25Vor1v4aQatFsv2'],
     *     properties: {
     *       "customer_number": 1424, // Number Field
     *       "ticket_name": "Customer not able login", // Single Line, Multi Line field
     *       "phone_number": "+917000000000", // Phone Field
     *       "money": { // Currency Field
     *         "currency": "default", // Only "default" supported today (Location's currency).
     *         "value": 100 // Support for more currencies coming soon!!!
     *       },
     *       "type_of_ticket": "option_1_internal_key", // Dropdown Single Select Field Or Radio Field
     *       "section_of_app": ["contacts", "smartlist"], // Dropdown Multiple Select Field and Checkbox Field
     *       "recieved_on": "2024-07-11", // Date Picker Field
     *       "my_files": [ // Files type Field
     *         {
     *           "url": "---url_of_file---"
     *         }
     *       ],
     *       // For Text Box List options:
     *       "my_textbox_list_key.label_1_key": "Value 1",
     *       "my_textbox_list_key.label_2_key": "Value 2"
     *     },
     *     dateAdded: '2024-07-11T10:00:00Z',
     *     dateUpdated: '2024-07-11T10:00:00Z'
     *   };
     * };
     * ```
     *
     * @property {RecordDTO} record - The record that was retrieved.
     * @example
     * ```ts
     * record: {
     *   id: '1234567890abcdef',
     *   objectId: 'abcdef1234567890',
     *   locationId: '502goXVW3lIExEQPOnd3',
     *   owner: ['1a2b3c4d5e6f7g8h9i0j'],
     *   followers: ['BqTwX8QFwXzpegMve9EQ', '9NkT25Vor1v4aQatFsv2'],
     *   properties: {
     *     "customer_number": 1424, // Number Field
     *     "ticket_name": "Customer not able login", // Single Line, Multi Line field
     *     "phone_number": "+917000000000", // Phone Field
     *     "money": { // Currency Field
     *       "currency": "default", // Only "default" supported today (Location's currency).
     *       "value": 100 // Support for more currencies coming soon!!!
     *     },
     *     "type_of_ticket": "option_1_internal_key", // Dropdown Single Select Field Or Radio Field
     *     "section_of_app": ["contacts", "smartlist"], // Dropdown Multiple Select Field and Checkbox Field
     *     "recieved_on": "2024-07-11", // Date Picker Field
     *     "my_files": [ // Files type Field
     *       {
     *         "url": "---url_of_file---"
     *       }
     *     ],
     *     // For Text Box List options:
     *     "my_textbox_list_key.label_1_key": "Value 1",
     *     "my_textbox_list_key.label_2_key": "Value 2"
     *   },
     *   dateAdded: '2024-07-11T10:00:00Z',
     *   dateUpdated: '2024-07-11T10:00:00Z'
     * };
     * ```
     */
    export type UpdateResponse = GetResponse;

    /**
     * DeleteResponse: The structure of the response when deleting a record.
     *
     * @memberof Objects.Records
     * @example
     * ```ts
     * const response: Objects.Records.DeleteResponse = {
     *  id: '1234567890abcdef',
     *  success: true,
     * };
     * ```
     *
     * @property {boolean} success - Indicates whether the deletion was successful.
     * @example true
     *
     * @property {string} id - The ID of the record that was deleted.
     * @example '1234567890abcdef'
     */
    export type DeleteResponse = SuccessDeleteDTO & {
      /**
       * id: The ID of the record that was deleted.
       * @type {string}
       * @example '1234567890abcdef'
       */
      id: string;
    };
  }

  /**
   * Objects: The namespace for custom objects in the application.
   *
   * @memberof Objects
   * @description This namespace contains types and interfaces related to custom objects, including object schemas and records.
   *
   * @example
   * ```ts
   * const customObject: Objects.ObjectLabels = {
   *  singular: 'Pet',
   *  plural: 'Pets'
   * };
   * ```
   *
   * @property {string} singular - The singular label for the custom object.
   * @example 'Pet'
   *
   * @property {string} plural - The plural label for the custom object.
   * @example 'Pets'
   */
  type ObjectLabels = {
    /**
     * singular: The singular label for the custom object.
     *
     * @type {string}
     * @example 'Pet'
     */
    singular: string;

    /**
     * plural: The plural label for the custom object.
     *
     * @type {string}
     * @example 'Pets'
     */
    plural: string;
  };

  /**
   * CustomObjectDTO: The structure of a custom object data transfer object (DTO).
   *
   * @memberof Objects
   * @requires id: The unique identifier of the custom object.
   * @requires standard: Indicates whether the custom object is a standard object.
   * @requires key: The internal key of the custom object.
   * @requires labels: The labels for the custom object, including singular and plural forms.
   * @requires locationId: The ID of the location where the custom object is stored.
   * @requires primaryDisplayProperty: The primary property used to display the custom object.
   * @requires dateAdded: The date and time when the custom object was added, in ISO 8601 format.
   * @requires dateUpdated: The date and time when the custom object was last updated, in ISO 8601 format.
   *
   * @example
   * ```ts
   * const customObject: Objects.CustomObjectDTO = {
   *  id: '1234567890abcdef',
   *  standard: true,
   *  key: 'custom_objects.pet',
   *  labels: {
   *    singular: 'Pet',
   *    plural: 'Pets'
   *  },
   *  locationId: '502goXVW3lIExEQPOnd3',
   *  primaryDisplayProperty: 'custom_object.pet.name',
   *  dateAdded: '2024-07-11T10:00:00Z',
   *  dateUpdated: '2024-07-11T10:00:00Z',
   *  description: 'This object represents a pet in the system.',
   *  type: 'USER_DEFINED' // or 'SYSTEM_DEFINED'
   * };
   * ```
   *
   * @property {string} id - The unique identifier of the custom object.
   * @example '1234567890abcdef'
   *
   * @property {boolean} standard - Indicates whether the custom object is a standard object.
   * @example true
   *
   * @property {string} key - The internal key of the custom object.
   * @example 'custom_objects.pet'
   *
   * @property {ObjectLabels} labels - The labels for the custom object, including singular and plural forms.
   *
   * @property {string} locationId - The ID of the location where the custom object is stored.
   * @example '502goXVW3lIExEQPOnd3'
   *
   * @property {string} primaryDisplayProperty - The primary property used to display the custom object.
   * @example 'custom_object.pet.name'
   *
   * @property {string} dateAdded - The date and time when the custom object was added, in ISO 8601 format.
   * @example '2024-07-11T10:00:00Z'
   *
   * @property {string} dateUpdated - The date and time when the custom object was last updated, in ISO 8601 format.
   * @example '2024-07-11T10:00:00Z'
   *
   * @property {string} [description] - An optional description of the custom object.
   * @example 'This object represents a pet in the system.'
   *
   * @property {'USER_DEFINED' | 'SYSTEM_DEFINED'} [type] - The type of the custom object, indicating whether it is user-defined or system-defined.
   * @example 'USER_DEFINED' // or 'SYSTEM_DEFINED'
   */
  export type CustomObjectDTO = {
    /**
     * id: The unique identifier of the custom object.
     *
     * @type {string}
     * @example '1234567890abcdef'
     */
    id: string;

    /**
     * standard: Indicates whether the custom object is a standard object.
     *
     * @type {boolean}
     * @example true
     */
    standard: boolean;

    /**
     * key: The internal key of the custom object.
     *
     * @type {string}
     * @example 'custom_objects.pet'
     */
    key: string;

    /**
     * labels: The labels for the custom object, including singular and plural forms.
     *
     * @type {ObjectLabels}
     * @example
     * ```ts
     * labels: {
     *   singular: 'Pet',
     *   plural: 'Pets'
     * }
     * ```
     */
    labels: ObjectLabels;

    /**
     * locationId: The ID of the location where the custom object is stored.
     *
     * @type {string}
     * @example '502goXVW3lIExEQPOnd3'
     */
    locationId: string;

    /**
     * primaryDisplayProperty: The primary property used to display the custom object.
     *
     * @type {string}
     * @example 'custom_object.pet.name'
     */
    primaryDisplayProperty: string;

    /**
     * dateAdded: The date and time when the custom object was added, in ISO 8601 format.
     *
     * @type {string}
     * @example '2024-07-11T10:00:00Z'
     */
    dateAdded: string;

    /**
     * dateUpdated: The date and time when the custom object was last updated, in ISO 8601 format.
     *
     * @type {string}
     * @example '2024-07-11T10:00:00Z'
     */
    dateUpdated: string;

    /**
     * description: An optional description of the custom object.
     *
     * @type {string}
     * @example 'This object represents a pet in the system.'
     */
    description?: string;

    /**
     * type: The type of the custom object, indicating whether it is user-defined or system-defined.
     *
     * @type {'USER_DEFINED' | 'SYSTEM_DEFINED'}
     * @example 'USER_DEFINED' // or 'SYSTEM_DEFINED'
     */
    type?: "USER_DEFINED" | "SYSTEM_DEFINED";
  };

  /**
   * GetParams: The parameters required to retrieve a custom object.
   *
   * @memberof Objects
   * @example
   * ```ts
   * const params: Objects.GetParams = {
   *   key: 'pet',
   *   locationId: '502goXVW3lIExEQPOnd3',
   *   fetchProperties: true // Optional, defaults to false
   * };
   * ```
   *
   * @property {string} key - The internal key of the custom object.
   * @example 'pet'
   *
   * @property {string} locationId - The ID of the location where the custom object is stored.
   * @example '502goXVW3lIExEQPOnd3'
   *
   * @property {boolean} [fetchProperties] - Optional flag to indicate whether to fetch properties of the custom object. Defaults to false.
   * @example true
   */
  export type GetParams = {
    /**
     * key: The internal key of the custom object.
     *
     * @type {string}
     * @example 'pet'
     */
    key: string;

    /**
     * locationId: The ID of the location where the custom object is stored.
     *
     * @type {string}
     * @example '502goXVW3lIExEQPOnd3'
     */
    locationId: string;

    /**
     * fetchProperties: Optional flag to indicate whether to fetch properties of the custom object. Defaults to false.
     *
     * @type {boolean}
     * @default false
     * @example true
     */
    fetchProperties?: boolean;
  };

  /**
   * SearchParams: The parameters required to search for records within a custom object.
   *
   * @memberof Objects
   *
   * @example
   * ```ts
   * const searchParams: Objects.SearchParams = {
   *  locationId: '502goXVW3lIExEQPOnd3'
   * };
   * ```
   *
   * @property {string} locationId - The ID of the location where the records are stored.
   * @example '502goXVW3lIExEQPOnd3'
   */
  export type SearchParams = {
    /**
     * locationId: The ID of the location where the records are stored.
     *
     * @type {string}
     * @example '502goXVW3lIExEQPOnd3'
     */
    locationId: string;
  };

  /**
   * PrimaryDisplayPropertyDetails: The details of the primary display property for a custom object.
   *
   * @memberof Objects
   * @description This type defines the structure of the primary display property details, including its key, name, and data type.
   *
   * @example
   * ```ts
   * const primaryDisplayProperty: Objects.PrimaryDisplayPropertyDetails = {
   *  key: 'custom_object.pet.name',
   *  name: 'Name',
   *  dataType: 'TEXT' // or 'NUMERICAL'
   * };
   * ```
   *
   * @property {string} key - The internal key of the primary display property.
   * @example 'custom_object.pet.name'
   *
   * @property {string} name - The name of the primary display property.
   * @example 'Name'
   *
   * @property {"TEXT" | "NUMERICAL"} dataType - The data type of the primary display property, which can be either "TEXT" or "NUMERICAL".
   * @example 'TEXT'
   */
  type PrimaryDisplayPropertyDetails = {
    /**
     * key: The internal key of the primary display property.
     *
     * @type {string}
     * @example 'custom_object.pet.name'
     */
    key: string;

    /**
     * name: The name of the primary display property.
     *
     * @type {string}
     * @example 'Name'
     */
    name: string;

    /**
     * dataType: The data type of the primary display property, which can be either "TEXT" or "NUMERICAL".
     *
     * @type {"TEXT" | "NUMERICAL"}
     * @example 'TEXT'
     */
    dataType: "TEXT" | "NUMERICAL";
  };

  /**
   * CreateParams: The parameters required to create a new custom object.
   *
   * @memberof Objects
   * @description This type defines the properties required to create a custom object, including its key, location ID, and primary display property.
   *
   * @requires labels: The labels for the custom object, including singular and plural forms.
   * @requires key: The internal key of the custom object.
   * @requires locationId: The ID of the location where the custom object will be stored.
   *
   * @example
   * ```ts
   * const createParams: Objects.CreateParams = {
   *  labels: {
   *   singular: 'Pet',
   *  plural: 'Pets'
   *  },
   * key: 'custom_objects.pet',
   * locationId: '502goXVW3lIExEQPOnd3',
   * primaryDisplayProperty: {
   *  key: 'custom_object.pet.name',
   * name: 'Name',
   * dataType: 'TEXT' // or 'NUMERICAL'
   * }
   * };
   * ```
   *
   * @property {ObjectLabels} labels - The labels for the custom object, including singular and plural forms.
   * @example
   * ```ts
   * labels: {
   *  singular: 'Pet',
   *  plural: 'Pets'
   * }
   * ```
   *
   * @property {string} key - The internal key of the custom object.
   * @example 'custom_objects.pet'
   *
   * @property {string} locationId - The ID of the location where the custom object will be stored.
   * @example '502goXVW3lIExEQPOnd3'
   *
   * @property {PrimaryDisplayPropertyDetails} primaryDisplayProperty - The primary property used to display the custom object.
   * @example
   * ```ts
   * primaryDisplayProperty: {
   * key: 'custom_object.pet.name',
   * name: 'Name',
   * dataType: 'TEXT' // or 'NUMERICAL'
   * }
   * ```
   *
   * @property {string} [description] - An optional description of the custom object.
   * @example 'This object represents a pet in the system.'
   */

  export type CreateBody = {
    /**
     * objectId: The ID of the custom object to which the record belongs.
     *
     * @type {ObjectLabels}
     * @example
     * ```ts
     * objectLabels: {
     *   singular: 'Pet',
     *   plural: 'Pets'
     * }
     * ```
     */
    labels: ObjectLabels;

    /**
     * key: The internal key of the custom object.
     *
     * @type {string}
     * @example 'custom_objects.pet'
     */
    key: string;

    /**
     * locationId: The ID of the location where the record is stored.
     *
     * @type {string}
     * @example '502goXVW3lIExEQPOnd3'
     */
    locationId: string;

    /**
     * primaryDisplayProperty: The primary property used to display the custom object.
     *
     * @type {PrimaryDisplayPropertyDetails}
     * @example
     * ```ts
     * primaryDisplayProperty: {
     *  key: 'custom_object.pet.name',
     *  name: 'Name',
     *  dataType: 'TEXT' // or 'NUMERICAL'
     * }
     * ```
     */
    primaryDisplayProperty: PrimaryDisplayPropertyDetails;

    /**
     * description: An optional description of the custom object.
     *
     * @type {string}
     * @example 'This object represents a pet in the system.'
     */
    description?: string;
  };

  /**
   * UpdateBody: The structure of the body for updating a custom object.
   *
   * @memberof Objects
   * @description This type defines the properties required to update a custom object, including its location ID, searchable properties, labels, and an optional description.
   *
   * @requires key: The internal key of the custom object.
   *
   * @example
   * ```ts
   * const updateParams: Objects.UpdateParams = {
   *  key: 'custom_objects.pet'
   * };
   * ```
   *
   * @property {string} key - The internal key of the custom object.
   * @example 'custom_objects.pet'
   */
  export type UpdateParams = {
    /**
     * key: The internal key of the custom object.
     *
     * @type {string}
     * @example 'custom_objects.pet'
     */
    key: string;
  };

  /**
   * UpdateBody: The structure of the body for updating a custom object.
   *
   * @memberof Objects
   * @description This type defines the properties required to update a custom object, including its location ID, searchable properties, labels, and an optional description.
   *
   * @requires locationId: The ID of the location where the custom object is stored.
   * @requires searchableProperties: An array of property keys that should be searchable in the custom object.
   * @requires labels: An object containing the singular and plural labels for the custom object.
   *
   * @example
   * ```ts
   * const updateBody: Objects.UpdateBody = {
   *  locationId: '502goXVW3lIExEQPOnd3',
   *  searchableProperties: ['custom_objects.mad.mad', 'custom_objects.mad.record_1', 'custom_objects.mad.nn'],
   *  labels: {
   *    singular: 'Pet',
   *    plural: 'Pets'
   *  },
   *  description: 'This object represents a pet in the system.'
   * };
   * ```
   *
   * @property {string} locationId - The ID of the location where the custom object is stored.
   * @example '502goXVW3lIExEQPOnd3'
   *
   * @property {string[]} searchableProperties - An array of property keys that should be searchable in the custom object.
   * @example ['custom_objects.mad.mad', 'custom_objects.mad.record_1', 'custom_objects.mad.nn']
   *
   * @property {Partial<ObjectLabels>} [labels] - An object containing the singular and plural labels for the custom object.
   * @example
   * ```ts
   * labels: {
   *  singular: 'Pet',
   *  plural: 'Pets'
   * }
   * ```
   *
   * @property {string | null} [description] - An optional description of the custom object.
   * @example 'This object represents a pet in the system.'
   * @example null
   */
  export type UpdateBody = {
    /**
     * locationId: The ID of the location where the custom object is stored.
     *
     * @type {string}
     * @example '502goXVW3lIExEQPOnd3'
     */
    locationId: string;

    /**
     * searchableProperties: An array of property keys that should be searchable in the custom object.
     *
     * @type {string[]}
     * @example ["custom_objects.mad.mad","custom_objects.mad.record_1","custom_objects.mad.nn"]
     */
    searchableProperties: string[];

    /**
     * labels: An object containing the singular and plural labels for the custom object.
     *
     * @type {Partial<ObjectLabels>}
     * @example
     * ```ts
     * labels: {
     *  singular: 'Pet',
     *  plural: 'Pets'
     * }
     * ```
     */
    labels?: Partial<ObjectLabels>;

    /**
     * description: An optional description of the custom object.
     *
     * @type {string | null}
     * @example 'This object represents a pet in the system.'
     */
    description?: string | null;
  };

  /**
   * GetResponse: The structure of the response when retrieving a custom object.
   *
   * @memberof Objects
   * @description This type defines the properties of a custom object, including its ID, standard status, key, labels, location ID, primary display property, date added, date updated, and optional description and type.
   *
   * @example
   * ```ts
   * const response: Objects.GetResponse = {
   *  object: {
   *    id: '1234567890abcdef',
   *    standard: true,
   *    key: 'custom_objects.pet',
   *    labels: {
   *      singular: 'Pet',
   *      plural: 'Pets'
   *    },
   *    locationId: '502goXVW3lIExEQPOnd3',
   *    primaryDisplayProperty: 'custom_object.pet.name',
   *    dateAdded: '2024-07-11T10:00:00Z',
   *    dateUpdated: '2024-07-11T10:00:00Z',
   *    description: 'This object represents a pet in the system.',
   *    type: 'USER_DEFINED' // or 'SYSTEM_DEFINED'
   *  },
   * };
   * ```
   *
   * @property {CustomObjectDTO} object - The custom object that was retrieved.
   * @example
   * ```ts
   * object: {
   *   id: '1234567890abcdef',
   *   standard: true,
   *   key: 'custom_objects.pet',
   *   labels: {
   *     singular: 'Pet',
   *     plural: 'Pets'
   *   },
   *   locationId: '502goXVW3lIExEQPOnd3',
   *   primaryDisplayProperty: 'custom_object.pet.name',
   *   dateAdded: '2024-07-11T10:00:00Z',
   *   dateUpdated: '2024-07-11T10:00:00Z',
   *   description: 'This object represents a pet in the system.',
   *   type: 'USER_DEFINED' // or 'SYSTEM_DEFINED'
   * };
   * ```
   */
  export type GetResponse = {
    /**
     * CustomObjectDTO: The structure of a custom object data transfer object (DTO).
     *
     * @memberof Objects
     * @requires id: The unique identifier of the custom object.
     * @requires standard: Indicates whether the custom object is a standard object.
     * @requires key: The internal key of the custom object.
     * @requires labels: The labels for the custom object, including singular and plural forms.
     * @requires locationId: The ID of the location where the custom object is stored.
     * @requires primaryDisplayProperty: The primary property used to display the custom object.
     * @requires dateAdded: The date and time when the custom object was added, in ISO 8601 format.
     * @requires dateUpdated: The date and time when the custom object was last updated, in ISO 8601 format.
     *
     * @example
     * ```ts
     * const customObject: Objects.CustomObjectDTO = {
     *   id: '1234567890abcdef',
     *   standard: true,
     *   key: 'custom_objects.pet',
     *   labels: {
     *     singular: 'Pet',
     *     plural: 'Pets'
     *   },
     *   locationId: '502goXVW3lIExEQPOnd3',
     *   primaryDisplayProperty: 'custom_object.pet.name',
     *   dateAdded: '2024-07-11T10:00:00Z',
     *   dateUpdated: '2024-07-11T10:00:00Z',
     *   description: 'This object represents a pet in the system.',
     *   type: 'USER_DEFINED' // or 'SYSTEM_DEFINED'
     *   },
     * };
     * ```
     *
     * @property {string} id - The unique identifier of the custom object.
     * @example '1234567890abcdef'
     *
     * @property {boolean} standard - Indicates whether the custom object is a standard object.
     * @example true
     *
     * @property {string} key - The internal key of the custom object.
     * @example 'custom_objects.pet'
     *
     * @property {ObjectLabels} labels - The labels for the custom object, including singular and plural forms.
     *
     * @property {string} locationId - The ID of the location where the custom object is stored.
     * @example '502goXVW3lIExEQPOnd3'
     *
     * @property {string} primaryDisplayProperty - The primary property used to display the custom object.
     * @example 'custom_object.pet.name'
     *
     * @property {string} dateAdded - The date and time when the custom object was added, in ISO 8601 format.
     * @example '2024-07-11T10:00:00Z'
     *
     * @property {string} dateUpdated - The date and time when the custom object was last updated, in ISO 8601 format.
     * @example '2024-07-11T10:00:00Z'
     *
     * @property {string} [description] - An optional description of the custom object.
     * @example 'This object represents a pet in the system.'
     *
     * @property {'USER_DEFINED' | 'SYSTEM_DEFINED'} [type] - The type of the custom object, indicating whether it is user-defined or system-defined.
     * @example 'USER_DEFINED' // or 'SYSTEM_DEFINED'
     */
    object: CustomObjectDTO;
  };

  /**
   * SearchResponse: The structure of the response when searching for records within a custom object.
   *
   * @memberof Objects
   * @description This type defines the properties of the search response, which includes an array of custom object records.
   *
   * @example
   * ```ts
   * const response: Objects.SearchResponse = {
   *  objects: [
   *   {
   *       id: '1234567890abcdef',
   *       standard: true,
   *       key: 'custom_objects.pet',
   *       labels: {
   *         singular: 'Pet',
   *         plural: 'Pets'
   *       },
   *       locationId: '502goXVW3lIExEQPOnd3',
   *       primaryDisplayProperty: 'custom_object.pet.name',
   *       dateAdded: '2024-07-11T10:00:00Z',
   *       dateUpdated: '2024-07-11T10:00:00Z',
   *       description: 'This object represents a pet in the system.',
   *       type: 'USER_DEFINED' // or 'SYSTEM_DEFINED'
   *     },
   *   ],
   * };
   * ```
   *
   * @property {CustomObjectDTO[]} objects - An array of custom object records that match the search criteria.
   * @example
   * ```ts
   * objects: [
   *   {
   *     id: '1234567890abcdef',
   *     standard: true,
   *     key: 'custom_objects.pet',
   *     labels: {
   *       singular: 'Pet',
   *       plural: 'Pets'
   *     },
   *     locationId: '502goXVW3lIExEQPOnd3',
   *     primaryDisplayProperty: 'custom_object.pet.name',
   *     dateAdded: '2024-07-11T10:00:00Z',
   *     dateUpdated: '2024-07-11T10:00:00Z',
   *     description: 'This object represents a pet in the system.',
   *     type: 'USER_DEFINED' // or 'SYSTEM_DEFINED'
   *   }
   * ]
   * ```
   */
  export type SearchResponse = {
    /**
     * objects: An array of custom object records that match the search criteria.
     *
     * @type {CustomObjectDTO[]}
     * @example
     * ```ts
     * objects: [
     *  {
     *    id: '1234567890abcdef',
     *    standard: true,
     *    key: 'custom_objects.pet',
     *    labels: {
     *     singular: 'Pet',
     *     plural: 'Pets'
     *    },
     *    locationId: '502goXVW3lIExEQPOnd3',
     *    primaryDisplayProperty: 'custom_object.pet.name',
     *    dateAdded: '2024-07-11T10:00:00Z',
     *    dateUpdated: '2024-07-11T10:00:00Z',
     *    description: 'This object represents a pet in the system.',
     *    type: 'USER_DEFINED' // or 'SYSTEM_DEFINED'
     *  }
     * ]
     * ```
     *
     * @type {CustomObjectDTO[]}
     * @example
     * ```ts
     * objects: [
     *  {
     *    id: '1234567890abcdef',
     *    standard: true,
     *    key: 'custom_objects.pet',
     *    labels: {
     *     singular: 'Pet',
     *     plural: 'Pets'
     *    },
     *    locationId: '502goXVW3lIExEQPOnd3',
     *    primaryDisplayProperty: 'custom_object.pet.name',
     *    dateAdded: '2024-07-11T10:00:00Z',
     *    dateUpdated: '2024-07-11T10:00:00Z',
     *    description: 'This object represents a pet in the system.',
     *    type: 'USER_DEFINED' // or 'SYSTEM_DEFINED'
     *  }
     * ]
     * ```
     */
    objects: CustomObjectDTO[];
  };
}
