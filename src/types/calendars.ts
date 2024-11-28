export type CalendarGroupDTO = {
  locationId: string; // the location id of the calendar group (ocQHyuzHvysMo5N5VsXc)
  name: string; // the name of the calendar group (Barber Services)
  description: string; // the description of the calendar group (Choose a type of hair cut)
  slug: string; // the slug of the calendar group (15-mins)
  isActive?: boolean; // the status of the calendar group (true)
  id?: string; // the id of the calendar group (ocQHyuzHvysMo5N5VsXc)
};

export type CalendarAllGroupsSuccessfulResponseDTO = {
  groups: CalendarGroupDTO[]; // the array of calendar groups ([{...}])
};

export type CalendarValidateGroupSlugPostBodyDTO = {
  locationId: string; // the location id of the calendar group (ocQHyuzHvysMo5N5VsXc)
  slug: string; // the slug to validate (15-mins)
};

export type CalendarValidateGroupSlugSuccessResponseDTO = {
  available: boolean; // the availability of the slug (true)
};

export type CalendarGroupCreateDTO = {
  locationId: string; // the location id of the calendar group (ocQHyuzHvysMo5N5VsXc)
  name: string; // the name of the calendar group (Barber Services)
  description: string; // the description of the calendar group (Choose a type of hair cut)
  slug: string; // the slug of the calendar group (15-mins)
  isActive?: boolean; // the status of the calendar group (true)
};

export type CalendarGetFreeSlotsDTO = {
  startDate: string; // the start date of the free slots (1548898600000)
  endDate: string; // the end date of the free slots (1601490599999)
  userId?: string; // the user id of the free slots (YlWd2wuCAZQzh2cH1fVZ)
  userIds?: string[]; // the array of user ids of the free slots ([YlWd2wuCAZQzh2cH1fVZ])
  timezone?: string; // the timezone of the free slots (America/Chihuahua)
  enableLookBusy?: string; // Apply Look Busy (true)
};

export type CalendarGroupCreateSuccessfulResponseDTO = {
  group: CalendarGroupDTO; // the calendar group object ({...})
};

export type CalendarGroupSuccessfulResponseDTO = {
  success: boolean; // the success status (true)
};

export type CalendarGroupStatusUpdateParamsDTO = {
  isActive: boolean; // the status of the calendar group (true)
};

export type CalendarGroupUpdateDTO = {
  name: string; // the name of the calendar group (Barber Services)
  description: string; // the description of the calendar group (Choose a type of hair cut)
  slug: string; // the slug of the calendar group (15-mins)
};

export type CalendarEventDTO = {
  id: string; // Calendar Event ID (0007BWpSzSwfiuSl0tR2)
  title: string; // Calendar Event title (Appointment with GHL Dev team)
  calendarId: string; // Calendar ID (BqTwX8QFwXzpegMve9EQ)
  locationId: string; // Location ID (BqTwX8QFwXzpegMve9EQ)
  contactId: string; // Contact ID (9NkT25Vor1v4aQatFsv2)
  groupId: string; // Group ID (9NkT25Vor1v4aQatFsv2)
  appointmentStatus: string; // Appointment Status (confirmed)
  assignedUserId: string; // Assigned User ID (YlWd2wuCAZQzh2cH1fVZ)
  users: string[]; // Users ([YlWd2wuCAZQzh2cH1fVZ, 9NkT25Vor1v4aQatFsv2])
  startTime: string; // Start Time (2023-09-25T16:00:00+05:30)
  endTime: string; // End Time (2023-09-25T16:00:00+05:30)
  dateAdded: string; // Date Added (2023-09-25T16:00:00+05:30)
  dateUpdated: string; // Date Updated (2023-09-25T16:00:00+05:30)
  address?: string; // Calendar Event address (https://meet.google.com/yqp-gogr-wve)
  notes?: string; // Notes (Some dummy note)
  assignedResources?: string[]; // Assigned Resources ([YlWd2wuCAZQzh2cH1fVZ, 9NkT25Vor1v4aQatFsv2])
  isRecurring?: boolean; // Is Recurring (false)
  rrule?: string; // Recurrence Rule (RRULE) as per the iCalendar (RFC 5545) specification for recurring events. DTSTART is not required, instance ids are calculated on the basis of startTime of the event. The rrule only be applied if ignoreFreeSlotValidation is true.
  masterEventId?: string; // Master Event ID (0007BWpSzSwfiuSl0tR2)
};

