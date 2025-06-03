export type StrictOmit<T, K extends keyof T> = Omit<T, K>;

export type DeepRequired<T> = T extends object
  ? {
      [P in keyof T]-?: DeepRequired<T[P]>;
    }
  : T;

/**
 * Represents a Bad Request Data Transfer Object (DTO).
 * This type is used to convey information about a bad request error.
 *
 * @example
 * ```ts
 * {
 *    statusCode: 400,
 *    message: "Bad Request"
 * }
 * ```
 *
 * @property {number} [statusCode] - The HTTP status code of the response.
 * @example 400
 *
 * @property {string} [message] - The provided error message, giving context for the reason of the error.
 * @example "Bad Request"
 */
export type BadRequestDTO = {
  /**
   * The HTTP status code of the response.
   *
   * @type {number}
   * @example 400
   */
  statusCode?: number;

  /**
   * The provided error message, giving context for the reason of the error.
   *
   * @type {string}
   * @example "Bad Request"
   */
  message?: string;
};

/**
 * Represents an Unauthorized Data Transfer Object (DTO).
 * This type is used to convey information about an unauthorized error.
 *
 * @example
 * ```ts
 * {
 *    statusCode: 401,
 *    message: "Invalid token: access token is invalid",
 *    error: "Unauthorized"
 * }
 * ```
 *
 * @property {number} [statusCode] - The HTTP status code of the response.
 * @example 401
 *
 * @property {string} [message] - The provided error message, giving context for the reason of the error.
 * @example "Invalid token: access token is invalid"
 *
 * @property {string} [error] - The type of error received.
 * @example "Unauthorized"
 */
export type UnauthorizedDTO = {
  /**
   * The HTTP status code of the response.
   *
   * @type {number}
   * @example 401
   */
  statusCode?: number;

  /**
   * The provided error message, giving context for the reason of the error.
   *
   * @type {string}
   * @example "Invalid token: access token is invalid"
   */
  message?: string;

  /**
   * The type of error received.
   *
   * @type {string}
   * @example "Unauthorized"
   */
  error?: string;
};

/**
 * Represents an Unprocessable Data Transfer Object (DTO).
 * This type is used to convey information about an unprocessable entity error.
 *
 * @example
 * ```ts
 * {
 *    statusCode: 422,
 *    message: ["Unprocessable Entity: property 'firstName' is required"],
 *    error: "Unprocessable Entity"
 * }
 * ```
 *
 * @property {number} [statusCode] - The HTTP status code of the response.
 * @example 422
 *
 * @property {string[]} [message] - The provided error message(s), giving context for the reason of the error.
 * @example ["Unprocessable Entity: property 'firstName' is required"]
 *
 * @property {string} [error] - The type of error received.
 * @example "Unprocessable Entity"
 */
export type UnprocessableDTO = {
  /**
   * The HTTP status code of the response.
   *
   * @type {number}
   * @example 422
   */
  statusCode?: number;

  /**
   * The provided error message(s), giving context for the reason of the error.
   *
   * @type {string[]}
   * @example ["Unprocessable Entity: property 'firstName' is required"]
   */
  message?: string[];

  /**
   * The type of error received.
   *
   * @type {string}
   * @example "Unprocessable Entity"
   */
  error?: string;
};

/**
 * Represents a Success Delete Data Transfer Object (DTO).
 * This type is used to convey information about a successful deletion.
 *
 * @example
 * ```ts
 * {
 *   success: true
 * }
 * ```
 *
 * @property {boolean} [success] - The status of the deletion.
 * @example true
 */
export type SuccessDeleteDTO = {
  /**
   * The status of the deletion.
   *
   * @type {boolean}
   * @example true
   */
  success?: boolean;
};

/**
 * Represents a Succeded Delete Data Transfer Object (DTO).
 * This type is used to convey information about a successful deletion.
 *
 * @example
 * ```ts
 * {
 *  succeded: true
 * }
 * ```
 *
 * @property {boolean} [succeded] - The status of the deletion.
 * @example true
 */
export type SuccededDeleteDTO = {
  /**
   * The status of the deletion.
   *
   * @type {boolean}
   * @example true
   */
  succeded?: boolean;
};

/**
 * Represents a Custom Recurrence Rule Options Data Transfer Object (DTO).
 *
 * @property {IntervalType} [intervalType] - The type of interval for the recurrence rule.
 * @example "monthly"
 */
type IntervalType =
  | "yearly"
  | "monthly"
  | "weekly"
  | "daily"
  | "hourly"
  | "minutely"
  | "secondly";

