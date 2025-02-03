export type StrictOmit<T, K extends keyof T> = Omit<T, K>;
/**
 * Represents a Bad Request Data Transfer Object (DTO).
 * This type is used to convey information about a bad request error.
 *
 * @property {number} [statusCode] - The HTTP status code of the response.
 * @property {string} [message] - The provided error message, giving context for the reason of the error.
 *
 * @example { statusCode: 400, message: "Bad Request" }
 */
export type BadRequestDTO = {
    statusCode?: number;
    message?: string;
};
/**
 * Represents an Unauthorized Data Transfer Object (DTO).
 * This type is used to convey information about an unauthorized error.
 *
 * @property {number} [statusCode] - The HTTP status code of the response.
 * @property {string} [message] - The provided error message, giving context for the reason of the error.
 * @property {string} [error] - The type of error received.
 *
 * @example { statusCode: 401, message: "Invalid token: access token is invalid", error: "Unauthorized" }
 */
export type UnauthorizedDTO = {
    statusCode?: number;
    message?: string;
    error?: string;
};
/**
 * Represents an Unprocessable Data Transfer Object (DTO).
 * This type is used to convey information about an unprocessable entity error.
 *
 * @property {number} [statusCode] - The HTTP status code of the response.
 * @property {string} [message] - The provided error message, giving context for the reason of the error.
 * @property {string} [error] - The type of error received.
 *
 * @example { statusCode: 422, message: "Unprocessable Entity", error: "Unprocessable Entity" }
 */
export type UnprocessableDTO = {
    statusCode?: number;
    message?: string;
    error?: string;
};
/**
 * Represents a Success Delete Data Transfer Object (DTO).
 * This type is used to convey information about a successful deletion.
 *
 * @property {boolean} [success] - The status of the deletion.
 *
 * @example { success: true }
 */
export type SuccessDeleteDTO = {
    success?: boolean;
};
/**
 * Represents a Succeded Delete Data Transfer Object (DTO).
 * This type is used to convey information about a successful deletion.
 *
 * @property {boolean} [succeded] - The status of the deletion.
 *
 * @example { succeded: true }
 */
export type SuccededDeleteDTO = {
    succeded?: boolean;
};
/**
 * Represents a Custom Recurrence Rule Options Data Transfer Object (DTO).
 *
 * @property {IntervalType} intervalType - The type of interval for the recurrence rule.
 */
type IntervalType = "yearly" | "monthly" | "weekly" | "daily" | "hourly" | "minutely" | "secondly";
/**
 * Represents a Day of Month.
 * This type is used to represent the day of the month.
 * The day of the month can be any number between 1 and 28, or -1.
 * -1 is used to represent the last day of the month.
 *
 * @property {number} - The day of the month. (1-28, -1)
 *
 * @example -1
 */
type DayOfMonth = -1 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28;
/**
 * Represents a Day of Week.
 * This type is used to represent the day of the week in English.
 * "mo" represents Monday
 * "tu" represents Tuesday
 * "we" represents Wednesday
 * "th" represents Thursday
 * "fr" represents Friday
 * "sa" represents Saturday
 * "su" represents Sunday.
 *
 * @property {string} - The day of the week. ("mo", "tu", "we", "th", "fr", "sa", "su")
 *
 * @example "mo"
 */
type DayOfWeek = "mo" | "tu" | "we" | "th" | "fr" | "sa" | "su";
/**
 * Represents a Number of Week.
 * This type is used to represent the number of the week.
 * -1 is used to represent the last week of the month.
 * 1 is used to represent the first week of the month.
 * 2 is used to represent the second week of the month.
 * 3 is used to represent the third week of the month.
 * 4 is used to represent the fourth week of the month.
 *
 * @property {number} - The number of the week. (-1, 1, 2, 3, 4)
 *
 * @example 1
 */
type NumOfWeek = -1 | 1 | 2 | 3 | 4;
/**
 * Represents a Month of Year.
 * This type is used to represent the month of the year in English.
 * "jan" represents January
 * "feb" represents February
 * "mar" represents March
 * "apr" represents April
 * "may" represents May
 * "jun" represents June
 * "jul" represents July
 * "aug" represents August
 * "sep" represents September
 * "oct" represents October
 * "nov" represents November
 * "dec" represents December.
 *
 * @property {string} - The month of the year. ("jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec")
 *
 * @example "jan"
 */
type MonthOfYear = "jan" | "feb" | "mar" | "apr" | "may" | "jun" | "jul" | "aug" | "sep" | "oct" | "nov" | "dec";
/**
 * Represents a Custom Recurrence Rule Options Data Transfer Object (DTO).
 * This type is used to convey information about a custom recurrence rule.
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
    intervalType: IntervalType;
    interval: number;
    startDate: string;
    startTime?: string;
    endDate?: string;
    endTime?: string;
    dayOfMonth?: DayOfMonth;
    dayOfWeek?: DayOfWeek;
    numOfWeek?: NumOfWeek;
    monthOfYear?: MonthOfYear;
    count?: number;
    daysBefore?: number;
};
/**
 * Represents a Schedule Options Data Transfer Object (DTO).
 * This type is used to convey information about a schedule options.
 *
 * @property {string} [executeAt]
 * @example "2023-01-01T20:45:00"
 *
 * @property {CustomRRuleOptionsDTO} [rrule] - Custom Recurrence Rule Options.
 * @example {
 *              intervalType: "monthly",
 *              interval: 2,
 *              startDate: "2023-01-01",
 *              startTime: "20:45:00",
 *              endDate: "2029-11-01",
 *              endTime: "18:45:00",
 *              dayOfMonth: 15,
 *              dayOfWeek: "mo",
 *              numOfWeek: 1,
 *              monthOfYear: "jan",
 *              count: 10,
 *              daysBefore: 5
 *         }
 */
export type ScheduleOptionsDTO = {
    executeAt: string;
    rrule: CustomRRuleOptionsDTO;
};
export declare enum CountryCodes {
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
    Zimbabwe = "ZW"
}
export {};
