export type CustomMenusIconSchemaOptional = {
  /**
   * Name of the icon
   * @type {string}
   * @example "yin-yang"
   */
  name?: string;

  /**
   * Font family of the icon
   * @enum {'fab' | 'fas' | 'far'}
   * @example "fas"
   */
  fontFamily?: string;
};

export type CustomMenusSchema = {
  /**
   * Unique identifier for the custom menu
   * @type {string}
   * @example "12345"
   */
  id?: string;

  /**
   * Icon information for the menu item
   * @type {CustomMenusIconSchemaOptional}
   * @example { name: "yin-yang", fontFamily: "fas" }
   */
  icon?: CustomMenusIconSchemaOptional;

  /**
   * Title of the custom menu
   * @type {string}
   * @example "Dashboard"
   */
  title?: string;

  /**
   * URL of the custom menu
   * @type {string}
   * @example "/dashboard"
   */
  url?: string;

  /**
   * Order of the custom menu
   * @type {number}
   * @example 1
   */
  order?: number;

  /**
   * Filter to show only agency-level menu links.
   * When omitted, fetches both agency and sub-account menu links.
   * Ignored if locationId is provided
   * @type {boolean}
   * @example true
   */
  showOnCompany?: boolean;

  /**
   * Whether the menu must be displayed for sub-accounts level
   * @type {boolean}
   * @example true
   */
  showOnLocation?: boolean;

  /**
   * Whether the menu must be displayed to all sub-accounts
   * @type {boolean}
   * @example true
   */
  showToAllLocations?: boolean;

  /**
   * List of sub-account IDs where the menu should be shown.
   * This list is applicable only when showOnLocation is true and showToAllLocations is false
   * @type {string[]}
   * @example ["gfWreTIHL8pDbggBb7af","67WreTIHL8pDbggBb7ty"]
   */
  locations?: string[];

  /**
   * Mode for opening the menu link
   * @enum {'iframe' | 'new_tab' | 'current_tab'}
   * @example "iframe"
   */
  openMode?: "iframe" | "new_tab" | "current_tab";

  /**
   * Which user-roles should the menu be accessible to?
   * @enum {'all' | 'admin' | 'user'}
   * @example "all"
   */
  userRole?: "all" | "admin" | "user";

  /**
   * Indicates if camera access is allowed for this menu
   * @type {boolean}
   * @example false
   */
  allowCamera?: boolean;

  /**
   * Indicates if microphone access is allowed for this menu
   * @type {boolean}
   * @example false
   */
  allowMicrophone?: boolean;
};