/**
 * Represents a Day of Month.
 * This type is used to represent the day of the month.
 * The day of the month can be any number between 1 and 28, or -1.
 * -1 is used to represent the last day of the month.
 *
 * @property {number} [DayOfMonth] - The day of the month. (1-28, -1)
 * @example -1
 */
type DayOfMonth =
  | -1
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28;

/**
 * This type is used to represent the day of the week in English.
 *
 * "mo" represents Monday
 *
 * "tu" represents Tuesday
 *
 * "we" represents Wednesday
 *
 * "th" represents Thursday
 *
 * "fr" represents Friday
 *
 * "sa" represents Saturday
 *
 * "su" represents Sunday.
 *
 * @property {string} - The day of the week. ("mo", "tu", "we", "th", "fr", "sa", "su")
 * @example "mo"
 */
type DayOfWeek = "mo" | "tu" | "we" | "th" | "fr" | "sa" | "su";

/**
 * This type is used to represent the number of the week.
 *
 * -1 is used to represent the last week of the month.
 *
 * 1 is used to represent the first week of the month.
 *
 * 2 is used to represent the second week of the month.
 *
 * 3 is used to represent the third week of the month.
 *
 * 4 is used to represent the fourth week of the month.
 *
 * @property {number} - The number of the week. (-1, 1, 2, 3, 4)
 * @example 1
 */
type NumOfWeek = -1 | 1 | 2 | 3 | 4;

/**
 * Represents a Month of Year.
 * This type is used to represent the month of the year in English.
 *
 * "jan" represents January.
 *
 * "feb" represents February.
 *
 * "mar" represents March.
 *
 * "apr" represents April.
 *
 * "may" represents May.
 *
 * "jun" represents June.
 *
 * "jul" represents July.
 *
 * "aug" represents August.
 *
 * "sep" represents September.
 *
 * "oct" represents October.
 *
 * "nov" represents November.
 *
 * "dec" represents December.
 *
 * @property {string} - The month of the year. ("jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec")
 * @example "jan"
 */
type MonthOfYear =
  | "jan"
  | "feb"
  | "mar"
  | "apr"
  | "may"
  | "jun"
  | "jul"
  | "aug"
  | "sep"
  | "oct"
  | "nov"
  | "dec";

/**
 * Represents a Custom Recurrence Rule Options Data Transfer Object (DTO).
 * This type is used to convey information about a custom recurrence rule.
 *
 * @example
 * ```ts
 * {
 *  intervalType: "monthly",
 *  interval: 2,
 *  startDate: "2023-01-01",
 *  startTime: "20:45:00",
 *  endDate: "2029-11-01",
 *  endTime: "18:45:00",
 *  dayOfMonth: 15,
 *  dayOfWeek: "mo",
 *  numOfWeek: 1,
 *  monthOfYear: "jan",
 *  count: 10,
 *  daysBefore: 5
 * }
 * ```
 *
 * @property {IntervalType} [intervalType] - The type of interval for the recurrence rule.
 * @example "monthly"
 *
 * @property {number} [interval] - How many times the interval type passes between occurrences. (intervalType: "monthly", interval: 2 means every 2 months)
 * @example 2
 *
 * @property {string} [startDate] - The start date for the recurrence rule (YYYY-MM-DD).
 * @example "2023-01-01"
 *
 * @property {string} [startTime] - The start time for the recurrence rule (HH:mm:ss).
 * @example "20:45:00"
 *
 * @property {string} [endDate] - The end date for the recurrence rule (YYYY-MM-DD).
 * @example "2029-11-01"
 *
 * @property {string} [endTime] - The end time for the recurrence rule (HH:mm:ss).
 * @example "18:45:00"
 *
 * @property {DayOfMonth} [dayOfMonth] - The day of the month for the recurrence rule.
 * @example 15
 *
 * @property {DayOfWeek} [dayOfWeek] - The day of the week for the recurrence rule.
 * @example "mo"
 *
 * @property {NumOfWeek} [numOfWeek] - The number of the week within the month for the recurrence rule.
 * @example 1
 *
 * @property {MonthOfYear} [monthOfYear] - The month of the year for the recurrence rule.
 * @example "jan"
 *
 * @property {number} [count] - The count for the recurrence rule.
 * @example 10
 *
 * @property {number} [daysBefore] - The days before for the recurrence rule.
 * @example 5
 */
