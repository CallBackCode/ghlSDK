export type CalendarGroupDTO = {
    locationId: string;
    name: string;
    description: string;
    slug: string;
    isActive?: boolean;
    id?: string;
};
export type CalendarAllGroupsSuccessfulResponseDTO = {
    groups: CalendarGroupDTO[];
};
export type CalendarValidateGroupSlugPostBodyDTO = {
    locationId: string;
    slug: string;
};
export type CalendarValidateGroupSlugSuccessResponseDTO = {
    available: boolean;
};
export type CalendarGroupCreateDTO = {
    locationId: string;
    name: string;
    description: string;
    slug: string;
    isActive?: boolean;
};
export type CalendarGetFreeSlotsDTO = {
    startDate: string;
    endDate: string;
    userId?: string;
    userIds?: string[];
    timezone?: string;
    enableLookBusy?: string;
};
export type CalendarGroupCreateSuccessfulResponseDTO = {
    group: CalendarGroupDTO;
};
export type CalendarGroupSuccessfulResponseDTO = {
    success: boolean;
};
export type CalendarGroupStatusUpdateParamsDTO = {
    isActive: boolean;
};
export type CalendarGroupUpdateDTO = {
    name: string;
    description: string;
    slug: string;
};
export type CalendarEventDTO = {
    id: string;
    title: string;
    calendarId: string;
    locationId: string;
    contactId: string;
    groupId: string;
    appointmentStatus: string;
    assignedUserId: string;
    users: string[];
    startTime: string;
    endTime: string;
    dateAdded: string;
    dateUpdated: string;
    address?: string;
    notes?: string;
    assignedResources?: string[];
    isRecurring?: boolean;
    rrule?: string;
    masterEventId?: string;
};
export type CalendarGetEventsSuccessfulResponseDTO = {
    events: CalendarEventDTO[];
};
export type CalendarSlotsSchemaDTO = {
    slots: string[];
};
export type CalendarGetSlotsSuccessfulResponseDto = {
    __dates__: CalendarSlotsSchemaDTO;
};
export type CalendarNotificationDTO = {
    shouldSendToContact: boolean;
    shouldSendToGuest: boolean;
    shouldSendToUser: boolean;
    shouldSendToSelectedUsers: boolean;
    type?: "email";
};
export type CalendarTeamMemberPriorityTypes = 0 | 0.5 | 1;
export type CalendarMeetingLocationTypes = "custom" | "zoom" | "gmeet" | "phone" | "address";
export type CalendarTeamMemberDTO = {
    userId: string;
    priority?: CalendarTeamMemberPriorityTypes;
    meetingLocationType?: CalendarMeetingLocationTypes;
    meeitngLocation?: string;
    isPrimary?: boolean;
};
export type Hour = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23;
export type Minute = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59;
export type CalendarDayDTO = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type CalendarHourDTO = {
    openHour: Hour;
    openMinute: Minute;
    closeHour: Hour;
    closeMinute: Minute;
};
export type CalendarOpenHourDTO = {
    daysOfTheWeek: CalendarDayDTO[];
    hours: CalendarHourDTO[];
};
export type CalendarRecurringCountDTO = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24;
export type CalendarRecurringDTO = {
    freq?: "DAILY" | "WEEKLY" | "MONTHLY";
    count?: CalendarRecurringCountDTO;
    bookingOption?: "skip" | "continue" | "book_next";
    bookingOverlapDefaultStatus?: "confirmed" | "new";
};
export type CalendarAvailabilityDTO = {
    date: string;
    hours: CalendarHourDTO;
    deleted?: boolean;
};
export type CalendarLookBusyConfigurationDTO = {
    enabled: boolean;
    LookBusyPercentage: number;
};
export type CalendarEventType = "RoundRobin_OptimizeForAvailability" | "RoundRobin_OptimizeForEqualDistribution";
export type CalendarUserAssignedType = "round_robin" | "collective" | "class" | "service";
export type CalendarNonUserAssignedType = "event";
export type CalendarWidgetType = "default" | "classic";
export type CalendarBaseDTO = {
    id: string;
    name: string;
    locationId: string;
    notifications?: CalendarNotificationDTO[];
    isActive?: boolean;
    groupId?: string;
    eventType?: CalendarEventType;
    description?: string;
    slug?: string;
    widgetSlug?: string;
    widgetType?: CalendarWidgetType;
    eventTitle?: string;
    eventColor?: string;
    slotDuration?: number;
    slotDurationUnit?: "mins" | "hours";
    slotInterval?: number;
    slotIntervalUnit?: "mins" | "hours";
    slotBuffer?: number;
    slotBufferUnit?: "mins" | "hours";
    preBuffer?: number;
    preBufferUnit?: "mins" | "hours";
    appoinmentPerSlot?: number;
    appoinmentPerDay?: number;
    allowBookingAfter?: number;
    allowBookingAfterUnit?: "hours" | "days" | "weeks" | "months";
    allowBookingFor?: number;
    allowBookingForUnit?: "days" | "weeks" | "months";
    openHours?: CalendarOpenHourDTO[];
    enableRecurring?: boolean;
    recurring?: CalendarRecurringDTO;
    formId?: string;
    stickyContact?: boolean;
    isLivePaymentMode?: boolean;
    autoConfirm?: boolean;
    shouldSendAlertEmailsToAssignedMember?: boolean;
    alertEmail?: string;
    googleInvitationEmails?: boolean;
    allowReschedule?: boolean;
    allowCancellation?: boolean;
    shouldAssignContactToTeamMember?: boolean;
    shouldSkipAssigningContactForExisting?: boolean;
    notes?: string;
    pixelId?: string;
    formSubmitType?: "RedirectURL" | "ThankYouMessage";
    formSubmitRedirectURL?: string;
    formSubmitThanksMessage?: string;
    availabilityType?: 0 | 1;
    availabilities?: CalendarAvailabilityDTO[];
    guestType?: "count_only" | "collect_detail";
    consentLabel?: string;
    calendarCoverImage?: string;
    lookBusyConfig?: CalendarLookBusyConfigurationDTO;
};
export interface CalendarUserAssignedDTO extends CalendarBaseDTO {
    teamMembers: CalendarTeamMemberDTO[];
    calendarType: CalendarUserAssignedType;
}
export interface CalendarNonUserAssignedDTO extends CalendarBaseDTO {
    calendarType: CalendarNonUserAssignedType;
    meetingLocation: string;
}
export type CalendarDTO = CalendarUserAssignedDTO | CalendarNonUserAssignedDTO;
export type CalendarsGetSuccessfulResponseDTO = {
    calendars: CalendarDTO[];
};
export type CalendarBaseCreateUpdateDTO = {
    name: string;
    locationId: string;
    notifications?: CalendarNotificationDTO[];
    isActive?: boolean;
    groupId?: string;
    eventType?: CalendarEventType;
    description?: string;
    slug?: string;
    widgetSlug?: string;
    widgetType?: CalendarWidgetType;
    eventTitle?: string;
    eventColor?: string;
    slotDuration?: number;
    slotDurationUnit?: "mins" | "hours";
    slotInterval?: number;
    slotIntervalUnit?: "mins" | "hours";
    slotBuffer?: number;
    slotBufferUnit?: "mins" | "hours";
    preBuffer?: number;
    preBufferUnit?: "mins" | "hours";
    appoinmentPerSlot?: number;
    appoinmentPerDay?: number;
    allowBookingAfter?: number;
    allowBookingAfterUnit?: "hours" | "days" | "weeks" | "months";
    allowBookingFor?: number;
    allowBookingForUnit?: "days" | "weeks" | "months";
    openHours?: CalendarOpenHourDTO[];
    enableRecurring?: boolean;
    recurring?: CalendarRecurringDTO;
    formId?: string;
    stickyContact?: boolean;
    isLivePaymentMode?: boolean;
    autoConfirm?: boolean;
    shouldSendAlertEmailsToAssignedMember?: boolean;
    alertEmail?: string;
    googleInvitationEmails?: boolean;
    allowReschedule?: boolean;
    allowCancellation?: boolean;
    shouldAssignContactToTeamMember?: boolean;
    shouldSkipAssigningContactForExisting?: boolean;
    notes?: string;
    pixelId?: string;
    formSubmitType?: "RedirectURL" | "ThankYouMessage";
    formSubmitRedirectURL?: string;
    formSubmitThanksMessage?: string;
    availabilityType?: 0 | 1;
    availabilities?: CalendarAvailabilityDTO[];
    guestType?: "count_only" | "collect_detail";
    consentLabel?: string;
    calendarCoverImage?: string;
    lookBusyConfig?: CalendarLookBusyConfigurationDTO;
};
export interface CalendarCreateUpdateUserAssignedDTO extends CalendarBaseDTO {
    teamMembers: CalendarTeamMemberDTO[];
    calendarType: CalendarUserAssignedType;
}
export interface CalendarCreateUpdateNonUserAssignedDTO extends CalendarBaseDTO {
    calendarType: CalendarNonUserAssignedType;
    meetingLocation: string;
}
export type CalendarCreateUpdateDTO = CalendarCreateUpdateUserAssignedDTO | CalendarCreateUpdateNonUserAssignedDTO;
export type CalendarByIdSuccessfulResponseDTO = {
    calendar: CalendarDTO;
};
export type CalendarUpdateAvailabilityDTO = {
    date: string;
    hours: CalendarHourDTO;
    deleted?: boolean;
    id?: string;
};
export type CalendarGetEventSuccessfulResponseDTO = {
    event: CalendarEventDTO;
};
export type CalendarAppointmentCreateUpdateSchemaDTO = {
    calendarId: string;
    locationId: string;
    contactId: string;
    startTime: string;
    endTime?: string;
    title?: string;
    meetingLocationType?: CalendarMeetingLocationTypes;
    appointmentStatus?: string;
    assignedUserId?: string;
    address?: string;
    ignoreDateRange?: boolean;
    toNotify?: boolean;
    rrule?: string;
};
export type CalendarAppointmentSchemaResponseDTO = {
    id: string;
    calendarId: string;
    locationId: string;
    contactId: string;
    startTime?: string;
    endTime?: string;
    title?: string;
    appointmentStatus?: string;
    assignedUserId?: string;
    address?: string;
    isRecurring?: boolean;
    rrule?: string;
};
export type CalendarAppointmentEditSchemaDTO = {
    calendarId: string;
    startTime: string;
    endTime: string;
    title: string;
    meetingLocationType: string;
    appointmentStatus: string;
    address: string;
    ignoreDateRange: boolean;
    toNotify: boolean;
};
export type CalendarBlockSlotCreateSchemaDTO = {
    locationId: string;
    startTime: string;
    endTime: string;
    calendarId?: string;
    title?: string;
    assignedUserId?: string;
};
export type CalendarCreateUpdateBlockedSlotSuccessfulResponseDTO = {
    id: string;
    locationId: string;
    title: string;
    startTime: string;
    endTime: string;
    calendarId?: string;
    assignedUserId?: string;
};
export type CalendarBlockSlotEditSchemaDTO = {
    calendarId?: string;
    startTime?: string;
    endTime?: string;
    title?: string;
    assignedUserId?: string;
};
export type CalendarGetNoteSchemaDTO = {
    id?: string;
    body?: string;
    userId?: string;
    dateAdded?: string;
    contactId?: string;
    createdBy?: {
        name?: string;
        profilePhoto?: string;
    };
};
export type CalendarGetNotesDTO = {
    notes?: CalendarGetNoteSchemaDTO[];
    hasMore?: boolean;
};
export type CalendarNoteDTO = {
    body: string;
    userId?: string;
};
export type CalendarGetCreateUpdateNoteSuccessfulResponseDto = {
    note: CalendarGetNoteSchemaDTO;
};
export type CalendarResourceTypeDTO = "equipments" | "rooms";
export type CalendarResourceByIdResponseDTO = {
    locationId: string;
    name: string;
    resourceType: CalendarResourceTypeDTO;
    isActive: boolean;
    calendarIds: string[];
    description?: string;
    quantity?: number;
    outOfService?: number;
    capacity?: number;
};
export type CalendarResourceDTO = {
    locationId: string;
    name: string;
    isActive: boolean;
    resourceType: CalendarResourceTypeDTO;
    calendarIds: string[];
    description?: string;
    quantity?: number;
    outOfService?: number;
    capacity?: number;
};
export type CalendarResourceResponseDTO = {
    locationId: string;
    name: string;
    resourceType: CalendarResourceTypeDTO;
    isActive: boolean;
    description?: string;
    quantity?: number;
    outOfService?: number;
    capacity?: number;
};
export type CalendarCreateResourceDTO = {
    locationId: string;
    name: string;
    description: string;
    quantity: number;
    outOfService: number;
    capacity: number;
    calendarIds: string[];
};