export type CalendarGetEventsSuccessfulResponseDTO = {
  events: CalendarEventDTO[]; // the array of calendar events ([{...}])
};

export type CalendarSlotsSchemaDTO = {
  slots: string[]; // the array of slots (["2023-09-25T16:00:00+05:30", "2023-09-25T16:00:00+05:30"])
};

export type CalendarGetSlotsSuccessfulResponseDto = {
  __dates__: CalendarSlotsSchemaDTO; // the slots schema ({...})
};

export type CalendarNotificationDTO = {
  shouldSendToContact: boolean; // should send to contact (true)
  shouldSendToGuest: boolean; // should send to guest (true)
  shouldSendToUser: boolean; // should send to user (true)
  shouldSendToSelectedUsers: boolean; // should send to selected users (true)
  type?: "email"; // the type of notification (email)
};

export type CalendarTeamMemberPriorityTypes = 0 | 0.5 | 1;
export type CalendarMeetingLocationTypes =
  | "custom"
  | "zoom"
  | "gmeet"
  | "phone"
  | "address";

export type CalendarTeamMemberDTO = {
  userId: string; // the user id of the team member (YlWd2wuCAZQzh2cH1fVZ)
  priority?: CalendarTeamMemberPriorityTypes; // the priority of the team member (1) defaults to 0.5
  meetingLocationType?: CalendarMeetingLocationTypes; // the meeting location type (zoom)
  meeitngLocation?: string; // the meeting location (https://meet.google.com/yqp-gogr-wve)
  isPrimary?: boolean; // the primary user for the calendar. Can only choose one primary user (true)
};

export type Hour =
  | 0
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
  | 23;
export type Minute =
  | 0
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
  | 28
  | 29
  | 30
  | 31
  | 32
  | 33
  | 34
  | 35
  | 36
  | 37
  | 38
  | 39
  | 40
  | 41
  | 42
  | 43
  | 44
  | 45
  | 46
  | 47
  | 48
  | 49
  | 50
  | 51
  | 52
  | 53
  | 54
  | 55
  | 56
  | 57
  | 58
  | 59;
export type CalendarDayDTO = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type CalendarHourDTO = {
  openHour: Hour; // the open hour (9)
  openMinute: Minute; // the open minute (0)
  closeHour: Hour; // the close hour (17)
  closeMinute: Minute; // the close minute (0)
};

export type CalendarOpenHourDTO = {
  daysOfTheWeek: CalendarDayDTO[]; // the days of the week ([0, 1, 2, 3, 4, 5, 6])
  hours: CalendarHourDTO[];
};

export type CalendarRecurringCountDTO =
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
  | 24;

export type CalendarRecurringDTO = {
  freq?: "DAILY" | "WEEKLY" | "MONTHLY"; // the frequency of the recurring event (DAILY)
  count?: CalendarRecurringCountDTO; // the count of the recurring event (1)
  bookingOption?: "skip" | "continue" | "book_next"; // the booking option (skip)
  bookingOverlapDefaultStatus?: "confirmed" | "new"; // the booking overlap default status (confirmed)
};

export type CalendarAvailabilityDTO = {
  date: string; // the date of the availability (<YYYY-MM-DD in local timezone>T00:00:00.000Z)
  hours: CalendarHourDTO; // the hours of the availability ({...})
  deleted?: boolean; // the deleted status of the availability (true)
};

export type CalendarLookBusyConfigurationDTO = {
  enabled: boolean; // the enabled status of the look busy configuration (true)
  LookBusyPercentage: number; // Percentage of slots that will be hidden (50)
};

export type CalendarEventType =
  | "RoundRobin_OptimizeForAvailability"
  | "RoundRobin_OptimizeForEqualDistribution";
export type CalendarUserAssignedType =
  | "round_robin"
  | "collective"
  | "class"
  | "service"
  | "personal";
export type CalendarNonUserAssignedType = "event";
export type CalendarWidgetType = "default" | "classic"; // Calendar widget type. Choose "default" for "neo" and "classic" for "classic" layout.