export type CustomRRuleOptionsDTO = {
  /**
   * The type of interval for the recurrence rule.
   *
   * @type {IntervalType}
   * @example "monthly"
   */
  intervalType: IntervalType;

  /**
   * How many times the interval type passes between occurrences. (intervalType: "monthly", interval: 2 means every 2 months)
   *
   * @type {number}
   * @example 2
   */
  interval: number;

  /**
   * The start date for the recurrence rule (YYYY-MM-DD).
   *
   * @type {string}
   * @example "2023-01-01"
   */
  startDate: string;

  /**
   * The start time for the recurrence rule (HH:mm:ss).
   *
   * @type {string}
   * @example "20:45:00"
   */
  startTime?: string;

  /**
   * The end date for the recurrence rule (YYYY-MM-DD).
   *
   * @type {string}
   * @example "2029-11-01"
   */
  endDate?: string;

  /**
   * The end time for the recurrence rule (HH:mm:ss).
   *
   * @type {string}
   * @example "18:45:00"
   */
  endTime?: string;

  /**
   * The day of the month for the recurrence rule.
   *
   * @type {DayOfMonth}
   * @example 15
   */
  dayOfMonth?: DayOfMonth;

  /**
   * The day of the week for the recurrence rule.
   *
   * @type {DayOfWeek}
   * @example "mo"
   */
  dayOfWeek?: DayOfWeek;

  /**
   * The number of the week within the month for the recurrence rule.
   *
   * @type {NumOfWeek}
   * @example 1
   */
  numOfWeek?: NumOfWeek;

  /**
   * The month of the year for the recurrence rule.
   *
   * @type {MonthOfYear}
   * @example "jan"
   */
  monthOfYear?: MonthOfYear;

  /**
   * The count for the recurrence rule.
   *
   * @type {number}
   * @example 10
   */
  count?: number;

  /**
   * The days before for the recurrence rule.
   *
   * @type {number}
   * @example 5
   */
  daysBefore?: number;
};

/**
 * Represents a Schedule Options Data Transfer Object (DTO).
 * This type is used to convey information about a schedule options.
 * @example
 * ```ts
 *  {
 *    executeAt: "2023-01-01T20:45:00",
 *    rrule: {
 *      intervalType: "monthly",
 *      interval: 2,
 *      startDate: "2023-01-01",
 *      startTime: "20:45:00",
 *      endDate: "2029-11-01",
 *      endTime: "18:45:00",
 *      dayOfMonth: 15,
 *      dayOfWeek: "mo",
 *      numOfWeek: 1,
 *      monthOfYear: "jan",
 *      count: 10,
 *      daysBefore: 5
 *    }
 *  }
 * ```
 *
 * @property {string} [executeAt]
 * @example "2023-01-01T20:45:00"
 *
 * @property {CustomRRuleOptionsDTO} [rrule] - Custom Recurrence Rule Options.
 * @example
 * ```ts
 *  {
 *    intervalType: "monthly",
 *    interval: 2,
 *    startDate: "2023-01-01",
 *    startTime: "20:45:00",
 *    endDate: "2029-11-01",
 *    endTime: "18:45:00",
 *    dayOfMonth: 15,
 *    dayOfWeek: "mo",
 *    numOfWeek: 1,
 *    monthOfYear: "jan",
 *    count: 10,
 *    daysBefore: 5
 *  }
 * ```
 */
export type ScheduleOptionsDTO = {
  /**
   * The date and time to execute the schedule.
   *
   * @type {string}
   * @example "2023-01-01T20:45:00"
   */
  executeAt: string;

  /**
   * Custom Recurrence Rule Options.
   *
   * @type {CustomRRuleOptionsDTO}
   * @example
   * ```ts
   * {
   *    intervalType: "monthly",
   *    interval: 2,
   *    startDate: "2023-01-01",
   *    startTime: "20:45:00",
   *    endDate: "2029-11-01",
   *    endTime: "18:45:00",
   *    dayOfMonth: 15,
   *    dayOfWeek: "mo",
   *    numOfWeek: 1,
   *    monthOfYear: "jan",
   *    count: 10,
   *    daysBefore: 5
   * }
   * ```
   */
  rrule: CustomRRuleOptionsDTO;
};

/**
 * Represents the country abbreviations accepted by the API.
 *
 * This type is used to represent the country codes.
 *
 * The country codes are two-letter abbreviations.
 *
 * @property {string} - The country code.
 * @example "US"
 */
