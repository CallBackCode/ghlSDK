import { SearchFilter, SearchFilterConfig, SearchSort } from "./_global";
/**
 * Objects represent entities in the CRM system, such as  Contacts, Companies, or Custom Objects.
 * Objects serve as a foundation for organising and managing data.
 *
 * Custom Objects:
 * Unlike Standard objects, Custom Objects allow users to define and structure their own data models.
 * Custom Objects offer flexibility by enabling users to specify:
 * * Name of the Object
 * * Fields and Field Types (e.g., single line text)
 * * Searchable Properties (fields that can be indexed for searching)
 *
 * Primary Display Property (the main identifier used for displaying the record)
 */
export declare namespace Objects {
    /**
     * Records: Records are instances of an object.
     * Each record contains specific data according to the schema defined in its parent object.
     */
    namespace Records {
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
            currency: "default";
            value: number;
        };
        /**
         * FileValue: Represents a file associated with a record.
         * It includes:
         * * - url: The URL of the file.
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
            /** * url: The URL of the file.
             * @property {string} url - The URL of the file.
             */
            url: string;
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
        type RecordProperties = string | number | boolean | Date | string[] | MonetaryValue | FileValue | null;
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
        export {};
    }
}