export type CalendarBaseDTO = {
  id: string; // Calendar Id (ocQHyuzHvysMo5N5VsXc)
  name: string; // Name (test calendar)
  locationId: string; // Location Id (ocQHyuzHvysMo5N5VsXc)
  notifications?: CalendarNotificationDTO[]; // Calendar Notifications ([{...}])
  isActive?: boolean; // Should the created calendar be active or draft (true)
  groupId?: string; // Group Id (BqTwX8QFwXzpegMve9EQ)
  eventType?: CalendarEventType; // Event Type (RoundRobin_OptimizeForAvailability)
  description?: string; // Description (this is used for testing)
  slug?: string; // Slug (test1)
  widgetSlug?: string; // Widget Slug (test1)
  widgetType?: CalendarWidgetType; // Widget Type (classic)
  eventTitle?: string; // Event Title ({{contact.name}})
  eventColor?: string; // Event Color (#039be5)
  slotDuration?: number; // Slot Duration (30)
  slotDurationUnit?: "mins" | "hours"; // Slot Duration Unit (mins)
  slotInterval?: number; // Slot Interval (30)
  slotIntervalUnit?: "mins" | "hours"; // Slot Interval Unit (mins)
  slotBuffer?: number; // Slot Buffer (30)
  slotBufferUnit?: "mins" | "hours"; // Slot Buffer Unit (mins)
  preBuffer?: number; // Pre Buffer (30)
  preBufferUnit?: "mins" | "hours"; // Pre Buffer Unit (mins)
  appoinmentPerSlot?: number; // Appoinment Per Slot (1)
  appoinmentPerDay?: number; // Appoinment Per Day (1)
  allowBookingAfter?: number; // Allow Booking After (1)
  allowBookingAfterUnit?: "hours" | "days" | "weeks" | "months"; // Allow Booking After Unit (hours)
  allowBookingFor?: number; // Allow Booking For (1)
  allowBookingForUnit?: "days" | "weeks" | "months"; // Allow Booking For Unit (days)
  openHours?: CalendarOpenHourDTO[]; // Open Hours ([{...}])
  enableRecurring?: boolean; // Enable Recurring (false)
  recurring?: CalendarRecurringDTO; // Recurring ({...})
  formId?: string; // Form Id (ocQHyuzHvysMo5N5VsXc)
  stickyContact?: boolean; // Sticky Contact (true)
  isLivePaymentMode?: boolean; // Is Live Payment Mode (true)
  autoConfirm?: boolean; // Auto Confirm (true)
  shouldSendAlertEmailsToAssignedMember?: boolean; // Should Send Alert Emails To Assigned Member (true)
  alertEmail?: string; // Alert Email
  googleInvitationEmails?: boolean; // Google Invitation Emails (false)
  allowReschedule?: boolean; // Allow Reschedule (true)
  allowCancellation?: boolean; // Allow Cancellation (true)
  shouldAssignContactToTeamMember?: boolean; // Should Assign Contact To Team Member (true)
  shouldSkipAssigningContactForExisting?: boolean; // Should Skip Assigning Contact For Existing (true)
  notes?: string; // Notes
  pixelId?: string; // Pixel Id
  formSubmitType?: "RedirectURL" | "ThankYouMessage"; // Form Submit Type (ThankYouMessage) defaults to "ThankYouMessage"
  formSubmitRedirectURL?: string; // Form Submit Redirect URL
  formSubmitThanksMessage?: string; // Form Submit Thanks Message
  availabilityType?: 0 | 1; // Availability Type (0)
  availabilities?: CalendarAvailabilityDTO[]; // Availabilities ([{...}]) this is only to set the custom availability. For standard availability, use the openHours property
  guestType?: "count_only" | "collect_detail"; // Guest Type (count_only)
  consentLabel?: string; // Consent Label
  calendarCoverImage?: string; // Calendar Cover Image
  lookBusyConfig?: CalendarLookBusyConfigurationDTO; // Look Busy Configuration ({...})
};

export interface CalendarUserAssignedDTO extends CalendarBaseDTO {
  teamMembers: CalendarTeamMemberDTO[]; // Team Members ([{...}])
  calendarType: CalendarUserAssignedType; // Calendar Type (round_robin)
}

export interface CalendarNonUserAssignedDTO extends CalendarBaseDTO {
  calendarType: CalendarNonUserAssignedType; // Calendar Type (event)
  meetingLocation: string; // Meeting Location (https://meet.google.com/yqp-gogr-wve)
}

export type CalendarDTO = CalendarUserAssignedDTO | CalendarNonUserAssignedDTO;

export type CalendarsGetSuccessfulResponseDTO = {
  calendars: CalendarDTO[]; // the array of calendars ([{...}])
};