export enum CountryCodes {
  Afghanistan = "AF",
  AlandIslands = "AX",
  Albania = "AL",
  Algeria = "DZ",
  AmericanSamoa = "AS",
  AndorrA = "AD",
  Angola = "AO",
  Anguilla = "AI",
  Antarctica = "AQ",
  AntiguaAndBarbuda = "AG",
  Argentina = "AR",
  Armenia = "AM",
  Aruba = "AW",
  Australia = "AU",
  Austria = "AT",
  Azerbaijan = "AZ",
  Bahamas = "BS",
  Bahrain = "BH",
  Bangladesh = "BD",
  Barbados = "BB",
  Belarus = "BY",
  Belgium = "BE",
  Belize = "BZ",
  Benin = "BJ",
  Bermuda = "BM",
  Bhutan = "BT",
  Bolivia = "BO",
  BosniaAndHerzegovina = "BA",
  Botswana = "BW",
  BouvetIsland = "BV",
  Brazil = "BR",
  BritishIndianOceanTerritory = "IO",
  BruneiDarussalam = "BN",
  Bulgaria = "BG",
  BurkinaFaso = "BF",
  Burundi = "BI",
  Cambodia = "KH",
  Cameroon = "CM",
  Canada = "CA",
  CapeVerde = "CV",
  CaymanIslands = "KY",
  CentralAfricanRepublic = "CF",
  Chad = "TD",
  Chile = "CL",
  China = "CN",
  ChristmasIsland = "CX",
  CocosKeelingIslands = "CC",
  Colombia = "CO",
  Comoros = "KM",
  Congo = "CG",
  CongoTheDemocraticRepublicOfThe = "CD",
  CookIslands = "CK",
  CostaRica = "CR",
  CoteDIvoire = "CI",
  Croatia = "HR",
  Cuba = "CU",
  Cyprus = "CY",
  CzechRepublic = "CZ",
  Denmark = "DK",
  Djibouti = "DJ",
  Dominica = "DM",
  DominicanRepublic = "DO",
  Ecuador = "EC",
  Egypt = "EG",
  ElSalvador = "SV",
  EquatorialGuinea = "GQ",
  Eritrea = "ER",
  Estonia = "EE",
  Ethiopia = "ET",
  FalklandIslandsMalvinas = "FK",
  FaroeIslands = "FO",
  Fiji = "FJ",
  Finland = "FI",
  France = "FR",
  FrenchGuiana = "GF",
  FrenchPolynesia = "PF",
  FrenchSouthernTerritories = "TF",
  Gabon = "GA",
  Gambia = "GM",
  Georgia = "GE",
  Germany = "DE",
  Ghana = "GH",
  Gibraltar = "GI",
  Greece = "GR",
  Greenland = "GL",
  Grenada = "GD",
  Guadeloupe = "GP",
  Guam = "GU",
  Guatemala = "GT",
  Guernsey = "GG",
  Guinea = "GN",
  GuineaBissau = "GW",
  Guyana = "GY",
  Haiti = "HT",
  HeardIslandAndMcdonaldIslands = "HM",
  HolySeeVaticanCityState = "VA",
  Honduras = "HN",
  HongKong = "HK",
  Hungary = "HU",
  Iceland = "IS",
  India = "IN",
  Indonesia = "ID",
  IranIslamicRepublicOf = "IR",
  Iraq = "IQ",
  Ireland = "IE",
  IsleOfMan = "IM",
  Isreal = "IL",
  Italy = "IT",
  Jamaica = "JM",
  Japan = "JP",
  Jersey = "JE",
  Jordan = "JO",
  Kazakhstan = "KZ",
  Kenya = "KE",
  Kiribati = "KI",
  KoreaDemocraticPeoplesRepublic = "KP",
  KoreaRepublicOf = "KR",
  Kosovo = "XK",
  Kuwait = "KW",
  Kyrgyzstan = "KG",
  LaoPeoplesDemocraticRepublic = "LA",
  Latvia = "LV",
  Lebanon = "LB",
  Lesotho = "LS",
  Liberia = "LR",
  LibyanArabJamahiriya = "LY",
  Liechtenstein = "LI",
  Lithuania = "LT",
  Luxembourg = "LU",
  Macao = "MO",
  MacedoniaTheFormerYugoslavRepublicOf = "MK",
  Madagascar = "MG",
  Malawi = "MW",
  Malaysia = "MY",
  Maldives = "MV",
  Mali = "ML",
  Malta = "MT",
  MarshallIslands = "MH",
  Martinique = "MQ",
  Mauritania = "MR",
  Mauritius = "MU",
  Mayotte = "YT",
  Mexico = "MX",
  MicronesiaFederatedStatesOf = "FM",
  MoldovaRepublicOf = "MD",
  Monaco = "MC",
  Mongolia = "MN",
  Montenegro = "ME",
  Montserrat = "MS",
  Morocco = "MA",
  Mozambique = "MZ",
  Myanmar = "MM",
  Namibia = "NA",
  Nauru = "NR",
  Nepal = "NP",
  Netherlands = "NL",
  NetherlandsAntilles = "AN",
  NewCaledonia = "NC",
  NewZealand = "NZ",
  Nicaragua = "NI",
  Niger = "NE",
  Nigeria = "NG",
  Niue = "NU",
  NorfolkIsland = "NF",
  NorthernMarianaIslands = "MP",
  Norway = "NO",
  Oman = "OM",
  Pakistan = "PK",
  Palau = "PW",
  PalestinianTerritoryOccupied = "PS",
  Panama = "PA",
  PapuaNewGuinea = "PG",
  Paraguay = "PY",
  Peru = "PE",
  Philippines = "PH",
  Pitcairn = "PN",
  Poland = "PL",
  Portugal = "PT",
  PuertoRico = "PR",
  Qatar = "QA",
  Reunion = "RE",
  Romania = "RO",
  RussianFederation = "RU",
  Rwanda = "RW",
  SaintHelena = "SH",
  SaintKittsAndNevis = "KN",
  SaintLucia = "LC",
  SaintMartin = "MF",
  SaintPierreAndMiquelon = "PM",
  SaintVincentAndTheGrenadines = "VC",
  Samoa = "WS",
  SanMarino = "SM",
  SaoTomeAndPrincipe = "ST",
  SaudiArabia = "SA",
  Senegal = "SN",
  Serbia = "RS",
  Seychelles = "SC",
  SierraLeone = "SL",
  Singapore = "SG",
  SintMaarten = "SX",
  Slovakia = "SK",
  Slovenia = "SI",
  SolomonIslands = "SB",
  Somalia = "SO",
  SouthAfrica = "ZA",
  SouthGeorgiaAndTheSouthSandwichIslands = "GS",
  Spain = "ES",
  SriLanka = "LK",
  Sudan = "SD",
  Suriname = "SR",
  SvalbardAndJanMayen = "SJ",
  Swaziland = "SZ",
  Sweden = "SE",
  Switzerland = "CH",
  SyrianArabRepublic = "SY",
  Taiwan = "TW",
  Tajikistan = "TJ",
  Tanzania = "TZ",
  Thailand = "TH",
  TimorLeste = "TL",
  Togo = "TG",
  Tokelau = "TK",
  Tonga = "TO",
  TrinidadAndTobago = "TT",
  Tunisia = "TN",
  Turkey = "TR",
  Turkmenistan = "TM",
  TurksAndCaicosIslands = "TC",
  Tuvalu = "TV",
  Uganda = "UG",
  UK = "GB",
  Ukraine = "UA",
  UnitedArabEmirates = "AE",
  UnitedStates = "US",
  UnitedStatesMinorOutlyingIslands = "UM",
  Uruguay = "UY",
  Uzbekistan = "UZ",
  Vanuatu = "VU",
  Venezuela = "VE",
  VietNam = "VN",
  VirginIslandsBritish = "VG",
  VirginIslandsUS = "VI",
  WallisAndFutuna = "WF",
  WesternSahara = "EH",
  Yemen = "YE",
  Zambia = "ZM",
  Zimbabwe = "ZW",
}

