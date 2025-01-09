export type GetAccessCodeBodyDTO = {
    /**
     * The ID provided by GHL for your app integration
     * @type {string}
     * @example 64720d51b50eb849194247ce-lzdnsr6z
     */
    client_id: string;
    /**
     * The secret provided by GHL for your app integration
     * @type {string}
     * @example 5060d220-a031-4f39-9cr0-0424e08ffba5
     */
    client_secret: string;
    /**
     * The type of token to be requested
     * @enum {"authorization_code", "refresh_token"}
     * @example authorization_code
     */
    grant_type: "authorization_code" | "refresh_token";
    /**
     * The scope of the token to be requested
     * @enum {"Company", "Location"}
     * @example read write
     */
    user_type: "Company" | "Location";
    /**
     * The code provided in the query of the URI after installing the app
     * required if grant_type is authorization_code
     * @type {string}
     * @example 86b68a0da12ba59f9a85abf2f5bafde171321bdd
     */
    code?: string;
    /**
     * The refresh token provided in the response of the initial request
     * required if grant_type is refresh_token
     * must be valid jwt token format
     * @type {string}
     * @example eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
     */
    refresh_token?: string;
    /**
     * The redirect URI for your application
     * Must be registered as a valid redirect URI in the GHL app settings
     * @type {string}
     * @example https://myapp.com/oauth/callback/gohighlevel
     */
    redirect_uri?: string;
};
export type LocationScope = "blogs/author.readonly" | "blogs/category.readonly" | "blogs/check-slug.readonly" | "blogs/post.write" | "blogs/post-update.write" | "businesses.readonly" | "businesses.write" | "calendars.readonly" | "calendars.write" | "calendars/events.readonly" | "calendars/events.write" | "calendars/groups.readonly" | "calendars/groups.write" | "calendars/resources.readonly" | "calendars/resources.write" | "campaigns.readonly" | "companies.readonly" | "contacts.readonly" | "contacts.write" | "conversations.readonly" | "conversations.write" | "conversations/message.readonly" | "conversations/message.write" | "conversations/reports.readonly" | "courses.readonly" | "courses.write" | "emails/builder.readonly" | "emails/builder.write" | "forms.readonly" | "forms.write" | "funnels/funnel.readonly" | "funnels/page.readonly" | "funnels/pagecount.readonly" | "funnels/redirect.readonly" | "funnels/redirect.write" | "invoices.readonly" | "invoices.write" | "invoices/schedule.readonly" | "invoices/schedule.write" | "invoices/template.readonly" | "invoices/template.write" | "lc-email.readonly" | "links.readonly" | "links.write" | "locations.readonly" | "locations/customFields.readonly" | "locations/customFields.write" | "locations/customValues.readonly" | "locations/customValues.write" | "locations/tags.readonly" | "locations/tags.write" | "locations/tasks.readonly" | "locations/tasks.write" | "locations/templates.readonly" | "medias.readonly" | "medias.write" | "objects/record.readonly" | "objects/record.write" | "objects/schema.readonly" | "objects/schema.write" | "opportunities.readonly" | "opportunities.write" | "payments/custom-provider.readonly" | "payments/custom-provider.write" | "payments/integration.readonly" | "payments/integration.write" | "payments/orders.readonly" | "payments/orders.write" | "payments/subscriptions.readonly" | "payments/transactions.readonly" | "products.readonly" | "products.write" | "products/collection.readonly" | "products/collection.write" | "products/prices.readonly" | "products/prices.write" | "saas/company.read" | "saas/company.write" | "saas/location.read" | "saas/location.write" | "socialplanner/account.readonly" | "socialplanner/account.write" | "socialplanner/category.readonly" | "socialplanner/category.write" | "socialplanner/csv.readonly" | "socialplanner/csv.write" | "socialplanner/oauth.readonly" | "socialplanner/oauth.write" | "socialplanner/post.readonly" | "socialplanner/post.write" | "socialplanner/tag.readonly" | "socialplanner/tag.write" | "store/setting.readonly" | "store/setting.write" | "store/shipping.readonly" | "store/shipping.write" | "surveys.readonly" | "users.readonly" | "users.write" | "wordpress.site.readonly" | "workflows.readonly";
export type CompanyScope = "locations.readonly" | "locations.write" | "oauth.readonly" | "oauth.write" | "saas/company.read" | "saas/company.write" | "saas/location.read" | "saas/location.write" | "snapshots.readonly" | "snapshots.write" | "users.readonly" | "users.write";
export type Scope = LocationScope | CompanyScope;
type GetAccessCodeBaseSchema = {
    /**
     * USER ID - Represent user id of person who performed installation
     * @type {string}
     * @example 64720d51b50eb849194247ce
     */
    userId: string;
    /**
     * The token used to access the GHL API
     * @type {string}
     * @example eyJrIjoiSDI1NiIsInR5cCI6IkpXVCIsImFsZyI6IkhTMjU2In0.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.iSE7GVfFsdDqqaV7PyXDAZtkxy78MZ2CnAhAnoN5MSU
     */
    access_token?: string;
    /**
     * The type of token provided
     * @enum {"Bearer"}
     * @example Bearer
     */
    token_type?: "Bearer";
    /**
     * The amount of time until the access_token expires in seconds - Can be refreshed using the Refresh Token up to 1 year after token created
     * Once Refreshed, a new access_token / refresh_token will be provided
     * The new access_token will expire in 24 hours and the new refresh_token will expire in 1 year
     * @type {number}
     * @example 86399
     */
    expires_in?: number;
    /**
     * The refresh token to be used to request a new access token
     * @type {string}
     * @example eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
     */
    refresh_token?: string;
    /**
     * The scope of the token provided
     * @type {string}
     * @example ["conversations/message.readonly" "conversations/message.write"]
     */
    scope?: Scope[];
    /**
     * The type of user the token is for
     * @type {string}
     * @example Location
     */
    userType?: string;
    /**
     * Location ID - Present only for Sub-Account Access Token
     * @type {string}
     * @example l1C08ntBrFjLS0elLIYU
     */
    locationId?: string;
    /**
     * Company ID
     * @type {string}
     * @example l1C08ntBrFjLS0elLIYU
     */
    companyId?: string;
    /**
     * Approved locations to generate location access token
     * @type {string[]}
     * @example ["l1C08ntBrFjLS0elLIYU"]
     */
    approvedLocations?: string[];
    /**
     * Plan Id of the subscribed plan in paid apps.
     * @type {string}
     * @example l1C08ntBrFjLS0elLIYU
     */
    planId?: string;
};
export interface LocationAccessCodeResponseDTO extends GetAccessCodeBaseSchema {
    /**
     * The type of user the token is for
     * @enum {"Location"}
     * @example Location
     */
    userType: "Location";
    /**
     * The scope of the token provided
     * @type {LocationScope[]}
     * @example conversations/message.readonly conversations/message.write
     */
    scope: LocationScope[];
}
export interface CompanyAccessCodeResponseDTO extends GetAccessCodeBaseSchema {
    /**
     * The type of user the token is for
     * @enum {"Company"}
     * @example Company
     */
    userType: "Company";
    /**
     * The scope of the token provided
     * @type {CompanyScope[]}
     * @example conversations/message.readonly conversations/message.write
     */
    scope: CompanyScope[];
}
export type GetAccessCodeSuccessfulResponseDTO = LocationAccessCodeResponseDTO | CompanyAccessCodeResponseDTO;
export type GetLocationAccessCodeBodyDTO = {
    /**
     * The ID of your agency in GHL - Provided in initial token response
     * @type {string}
     * @example l1C08ntBrFjLS0elLIYU
     */
    companyId: string;
    /**
     * The ID of the location to generate an access token for
     * @type {string}
     * @example l1C08ntBrFjLS0elLIYU
     */
    locationId: string;
};
export type GetLocationAccessTokenSuccessfulResponseDTO = {
    /**
     * USER ID - Represent user id of person who performed installation
     * @type {string}
     * @example 64720d51b50eb849194247ce
     */
    userId: string;
    /**
     * The token used to access the GHL API
     * @type {string}
     * @example eyJrIjoiSDI1NiIsInR5cCI6IkpXVCIsImFsZyI6IkhTMjU2In0.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.iSE7GVfFsdDqqaV7PyXDAZtkxy78MZ2CnAhAnoN5MSU
     */
    access_token?: string;
    /**
     * The type of token provided
     * @enum {"Bearer"}
     * @example Bearer
     */
    token_type?: "Bearer";
    /**
     * The amount of time until the access_token expires in seconds
     * Cannot be refreshed but a new access_token can be requested with the Company access_token
     * @type {number}
     * @example 86399
     */
    expires_in?: number;
    /**
     * The scope of the token provided
     * @type {LocationScope[]}
     * @example ["conversations/message.readonly" "conversations/message.write"]
     */
    scope?: LocationScope[];
    /**
     * The ID of the location to generate an access token for
     * @type {string}
     * @example l1C08ntBrFjLS0elLIYU
     */
    locationId?: string;
    /**
     * Plan Id of the subscribed plan in paid apps.
     * @type {string}
     * @example l1C08ntBrFjLS0elLIYU
     */
    planId?: string;
};
export type InstalledLocationSchema = {
    /**
     * The ID of the location being checked
     * @type {string}
     * @example 0IHuJvc2ofPAAA8GzTRi
     */
    _id: string;
    /**
     * The name of the location being checked
     * @type {string}
     * @example John Deo
     */
    name: string;
    /**
     * The address linked to the location being checked
     * @type {string}
     * @example 47 W 13th St, New York, NY 10011, USA
     */
    address: string;
    /**
     * True if the app is installed in this location, otherwise, false
     * @type {boolean}
     * @example true
     */
    isInstalled?: boolean;
};
export type GetInstalledLocationsSuccessfulResponseDTO = {
    /**
     * The list of locations and their installation status
     * @type {InstalledLocationSchema[]}
     * @example [{"_id":"0IHuJvc2ofPAAA8GzTRi","name":"John Deo","address":"47 W 13th St, New York, NY 10011, USA","isInstalled":true}]
     */
    locations: InstalledLocationSchema[];
    /**
     * The total number of locations that have the app installed
     * @type {number}
     * @example 1
     */
    count: number;
    /**
     * If true, the app will be installed in all future locations created, otherwise, false
     * @type {boolean}
     * @example true
     */
    installToFutureLocations: boolean;
};
export type OAuthSearchOptions = {
    /**
     * Filters out location which are installed for specified app under the specified companyId
     * @type {string}
     * @example true
     */
    companyId: string;
    /**
     * Parameter to search by the appId
     * @type {string}
     * @example tDtDnQdgm2LXpyiqYvZ6
     */
    appId: string;
    /**
     * Filters out location which are installed for specified app under the specified company
     * @type {boolean}
     * @example true
     */
    isInstalled?: boolean;
    /**
     * Parameter to limit the number installed locations
     * @type {string}
     * @example 10
     * @default 20
     */
    limit?: string;
    /**
     * Filters out locations which are installed for specified app in trial mode
     * @type {boolean}
     * @example true
     */
    onTrial?: boolean;
    /**
     * Filters out location which are installed for specified app under the specified planId
     * @type {string}
     * @example true
     */
    planId?: string;
    /**
     * Parameter to search for the installed location by name
     * @type {string}
     * @example location name
     */
    query?: string;
    /**
     * Parameter to skip the number installed locations
     * @type {string}
     * @example 1
     * @default 0
     */
    skip?: string;
};
export type OAuthSearchParams = {
    /**
     * Filters out location which are installed for specified app under the specified companyId
     * @type {string}
     * @example tDtDnQdgm2LXpyiqYvZ6
     */
    companyId: string;
    /**
     * Parameter to search by the appId
     * @type {string}
     * @example tDtDnQdgm2LXpyiqYvZ6
     */
    appId: string;
    /**
     * Filters out location which are installed for specified app under the specified company
     * @type {boolean}
     * @example true
     */
    isInstalled?: string;
    /**
     * Parameter to limit the number installed locations
     * @type {string}
     * @example 10
     * @default 20
     */
    limit?: string;
    /**
     * Filters out locations which are installed for specified app in trial mode
     * @type {boolean}
     * @example true
     */
    onTrial?: string;
    /**
     * Filters out location which are installed for specified app under the specified planId
     * @type {string}
     * @example true
     */
    planId?: string;
    /**
     * Parameter to search for the installed location by name
     * @type {string}
     * @example location name
     */
    query?: string;
    /**
     * Parameter to skip the number installed locations
     * @type {string}
     * @example 1
     * @default 0
     */
    skip?: string;
};
export {};