export type CalendarBaseCreateUpdateDTO = {
  name: string; // Name (test calendar)
  locationId: string; // Location Id (ocQHyuzHvysMo5N5VsXc)
  notifications?: CalendarNotificationDTO[]; // Calendar Notifications ([{...}])
  isActive?: boolean; // Should the created calendar be active or draft (true)
  groupId?: string; // Group Id (BqTwX8QFwXzpegMve9EQ)
  eventType?: CalendarEventType; // Event Type (RoundRobin_OptimizeForAvailability)
  description?: string; // Description (this is used for testing)
  slug?: string; // Slug (test1)
  widgetSlug?: string; // Widget Slug (test1)
  widgetType?: CalendarWidgetType; // Widget Type (classic)
  eventTitle?: string; // Event Title ({{contact.name}})
  eventColor?: string; // Event Color (#039be5)
  slotDuration?: number; // Slot Duration (30)
  slotDurationUnit?: "mins" | "hours"; // Slot Duration Unit (mins)
  slotInterval?: number; // Slot Interval (30)
  slotIntervalUnit?: "mins" | "hours"; // Slot Interval Unit (mins)
  slotBuffer?: number; // Slot Buffer (30)
  slotBufferUnit?: "mins" | "hours"; // Slot Buffer Unit (mins)
  preBuffer?: number; // Pre Buffer (30)
  preBufferUnit?: "mins" | "hours"; // Pre Buffer Unit (mins)
  appoinmentPerSlot?: number; // Appoinment Per Slot (1)
  appoinmentPerDay?: number; // Appoinment Per Day (1)
  allowBookingAfter?: number; // Allow Booking After (1)
  allowBookingAfterUnit?: "hours" | "days" | "weeks" | "months"; // Allow Booking After Unit (hours)
  allowBookingFor?: number; // Allow Booking For (1)
  allowBookingForUnit?: "days" | "weeks" | "months"; // Allow Booking For Unit (days)
  openHours?: CalendarOpenHourDTO[]; // Open Hours ([{...}])
  enableRecurring?: boolean; // Enable Recurring (false)
  recurring?: CalendarRecurringDTO; // Recurring ({...})
  formId?: string; // Form Id (ocQHyuzHvysMo5N5VsXc)
  stickyContact?: boolean; // Sticky Contact (true)
  isLivePaymentMode?: boolean; // Is Live Payment Mode (true)
  autoConfirm?: boolean; // Auto Confirm (true)
  shouldSendAlertEmailsToAssignedMember?: boolean; // Should Send Alert Emails To Assigned Member (true)
  alertEmail?: string; // Alert Email
  googleInvitationEmails?: boolean; // Google Invitation Emails (false)
  allowReschedule?: boolean; // Allow Reschedule (true)
  allowCancellation?: boolean; // Allow Cancellation (true)
  shouldAssignContactToTeamMember?: boolean; // Should Assign Contact To Team Member (true)
  shouldSkipAssigningContactForExisting?: boolean; // Should Skip Assigning Contact For Existing (true)
  notes?: string; // Notes
  pixelId?: string; // Pixel Id
  formSubmitType?: "RedirectURL" | "ThankYouMessage"; // Form Submit Type (ThankYouMessage) defaults to "ThankYouMessage"
  formSubmitRedirectURL?: string; // Form Submit Redirect URL
  formSubmitThanksMessage?: string; // Form Submit Thanks Message
  availabilityType?: 0 | 1; // Availability Type (0)
  availabilities?: CalendarAvailabilityDTO[]; // Availabilities ([{...}]) this is only to set the custom availability. For standard availability, use the openHours property
  guestType?: "count_only" | "collect_detail"; // Guest Type (count_only)
  consentLabel?: string; // Consent Label
  calendarCoverImage?: string; // Calendar Cover Image
  lookBusyConfig?: CalendarLookBusyConfigurationDTO; // Look Busy Configuration ({...})
};

export interface CalendarCreateUserAssignedDTO extends CalendarBaseDTO {
  teamMembers: CalendarTeamMemberDTO[]; // Team Members ([{...}])
  calendarType: CalendarUserAssignedType; // Calendar Type (round_robin)
}

export interface CalendarCreateNonUserAssignedDTO extends CalendarBaseDTO {
  calendarType: CalendarNonUserAssignedType; // Calendar Type (event)
  meetingLocation: string; // Meeting Location (https://meet.google.com/yqp-gogr-wve)
}

export type CalendarCreateDTO =
  | CalendarCreateUserAssignedDTO
  | CalendarCreateNonUserAssignedDTO;

export type CalendarUpdateDTO =
  | Partial<CalendarCreateUserAssignedDTO>
  | Partial<CalendarCreateNonUserAssignedDTO>;