enum SearchFilterOpporators {
  eq = "eq",
  not_eq = "not_eq",
  contains = "contains",
  not_contains = "not_contains",
  exists = "exists",
  not_exists = "not_exists",
  range = "range",
}

export type SearchConfigDates = {
  gt?: string /** The greater than date (2021-06-23T03:30:00+01:00) */;
  lt?: string /** The less than date (2021-06-23T03:30:00+01:00) */;
  gte?: string /** The greater than or equal date (2021-06-23T03:30:00+01:00) */;
  lte?: string /** The less than or equal date (2021-06-23T03:30:00+01:00) */;
};

type SearchContactId = {
  field: "id";
  operator: "eq" | "not_eq";
  value: string;
};

type SearchAddressValue = {
  field: "address";
  operator: "eq" | "not_eq" | "contains" | "not_contains";
  value: string;
};

type SearchAddressExists = {
  field: "address";
  operator: "exists" | "not_exists";
};

type SearchAddress = SearchAddressValue | SearchAddressExists;

type SearchAssignedToValue = {
  field: "assignedTo";
  operator: "eq" | "not_eq";
  value: string;
};

type SearchAssignedToExists = {
  field: "assignedTo";
  operator: "exists" | "not_exists";
};

type SearchAssignedTo = SearchAssignedToValue | SearchAssignedToExists;

type SearchBusinessNameValue = {
  field: "businessName";
  operator: "eq" | "not_eq" | "contains" | "not_contains";
  value: string;
};

