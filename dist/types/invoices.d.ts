import { CountryCodes, ScheduleOptionsDTO, StrictOmit } from "./_global";
export type InvoicesAddressDTO = {
    addressLine1?: string /** The address line 1 (123 Main St) */;
    addressLine2?: string /** The address line 2 (Apt 1) */;
    city?: string /** The city (New York) */;
    state?: string /** The state (NY) */;
    countryCode?: CountryCodes /** The 2 letter country code (US) */;
    postalCode?: string /** The zip code (10001) */;
};
export type InvoicesBusinessDetailsDTO = {
    logoUrl?: string /** The logo URL (https://example.com/logo.png) */;
    name?: string /** The name of the business (Example Business) */;
    phoneNo?: string /** The phone number of the business (+1-214-559-6993) */;
    address?: InvoicesAddressDTO /** The address of the business */;
    website?: string /** The website of the business (https://example.com) */;
    customValues?: string[] /** The custom values of the business (["value1", "value2"]) */;
};
export type InvoicesItemTaxDTO = {
    _id: string /** The ID of the tax */;
    name: string /** The name of the tax */;
    rate: number /** The rate of the tax */;
    calculation: "exclusive" /** The calculation of the tax */;
    description: string /** The description of the tax */;
    taxId: string /** The tax ID */;
};
export type InvoicesItemDTO = {
    name: string /** Invoice Item Name (ABC Product) */;
    currency: string /** Currency (USD) */;
    amount: number /** Product amount (999) (decimals allowed) */;
    qty: number /** Product Quantity (1) */;
    description?: string /** Invoice descriptions (ABC Corp.) */;
    productId?: string /** Product Id (6578278e879ad2646715ba9c) */;
    priceId?: string /** Price Id (6578278e879ad2646715ba9c) */;
    taxes?: InvoicesItemTaxDTO[] /** Taxes */;
};
export type InvoicesDiscountDTO = {
    type: "percentage" | "fixed" /** Discount Type (percentage) */;
    value?: number /** Discount Value (10) */;
};
export interface InvoicesUpdateDiscountDTO extends InvoicesDiscountDTO {
    value: number /** Discount Value (10) */;
}
export type InvoicesCreateTemplateDTO = {
    altId: string /** location Id / company Id based on altType (6578278e879ad2646715ba9c) */;
    altType: "location" /** Alt Type (location) */;
    name: string /** Name of the template (New Template) */;
    businessDetails: InvoicesBusinessDetailsDTO /** Business Details */;
    currency: string /** Currency */;
    items: InvoicesItemDTO[] /** Items */;
    internal?: boolean /** Internal */;
    discount?: InvoicesDiscountDTO /** Discount */;
    termsNotes?: string /** Terms Notes */;
    title?: string /** Template title (New Template) */;
};
export type InvoicesGetTemplateResponseDTO = {
    _id: string /** Template Id (6578278e879ad2646715ba9c) */;
    altId: string /** Location Id or Agency Id (6578278e879ad2646715ba9c) */;
    altType: "location" /** Alt Type (location) */;
    name: string /** Name of the Template (New Template) */;
    businessDetails: InvoicesBusinessDetailsDTO /** Business Details */;
    currency: string /** Currency (USD) */;
    items: InvoicesItemDTO[] /** Invoice Items */;
    total: number /** Total Amount (999) (decimals allowed) */;
    createdAt: string /** created at (2023-12-12T09:27:42.355Z) */;
    updatedAt: string /** updated at (2023-12-12T09:27:42.355Z) */;
    discount?: InvoicesDiscountDTO /** Discount */;
};
export type InvoicesCreateTemplateResponseDTO = InvoicesGetTemplateResponseDTO;
export type InvoicesListTemplatesResponseDTO = {
    data: InvoicesGetTemplateResponseDTO[] /** List of Templates */;
    totalCount: number /** Total Count of Templates */;
};
export type InvoicesUpdateTemplateDTO = InvoicesCreateTemplateDTO;
export type InvoicesUpdateTemplateResponseDTO = InvoicesGetTemplateResponseDTO;
export type InvoicesAdditionalEmailsDTO = {
    email: string /** Email Address (john@does.com) */;
};
export type InvoicesContactDetailsDTO = {
    id: string /** Contact ID (6578278e879ad2646715ba9c) */;
    name: string /** Contact Name (Alex) */;
    phoneNo: string /** Contact Phone Number (+1-214-559-6993) */;
    email: string /** Contact Email (john@does.com) */;
    additionalEmails?: InvoicesAdditionalEmailsDTO[] /** Secondary email addresses for the contact to be saved */;
    companyName?: string /** Contact Company Name (ABC Corp.) */;
    address?: InvoicesAddressDTO /** Contact Address */;
    customFields?: string[] /** Custom Values */;
};
export interface InvoicesCreateScheduleDTO extends InvoicesCreateTemplateDTO {
    schedule: ScheduleOptionsDTO /** Schedule Options */;
    liveMode: boolean /** Live Mode (true) */;
}
type InvoicesStatusOptions = "draft" | "sent" | "payment_processing" | "paid" | "void" | "partially_paid";
export type InvoicesDefaultResponseDTO = {
    _id: string /** Schedule Id (6578278e879ad2646715ba9c) */;
    status: InvoicesStatusOptions /** Schedule Status (draft) */;
    liveMode: boolean /** Live Mode (true) */;
    altId: string /** Location Id or Agency Id (6578278e879ad2646715ba9c) */;
    altType: "location" /** Alt Type (location) */;
    name: string /** Name of the Schedule (New Schedule) */;
    businessDetails: InvoicesBusinessDetailsDTO /** Business Details */;
    invoiceNumber: number /** Invoice Number (19) */;
    currency: string /** Currency (USD) */;
    contactDetails: InvoicesContactDetailsDTO /** Contact Details */;
    issueDate: string /** Issue Date (2023-01-01) */;
    dueDate: string /** Due Date (2023-01-01) */;
    total: number /** Total Amount (999) (decimals allowed) */;
    title: string /** Title (INVOICE) */;
    amountDue: number /** Total Amount Due (999) (decimals allowed) */;
    createdAt: string /** created at (2023-12-12T09:27:42.355Z) */;
    updatedAt: string /** updated at (2023-12-12T09:27:42.355Z) */;
    items: InvoicesItemDTO[] /** Invoice Items */;
    discount?: InvoicesDiscountDTO /** Discount */;
};
export interface InvoicesGetScheduleResponseDTO extends InvoicesDefaultResponseDTO {
    schedule: ScheduleOptionsDTO /** Schedule Options */;
}
export type InvoicesCreateScheduleResponseDTO = InvoicesGetScheduleResponseDTO;
export type InvoicesListSchedulesResponseDTO = {
    schedules: InvoicesGetScheduleResponseDTO[] /** List of Schedules */;
    total: number /** Total Count of Schedules */;
};
export type InvoicesUpdateScheduleDTO = {
    altId: string /** location Id / company Id based on altType (6578278e879ad2646715ba9c) */;
    altType: "location" /** Alt Type (location) */;
    name: string /** Name of the Schedule (New Schedule) */;
    contactDetails: InvoicesContactDetailsDTO /** Contact Details */;
    schedule: ScheduleOptionsDTO /** Schedule Options */;
    liveMode: boolean /** Live Mode (true) */;
    businessDetails: InvoicesBusinessDetailsDTO /** Business Details */;
    currency: string /** Currency */;
    items: InvoicesItemDTO[] /** Items */;
    discount?: InvoicesDiscountDTO /** Discount */;
    termsNotes?: string /** Terms Notes */;
    title?: string /** Schedule title (New Schedule) */;
};
export type InvoicesUpdateScheduleResponseDTO = InvoicesGetScheduleResponseDTO;
export type InvoicesCardDTO = {
    brand: string /** Card Brand (Visa) */;
    last4: string /** Last 4 Digits (4242) */;
};
export type InvoicesUSBankAccountDTO = {
    bank_name: string /** Bank Name (Bank of America) */;
    last4: string /** Last 4 Digits (4242) */;
};
export type InvoicesAutoPaymentDetailsDTO = {
    enable: boolean /** Enable Auto Payment (true) */;
    type?: string /** Payment Type (card) */;
    paymentMethodId?: string /** Payment Method Id (6578278e879ad2646715ba9c) */;
    card?: InvoicesCardDTO /** Card Details */;
    usBankAccount?: InvoicesUSBankAccountDTO /** US Bank Account Details */;
};
export type InvoicesScheduleDTO = {
    altId: string /** location Id / company Id based on altType (6578278e879ad2646715ba9c) */;
    altType: "location" /** Alt Type (location) */;
    liveMode: boolean /** Live Mode (true) */;
    autoPayment?: InvoicesAutoPaymentDetailsDTO /** Auto Payment Details */;
};
export interface InvoicesScheduleResponseDTO extends InvoicesCreateScheduleResponseDTO {
    compiledTermNotes: string /** Compiled Term Notes */;
}
export type InvoicesAutoPaymentScheduleDTO = {
    altId: string /** location Id / company Id based on altType (6578278e879ad2646715ba9c) */;
    altType: "location" /** Alt Type (location) */;
    id: string /** Schedule Id (6578278e879ad2646715ba9c) */;
    autoPayment: InvoicesAutoPaymentDetailsDTO /** Auto Payment Details */;
};
export type InvoicesAutoPaymentInvoiceScheduleResponseDTO = InvoicesScheduleResponseDTO;
export type InvoicesCancelScheduleDTO = {
    altId: string /** location Id / company Id based on altType (6578278e879ad2646715ba9c) */;
    altType: "location" /** Alt Type (location) */;
};
export type InvoicesCancelScheduleResponseDTO = InvoicesScheduleResponseDTO;
export type InvoicesSendToDTO = {
    email: string[] /** Email Address (john@does.com) */;
    emailCc?: string[] /** Email CC Address (["jake@does.com", "jane@does.com"]) */;
    emailBcc?: string[] /** Email BCC Address (["jake@does.com", "jane@does.com"]) */;
    phoneNo?: string /** Phone Number (+1-214-559-6993) */;
};
export type InvoicesTTPDTO = {
    altId: string /** location Id / company Id based on altType (6578278e879ad2646715ba9c) */;
    altType: "location" /** Alt Type (location) */;
    name: string /** Invoice Name (New Invoice) */;
    businessDetails: InvoicesBusinessDetailsDTO /** Business Details */;
    currency: string /** Currency code (USD) */;
    items: InvoicesItemDTO[] /** Items */;
    contactDetails: InvoicesContactDetailsDTO /** Contact Details */;
    issueDate: string /** Issue Date (2023-01-01) */;
    sentTo: InvoicesSendToDTO /** Send To Details */;
    liveMode: boolean /** Live Mode (true) */;
    action: "draft" | "send" /** Action (draft) */;
    userId: string /** User Id (6578278e879ad2646715ba9c) */;
    termNotes?: string /** Terms Notes */;
    title?: string /** Invoice Title (New Invoice) */;
    invoiceNumber?: string /** Invoice Number (1001) */;
    dueDate?: string /** Due Date (2023-01-14) */;
    id?: string /** Invoice Id (6578278e879ad2646715ba9c) */;
    includeTermsNote?: boolean /** Include terms & notes with receipts (true) */;
    discount?: InvoicesDiscountDTO /** Discount */;
};
type InvoicesTTPInvoiceDTO = {
    _id: string /** Invoice Id (6578278e879ad2646715ba9c) */;
    status: InvoicesStatusOptions /** Invoice Status (draft) */;
    liveMode: boolean /** Live Mode (true) */;
    amountPaid: number /** Amount Paid (0) (decimals allowed) */;
    altId: string /** Location Id or Agency Id (6578278e879ad2646715ba9c) */;
    altType: "location" /** Alt Type (location) */;
    name: string /** Name of the invoice (New Invoice) */;
    businessDetails: InvoicesBusinessDetailsDTO /** Business Details */;
    invoiceNumber: number /** Invoice Number (19) */;
    currency: string /** Currency (USD) */;
    contactDetails: InvoicesContactDetailsDTO /** Contact Details */;
    issueDate: string /** Issue Date (2023-01-01) */;
    dueDate: string /** Due Date (2023-01-01) */;
    discount?: InvoicesDiscountDTO /** Discount */;
    invoiceItems: InvoicesItemDTO[] /** Invoice Items */;
    total: number /** Total Amount (999) (decimals allowed) */;
    title: string /** Title (INVOICE) */;
    amountDue: number /** Total Amount Due (999) (decimals allowed) */;
    createdAt: string /** created at (2023-12-12T09:27:42.355Z) */;
    updatedAt: string /** updated at (2023-12-12T09:27:42.355Z) */;
};
export type InvoicesTTPResponseDTO = {
    invoice: InvoicesTTPInvoiceDTO /** Invoice */;
    invoiceUrl: string /** preview url of generated invoice */;
};
export type InvoicesGenerateNumberResponseDTO = {
    invoiceNumber: number /** Invoice Number (1001) */;
};
export type InvoicesCreateDTO = {
    altId: string /** location Id / company Id based on altType (6578278e879ad2646715ba9c) */;
    altType: "location" /** Alt Type (location) */;
    name: string /** Invoice Name (New Invoice) */;
    businessDetails: InvoicesBusinessDetailsDTO /** Business Details */;
    currency: string /** Currency code (USD) */;
    items: InvoicesItemDTO[] /** Items */;
    discount?: InvoicesDiscountDTO /** Discount Details */;
    termsNotes?: string /** Terms Notes */;
    title?: string /** Invoice Title (New Invoice) */;
    contactDetails: InvoicesContactDetailsDTO /** Contact Details */;
    invoiceNumber?: string /** Invoice Number (1001) */;
    issueDate: string /** Issue Date (2023-01-01) */;
    dueDate: string /** Due Date (2023-01-14) */;
    sentTo: InvoicesSendToDTO /** Send To Details */;
    liveMode: boolean /** Live Mode (true) */;
};
export type InvoicesCreateResponseDTO = {
    _id: string /** Invoice Id (6578278e879ad2646715ba9c) */;
    status: InvoicesStatusOptions /** Invoice Status (draft) */;
    liveMode: boolean /** Live Mode (true) */;
    amountPaid: number /** Amount Paid (0) (decimals allowed) */;
    altId: string /** Location Id or Agency Id (6578278e879ad2646715ba9c) */;
    altType: "location" /** Alt Type (location) */;
    name: string /** Name of the invoice (New Invoice) */;
    businessDetails: InvoicesBusinessDetailsDTO /** Business Details */;
    invoiceNumber: number /** Invoice Number (19) */;
    currency: string /** Currency (USD) */;
    contactDetails: InvoicesContactDetailsDTO /** Contact Details */;
    issueDate: string /** Issue Date (2023-01-01) */;
    dueDate: string /** Due Date (2023-01-01) */;
    discount?: InvoicesDiscountDTO /** Discount */;
    invoiceItems: InvoicesItemDTO[] /** Invoice Items */;
    total: number /** Total Amount (999) (decimals allowed) */;
    title: string /** Title (INVOICE) */;
    amountDue: number /** Total Amount Due (999) (decimals allowed) */;
    createdAt: string /** created at (2023-12-12T09:27:42.355Z) */;
    updatedAt: string /** updated at (2023-12-12T09:27:42.355Z) */;
};
export type InvoicesTotalSummaryDTO = {
    subTotal: number /** Sub Total (999) */;
    discount: number /** Discount (10) */;
};
export interface InvoicesGetResponseDTO extends InvoicesCreateResponseDTO {
    totalSummary: InvoicesTotalSummaryDTO /** Total Summary */;
}
export type InvoicesListResponseDTO = {
    invoices: InvoicesGetResponseDTO[] /** List of Invoices */;
    total: number /** Total Count of Invoices */;
};
export interface InvoicesUpdateDTO extends StrictOmit<InvoicesCreateDTO, "items" | "sentTo"> {
    discount: InvoicesUpdateDiscountDTO /** Discount Details */;
    invoiceItems: InvoicesItemDTO[] /** Items */;
}
export type InvoicesUpdateResponseDTO = InvoicesCreateResponseDTO;
export type InvoicesDeleteResponseDTO = InvoicesCreateResponseDTO;
export type InvoicesVoidDTO = InvoicesCancelScheduleDTO;
export type InvoicesVoidResponseDTO = InvoicesCreateResponseDTO;
export type InvoicesSettingsSenderConfigurationDTO = {
    fromName?: string /** The name of the sender (John Doe) */;
    fromEmail?: string /** The email of the sender (john@does.com) */;
};
export type InvoicesSendDTO = {
    altId: string /** location Id / company Id based on altType (6578278e879ad2646715ba9c) */;
    altType: "location" /** Alt Type (location) */;
    userId: string /** User Id (6578278e879ad2646715ba9c) */;
    action: "sms_and_email" | "email" | "sms" /** Action (sms_and_email) */;
    liveMode: boolean /** Live Mode (true) */;
};
export type InvoicesSendResponseDTO = {
    invoice: InvoicesTTPInvoiceDTO /** Invoice Details */;
    smsData: object;
    emailData: object;
};
export type InvoicesChequeDTO = {
    number: string /** Cheque Number (129-129-129-912) */;
};
export type InvoicesRecordPaymentDTO = {
    altId: string /** location Id / company Id based on altType (6578278e879ad2646715ba9c) */;
    altType: "location" /** Alt Type (location) */;
    mode: "cash" | "card" | "cheque" | "bank_transfer" | "other" /** Payment Method (card) */;
    card?: InvoicesCardDTO /** Card Details */;
    cheque?: InvoicesChequeDTO /** Cheque Details */;
    notes: string /** Notes (This was a direct payment) */;
    amount?: number /** Amount (999) */;
};
export type InvoicesRecordPaymentResponseDTO = {
    success: boolean /** Success Status (true) */;
    invoice: InvoicesTTPInvoiceDTO /** Invoice Details */;
};
export type InvoicesScheduleSearchOptions = {
    altId: string /** location Id / company Id based on altType (6578278e879ad2646715ba9c) */;
    altType: "location" /** Alt Type (location) */;
    limit: string /** Limit the number of items to return (10) */;
    offset: string /** Number of items to skip (10) */;
    endAt?: string /** endAt in YYYY-MM-DD format (2023-01-01) */;
    paymentMode?: "default" | "live" /** Payment Mode (live) */;
    search?: string /** To search for an invoice by id / name / email / phoneNo (Alex) */;
    startAt?: string /** startAt in YYYY-MM-DD format (2023-01-01) */;
    status?: string /** status to be filtered */;
};
export interface InvoicesSearchOptions extends InvoicesScheduleSearchOptions {
    contactId?: string /** Contact ID for the invoice (AmuzcoPBpgKeccNsFlib) */;
}
export type InvoicesSearchParams = {
    altId: string /** location Id / company Id based on altType (6578278e879ad2646715ba9c) */;
    altType: string /** Alt Type (location) */;
    limit: string /** Limit the number of items to return (10) */;
    offset: string /** Number of items to skip (10) */;
    contactId?: string /** Contact ID for the invoice (AmuzcoPBpgKeccNsFlib) */;
    endAt?: string /** endAt in YYYY-MM-DD format (2023-01-01) */;
    paymentMode?: string /** Payment Mode (live) */;
    search?: string /** To search for an invoice by id / name / email / phoneNo (Alex) */;
    startAt?: string /** startAt in YYYY-MM-DD format (2023-01-01) */;
    status?: string /** status to be filtered */;
};
export {};