export type CalendarByIdSuccessfulResponseDTO = {
  calendar: CalendarDTO; // the calendar object ({...})
};

export type CalendarUpdateAvailabilityDTO = {
  date: string; // the date of the availability (<YYYY-MM-DD in local timezone>T00:00:00.000Z)
  hours: CalendarHourDTO; // the hours of the availability ({...})
  deleted?: boolean; // the deleted status of the availability (true) defaults to false
  id?: string; // The ID of the custom availability object. It is required while updating or deleting the existing custom date availability (ocQHyuzHvysMo5N5VsXc)
};

export type CalendarGetEventSuccessfulResponseDTO = {
  event: CalendarEventDTO; // the event object ({...})
};

export type CalendarAppointmentCreateUpdateSchemaDTO = {
  calendarId: string; // Calendar ID (BqTwX8QFwXzpegMve9EQ)
  locationId: string; // Location ID (BqTwX8QFwXzpegMve9EQ)
  contactId: string; // Contact ID (9NkT25Vor1v4aQatFsv2)
  startTime: string; // Start Time (2023-09-25T16:00:00+05:30)
  endTime?: string; // End Time (2023-09-25T16:00:00+05:30)
  title?: string; // Calendar Event title (Appointment with GHL Dev team)
  meetingLocationType?: CalendarMeetingLocationTypes; // Meeting Location Type (zoom)
  appointmentStatus?: string; // Appointment Status (confirmed)
  assignedUserId?: string; // Assigned User ID (YlWd2wuCAZQzh2cH1fVZ)
  address?: string; // Calendar Event address (https://meet.google.com/yqp-gogr-wve)
  ignoreDateRange?: boolean; // Ignore Date Range (false)
  toNotify?: boolean; // if set to false, the automations will not run (true)
  rrule?: string; // Recurrence Rule (RRULE) as per the iCalendar (RFC 5545) specification for recurring events. DTSTART is not required, instance ids are calculated on the basis of startTime of the event. The rrule only be applied if ignoreFreeSlotValidation is true.
};

export type CalendarAppointmentSchemaResponseDTO = {
  id: string; // Event ID (0007BWpSzSwfiuSl0tR2)
  calendarId: string; // Calendar ID (BqTwX8QFwXzpegMve9EQ)
  locationId: string; // Location ID (BqTwX8QFwXzpegMve9EQ)
  contactId: string; // Contact ID (9NkT25Vor1v4aQatFsv2)
  startTime?: string; // Start Time (2023-09-25T16:00:00+05:30)
  endTime?: string; // End Time (2023-09-25T16:00:00+05:30)
  title?: string; // Calendar Event title (Appointment with GHL Dev team)
  appointmentStatus?: string; // Appointment Status (confirmed)
  assignedUserId?: string; // Assigned User ID (YlWd2wuCAZQzh2cH1fVZ)
  address?: string; // Calendar Event address (https://meet.google.com/yqp-gogr-wve)
  isRecurring?: boolean; // Is Recurring (false)
  rrule?: string; // Recurrence Rule (RRULE) as per the iCalendar (RFC 5545) specification for recurring events. DTSTART is not required, instance ids are calculated on the basis of startTime of the event. The rrule only be applied if ignoreFreeSlotValidation is true.
};

export type CalendarAppointmentEditSchemaDTO = {
  calendarId: string; // Calendar Id
  startTime: string; // Start Time
  endTime: string; // End Time
  title: string; // Title
  meetingLocationType: string; // Meeting Location Type
  appointmentStatus: string; // Appointment Status
  address: string; // Appointment Address
  ignoreDateRange: boolean; // If set to true, the minimum scheduling notice and date range would be ignored
  toNotify: boolean; // If set to false, the automations will not run
};

export type CalendarBlockSlotCreateSchemaDTO = {
  locationId: string; // Location ID (BqTwX8QFwXzpegMve9EQ)
  startTime: string; // Start Time (2023-09-25T16:00:00+05:30)
  endTime: string; // End Time (2023-09-25T16:00:00+05:30)
  calendarId?: string; // Calendar Id (Block Slot can only be created on simple/event calendars)
  title?: string; // Title (Block Slot)
  assignedUserId?: string; // Assigned User ID (YlWd2wuCAZQzh2cH1fVZ)
};