type SearchBusinessNameExists = {
  field: "businessName";
  operator: "exists" | "not_exists";
};

type SearchBusinessName = SearchBusinessNameValue | SearchBusinessNameExists;

type SearchCityValue = {
  field: "city";
  operator: "eq" | "not_eq" | "contains" | "not_contains";
  value: string;
};

type SearchCityExists = {
  field: "city";
  operator: "exists" | "not_exists";
};

type SearchCity = SearchCityValue | SearchCityExists;

type SearchCountryValue = {
  field: "country";
  operator: "eq" | "not_eq";
  value: string;
};

type SearchCountryExists = {
  field: "country";
  operator: "exists" | "not_exists";
};

type SearchCountry = SearchCountryValue | SearchCountryExists;

type SearchCompanyNameValue = {
  field: "companyName";
  operator: "eq" | "not_eq" | "contains" | "not_contains";
  value: string;
};

type SearchCompanyNameExists = {
  field: "companyName";
  operator: "exists" | "not_exists";
};

type SearchCompanyName = SearchCompanyNameValue | SearchCompanyNameExists;

type SearchDateAddedRange = {
  field: "dateAdded";
  operator: "range";
  value: SearchConfigDates;
};

type SearchDateAddedExists = {
  field: "dateAdded";
  operator: "exists" | "not_exists";
};

type SearchDateAdded = SearchDateAddedRange | SearchDateAddedExists;

type SearchDateUpdatedRange = {
  field: "dateUpdated";
  operator: "range";
  value: SearchConfigDates;
};

type SearchDateUpdatedExists = {
  field: "dateUpdated";
  operator: "exists" | "not_exists";
};

type SearchDateUpdated = SearchDateUpdatedRange | SearchDateUpdatedExists;

type SearchDNDValue = {
  field: "dnd";
  operator: "eq" | "not_eq";
  value: boolean;
};

type SearchDNDExists = {
  field: "dnd";
  operator: "exists" | "not_exists";
};

type SearchDND = SearchDNDValue | SearchDNDExists;

type SearchEmailValue = {
  field: "email";
  operator: "eq" | "not_eq";
  value: string;
};

type SearchEmailExists = {
  field: "email";
  operator: "exists" | "not_exists";
};

type SearchEmail = SearchEmailValue | SearchEmailExists;

type SearchFollowersValue = {
  field: "followers";
  operator: "eq" | "not_eq";
  value: string;
};

type SearchFollowersExists = {
  field: "followers";
  operator: "exists" | "not_exists";
};

type SearchFollowers = SearchFollowersValue | SearchFollowersExists;

type SearchFirstNameLowerValue = {
  field: "firstNameLowerCase";
  operator: "eq" | "not_eq" | "contains" | "not_contains";
  value: string;
};

type SearchFirstNameLowerExists = {
  field: "firstNameLowerCase";
  operator: "exists" | "not_exists";
};

type SearchFirstNameLower =
  | SearchFirstNameLowerValue
  | SearchFirstNameLowerExists;

type SearchLastNameLowerValue = {
  field: "lastNameLowerCase";
  operator: "eq" | "not_eq" | "contains" | "not_contains";
  value: string;
};

type SearchLastNameLowerExists = {
  field: "lastNameLowerCase";
  operator: "exists" | "not_exists";
};

type SearchLastNameLower = SearchLastNameLowerValue | SearchLastNameLowerExists;

type SearchIsValidWhatsappValue = {
  field: "isValidWhatsapp";
  operator: "eq" | "not_eq";
  value: boolean;
};

type SearchIsValidWhatsappExists = {
  field: "isValidWhatsapp";
  operator: "exists" | "not_exists";
};

type SearchIsValidWhatsapp =
  | SearchIsValidWhatsappValue
  | SearchIsValidWhatsappExists;

type SearchLastEmailClickedDateRange = {
  field: "lastEmailClickedDate";
  operator: "range";
  value: SearchConfigDates;
};

type SearchLastEmailClickedDateExists = {
  field: "lastEmailClickedDate";
  operator: "exists" | "not_exists";
};

type SearchLastEmailClickedDate =
  | SearchLastEmailClickedDateRange
  | SearchLastEmailClickedDateExists;

type SearchLastEmailOpenedDateRange = {
  field: "lastEmailOpenedDate";
  operator: "range";
  value: SearchConfigDates;
};

type SearchLastEmailOpenedDateExists = {
  field: "lastEmailOpenedDate";
  operator: "exists" | "not_exists";
};

type SearchLastEmailOpenedDate =
  | SearchLastEmailOpenedDateRange
  | SearchLastEmailOpenedDateExists;

