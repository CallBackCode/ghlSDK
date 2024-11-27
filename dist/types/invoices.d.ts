import { CountryCodes, ScheduleOptionsDTO } from "./_global";
export type InvoicesAddressDTO = {
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    state?: string;
    countryCode?: CountryCodes;
    postalCode?: string;
};
export type InvoicesBusinessDetailsDTO = {
    logoUrl?: string;
    name?: string;
    phoneNo?: string;
    address?: InvoicesAddressDTO;
    website?: string;
    customValues?: string[];
};
export type InvoicesItemTaxDTO = {
    _id: string;
    name: string;
    rate: number;
    calculation: "exclusive";
    description: string;
    taxId: string;
};
export type InvoicesItemDTO = {
    name: string;
    currency: string;
    amount: number;
    qty: number;
    description?: string;
    productId?: string;
    priceId?: string;
    taxes?: InvoicesItemTaxDTO[];
};
export type InvoicesDiscountDTO = {
    type: "percentage" | "fixed";
    value?: number;
};
export type InvoicesCreateTemplateDTO = {
    altId: string;
    altType: "location";
    name: string;
    businessDetails: InvoicesBusinessDetailsDTO;
    currency: string;
    items: InvoicesItemDTO[];
    internal?: boolean;
    discount?: InvoicesDiscountDTO;
    termsNotes?: string;
    title?: string;
};
export type InvoicesGetTemplateResponseDTO = {
    _id: string;
    altId: string;
    altType: "location";
    name: string;
    businessDetails: InvoicesBusinessDetailsDTO;
    currency: string;
    items: InvoicesItemDTO[];
    total: number;
    createdAt: string;
    updatedAt: string;
    discount?: InvoicesDiscountDTO;
};
export type InvoicesCreateTemplateResponseDTO = InvoicesGetTemplateResponseDTO;
export type InvoicesListTemplatesResponseDTO = {
    data: InvoicesGetTemplateResponseDTO[];
    totalCount: number;
};
export type InvoicesUpdateTemplateDTO = InvoicesCreateTemplateDTO;
export type InvoicesUpdateTemplateResponseDTO = InvoicesGetTemplateResponseDTO;
export type InvoicesAdditionalEmailsDTO = {
    email: string;
};
export type InvoicesContactDetailsDTO = {
    id: string;
    name: string;
    phoneNo?: string;
    email?: string;
    additionalEmails?: InvoicesAdditionalEmailsDTO[];
    companyName?: string;
    address?: InvoicesAddressDTO;
    customFields?: string[];
};
export interface InvoicesCreateScheduleDTO extends InvoicesCreateTemplateDTO {
    schedule: ScheduleOptionsDTO;
    liveMode: boolean;
}
type InvoicesStatusOptions = "draft" | "sent" | "payment_processing" | "paid" | "void" | "partially_paid";
export type InvoicesDefaultResponseDTO = {
    _id: string;
    status: InvoicesStatusOptions;
    liveMode: boolean;
    altId: string;
    altType: "location";
    name: string;
    businessDetails: InvoicesBusinessDetailsDTO;
    invoiceNumber: number;
    currency: string;
    contactDetails: InvoicesContactDetailsDTO;
    issueDate: string;
    dueDate: string;
    total: number;
    title: string;
    amountDue: number;
    createdAt: string;
    updatedAt: string;
    items: InvoicesItemDTO[];
    discount?: InvoicesDiscountDTO;
};
export interface InvoicesGetScheduleResponseDTO extends InvoicesDefaultResponseDTO {
    schedule: ScheduleOptionsDTO;
}
export type InvoicesCreateScheduleResponseDTO = InvoicesGetScheduleResponseDTO;
export type InvoicesListSchedulesResponseDTO = {
    schedules: InvoicesGetScheduleResponseDTO[];
    total: number;
};
export type InvoicesUpdateScheduleDTO = {
    altId: string;
    altType: "location";
    name: string;
    contactDetails: InvoicesContactDetailsDTO;
    schedule: ScheduleOptionsDTO;
    liveMode: boolean;
    businessDetails: InvoicesBusinessDetailsDTO;
    currency: string;
    items: InvoicesItemDTO[];
    discount?: InvoicesDiscountDTO;
    termsNotes?: string;
    title?: string;
};
export type InvoicesUpdateScheduleResponseDTO = InvoicesGetScheduleResponseDTO;
export type InvoicesCardDTO = {
    brand: string;
    last4: string;
};
export type InvoicesUSBankAccountDTO = {
    bank_name: string;
    last4: string;
};
export type InvoicesAutoPaymentDetailsDTO = {
    enable: boolean;
    type?: string;
    paymentMethodId?: string;
    card?: InvoicesCardDTO;
    usBankAccount?: InvoicesUSBankAccountDTO;
};
export type InvoicesScheduleDTO = {
    altId: string;
    altType: "location";
    liveMode: boolean;
    autoPayment?: InvoicesAutoPaymentDetailsDTO;
};
export interface InvoicesScheduleResponseDTO extends InvoicesCreateScheduleResponseDTO {
    compiledTermNotes: string;
}
export type InvoicesAutoPaymentScheduleDTO = {
    altId: string;
    altType: "location";
    id: string;
    autoPayment: InvoicesAutoPaymentDetailsDTO;
};
export type InvoicesAutoPaymentInvoiceScheduleResponseDTO = InvoicesScheduleResponseDTO;
export type InvoicesCancelScheduleDTO = {
    altId: string;
    altType: "location";
};
export type InvoicesCancelScheduleResponseDTO = InvoicesScheduleResponseDTO;
export type InvoicesSendToDTO = {
    email: string;
    emailCc?: string;
    emailBcc?: string;
    phoneNo?: string;
};
export type InvoicesTTPDTO = {
    altId: string;
    altType: "location";
    name: string;
    businessDetails: InvoicesBusinessDetailsDTO;
    currency: string;
    items: InvoicesItemDTO[];
    contactDetails: InvoicesContactDetailsDTO;
    issueDate: string;
    sentTo: InvoicesSendToDTO;
    liveMode: boolean;
    action: "draft" | "send";
    userId: string;
    termNotes?: string;
    title?: string;
    invoiceNumber?: string;
    dueDate?: string;
    id?: string;
    includeTermsNote?: boolean;
    discount?: InvoicesDiscountDTO;
};
type InvoicesTTPInvoiceDTO = {
    _id: string;
    status: InvoicesStatusOptions;
    liveMode: boolean;
    amountPaid: number;
    altId: string;
    altType: "location";
    name: string;
    businessDetails: InvoicesBusinessDetailsDTO;
    invoiceNumber: number;
    currency: string;
    contactDetails: InvoicesContactDetailsDTO;
    issueDate: string;
    dueDate: string;
    discount?: InvoicesDiscountDTO;
    invoiceItems: InvoicesItemDTO[];
    total: number;
    title: string;
    amountDue: number;
    createdAt: string;
    updatedAt: string;
};
export type InvoicesTTPResponseDTO = {
    invoice: InvoicesTTPInvoiceDTO;
    invoiceUrl: string;
};
export type InvoicesGenerateNumberResponseDTO = {
    invoiceNumber: number;
};
export type InvoicesCreateDTO = {
    altId: string;
    altType: "location";
    name: string;
    businessDetails: InvoicesBusinessDetailsDTO;
    currency: string;
    items: InvoicesItemDTO[];
    discount?: InvoicesDiscountDTO;
    termsNotes?: string;
    title?: string;
    contactDetails: InvoicesContactDetailsDTO;
    invoiceNumber?: string;
    issueDate: string;
    dueDate: string;
    sentTo: InvoicesSendToDTO;
    liveMode: boolean;
};
export type InvoicesCreateResponseDTO = {
    _id: string;
    status: InvoicesStatusOptions;
    liveMode: boolean;
    amountPaid: number;
    altId: string;
    altType: "location";
    name: string;
    businessDetails: InvoicesBusinessDetailsDTO;
    invoiceNumber: number;
    currency: string;
    contactDetails: InvoicesContactDetailsDTO;
    issueDate: string;
    dueDate: string;
    discount?: InvoicesDiscountDTO;
    invoiceItems: InvoicesItemDTO[];
    total: number;
    title: string;
    amountDue: number;
    createdAt: string;
    updatedAt: string;
};
export type InvoicesTotalSummaryDTO = {
    subTotal: number;
    discount: number;
};
export interface InvoicesGetResponseDTO extends InvoicesCreateResponseDTO {
    totalSummary: InvoicesTotalSummaryDTO;
}
export type InvoicesListResponseDTO = {
    invoices: InvoicesGetResponseDTO[];
    total: number;
};
export type InvoicesUpdateDTO = InvoicesCreateDTO;
export type InvoicesUpdateResponseDTO = InvoicesCreateResponseDTO;
export type InvoicesDeleteResponseDTO = InvoicesCreateResponseDTO;
export type InvoicesVoidDTO = InvoicesCancelScheduleDTO;
export type InvoicesVoidResponseDTO = InvoicesCreateResponseDTO;
export type InvoicesSettingsSenderConfigurationDTO = {
    fromName?: string;
    fromEmail?: string;
};
export type InvoicesSendDTO = {
    altId: string;
    altType: "location";
    userId: string;
    action: "sms_and_email" | "email" | "sms";
    liveMode: boolean;
    sendFrom: InvoicesSettingsSenderConfigurationDTO;
};
export type InvoicesSendResponseDTO = {
    invoice: InvoicesTTPInvoiceDTO;
    smsData: object;
    emailData: object;
};
export type InvoicesChequeDTO = {
    number: string;
};
export type InvoicesRecordPaymentDTO = {
    altId: string;
    altType: "location";
    mode: "cash" | "card" | "cheque" | "bank_transfer" | "other";
    card?: InvoicesCardDTO;
    cheque?: InvoicesChequeDTO;
    notes: string;
    amount?: number;
};
export type InvoicesRecordPaymentResponseDTO = {
    success: boolean;
    invoice: InvoicesTTPInvoiceDTO;
};
export type InvoicesScheduleSearchOptions = {
    altId: string;
    altType: "location";
    limit: string;
    offset: string;
    endAt?: string;
    paymentMode?: "default" | "live";
    search?: string;
    startAt?: string;
    status?: string;
};
export interface InvoicesSearchOptions extends InvoicesScheduleSearchOptions {
    contactId?: string;
}
export type InvoicesSearchParams = {
    altId: string;
    altType: string;
    limit: string;
    offset: string;
    contactId?: string;
    endAt?: string;
    paymentMode?: string;
    search?: string;
    startAt?: string;
    status?: string;
};
export {};