export type CalendarCreateUpdateBlockedSlotSuccessfulResponseDTO = {
  id: string; // Block Slot ID (0007BWpSzSwfiuSl0tR2)
  locationId: string; // Location ID (BqTwX8QFwXzpegMve9EQ)
  title: string; // Title (Block Slot)
  startTime: string; // Start Time (2023-09-25T16:00:00+05:30)
  endTime: string; // End Time (2023-09-25T16:00:00+05:30)
  calendarId?: string; // Calendar Id (Block Slot can only be created on simple/event calendars)
  assignedUserId?: string; // Assigned User ID (YlWd2wuCAZQzh2cH1fVZ)
};

export type CalendarBlockSlotEditSchemaDTO = {
  calendarId?: string; // Calendar Id (Block Slot can only be created on simple/event calendars)
  startTime?: string; // Start Time (2023-09-25T16:00:00+05:30)
  endTime?: string; // End Time (2023-09-25T16:00:00+05:30)
  title?: string; // Title (Block Slot)
  assignedUserId?: string; // Assigned User ID (YlWd2wuCAZQzh2cH1fVZ)
};

export type CalendarGetNoteSchemaDTO = {
  id?: string; // Note Id (ocQHyuzHvysMo5N5VsXc)
  body?: string; // Note Body (This is a note)
  userId?: string; // User Id (ocQHyuzHvysMo5N5VsXc)
  dateAdded?: string; // Date Added (2023-09-25T16:00:00+05:30)
  contactId?: string; // Contact Id (ocQHyuzHvysMo5N5VsXc)
  createdBy?: {
    name?: string; // Created By Name (John Doe)
    profilePhoto?: string; // Created By Profile Photo (https://example.com/profile.jpg)
  };
};

export type CalendarGetNotesDTO = {
  notes?: CalendarGetNoteSchemaDTO[]; // the array of notes ([{...}])
  hasMore?: boolean; // has more notes (true)
};

export type CalendarNoteDTO = {
  body: string; // Note Body (This is a note)
  userId?: string; // User Id (ocQHyuzHvysMo5N5VsXc)
};

export type CalendarGetCreateUpdateNoteSuccessfulResponseDto = {
  note: CalendarGetNoteSchemaDTO; // the note object ({...})
};

export type CalendarResourceTypeDTO = "equipments" | "rooms";

export type CalendarResourceByIdResponseDTO = {
  locationId: string; // Location ID of the resource (ocQHyuzHvysMo5N5VsXc)
  name: string; // Name of the resource (yoga room)
  resourceType: CalendarResourceTypeDTO; // Resource Type (rooms)
  isActive: boolean; // Is Active (true)
  calendarIds: string[]; // Calendar IDs (["Jsj0xnlDDjw0SuvX1J13","oCM5feFC86FAAbcO7lJK"])
  description?: string; // Description of the resource
  quantity?: number; // Quantity of the resource
  outOfService?: number; // Indicates if the resource is out of service
  capacity?: number; // Capacity of the resource
};

export type CalendarResourceDTO = {
  locationId: string; // Location ID of the resource (ocQHyuzHvysMo5N5VsXc)
  name: string; // Name of the resource (yoga room)
  isActive: boolean; // Is Active (true)
  resourceType: CalendarResourceTypeDTO; // Resource Type (rooms)
  calendarIds: string[]; // Calendar IDs (["Jsj0xnlDDjw0SuvX1J13","oCM5feFC86FAAbcO7lJK"])
  description?: string; // Description of the resource
  quantity?: number; // Quantity of the resource
  outOfService?: number; // Indicates if the resource is out of service
  capacity?: number; // Capacity of the resource
};

export type CalendarResourceResponseDTO = {
  locationId: string; // Location ID of the resource (ocQHyuzHvysMo5N5VsXc)
  name: string; // Name of the resource (yoga room)
  resourceType: CalendarResourceTypeDTO; // Resource Type (rooms)
  isActive: boolean; // Is Active (true)
  description?: string; // Description of the resource
  quantity?: number; // Quantity of the resource
  outOfService?: number; // Indicates if the resource is out of service
  capacity?: number; // Capacity of the resource
};

export type CalendarCreateResourceDTO = {
  locationId: string; // Location ID of the resource (ocQHyuzHvysMo5N5VsXc)
  name: string; // Name of the resource (yoga room)
  description: string; // Description of the resource
  quantity: number; // Quantity of the resource
  outOfService: number; // Indicates if the resource is out of service
  capacity: number; // Capacity of the resource
  calendarIds: string[]; // Calendar IDs (["Jsj0xnlDDjw0SuvX1J13","oCM5feFC86FAAbcO7lJK"])
};