type SearchPhoneValue = {
  field: "phone";
  operator: "eq" | "not_eq" | "contains" | "not_contains";
  value: string /** Do not pass country code */;
};

type SearchPhoneExists = {
  field: "phone";
  operator: "exists" | "not_exists";
};

type SearchPhone = SearchPhoneValue | SearchPhoneExists;

type SearchPostalCodeValue = {
  field: "postalCode";
  operator: "eq" | "not_eq" | "contains" | "not_contains";
  value: string;
};

type SearchPostalCodeExists = {
  field: "postalCode";
  operator: "exists" | "not_exists";
};

type SearchPostalCode = SearchPostalCodeValue | SearchPostalCodeExists;

type SearchSourceValue = {
  field: "source";
  operator: "eq" | "not_eq" | "contains" | "not_contains";
  value: string;
};

type SearchSourceExists = {
  field: "source";
  operator: "exists" | "not_exists";
};

type SearchSource = SearchSourceValue | SearchSourceExists;

type SearchStateValue = {
  field: "state";
  operator: "eq" | "not_eq" | "contains" | "not_contains";
  value: string;
};

type SearchStateExists = {
  field: "state";
  operator: "exists" | "not_exists";
};

type SearchState = SearchStateValue | SearchStateExists;

type SearchTagsValue = {
  field: "tags";
  operator: "eq" | "not_eq" | "contains" | "not_contains";
  value: string[] /** contains any values included in array (OR Condition) */;
};

type SearchTagsExists = {
  field: "tags";
  operator: "exists" | "not_exists";
};

type SearchTags = SearchTagsValue | SearchTagsExists;

type SearchTimezoneValue = {
  field: "timezone";
  operator: "eq" | "not_eq";
  value: string;
};

type SearchTimezoneExists = {
  field: "timezone";
  operator: "exists" | "not_exists";
};

type SearchTimezone = SearchTimezoneValue | SearchTimezoneExists;

type SearchContactTypeValue = {
  field: "type";
  operator: "eq" | "not_eq";
  value: string;
};

type SearchContactTypeExists = {
  field: "type";
  operator: "exists" | "not_exists";
};

type SearchContactType = SearchContactTypeValue | SearchContactTypeExists;

type SearchValidEmailValue = {
  field: "validEmail";
  operator: "eq" | "not_eq";
  value: boolean;
};

type SearchValidEmailExists = {
  field: "validEmail";
  operator: "exists" | "not_exists";
};

type SearchValidEmail = SearchValidEmailValue | SearchValidEmailExists;

type SearchWebsiteValue = {
  field: "website";
  operator: "eq" | "not_eq";
  value: string;
};

type SearchWebsiteExists = {
  field: "website";
  operator: "exists" | "not_exists";
};

type SearchWebsite = SearchWebsiteValue | SearchWebsiteExists;

type SearchLastAppointmentRange = {
  field: "lastAppointment";
  operator: "range";
  value: SearchConfigDates;
};

type SearchLastAppointmentExists = {
  field: "lastAppointment";
  operator: "exists" | "not_exists";
};

type SearchLastAppointment =
  | SearchLastAppointmentRange
  | SearchLastAppointmentExists;

type SearchActiveWorkflowsValue = {
  field: "activeWorkflows";
  operator: "eq" | "not_eq";
  value: string;
};

type SearchActiveWorkflowsExists = {
  field: "activeWorkflows";
  operator: "exists" | "not_exists";
};

type SearchActiveWorkflows =
  | SearchActiveWorkflowsValue
  | SearchActiveWorkflowsExists;

type SearchFinishedWorkflowsValue = {
  field: "finishedWorkflows";
  operator: "eq" | "not_eq";
  value: string;
};

type SearchFinishedWorkflowsExists = {
  field: "finishedWorkflows";
  operator: "exists" | "not_exists";
};

type SearchFinishedWorkflows =
  | SearchFinishedWorkflowsValue
  | SearchFinishedWorkflowsExists;

type SearchPipelineIdValue = {
  field: "pipelineId";
  operator: "eq" | "not_eq";
  value: string;
};

type SearchPipelineIdExists = {
  field: "pipelineId";
  operator: "exists" | "not_exists";
};

type SearchPipelineId = SearchPipelineIdValue | SearchPipelineIdExists;

type SearchPipelineStageIdValue = {
  field: "pipelineStageId";
  operator: "eq" | "not_eq";
  value: string;
};

type SearchPipelineStageIdExists = {
  field: "pipelineStageId";
  operator: "exists" | "not_exists";
};

type SearchPipelineStageId =
  | SearchPipelineStageIdValue
  | SearchPipelineStageIdExists;

type SearchOpportunityStatusValue = {
  field: "status";
  operator: "eq" | "not_eq";
  value: string;
};

type SearchOpportunityStatusExists = {
  field: "status";
  operator: "exists" | "not_exists";
};

type SearchOpportunityStatus =
  | SearchOpportunityStatusValue
  | SearchOpportunityStatusExists;

type SearchOpportunity = {
  field: "opportunity";
  operator: "nested";
  value: Array<
    SearchOpportunityStatus | SearchPipelineId | SearchPipelineStageId
  >;
};

type SearchCustomFieldType1Value = {
  field: string /** The key of the custom field superseeded with "customFields." followed by the custom field id */;
  operator: "eq" | "not_eq" | "contains" | "not_contains";
  value: string;
};

type SearchCustomFieldType1Exists = {
  field: string /** The key of the custom field superseeded with "customFields." followed by the custom field id */;
  operator: "exists" | "not_exists";
};

type SearchCustomFieldType1 =
  | SearchCustomFieldType1Value
  | SearchCustomFieldType1Exists;

type SearchCustomFieldType2Value = {
  field: string /** The key of the custom field superseeded with "customFields." followed by the custom field id */;
  operator: "eq" | "not_eq";
  value: string;
};

type SearchCustomFieldType2Exists = {
  field: string /** The key of the custom field superseeded with "customFields." followed by the custom field id */;
  operator: "exists" | "not_exists";
};

type SearchCustomFieldType2 =
  | SearchCustomFieldType2Value
  | SearchCustomFieldType2Exists;

type SearchCustomFieldType3Value = {
  field: string /** The key of the custom field superseeded with "customFields." followed by the custom field id */;
  operator: "eq" | "not_eq";
  value: number;
};

type SearchCustomFieldType3Exists = {
  field: string /** The key of the custom field superseeded with "customFields." followed by the custom field id */;
  operator: "exists" | "not_exists";
};

type SearchCustomFieldType3Range = {
  field: string /** The key of the custom field superseeded with "customFields." followed by the custom field id */;
  operator: "range";
  value: SearchConfigDates;
};

type SearchCustomFieldType3 =
  | SearchCustomFieldType3Value
  | SearchCustomFieldType3Exists
  | SearchCustomFieldType3Range;

type SearchCustomFieldType4Range = {
  field: string /** The key of the custom field superseeded with "customFields." followed by the custom field id */;
  operator: "range";
  value: SearchConfigDates;
};

type SearchCustomFieldType4Exists = {
  field: string /** The key of the custom field superseeded with "customFields." followed by the custom field id */;
  operator: "exists" | "not_exists";
};

type SearchCustomFieldType4 =
  | SearchCustomFieldType4Range
  | SearchCustomFieldType4Exists;

type SearchCustomFieldType5Value = {
  field: string /** The key of the custom field superseeded with "customFields." followed by the custom field id */;
  operator: "eq" | "not_eq" | "contains" | "not_contains";
  value: string;
};

type SearchCustomFieldType5Exists = {
  field: string /** The key of the custom field superseeded with "customFields." followed by the custom field id */;
  operator: "exists" | "not_exists";
};

type SearchCustomFieldType5 =
  | SearchCustomFieldType5Value
  | SearchCustomFieldType5Exists;

type SearchCustomField =
  | SearchCustomFieldType1
  | SearchCustomFieldType2
  | SearchCustomFieldType3
  | SearchCustomFieldType4
  | SearchCustomFieldType5;

export type SearchFilterConfig =
  | SearchContactId
  | SearchAddress
  | SearchAssignedTo
  | SearchBusinessName
  | SearchCity
  | SearchCountry
  | SearchCompanyName
  | SearchDateAdded
  | SearchDateUpdated
  | SearchDND
  | SearchEmail
  | SearchFollowers
  | SearchFirstNameLower
  | SearchLastNameLower
  | SearchIsValidWhatsapp
  | SearchLastEmailClickedDate
  | SearchLastEmailOpenedDate
  | SearchPhone
  | SearchPostalCode
  | SearchSource
  | SearchState
  | SearchTags
  | SearchTimezone
  | SearchContactType
  | SearchValidEmail
  | SearchWebsite
  | SearchLastAppointment
  | SearchActiveWorkflows
  | SearchFinishedWorkflows
  | SearchOpportunity
  | SearchCustomField;

export type SearchFilter = {
  group?: "AND" | "OR";
  filters: SearchFilterConfig[];
};

export type SearchSort = {
  field: string;
  direction: "asc" | "desc";
};
