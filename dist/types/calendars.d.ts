import { DeepRequired } from "./_global";
export declare namespace Calendars {
    /**
     * the calendar appointment type descriptions
     *
     * @memberof Calendars
     */
    export namespace Appointments {
        /**
         * the calendar appointment object
         *
         * @memberof Calendars.Appointments
         * @example
         * ```ts
         * const appointment: Calendars.Appointments.DTO = {
         *  calendarId: "BqTwX8QFwXzpegMve9EQ",
         *  locationId: "BqTwX8QFwXzpegMve9EQ",
         *  contactId: "9NkT25Vor1v4aQatFsv2",
         *  groupId: "9NkT25Vor1v4aQatFsv2",
         *  appointmentStatus: "confirmed",
         *  assignedUserId: "YlWd2wuCAZQzh2cH1fVZ",
         *  startTime: "2023-09-25T16:00:00+05:30",
         *  endTime: "2023-09-25T17:00:00+05:30",
         *  title: "Calendar Event title",
         *  meetingLocationType: "zoom",
         *  address: "Calendar Event address",
         *  ignoreDateRange: false,
         *  toNotify: true
         * }
         * ```
         */
        type DTO = {
            /**
             * the calendar ID (BqTwX8QFwXzpegMve9EQ)
             *
             * @required
             * @type string
             * @example
             * ```ts
             * "BqTwX8QFwXzpegMve9EQ"
             * ```
             */
            calendarId: string;
            /**
             * the location ID (BqTwX8QFwXzpegMve9EQ)
             *
             * @required
             * @type string
             * @example
             * ```ts
             * "BqTwX8QFwXzpegMve9EQ"
             * ```
             */
            locationId: string;
            /**
             * the contact ID (9NkT25Vor1v4aQatFsv2)
             *
             * @required
             * @type string
             * @example
             * ```ts
             * "9NkT25Vor1v4aQatFsv2"
             * ```
             */
            contactId: string;
            /**
             * the start time (2023-09-25T16:00:00+05:30)
             *
             * @required
             * @type string
             * @example
             * ```ts
             * "2023-09-25T16:00:00+05:30"
             * ```
             */
            startTime: string;
            /**
             * the end time (2023-09-25T17:00:00+05:30)
             *
             * @required
             * @type string
             * @example
             * ```ts
             * "2023-09-25T17:00:00+05:30"
             * ```
             */
            endTime?: string;
            /**
             * the title (Calendar Event title)
             *
             * @required
             * @type string
             * @example
             * ```ts
             * "Calendar Event title"
             * ```
             */
            title?: string;
            /**
             * the meeting location type (zoom)
             *
             * @type string
             * @example
             * ```ts
             * "zoom"
             * ```
             */
            meetingLocationType?: MeetingLocationTypes;
            /**
             * the appointment status (confirmed)
             *
             * @required
             * @type string
             * @example
             * ```ts
             * "confirmed"
             * ```
             */
            appointmentStatus?: string;
            /**
             * the assigned user ID (YlWd2wuCAZQzh2cH1fVZ)
             *
             * @type string
             * @example
             * ```ts
             * "YlWd2wuCAZQzh2cH1fVZ"
             * ```
             */
            assignedUserId?: string;
            /**
             * the address (Calendar Event address)
             *
             * @type string
             * @example
             * ```ts
             * "Calendar Event address"
             * ```
             */
            address?: string;
            /**
             * ignore date range (false)
             *
             * @type boolean
             * @example
             * ```ts
             * false
             * ```
             */
            ignoreDateRange?: boolean;
            /**
             * to notify (true)
             *
             * @type boolean
             * @example
             * ```ts
             * true
             * ```
             */
            toNotify?: boolean;
        };
        /**
         * the appointment create/update object
         *
         * @memberof Calendars.Appointments
         * @example
         * ```ts
         * const body: Calendars.Appointments.CreateUpdateDTO = {
         *  calendarId: "BqTwX8QFwXzpegMve9EQ",
         *  locationId: "BqTwX8QFwXzpegMve9EQ",
         *  contactId: "9NkT25Vor1v4aQatFsv2",
         *  groupId: "9NkT25Vor1v4aQatFsv2",
         *  appointmentStatus: "confirmed",
         *  assignedUserId: "YlWd2wuCAZQzh2cH1fVZ",
         *  startTime: "2023-09-25T16:00:00+05:30",
         *  endTime: "2023-09-25T17:00:00+05:30",
         *  title: "Calendar Event title",
         *  meetingLocationType: "zoom",
         *  address: "Calendar Event address",
         *  ignoreDateRange: false,
         *  toNotify: true
         * }
         */
        interface CreateUpdateDTO extends DTO {
            rrule?: ;
        }
        interface EditDTO extends DeepRequired<DTO> {
        }
        type ResponseDTO = {
            id: string /** Event ID (0007BWpSzSwfiuSl0tR2) */;
            calendarId: string /** Calendar ID (BqTwX8QFwXzpegMve9EQ) */;
            locationId: string /** Location ID (BqTwX8QFwXzpegMve9EQ) */;
            contactId: string /** Contact ID (9NkT25Vor1v4aQatFsv2) */;
            startTime?: string /** Start Time (2023-09-25T16:00:00+05:30) */;
            endTime?: string /** End Time (2023-09-25T16:00:00+05:30) */;
            title?: string /** Calendar Event title (Appointment with GHL Dev team) */;
            appointmentStatus?: string /** Appointment Status (confirmed) */;
            assignedUserId?: string /** Assigned User ID (YlWd2wuCAZQzh2cH1fVZ) */;
            address?: string /** Calendar Event address (https://meet.google.com/yqp-gogr-wve) */;
            isRecurring?: boolean /** Is Recurring (false) */;
            rrule?: string /** Recurrence Rule (RRULE) as per the iCalendar (RFC 5545) specification for recurring events. DTSTART is not required, instance ids are calculated on the basis of startTime of the event. The rrule only be applied if ignoreFreeSlotValidation is true. */;
        };
    }
    /**
     * the calendar Events type descriptions
     *
     * @memberof Calendars
     */
    export namespace Events {
        /**
         * the calendar event object
         *
         * @memberof Calendars.Events
         * @example
         * ```ts
         * const event: Calendars.Events.DTO = {
         *  id: "0007BWpSzSwfiuSl0tR2",
         *  title: "Appointment with GHL Dev team",
         *  calendarId: "BqTwX8QFwXzpegMve9EQ",
         *  locationId: "BqTwX8QFwXzpegMve9EQ",
         *  contactId: "9NkT25Vor1v4aQatFsv2",
         *  groupId: "9NkT25Vor1v4aQatFsv2",
         *  appointmentStatus: "confirmed",
         *  assignedUserId: "YlWd2wuCAZQzh2cH1fVZ",
         *  users: ["YlWd2wuCAZQzh2cH1fVZ", "9NkT25Vor1v4aQatFsv2"],
         *  startTime: "2023-09-25T16:00:00+05:30",
         *  endTime: "2023-09-25T16:00:00+05:30",
         *  dateAdded: "2023-09-25T16:00:00+05:30",
         *  dateUpdated: "2023-09-25T16:00:00+05:30",
         *  address: "https://meet.google.com/yqp-gogr-wve",
         *  notes: "Some dummy note",
         *  assignedResources: ["YlWd2wuCAZQzh2cH1fVZ", "9NkT25Vor1v4aQatFsv2"],
         *  isRecurring: false,
         *  rrule: "RRULE",
         *  masterEventId: "0007BWpSzSwfiuSl0tR2"
         * }
         * ```
         */
        type DTO = {
            /**
             * the calendar event ID (0007BWpSzSwfiuSl0tR2)
             *
             * @required
             * @type string
             * @example
             * ```ts
             * "0007BWpSzSwfiuSl0tR2"
             * ```
             */
            id: string;
            /**
             * the calendar event title (Appointment with GHL Dev team)
             *
             * @required
             * @type string
             * @example
             * ```ts
             * "Appointment with GHL Dev team"
             * ```
             */
            title: string;
            /**
             * the calendar ID (BqTwX8QFwXzpegMve9EQ)
             *
             * @required
             * @type string
             * @example
             * ```ts
             * "BqTwX8QFwXzpegMve9EQ"
             * ```
             */
            calendarId: string;
            /**
             * the location ID (BqTwX8QFwXzpegMve9EQ)
             *
             * @required
             * @type string
             * @example
             * ```ts
             * "BqTwX8QFwXzpegMve9EQ"
             * ```
             */
            locationId: string;
            /**
             * the contact ID (9NkT25Vor1v4aQatFsv2)
             *
             * @required
             * @type string
             * @example
             * ```ts
             * "9NkT25Vor1v4aQatFsv2"
             * ```
             */
            contactId: string;
            /**
             * the group ID (9NkT25Vor1v4aQatFsv2)
             *
             * @required
             * @type string
             * @example
             * ```ts
             * "9NkT25Vor1v4aQatFsv2"
             * ```
             */
            groupId: string;
            /**
             * the appointment status (confirmed)
             *
             * @required
             * @type string
             * @example
             * ```ts
             * "confirmed"
             * ```
             */
            appointmentStatus: string;
            /**
             * the assigned user ID (YlWd2wuCAZQzh2cH1fVZ)
             *
             * @required
             * @type string
             * @example
             * ```ts
             * "YlWd2wuCAZQzh2cH1fVZ"
             * ```
             */
            assignedUserId: string;
            /**
             * the array of users ([YlWd2wuCAZQzh2cH1fVZ, 9NkT25Vor1v4aQatFsv2])
             *
             * @required
             * @type string[]
             * @example
             * ```ts
             * ["YlWd2wuCAZQzh2cH1fVZ", "9NkT25Vor1v4aQatFsv2"]
             * ```
             */
            users: string[];
            /**
             * the start time (2023-09-25T16:00:00+05:30)
             *
             * @required
             * @type string
             * @example
             * ```ts
             * "2023-09-25T16:00:00+05:30"
             * ```
             */
            startTime: string;
            /**
             * the end time (2023-09-25T16:00:00+05:30)
             *
             * @required
             * @type string
             * @example
             * ```ts
             * "2023-09-25T16:00:00+05:30"
             * ```
             */
            endTime: string;
            /**
             * the date added (2023-09-25T16:00:00+05:30)
             *
             * @required
             * @type string
             * @example
             * ```ts
             * "2023-09-25T16:00:00+05:30"
             * ```
             */
            dateAdded: string;
            /**
             * the date updated (2023-09-25T16:00:00+05:30)
             *
             * @required
             * @type string
             * @example
             * ```ts
             * "2023-09-25T16:00:00+05:30"
             * ```
             */
            dateUpdated: string;
            /**
             * the address (https://meet.google.com/yqp-gogr-wve)
             *
             * @required
             * @type string
             * @example
             * ```ts
             * "https://meet.google.com/yqp-gogr-wve"
             * ```
             */
            address?: string;
            /**
             * the notes (Some dummy note)
             *
             * @required
             * @type string
             * @example
             * ```ts
             * "Some dummy note"
             * ```
             */
            notes?: string;
            /**
             * the array of assigned resources ([YlWd2wuCAZQzh2cH1fVZ, 9NkT25Vor1v4aQatFsv2])
             *
             * @required
             * @type string[]
             * @example
             * ```ts
             * ["YlWd2wuCAZQzh2cH1fVZ", "9NkT25Vor1v4aQatFsv2"]
             * ```
             */
            assignedResources?: string[];
            /**
             * the recurring status (false)
             *
             * @required
             * @type boolean
             * @example
             * ```ts
             * false
             * ```
             */
            isRecurring?: boolean;
            /**
             * the Recurrence Rule (RRULE)
             *
             * @required
             * @type string
             * @example
             * ```ts
             * "RRULE"
             * ```
             */
            rrule?: string;
            /**
             * the master event ID (0007BWpSzSwfiuSl0tR2)
             *
             * @required
             * @type string
             * @example
             * ```ts
             * "0007BWpSzSwfiuSl0tR2"
             * ```
             */
            masterEventId?: string;
        };
        /**
         * the response object of getting all calendar events
         *
         * @memberof Calendars.Events
         * @example
         * ```ts
         * const response: Calendars.Events.GetSuccessfulResponseDTO = {
         *  events: [
         *    {
         *      id: "0007BWpSzSwfiuSl0tR2",
         *      title: "Appointment with GHL Dev team",
         *      calendarId: "BqTwX8QFwXzpegMve9EQ",
         *      locationId: "BqTwX8QFwXzpegMve9EQ",
         *      contactId: "9NkT25Vor1v4aQatFsv2",
         *      groupId: "9NkT25Vor1v4aQatFsv2",
         *      appointmentStatus: "confirmed",
         *      assignedUserId: "YlWd2wuCAZQzh2cH1fVZ",
         *      users: ["YlWd2wuCAZQzh2cH1fVZ", "9NkT25Vor1v4aQatFsv2"],
         *      startTime: "2023-09-25T16:00:00+05:30",
         *      endTime: "2023-09-25T16:00:00+05:30",
         *      dateAdded: "2023-09-25T16:00:00+05:30",
         *      dateUpdated: "2023-09-25T16:00:00+05:30",
         *      address: "https://meet.google.com/yqp-gogr-wve",
         *      notes: "Some dummy note",
         *      assignedResources: ["YlWd2wuCAZQzh2cH1fVZ", "9NkT25Vor1v4aQatFsv2"],
         *      isRecurring: false,
         *      rrule: "RRULE",
         *      masterEventId: "0007BWpSzSwfiuSl0tR2"
         *    }
         *  ]
         * }
         * ```
         */
        type GetSuccessfulResponseDTO = {
            /**
             * the array of calendar events ([{...}])
             *
             * @required
             * @type DTO[]
             * @example
             * ```ts
             * const events = [
             *  {
             *    id: "0007BWpSzSwfiuSl0tR2",
             *    title: "Appointment with GHL Dev team",
             *    calendarId: "BqTwX8QFwXzpegMve9EQ",
             *    locationId: "BqTwX8QFwXzpegMve9EQ",
             *    contactId: "9NkT25Vor1v4aQatFsv2",
             *    groupId: "9NkT25Vor1v4aQatFsv2",
             *    appointmentStatus: "confirmed",
             *    assignedUserId: "YlWd2wuCAZQzh2cH1fVZ",
             *    users: ["YlWd2wuCAZQzh2cH1fVZ", "9NkT25Vor1v4aQatFsv2"],
             *    startTime: "2023-09-25T16:00:00+05:30",
             *    endTime: "2023-09-25T16:00:00+05:30",
             *    dateAdded: "2023-09-25T16:00:00+05:30",
             *    dateUpdated: "2023-09-25T16:00:00+05:30",
             *    address: "https://meet.google.com/yqp-gogr-wve",
             *    notes: "Some dummy note",
             *    assignedResources: ["YlWd2wuCAZQzh2cH1fVZ", "9NkT25Vor1v4aQatFsv2"],
             *    isRecurring: false,
             *    rrule: "RRULE",
             *    masterEventId: "0007BWpSzSwfiuSl0tR2"
             *  }
             * ]
             * ```
             */
            events: DTO[];
        };
    }
    /**
     * the calendar group type descriptions
     *
     * @memberof Calendars
     */
    export namespace Groups {
        /**
         * the calendar group object
         *
         * @memberof Calendars.Groups
         *
         * @example
         * ```ts
         * const group: Calendars.Groups.DTO = {
         *  locationId: "ocQHyuzHvysMo5N5VsXc",
         *  name: "Barber Services",
         *  description: "Choose a type of hair cut",
         *  slug: "15-mins",
         *  isActive: true,
         *  id: "ocQHyuzHvysMo5N5VsXc"
         * }
         * ```
         */
        type DTO = {
            /**
             * the location id of the calendar group (ocQHyuzHvysMo5N5VsXc)
             *
             * @required
             * @type string
             * @example
             * ```ts
             * "ocQHyuzHvysMo5N5VsXc"
             * ```
             */
            locationId: string;
            /**
             * the name of the calendar group (Barber Services)
             *
             * @required
             * @type string
             * @example
             * ```ts
             * "Barber Services"
             * ```
             */
            name: string;
            /**
             * the description of the calendar group (Choose a type of hair cut)
             *
             * @required
             * @type string
             * @example
             * ```ts
             * "Choose a type of hair cut"
             * ```
             */
            description: string;
            /**
             * the slug of the calendar group (15-mins)
             *
             * @required
             * @type string
             * @example
             * ```ts
             * "15-mins"
             * ```
             */
            slug: string;
            /**
             * the status of the calendar group (true)
             *
             * @type boolean
             * @example
             * ```ts
             * true
             * ```
             */
            isActive?: boolean;
            /**
             * the id of the calendar group (ocQHyuzHvysMo5N5VsXc)
             *
             * @type string
             * @example
             * ```ts
             * "ocQHyuzHvysMo5N5VsXc"
             * ```
             */
            id?: string /** the id of the calendar group (ocQHyuzHvysMo5N5VsXc) */;
        };
        /**
         * the array of calendar groups ([{...}])
         *
         * @memberof Calendars.Groups
         * @example
         * ```ts
         * const response: Calendars.Groups.AllSuccessfulResponseDTO = {
         *  groups: [
         *    {
         *      locationId: "ocQHyuzHvysMo5N5VsXc",
         *      name: "Barber Services",
         *      description: "Choose a type of hair cut",
         *      slug: "15-mins",
         *      isActive: true,
         *      id: "ocQHyuzHvysMo5N5VsXc"
         *    }
         *  ]
         * }
         * ```
         */
        type AllSuccessfulResponseDTO = {
            /**
             * the array of calendar groups ([{...}])
             *
             * @required
             * @type DTO[]
             * @example
             * ```ts
             * const groups = [
             *  {
             *    locationId: "ocQHyuzHvysMo5N5VsXc",
             *    name: "Barber Services",
             *    description: "Choose a type of hair cut",
             *    slug: "15-mins",
             *    isActive: true,
             *    id: "ocQHyuzHvysMo5N5VsXc"
             *  }
             * ]
             * ```
             */
            groups: DTO[] /** the array of calendar groups ([{...}]) */;
        };
        /**
         * Type definition for checking if a calendar group slug is available
         *
         * @memberof Calendars.Groups
         * @example
         * ```ts
         * const body: Calendars.Groups.ValidateSlugPostBodyDTO = {
         *  locationId: "ocQHyuzHvysMo5N5VsXc",
         *  slug: "15-mins"
         * }
         * ```
         */
        type ValidateSlugPostBodyDTO = {
            /**
             * the location id of the calendar group (ocQHyuzHvysMo5N5VsXc)
             *
             * @required
             * @type string
             * @example
             * ```ts
             * "ocQHyuzHvysMo5N5VsXc"
             * ```
             */
            locationId: string;
            /**
             * the slug to validate (15-mins)
             *
             * @required
             * @type string
             * @example
             * ```ts
             * "15-mins"
             * ```
             */
            slug: string;
        };
        /**
         * Type definition for the response of checking if a calendar group slug is available
         *
         * @memberof Calendars.Groups
         * @example
         * ```ts
         * const response: Calendars.Groups.ValidateSlugSuccessResponseDTO = {
         *  available: true
         * }
         * ```
         */
        type ValidateSlugSuccessResponseDTO = {
            /**
             * the availability of the slug (true)
             *
             * @required
             * @type boolean
             * @example
             * ```ts
             *  true
             * ```
             */
            available: boolean /** the availability of the slug (true) */;
        };
        /**
         * Type definition for creating a calendar group
         *
         * @memberof Calendars.Groups
         * @example
         * ```ts
         * const body: Calendars.Groups.CreateDTO = {
         *  locationId: "ocQHyuzHvysMo5N5VsXc",
         *  name: "Barber Services",
         *  description: "Choose a type of hair cut",
         *  slug: "15-mins",
         *  isActive: true
         * }
         * ```
         */
        type CreateDTO = {
            /**
             * the location id of the calendar group (ocQHyuzHvysMo5N5VsXc)
             *
             * @required
             * @type string
             * @example
             * ```ts
             * "ocQHyuzHvysMo5N5VsXc"
             * ```
             */
            locationId: string;
            /**
             * the name of the calendar group (Barber Services)
             *
             * @required
             * @type string
             * @example
             * ```ts
             * "Barber Services"
             * ```
             */
            name: string;
            /**
             * the description of the calendar group (Choose a type of hair cut)
             *
             * @required
             * @type string
             * @example
             * ```ts
             * "Choose a type of hair cut"
             * ```
             */
            description: string;
            /**
             * the slug of the calendar group (15-mins)
             *
             * @required
             * @type string
             * @example
             * ```ts
             * "15-mins"
             * ```
             */
            slug: string;
            /**
             * the status of the calendar group (true)
             *
             * @type boolean
             * @example
             * ```ts
             * true
             * ```
             */
            isActive?: boolean;
        };
        /**
         * Type definition for the response of creating a calendar group
         *
         * @memberof Calendars.Groups
         * @example
         * ```ts
         * const response: Calendars.Groups.CreateSuccessfulResponseDTO = {
         *  group: {
         *    locationId: "ocQHyuzHvysMo5N5VsXc",
         *    name: "Barber Services",
         *    description: "Choose a type of hair cut",
         *    slug: "15-mins",
         *    isActive: true,
         *    id: "ocQHyuzHvysMo5N5VsXc"
         *  }
         * }
         * ```
         */
        type CreateSuccessfulResponseDTO = {
            /**
             * the calendar group object ({...})
             *
             * @required
             * @type DTO
             * @example
             * ```ts
             * const group = {
             *  locationId: "ocQHyuzHvysMo5N5VsXc",
             *  name: "Barber Services",
             *  description: "Choose a type of hair cut",
             *  slug: "15-mins",
             *  isActive: true,
             *  id: "ocQHyuzHvysMo5N5VsXc"
             * }
             * ```
             */
            group: DTO;
        };
        /**
         * Type definition for updating a calendar group
         *
         * @memberof Calendars.Groups
         * @example
         * ```ts
         * const response: Calendars.Groups.UpdateDTO = {
         *  name: "Barber Services",
         *  description: "Choose a type of hair cut",
         *  slug: "15-mins"
         * }
         * ```
         */
        type SuccessfulResponseDTO = {
            /**
             * the success status of the request (true)
             *
             * @required
             * @type boolean
             * @example
             * ```ts
             *  true
             * ```
             */
            success: boolean;
        };
        /**
         * Type definition for updating a calendar group status
         *
         * @memberof Calendars.Groups
         * @example
         * ```ts
         * const body: Calendars.Groups.UpdateDTO = {
         *  isActive: true
         * }
         * ```
         */
        type StatusUpdateParamsDTO = {
            /**
             * the status of the calendar group (true)
             *
             * @required
             * @type boolean
             * @example
             * ```ts
             * true
             * ```
             */
            isActive: boolean;
        };
        /**
         * Type definition for updating a calendar group
         *
         * @memberof Calendars.Groups
         * @example
         * ```ts
         * const body: Calendars.Groups.UpdateDTO = {
         *  name: "Barber Services",
         *  description: "Choose a type of hair cut",
         *  slug: "15-mins"
         * }
         * ```
         */
        type UpdateDTO = {
            /**
             * the name of the calendar group (Barber Services)
             *
             * @type string
             * @example
             * ```ts
             * "Barber Services"
             * ```
             */
            name: string;
            /**
             * the description of the calendar group (Choose a type of hair cut)
             *
             * @type string
             * @example
             * ```ts
             * "Choose a type of hair cut"
             * ```
             */
            description: string;
            /**
             * the slug of the calendar group (15-mins)
             *
             * @type string
             * @example
             * ```ts
             * "15-mins"
             * ```
             */
            slug: string;
        };
    }
    /**
     * the calendar type descriptions
     *
     * @memberof Calendars
     */
    export namespace Notifications {
        /**
         * the calendar notification object
         *
         * @memberof Calendars.Notifications
         * @example
         * ```ts
         * const notification: Calendars.Notifications.DTO = {
         *  shouldSendToContact: true,
         *  shouldSendToGuest: true,
         *  shouldSendToUser: true,
         *  shouldSendToSelectedUsers: true,
         *  type: "email"
         * }
         * ```
         */
        type DTO = {
            /**
             * should send to contact (true)
             *
             * @required
             * @type boolean
             * @example
             * ```ts
             *  true
             * ```
             */
            shouldSendToContact: boolean;
            /**
             * should send to guest (true)
             *
             * @required
             * @type boolean
             * @example
             * ```ts
             *  true
             * ```
             */
            shouldSendToGuest: boolean;
            /**
             * should send to user (true)
             *
             * @required
             * @type boolean
             * @example
             * ```ts
             *  true
             * ```
             */
            shouldSendToUser: boolean;
            /**
             * should send to selected users (true)
             *
             * @required
             * @type boolean
             * @example
             * ```ts
             *  true
             * ```
             */
            shouldSendToSelectedUsers: boolean;
            /**
             * the type of notification (email)
             *
             * @type string
             * @example
             * ```ts
             * "email"
             * ```
             */
            type?: "email";
        };
    }
    /**
     * the calendar slots type descriptions
     *
     * @memberof Calendars
     */
    export namespace Slots {
        /**
         * the calendar slot object
         *
         * @memberof Calendars.Slots
         * @example
         * ```ts
         * const slot: Calendars.Slots.DTO = {
         *  slots: ["2023-09-25T16:00:00+05:30", "2023-09-25T16:00:00+05:30"]
         * }
         * ```
         */
        type DTO = {
            /**
             * the array of slots (["2023-09-25T16:00:00+05:30", "2023-09-25T16:00:00+05:30"])
             *
             * @required
             * @type string[]
             * @example
             * ```ts
             * ["2023-09-25T16:00:00+05:30", "2023-09-25T16:00:00+05:30"]
             * ```
             */
            slots: string[];
        };
        /**
         * the calendar get slots type descriptions
         *
         * @memberof Calendars.Slots
         * @example
         * ```ts
         * const body: Calendars.Slots.GetFreeDTO = {
         *  startDate: "1548898600000",
         *  endDate: "1601490599999",
         *  userId: "YlWd2wuCAZQzh2cH1fVZ",
         *  userIds: ["YlWd2wuCAZQzh2cH1fVZ"],
         *  timezone: "America/Chihuahua",
         *  enableLookBusy: "true"
         * }
         * ```
         */
        type GetFreeDTO = {
            /**
             * the start date of the free slots (1548898600000)
             *
             * @required
             * @type string
             * @example
             * ```ts
             * "1548898600000"
             * ```
             */
            startDate: string;
            /** ;
      
            /**
             * the end date of the free slots (1601490599999)
             *
             * @required
             * @type string
             * @example
             * ```ts
             * "1601490599999"
             * ```
             */
            endDate: string;
            /**
             * the user id of the free slots (YlWd2wuCAZQzh2cH1fVZ)
             *
             * @type string
             * @example
             * ```ts
             * "YlWd2wuCAZQzh2cH1fVZ"
             * ```
             */
            userId?: string;
            /**
             * the array of user ids of the free slots ([YlWd2wuCAZQzh2cH1fVZ])
             *
             * @type string[]
             * @example
             * ```ts
             * ["YlWd2wuCAZQzh2cH1fVZ"]
             * ```
             */
            userIds?: string[];
            /**
             * the timezone of the free slots (America/Chihuahua)
             *
             * @type string
             * @example
             * ```ts
             * "America/Chihuahua"
             * ```
             */
            timezone?: string;
            /**
             * Apply Look Busy (true)
             *
             * @type string
             * @example
             * ```ts
             * "true"
             * ```
             */
            enableLookBusy?: string;
        };
        /**
         * the response object of getting all calendar slots
         *
         * @memberof Calendars.Slots
         * @example
         * ```ts
         * const response: Calendars.Slots.GetSuccessfulResponseDTO = {
         *  "2023-09-25": {
         *    slots: ["2023-09-25T16:00:00+05:30", "2023-09-25T16:00:00+05:30"]
         *  }
         * }
         * ```
         */
        type GetSuccessfulResponseDTO = {
            /**
             * the slots schema ({...})
             *
             * @required
             * @type { [key: string]: DTO }
             * @example
             * ```ts
             * "2023-09-25": {
             *   slots: ["2023-09-25T16:00:00+05:30", "2023-09-25T16:00:00+05:30"]
             * }
             * ```
             */
            __dates__: DTO;
        };
    }
    type MeetingLocationTypes = "custom" | "zoom" | "gmeet" | "phone" | "address";
    /**
     * the calendar team members descriptions
     *
     * @memberof Calendars
     */
    export namespace TeamMembers {
        type PriorityTypes = 0 | 0.5 | 1;
        /**
         * The Team Member object
         *
         * @memberof Calendars
         * @example
         * ```ts
         * const teamMember: Calendars.TeamMembers.DTO = {
         *  userId: "YlWd2wuCAZQzh2cH1fVZ",
         *  priority: 1,
         *  meetingLocationType: "zoom",
         *  meetingLocation: "https://meet.google.com/yqp-gogr-wve",
         *  isPrimary: true
         * }
         * ```
         */
        export type DTO = {
            /**
             * the user id of the team member (YlWd2wuCAZQzh2cH1fVZ)
             *
             * @required
             * @type string
             * @example
             * ```ts
             * "YlWd2wuCAZQzh2cH1fVZ"
             * ```
             */
            userId: string;
            /** ;
      
            /**
             * the priority of the team member (1)
             *
             * @type PriorityTypes
             * @example
             * ```ts
             * 1
             * ```
             */
            priority?: PriorityTypes;
            /**
             * the meeting location type (zoom)
             *
             * @type MeetingLocationTypes
             * @example
             * ```ts
             * "zoom"
             * ```
             */
            meetingLocationType?: MeetingLocationTypes;
            /**
             * the meeting location (https://meet.google.com/yqp-gogr-wve)
             *
             * @type string
             * @example
             * ```ts
             * "https://meet.google.com/yqp-gogr-wve"
             * ```
             */
            meeitngLocation?: string;
            /**
             * the primary user for the calendar (true)
             *
             * @type boolean
             * @example
             * ```ts
             * true
             * ```
             */
            isPrimary?: boolean;
        };
        export {};
    }
    export type Hour = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23;
    export type Minute = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59;
    export type DayDTO = 0 | 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * the calendar hours type descriptions
     *
     * @memberof Calendars
     * @example
     * ```ts
     * const body: Calendars.HoursDTO = {
     *  openHour: 9,
     *  openMinute: 0,
     *  closeHour: 17,
     *  closeMinute: 0
     * }
     * ```
     */
    export type HourDTO = {
        /**
         * the open hour (9)
         *
         * @required
         * @type Hour
         * @example
         * ```ts
         * 9
         * ```
         */
        openHour: Hour;
        /**
         * the open minute (0)
         *
         * @required
         * @type Minute
         * @example
         * ```ts
         * 0
         * ```
         */
        openMinute: Minute;
        /**
         * the close hour (17)
         *
         * @required
         * @type Hour
         * @example
         * ```ts
         * 17
         * ```
         */
        closeHour: Hour;
        /**
         * the close minute (0)
         *
         * @required
         * @type Minute
         * @example
         * ```ts
         * 0
         * ```
         */
        closeMinute: Minute;
    };
    /**
     * the calendar open hours type descriptions
     *
     * @memberof Calendars
     * @example
     * ```ts
     * const body: Calendars.OpenHourDTO = {
     *  daysOfTheWeek: [0, 1, 2, 4, 5],
     *  hours: {
     *    openHour: 9,
     *    openMinute: 0,
     *    closeHour: 17,
     *    closeMinute: 0
     *  }
     * }
     * ```
     */
    export type OpenHourDTO = {
        /**
         * the days of the week ([0, 1, 2, 4, 5])
         *
         * @required
         * @type DayDTO[]
         * @example
         * ```ts
         * [0, 1, 2, 4, 5]
         * ```
         */
        daysOfTheWeek: DayDTO[];
        /**
         * the hours of the open hours ({...})
         *
         * @required
         * @type HourDTO
         * @example
         * ```ts
         * const hours = {
         *  openHour: 9,
         *  openMinute: 0,
         *  closeHour: 17,
         *  closeMinute: 0
         * }
         * ```
         */
        hours: HourDTO[];
    };
    export type RecurringCountDTO = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24;
    /**
     * The calendar recurring type configuration
     *
     * @memberof Calendars
     * @example
     * ```ts
     * const body: Calendars.RecurringDTO = {
     *  freq: "DAILY",
     *  count: 1,
     *  bookingOption: "skip",
     *  bookingOverlapDefaultStatus: "confirmed"
     * }
     * ```
     */
    export type RecurringDTO = {
        /**
         * the frequency of the recurring event (DAILY)
         *
         * @required
         * @type "DAILY" | "WEEKLY" | "MONTHLY"
         * @example
         * ```ts
         * "DAILY"
         * ```
         */
        freq?: "DAILY" | "WEEKLY" | "MONTHLY";
        /**
         * the count of the recurring event (1)
         *
         * @type RecurringCountDTO
         * @example
         * ```ts
         *  1
         * ```
         */
        count?: RecurringCountDTO;
        /**
         * the booking option (skip)
         *
         * @type "skip" | "continue" | "book_next"
         * @example
         * ```ts
         * "skip"
         * ```
         */
        bookingOption?: "skip" | "continue" | "book_next";
        /**
         * the booking overlap default status (confirmed)
         *
         * @type "confirmed" | "new"
         * @example
         * ```ts
         * "confirmed"
         * ```
         */
        bookingOverlapDefaultStatus?: "confirmed" | "new";
    };
    /**
     * The calendar availability type configuration
     *
     * @memberof Calendars
     * @example
     * ```ts
     * const body: Calendars.AvailabilityDTO = {
     *  date: "2023-09-25T00:00:00.000Z",
     *  hours: {
     *   openHour: 9,
     *   openMinute: 0,
     *   closeHour: 17,
     *   closeMinute: 0
     *  },
     *  deleted: false
     * }
     * ```
     */
    export type AvailabilityDTO = {
        /**
         * the date of the availability (2023-09-25T00:00:00.000Z)
         *
         * @required
         * @type string
         * @example
         * ```ts
         * "2023-09-25T00:00:00.000Z"
         * ```
         */
        date: string;
        /**
         * the hours of the availability ({...})
         *
         * @required
         * @type HourDTO
         * @example
         * ```ts
         * const hours = {
         *  openHour: 9,
         *  openMinute: 0,
         *  closeHour: 17,
         *  closeMinute: 0
         * }
         * ```
         */
        hours: HourDTO;
        /**
         * the deleted status of the availability (false)
         *
         * @type boolean
         * @example
         * ```ts
         * false
         * ```
         */
        deleted?: boolean;
    };
    /**
     * The calendar look busy configuration
     *
     * @memberof Calendars
     * @example
     * ```ts
     * const body: Calendars.LookBusyConfigurationDTO = {
     *  enabled: true,
     *  LookBusyPercentage: 50
     * }
     * ```
     */
    export type LookBusyConfigurationDTO = {
        /**
         * the enabled status of the look busy configuration (true)
         *
         * @required
         * @type boolean
         * @example
         * ```ts
         * true
         * ```
         */
        enabled: boolean;
        /**
         * the look busy percentage (50)
         *
         * @required
         * @type number
         * @example
         * ```ts
         * 50
         * ```
         */
        LookBusyPercentage: number;
    };
    export type EventType = "RoundRobin_OptimizeForAvailability" | "RoundRobin_OptimizeForEqualDistribution";
    export type UserAssignedType = "round_robin" | "collective" | "class" | "service" | "personal";
    export type NonUserAssignedType = "event";
    /**
     * The calendar widget type configuration
     * Choose "default" for "neo" and "classic" for "classic" layout.
     *
     * @memberof Calendars
     * @example
     * ```ts
     * "classic"
     * ```
     */
    export type WidgetType = "default" | "classic";
    /**
     * The calendar type configuration
     * Choose "RedirectURL" for "RedirectURL" and "ThankYouMessage" for "ThankYouMessage" layout.
     * Defaults to "ThankYouMessage".
     *
     * @memberof Calendars
     * @example
     * ```ts
     * const body: Calendars.BaseDTO = {
     *  id: "ocQHyuzHvysMo5N5VsXc",
     *  name: "test calendar",
     *  locationId: "ocQHyuzHvysMo5N5VsXc",
     *  notifications: [{
     *   shouldSendToContact: true,
     *   shouldSendToGuest: true,
     *   shouldSendToUser: true,
     *   shouldSendToSelectedUsers: true,
     *   type: "email"
     *  }],
     *  isActive: true,
     *  groupId: "BqTwX8QFwXzpegMve9EQ",
     *  eventType: "RoundRobin_OptimizeForAvailability",
     *  description: "this is used for testing",
     *  slug: "test1",
     *  widgetSlug: "test1",
     *  widgetType: "classic",
     *  eventTitle: "{{contact.name}}",
     *  eventColor: "#039be5",
     *  slotDuration: 30,
     *  slotDurationUnit: "mins",
     *  slotInterval: 30,
     *  slotIntervalUnit: "mins",
     *  slotBuffer: 30,
     *  slotBufferUnit: "mins",
     *  preBuffer: 30,
     *  preBufferUnit: "mins",
     *  appoinmentPerSlot: 1,
     *  appoinmentPerDay: 1,
     *  allowBookingAfter: 1,
     *  allowBookingAfterUnit: "hours",
     *  allowBookingFor: 1,
     *  allowBookingForUnit: "days",
     *  openHours: [{
     *   daysOfTheWeek: [0, 1, 2, 4, 5],
     *   hours: {
     *     openHour: 9,
     *     openMinute: 0,
     *     closeHour: 17,
     *     closeMinute: 0
     *   }
     *  }],
     *  enableRecurring: false,
     *  recurring: {
     *   freq: "DAILY",
     *   count: 1,
     *   bookingOption: "skip",
     *   bookingOverlapDefaultStatus: "confirmed"
     *  },
     *  formId: "ocQHyuzHvysMo5N5VsXc",
     *  stickyContact: true,
     *  isLivePaymentMode: true,
     *  autoConfirm: true,
     *  shouldSendAlertEmailsToAssignedMember: true,
     *  alertEmail: "name@domain.com",
     *  googleInvitationEmails: false,
     *  allowReschedule: true,
     *  allowCancellation: true,
     *  shouldAssignContactToTeamMember: true,
     *  shouldSkipAssigningContactForExisting: true,
     *  notes: "Notes",
     *  pixelId: "Pixel Id",
     *  formSubmitType: "ThankYouMessage",
     *  formSubmitRedirectURL: "Form Submit Redirect URL",
     *  formSubmitThanksMessage: "Form Submit Thanks Message",
     *  availabilityType: 0,
     *  availabilities: [{
     *   date: "2023-09-25T00:00:00.000Z",
     *   hours: {
     *    openHour: 9,
     *    openMinute: 0,
     *    closeHour: 17,
     *    closeMinute: 0
     *   },
     *   deleted: false
     *  }],
     *  guestType: "count_only",
     *  consentLabel: "Consent Label",
     *  calendarCoverImage: "Calendar Cover Image",
     *  lookBusyConfig: {
     *   enabled: true,
     *   LookBusyPercentage: 50
     *  }
     * }
     */
    export type BaseDTO = {
        /**
         * the calendar id (ocQHyuzHvysMo5N5VsXc)
         *
         * @type string
         * @example
         * ```ts
         * "ocQHyuzHvysMo5N5VsXc"
         * ```
         */
        id: string;
        /** ;
    
        /**
         * the calendar name (test calendar)
         *
         * @required
         * @type string
         * @example
         * ```ts
         * "test calendar"
         * ```
         */
        name: string;
        /**
         * the location id (ocQHyuzHvysMo5N5VsXc)
         *
         * @required
         * @type string
         * @example
         * ```ts
         * "ocQHyuzHvysMo5N5VsXc"
         * ```
         */
        locationId: string;
        /**
         * the calendar notifications ([{...}])
         *
         * @type Notifications.DTO[]
         * @example
         * ```ts
         * [{
         *  shouldSendToContact: true,
         *  shouldSendToGuest: true,
         *  shouldSendToUser: true,
         *  shouldSendToSelectedUsers: true,
         *  type: "email"
         * }]
         * ```
         */
        notifications?: Notifications.DTO[];
        /**
         * should the created calendar be active or draft (true)
         *
         * @type boolean
         * @example
         * ```ts
         * false
         * ```
         */
        isActive?: boolean;
        /**
         * the group id (BqTwX8QFwXzpegMve9EQ)
         *
         * @type string
         * @example
         * ```ts
         * "BqTwX8QFwXzpegMve9EQ"
         * ```
         */
        groupId?: string;
        /**
         * the event type (RoundRobin_OptimizeForAvailability)
         *
         * @type EventType
         * @example
         * ```ts
         * "RoundRobin_OptimizeForAvailability"
         * ```
         */
        eventType?: EventType;
        /**
         * the description (this is used for testing)
         *
         * @type string
         * @example
         * ```ts
         * "this is used for testing"
         * ```
         */
        description?: string;
        /**
         * the slug (test1)
         *
         * @type string
         * @example
         * ```ts
         * "test1"
         * ```
         */
        slug?: string;
        /**
         * the widget slug (test1)
         *
         * @type string
         * @example
         * ```ts
         * "test1"
         * ```
         */
        widgetSlug?: string;
        /**
         * the widget type (classic)
         * Choose "default" for "neo" and "classic" for "classic" layout.
         *
         * @type WidgetType
         * @example
         * ```ts
         * "classic"
         * ```
         */
        widgetType?: WidgetType;
        /**
         * the event title ({{contact.name}})
         *
         * @type string
         * @example
         * ```ts
         * "{{contact.name}}"
         * ```
         */
        eventTitle?: string;
        /**
         * the event color (#039be5)
         *
         * @type string
         * @example
         * ```ts
         * "#039be5"
         * ```
         */
        eventColor?: string;
        /**
         * the slot duration (30)
         *
         * @type number
         * @example
         * ```ts
         * 30
         * ```
         */
        slotDuration?: number;
        /**
         * the slot duration unit (mins)
         *
         * @type "mins" | "hours"
         * @example
         * ```ts
         * "mins"
         * ```
         */
        slotDurationUnit?: "mins" | "hours";
        /**
         * the slot interval (30)
         *
         * @type number
         * @example
         * ```ts
         * 30
         * ```
         */
        slotInterval?: number;
        /**
         * the slot interval unit (mins)
         *
         * @type "mins" | "hours"
         * @example
         * ```ts
         * "mins"
         * ```
         */
        slotIntervalUnit?: "mins" | "hours";
        /**
         * the slot buffer (30)
         *
         * @type number
         * @example
         * ```ts
         * 30
         * ```
         */
        slotBuffer?: number;
        /**
         * the slot buffer unit (mins)
         *
         * @type "mins" | "hours"
         * @example
         * ```ts
         * "mins"
         * ```
         */
        slotBufferUnit?: "mins" | "hours";
        /**
         * the pre buffer (30)
         *
         * @type number
         * @example
         * ```ts
         * 30
         * ```
         */
        preBuffer?: number;
        /**
         * the pre buffer unit (mins)
         *
         * @type "mins" | "hours"
         * @example
         * ```ts
         * "mins"
         * ```
         */
        preBufferUnit?: "mins" | "hours";
        /**
         * the appoinment per slot (1)
         *
         * @type number
         * @example
         * ```ts
         * 1
         * ```
         */
        appoinmentPerSlot?: number;
        /**
         * the appoinment per day (1)
         *
         * @type number
         * @example
         * ```ts
         * 1
         * ```
         */
        appoinmentPerDay?: number;
        /**
         * the allow booking after (1)
         *
         * @type number
         * @example
         * ```ts
         * 1
         * ```
         */
        allowBookingAfter?: number;
        /**
         * the allow booking after unit (hours)
         *
         * @type "hours" | "days" | "weeks" | "months"
         * @example
         * ```ts
         * "hours"
         * ```
         */
        allowBookingAfterUnit?: "hours" | "days" | "weeks" | "months";
        /**
         * the allow booking for (1)
         *
         * @type number
         * @example
         * ```ts
         * 1
         * ```
         */
        allowBookingFor?: number;
        /**
         * the allow booking for unit (days)
         *
         * @type "days" | "weeks" | "months"
         * @example
         * ```ts
         * "days"
         * ```
         */
        allowBookingForUnit?: "days" | "weeks" | "months";
        /**
         * the open hours ([{...}])
         *
         * @type OpenHourDTO[]
         * @example
         * ```ts
         * [{
         *  daysOfTheWeek: [0, 1, 2, 4, 5],
         *  hours: {
         *    openHour: 9,
         *    openMinute: 0,
         *    closeHour: 17,
         *    closeMinute: 0
         *  }
         * }]
         * ```
         */
        openHours?: OpenHourDTO[];
        /**
         * the enable recurring (false)
         *
         * @type boolean
         * @example
         * ```ts
         * false
         * ```
         */
        enableRecurring?: boolean;
        /**
         * the recurring ({...})
         *
         * @type RecurringDTO
         * @example
         * ```ts
         * const recurring = {
         *  freq: "DAILY",
         *  count: 1,
         *  bookingOption: "skip",
         *  bookingOverlapDefaultStatus: "confirmed"
         * }
         * ```
         */
        recurring?: RecurringDTO;
        /**
         * the form id (ocQHyuzHvysMo5N5VsXc)
         *
         * @type string
         * @example
         * ```ts
         * "ocQHyuzHvysMo5N5VsXc"
         * ```
         */
        formId?: string;
        /**
         * the sticky contact (true)
         *
         * @type boolean
         * @example
         * ```ts
         * true
         * ```
         */
        stickyContact?: boolean;
        /**
         * the is live payment mode (true)
         *
         * @type boolean
         * @example
         * ```ts
         * true
         * ```
         */
        isLivePaymentMode?: boolean;
        /**
         * the auto confirm (true)
         *
         * @type boolean
         * @example
         * ```ts
         * true
         * ```
         */
        autoConfirm?: boolean;
        /**
         * the should send alert emails to assigned member (true)
         *
         * @type boolean
         * @example
         * ```ts
         * true
         * ```
         */
        shouldSendAlertEmailsToAssignedMember?: boolean;
        /**
         * the alert email
         *
         * @type string
         * @example
         * ```ts
         * "Alert Email"
         * ```
         */
        alertEmail?: string;
        /**
         * the google invitation emails (false)
         *
         * @type boolean
         * @example
         * ```ts
         * false
         * ```
         */
        googleInvitationEmails?: boolean;
        /**
         * the allow reschedule (true)
         *
         * @type boolean
         * @example
         * ```ts
         * true
         * ```
         */
        allowReschedule?: boolean;
        /**
         * the allow cancellation (true)
         *
         * @type boolean
         * @example
         * ```ts
         * true
         * ```
         */
        allowCancellation?: boolean;
        /**
         * the should assign contact to team member (true)
         *
         * @type boolean
         * @example
         * ```ts
         * true
         * ```
         */
        shouldAssignContactToTeamMember?: boolean;
        /**
         * the should skip assigning contact for existing (true)
         *
         * @type boolean
         * @example
         * ```ts
         * true
         * ```
         */
        shouldSkipAssigningContactForExisting?: boolean;
        /**
         * the notes (Notes)
         *
         * @type string
         * @example
         * ```ts
         * "Notes"
         * ```
         */
        notes?: string;
        /**
         * the pixel id (Pixel Id)
         *
         * @type string
         * @example
         * ```ts
         * "Pixel Id"
         * ```
         */
        pixelId?: string;
        /**
         * the form submit type (ThankYouMessage)
         * defaults to "ThankYouMessage"
         *
         * @type "RedirectURL" | "ThankYouMessage"
         * @example
         * ```ts
         * "ThankYouMessage"
         * ```
         */
        formSubmitType?: "RedirectURL" | "ThankYouMessage";
        /**
         * the form submit redirect url (Form Submit Redirect URL)
         *
         * @type string
         * @example
         * ```ts
         * "Form Submit Redirect URL"
         * ```
         */
        formSubmitRedirectURL?: string;
        /**
         * the form submit thanks message (Form Submit Thanks Message)
         *
         * @type string
         * @example
         * ```ts
         * "Form Submit Thanks Message"
         * ```
         */
        formSubmitThanksMessage?: string;
        /**
         * the availability type (0)
         *
         * @type 0 | 1
         * @example
         * ```ts
         * 0
         * ```
         */
        availabilityType?: 0 | 1;
        /**
         * the availabilities ([{...}])
         * this is only to set the custom availability. For standard availability, use the openHours property
         *
         * @type AvailabilityDTO[]
         * @example
         * ```ts
         * [{
         *  date: "2023-09-25T00:00:00.000Z",
         *  hours: {
         *   openHour: 9,
         *   openMinute: 0,
         *   closeHour: 17,
         *   closeMinute: 0
         *  },
         *  deleted: false
         * }]
         * ```
         */
        availabilities?: AvailabilityDTO[];
        /**
         * the guest type (count_only)
         *
         * @type "count_only" | "collect_detail"
         * @example
         * ```ts
         * "count_only"
         * ```
         */
        guestType?: "count_only" | "collect_detail";
        /**
         * the consent label (Consent Label)
         *
         * @type string
         * @example
         * ```ts
         * "Consent Label"
         * ```
         */
        consentLabel?: string;
        /**
         * the calendar cover image (Calendar Cover Image)
         *
         * @type string
         * @example
         * ```ts
         * "Calendar Cover Image"
         * ```
         */
        calendarCoverImage?: string;
        /**
         * the look busy configuration ({...})
         *
         * @type LookBusyConfigurationDTO
         * @example
         * ```ts
         * const lookBusyConfig = {
         *  enabled: true,
         *  LookBusyPercentage: 50
         * }
         * ```
         */
        lookBusyConfig?: LookBusyConfigurationDTO;
    };
    /**
     * The calendar user assigned type configuration
     *
     * @memberof Calendars
     * @example
     * ```ts
     * const body: Calendars.UserAssignedDTO = {
     *  id: "ocQHyuzHvysMo5N5VsXc",
     *  name: "test calendar",
     *  locationId: "ocQHyuzHvysMo5N5VsXc",
     *  notifications: [{
     *   shouldSendToContact: true,
     *   shouldSendToGuest: true,
     *   shouldSendToUser: true,
     *   shouldSendToSelectedUsers: true,
     *   type: "email"
     *  }],
     *  isActive: true,
     *  groupId: "BqTwX8QFwXzpegMve9EQ",
     *  eventType: "RoundRobin_OptimizeForAvailability",
     *  description: "this is used for testing",
     *  slug: "test1",
     *  widgetSlug: "test1",
     *  widgetType: "classic",
     *  eventTitle: "{{contact.name}}",
     *  eventColor: "#039be5",
     *  slotDuration: 30,
     *  slotDurationUnit: "mins",
     *  slotInterval: 30,
     *  slotIntervalUnit: "mins",
     *  slotBuffer: 30,
     *  slotBufferUnit: "mins",
     *  preBuffer: 30,
     *  preBufferUnit: "mins",
     *  appoinmentPerSlot: 1,
     *  appoinmentPerDay: 1,
     *  allowBookingAfter: 1,
     *  allowBookingAfterUnit: "hours",
     *  allowBookingFor: 1,
     *  allowBookingForUnit: "days",
     *  openHours: [{
     *   daysOfTheWeek: [0, 1, 2, 4, 5],
     *   hours: {
     *     openHour: 9,
     *     openMinute: 0,
     *     closeHour: 17,
     *     closeMinute: 0
     *   }
     *  }],
     *  enableRecurring: false,
     *  recurring: {
     *   freq: "DAILY",
     *   count: 1,
     *   bookingOption: "skip",
     *   bookingOverlapDefaultStatus: "confirmed"
     *  },
     *  formId: "ocQHyuzHvysMo5N5VsXc",
     *  stickyContact: true,
     *  isLivePaymentMode: true,
     *  autoConfirm: true,
     *  shouldSendAlertEmailsToAssignedMember: true,
     *  alertEmail: "name@domain.com",
     *  googleInvitationEmails: false,
     *  allowReschedule: true,
     *  allowCancellation: true,
     *  shouldAssignContactToTeamMember: true,
     *  shouldSkipAssigningContactForExisting: true,
     *  notes: "Notes",
     *  pixelId: "Pixel Id",
     *  formSubmitType: "ThankYouMessage",
     *  formSubmitRedirectURL: "Form Submit Redirect URL",
     *  formSubmitThanksMessage: "Form Submit Thanks Message",
     *  availabilityType: 0,
     *  availabilities: [{
     *   date: "2023-09-25T00:00:00.000Z",
     *   hours: {
     *    openHour: 9,
     *    openMinute: 0,
     *    closeHour: 17,
     *    closeMinute: 0
     *   },
     *   deleted: false
     *  }],
     *  guestType: "count_only",
     *  consentLabel: "Consent Label",
     *  calendarCoverImage: "Calendar Cover Image",
     *  lookBusyConfig: {
     *   enabled: true,
     *   LookBusyPercentage: 50
     *  },
     *  teamMembers: [{
     *    userId: "YlWd2wuCAZQzh2cH1fVZ",
     *    priority: 1,
     *    meetingLocationType: "zoom",
     *    meetingLocation: "https://meet.google.com/yqp-gogr-wve",
     *    isPrimary: true
     *  }],
     *  calendarType: "round_robin"
     * }
     * ```
     */
    export interface UserAssignedDTO extends BaseDTO {
        /**
         * the team members ([{...}])
         *
         * @required
         * @type TeamMembers.DTO[]
         * @example
         * ```ts
         * [{
         *  userId: "YlWd2wuCAZQzh2cH1fVZ",
         *  priority: 1,
         *  meetingLocationType: "zoom",
         *  meetingLocation: "https://meet.google.com/yqp-gogr-wve",
         *  isPrimary: true
         * }]
         * ```
         */
        teamMembers: TeamMembers.DTO[] /** Team Members ([{...}]) */;
        /**
         * the calendar type (round_robin)
         *
         * @required
         * @type UserAssignedType
         * @example
         * ```ts
         * "round_robin"
         * ```
         */
        calendarType: UserAssignedType /** Calendar Type (round_robin) */;
    }
    /**
     * The calendar non user assigned type configuration
     *
     * @memberof Calendars
     * @example
     * ```ts
     * const body: Calendars.NonUserAssignedDTO = {
     *  id: "ocQHyuzHvysMo5N5VsXc",
     *  name: "test calendar",
     *  locationId: "ocQHyuzHvysMo5N5VsXc",
     *  notifications: [{
     *   shouldSendToContact: true,
     *   shouldSendToGuest: true,
     *   shouldSendToUser: true,
     *   shouldSendToSelectedUsers: true,
     *   type: "email"
     *  }],
     *  isActive: true,
     *  groupId: "BqTwX8QFwXzpegMve9EQ",
     *  eventType: "RoundRobin_OptimizeForAvailability",
     *  description: "this is used for testing",
     *  slug: "test1",
     *  widgetSlug: "test1",
     *  widgetType: "classic",
     *  eventTitle: "{{contact.name}}",
     *  eventColor: "#039be5",
     *  slotDuration: 30,
     *  slotDurationUnit: "mins",
     *  slotInterval: 30,
     *  slotIntervalUnit: "mins",
     *  slotBuffer: 30,
     *  slotBufferUnit: "mins",
     *  preBuffer: 30,
     *  preBufferUnit: "mins",
     *  appoinmentPerSlot: 1,
     *  appoinmentPerDay: 1,
     *  allowBookingAfter: 1,
     *  allowBookingAfterUnit: "hours",
     *  allowBookingFor: 1,
     *  allowBookingForUnit: "days",
     *  openHours: [{
     *   daysOfTheWeek: [0, 1, 2, 4, 5],
     *   hours: {
     *     openHour: 9,
     *     openMinute: 0,
     *     closeHour: 17,
     *     closeMinute: 0
     *   }
     *  }],
     *  enableRecurring: false,
     *  recurring: {
     *   freq: "DAILY",
     *   count: 1,
     *   bookingOption: "skip",
     *   bookingOverlapDefaultStatus: "confirmed"
     *  },
     *  formId: "ocQHyuzHvysMo5N5VsXc",
     *  stickyContact: true,
     *  isLivePaymentMode: true,
     *  autoConfirm: true,
     *  shouldSendAlertEmailsToAssignedMember: true,
     *  alertEmail: "name@domain.com",
     *  googleInvitationEmails: false,
     *  allowReschedule: true,
     *  allowCancellation: true,
     *  shouldAssignContactToTeamMember: true,
     *  shouldSkipAssigningContactForExisting: true,
     *  notes: "Notes",
     *  pixelId: "Pixel Id",
     *  formSubmitType: "ThankYouMessage",
     *  formSubmitRedirectURL: "Form Submit Redirect URL",
     *  formSubmitThanksMessage: "Form Submit Thanks Message",
     *  availabilityType: 0,
     *  availabilities: [{
     *   date: "2023-09-25T00:00:00.000Z",
     *   hours: {
     *    openHour: 9,
     *    openMinute: 0,
     *    closeHour: 17,
     *    closeMinute: 0
     *   },
     *   deleted: false
     *  }],
     *  guestType: "count_only",
     *  consentLabel: "Consent Label",
     *  calendarCoverImage: "Calendar Cover Image",
     *  lookBusyConfig: {
     *   enabled: true,
     *   LookBusyPercentage: 50
     *  },
     *  calendarType: "event",
     *  meetingLocation: "https://meet.google.com/yqp-gogr-wve"
     * }
     * ```
     */
    export interface NonUserAssignedDTO extends BaseDTO {
        /**
         * the calendar type (event)
         *
         * @required
         * @type NonUserAssignedType
         * @example
         * ```ts
         * "event"
         * ```
         */
        calendarType: NonUserAssignedType;
        /**
         * the meeting location (https://meet.google.com/yqp-gogr-wve)
         *
         * @required
         * @type string
         * @example
         * ```ts
         * "https://meet.google.com/yqp-gogr-wve"
         * ```
         */
        meetingLocation: string;
    }
    /**
     * The calendar get successful response DTO
     *
     * @memberof Calendars
     * @example
     * ```ts
     * const response: Calendars.GetSuccessfulResponseDTO = {
     *  id: "ocQHyuzHvysMo5N5VsXc",
     *  name: "test calendar",
     *  locationId: "ocQHyuzHvysMo5N5VsXc",
     *  notifications: [{
     *   shouldSendToContact: true,
     *   shouldSendToGuest: true,
     *   shouldSendToUser: true,
     *   shouldSendToSelectedUsers: true,
     *   type: "email"
     *  }],
     *  isActive: true,
     *  groupId: "BqTwX8QFwXzpegMve9EQ",
     *  eventType: "RoundRobin_OptimizeForAvailability",
     *  description: "this is used for testing",
     *  slug: "test1",
     *  widgetSlug: "test1",
     *  widgetType: "classic",
     *  eventTitle: "{{contact.name}}",
     *  eventColor: "#039be5",
     *  slotDuration: 30,
     *  slotDurationUnit: "mins",
     *  slotInterval: 30,
     *  slotIntervalUnit: "mins",
     *  slotBuffer: 30,
     *  slotBufferUnit: "mins",
     *  preBuffer: 30,
     *  preBufferUnit: "mins",
     *  appoinmentPerSlot: 1,
     *  appoinmentPerDay: 1,
     *  allowBookingAfter: 1,
     *  allowBookingAfterUnit: "hours",
     *  allowBookingFor: 1,
     *  allowBookingForUnit: "days",
     *  openHours: [{
     *   daysOfTheWeek: [0, 1, 2, 4, 5],
     *   hours: {
     *     openHour: 9,
     *     openMinute: 0,
     *     closeHour: 17,
     *     closeMinute: 0
     *   }
     *  }],
     *  enableRecurring: false,
     *  recurring: {
     *   freq: "DAILY",
     *   count: 1,
     *   bookingOption: "skip",
     *   bookingOverlapDefaultStatus: "confirmed"
     *  },
     *  formId: "ocQHyuzHvysMo5N5VsXc",
     *  stickyContact: true,
     *  isLivePaymentMode: true,
     *  autoConfirm: true,
     *  shouldSendAlertEmailsToAssignedMember: true,
     *  alertEmail: "name@domain.com",
     *  googleInvitationEmails: false,
     *  allowReschedule: true,
     *  allowCancellation: true,
     *  shouldAssignContactToTeamMember: true,
     *  shouldSkipAssigningContactForExisting: true,
     *  notes: "Notes",
     *  pixelId: "Pixel Id",
     *  formSubmitType: "ThankYouMessage",
     *  formSubmitRedirectURL: "Form Submit Redirect URL",
     *  formSubmitThanksMessage: "Form Submit Thanks Message",
     *  availabilityType: 0,
     *  availabilities: [{
     *   date: "2023-09-25T00:00:00.000Z",
     *   hours: {
     *    openHour: 9,
     *    openMinute: 0,
     *    closeHour: 17,
     *    closeMinute: 0
     *   },
     *   deleted: false
     *  }],
     *  guestType: "count_only",
     *  consentLabel: "Consent Label",
     *  calendarCoverImage: "Calendar Cover Image",
     *  lookBusyConfig: {
     *   enabled: true,
     *   LookBusyPercentage: 50
     *  }
     * }
     * ```
     */
    export type DTO = UserAssignedDTO | NonUserAssignedDTO;
    /**
     * The calendar get successful response DTO
     *
     * @memberof Calendars
     * @example
     * ```ts
     * const response: Calendars.GetSuccessfulResponseDTO = {
     *  calendars: [{
     *    id: "ocQHyuzHvysMo5N5VsXc",
     *    name: "test calendar",
     *    locationId: "ocQHyuzHvysMo5N5VsXc",
     *    notifications: [{
     *     shouldSendToContact: true,
     *     shouldSendToGuest: true,
     *     shouldSendToUser: true,
     *     shouldSendToSelectedUsers: true,
     *     type: "email"
     *    }],
     *    isActive: true,
     *    groupId: "BqTwX8QFwXzpegMve9EQ",
     *    eventType: "RoundRobin_OptimizeForAvailability",
     *    description: "this is used for testing",
     *    slug: "test1",
     *    widgetSlug: "test1",
     *    widgetType: "classic",
     *    eventTitle: "{{contact.name}}",
     *    eventColor: "#039be5",
     *    slotDuration: 30,
     *    slotDurationUnit: "mins",
     *    slotInterval: 30,
     *    slotIntervalUnit: "mins",
     *    slotBuffer: 30,
     *    slotBufferUnit: "mins",
     *    preBuffer: 30,
     *    preBufferUnit: "mins",
     *    appoinmentPerSlot: 1,
     *    appoinmentPerDay: 1,
     *    allowBookingAfter: 1,
     *    allowBookingAfterUnit: "hours",
     *    allowBookingFor: 1,
     *    allowBookingForUnit: "days",
     *    openHours: [{
     *     daysOfTheWeek: [0, 1, 2, 4, 5],
     *     hours: {
     *       openHour: 9,
     *       openMinute: 0,
     *       closeHour: 17,
     *       closeMinute: 0
     *     }
     *    }],
     *    enableRecurring: false,
     *    recurring: {
     *     freq: "DAILY",
     *     count: 1,
     *     bookingOption: "skip",
     *     bookingOverlapDefaultStatus: "confirmed"
     *    },
     *    formId: "ocQHyuzHvysMo5N5VsXc",
     *    stickyContact: true,
     *    isLivePaymentMode: true,
     *    autoConfirm: true,
     *    shouldSendAlertEmailsToAssignedMember: true,
     *    alertEmail: "name@domain.com",
     *    googleInvitationEmails: false,
     *    allowReschedule: true,
     *    allowCancellation: true,
     *    shouldAssignContactToTeamMember: true,
     *    shouldSkipAssigningContactForExisting: true,
     *    notes: "Notes",
     *    pixelId: "Pixel Id",
     *    formSubmitType: "ThankYouMessage",
     *    formSubmitRedirectURL: "Form Submit Redirect URL",
     *    formSubmitThanksMessage: "Form Submit Thanks Message",
     *    availabilityType: 0,
     *    availabilities: [{
     *     date: "2023-09-25T00:00:00.000Z",
     *     hours: {
     *      openHour: 9,
     *      openMinute: 0,
     *      closeHour: 17,
     *      closeMinute: 0
     *     },
     *     deleted: false
     *    }],
     *    guestType: "count_only",
     *    consentLabel: "Consent Label",
     *    calendarCoverImage: "Calendar Cover Image",
     *    lookBusyConfig: {
     *     enabled: true,
     *     LookBusyPercentage: 50
     *    }
     *  }]
     * }
     * ```
     */
    export type GetSuccessfulResponseDTO = {
        /**
         * the array of calendars ([{...}])
         *
         * @type DTO[]
         * @example
         * ```ts
         * [{
         *  id: "ocQHyuzHvysMo5N5VsXc",
         *  name: "test calendar",
         *  locationId: "ocQHyuzHvysMo5N5VsXc",
         *  notifications: [{
         *   shouldSendToContact: true,
         *   shouldSendToGuest: true,
         *   shouldSendToUser: true,
         *   shouldSendToSelectedUsers: true,
         *   type: "email"
         *  }],
         *  isActive: true,
         *  groupId: "BqTwX8QFwXzpegMve9EQ",
         *  eventType: "RoundRobin_OptimizeForAvailability",
         *  description: "this is used for testing",
         *  slug: "test1",
         *  widgetSlug: "test1",
         *  widgetType: "classic",
         *  eventTitle: "{{contact.name}}",
         *  eventColor: "#039be5",
         *  slotDuration: 30,
         *  slotDurationUnit: "mins",
         *  slotInterval: 30,
         *  slotIntervalUnit: "mins",
         *  slotBuffer: 30,
         *  slotBufferUnit: "mins",
         *  preBuffer: 30,
         *  preBufferUnit: "mins",
         *  appoinmentPerSlot: 1,
         *  appoinmentPerDay: 1,
         *  allowBookingAfter: 1,
         *  allowBookingAfterUnit: "hours",
         *  allowBookingFor: 1,
         *  allowBookingForUnit: "days",
         *  openHours: [{
         *   daysOfTheWeek: [0, 1, 2, 4, 5],
         *   hours: {
         *     openHour: 9,
         *     openMinute: 0,
         *     closeHour: 17,
         *     closeMinute: 0
         *   }
         *  }],
         *  enableRecurring: false,
         *  recurring: {
         *   freq: "DAILY",
         *   count: 1,
         *   bookingOption: "skip",
         *   bookingOverlapDefaultStatus: "confirmed"
         *  },
         *  formId: "ocQHyuzHvysMo5N5VsXc",
         *  stickyContact: true,
         *  isLivePaymentMode: true,
         *  autoConfirm: true,
         *  shouldSendAlertEmailsToAssignedMember: true,
         *  alertEmail: "name@domain.com",
         *  googleInvitationEmails: false,
         *  allowReschedule: true,
         *  allowCancellation: true,
         *  shouldAssignContactToTeamMember: true,
         *  shouldSkipAssigningContactForExisting: true,
         *  notes: "Notes",
         *  pixelId: "Pixel Id",
         *  formSubmitType: "ThankYouMessage",
         *  formSubmitRedirectURL: "Form Submit Redirect URL",
         *  formSubmitThanksMessage: "Form Submit Thanks Message",
         *  availabilityType: 0,
         *  availabilities: [{
         *   date: "2023-09-25T00:00:00.000Z",
         *   hours: {
         *    openHour: 9,
         *    openMinute: 0,
         *    closeHour: 17,
         *    closeMinute: 0
         *   },
         *   deleted: false
         *  }],
         *  guestType: "count_only",
         *  consentLabel: "Consent Label",
         *  calendarCoverImage: "Calendar Cover Image",
         *  lookBusyConfig: {
         *   enabled: true,
         *   LookBusyPercentage: 50
         *  }
         * }]
         * ```
         */
        calendars: DTO[] /** the array of calendars ([{...}]) */;
    };
    /**
     * The calendar create/update type configuration
     *
     * @memberof Calendars
     * @example
     * ```ts
     * const body: Calendars.BaseCreateUpdateDTO = {
     *  name: "test calendar",
     *  locationId: "ocQHyuzHvysMo5N5VsXc",
     *  notifications: [{
     *    shouldSendToContact: true,
     *    shouldSendToGuest: true,
     *    shouldSendToUser: true,
     *    shouldSendToSelectedUsers: true,
     *    type: "email"
     *  }],
     *  isActive: true,
     *  groupId: "BqTwX8QFwXzpegMve9EQ",
     *  eventType: "RoundRobin_OptimizeForAvailability",
     *  description: "this is used for testing",
     *  slug: "test1",
     *  widgetSlug: "test1",
     *  widgetType: "classic",
     *  eventTitle: "{{contact.name}}",
     *  eventColor: "#039be5",
     *  slotDuration: 30,
     *  slotDurationUnit: "mins",
     *  slotInterval: 30,
     *  slotIntervalUnit: "mins",
     *  slotBuffer: 30,
     *  slotBufferUnit: "mins",
     *  preBuffer: 30,
     *  preBufferUnit: "mins",
     *  appoinmentPerSlot: 1,
     *  appoinmentPerDay: 1,
     *  allowBookingAfter: 1,
     *  allowBookingAfterUnit: "hours",
     *  allowBookingFor: 1,
     *  allowBookingForUnit: "days",
     *  openHours: [{
     *    daysOfTheWeek: [0, 1, 2, 4, 5],
     *    hours: {
     *      openHour: 9,
     *      openMinute: 0,
     *      closeHour: 17,
     *      closeMinute: 0
     *    }
     *  }],
     *  enableRecurring: false,
     *  recurring: {
     *    freq: "DAILY",
     *    count: 1,
     *    bookingOption: "skip",
     *    bookingOverlapDefaultStatus: "confirmed"
     *  },
     *  formId: "ocQHyuzHvysMo5N5VsXc",
     *  stickyContact: true,
     *  isLivePaymentMode: true,
     *  autoConfirm: true,
     *  shouldSendAlertEmailsToAssignedMember: true,
     *  alertEmail: "name@domain.com",
     *  googleInvitationEmails: false,
     *  allowReschedule: true,
     *  allowCancellation: true,
     *  shouldAssignContactToTeamMember: true,
     *  shouldSkipAssigningContactForExisting: true,
     *  notes: "Notes",
     *  pixelId: "Pixel Id",
     *  formSubmitType: "ThankYouMessage",
     *  formSubmitRedirectURL: "https://www.google.com",
     *  formSubmitThanksMessage: "Form Submit Thanks Message",
     *  availabilityType: 0,
     *  availabilities: [{
     *    date: "2023-09-25T00:00:00.000Z",
     *    hours: {
     *      openHour: 9,
     *      openMinute: 0,
     *      closeHour: 17,
     *      closeMinute: 0
     *    },
     *    deleted: false
     *  }],
     *  guestType: "count_only",
     *  consentLabel: "Consent Label",
     *  calendarCoverImage: "Calendar Cover Image",
     *  lookBusyConfig: {
     *   enabled: true,
     *   LookBusyPercentage: 50
     *  }
     * }
     * ```
     */
    export type BaseCreateUpdateDTO = {
        /**
         * the calendar name (test calendar)
         *
         * @required
         * @type string
         * @example
         * ```ts
         * "test calendar"
         * ```
         */
        name: string;
        /** ;
    
        /**
         * the location id (ocQHyuzHvysMo5N5VsXc)
         *
         * @required
         * @type string
         * @example
         * ```ts
         * "ocQHyuzHvysMo5N5VsXc"
         * ```
         */
        locationId: string;
        /**
         * the calendar notifications ([{...}])
         *
         * @type Notifications.DTO[]
         * @example
         * ```ts
         * [{
         *  shouldSendToContact: true,
         *  shouldSendToGuest: true,
         *  shouldSendToUser: true,
         *  shouldSendToSelectedUsers: true,
         *  type: "email"
         * }]
         * ```
         */
        notifications?: Notifications.DTO[];
        /**
         * should the created calendar be active or draft (true)
         *
         * @type boolean
         * @example
         * ```ts
         * false
         * ```
         */
        isActive?: boolean;
        /**
         * the group id (BqTwX8QFwXzpegMve9EQ)
         *
         * @type string
         * @example
         * ```ts
         * "BqTwX8QFwXzpegMve9EQ"
         * ```
         */
        groupId?: string;
        /**
         * the event type (RoundRobin_OptimizeForAvailability)
         *
         * @type EventType
         * @example
         * ```ts
         * "RoundRobin_OptimizeForAvailability"
         * ```
         */
        eventType?: EventType;
        /**
         * the description (this is used for testing)
         *
         * @type string
         * @example
         * ```ts
         * "this is used for testing"
         * ```
         */
        description?: string;
        /**
         * the slug (test1)
         *
         * @type string
         * @example
         * ```ts
         * "test1"
         * ```
         */
        slug?: string;
        /**
         * the widget slug (test1)
         *
         * @type string
         * @example
         * ```ts
         * "test1"
         * ```
         */
        widgetSlug?: string;
        /**
         * the widget type (classic)
         * Choose "default" for "neo" and "classic" for "classic" layout.
         *
         * @type WidgetType
         * @example
         * ```ts
         * "classic"
         * ```
         */
        widgetType?: WidgetType;
        /**
         * the event title ({{contact.name}})
         *
         * @type string
         * @example
         * ```ts
         * "{{contact.name}}"
         * ```
         */
        eventTitle?: string;
        /**
         * the event color (#039be5)
         *
         * @type string
         * @example
         * ```ts
         * "#039be5"
         * ```
         */
        eventColor?: string;
        /**
         * the slot duration (30)
         *
         * @type number
         * @example
         * ```ts
         * 30
         * ```
         */
        slotDuration?: number;
        /**
         * the slot duration unit (mins)
         *
         * @type "mins" | "hours"
         * @example
         * ```ts
         * "mins"
         * ```
         */
        slotDurationUnit?: "mins" | "hours";
        /**
         * the slot interval (30)
         *
         * @type number
         * @example
         * ```ts
         * 30
         * ```
         */
        slotInterval?: number;
        /**
         * the slot interval unit (mins)
         *
         * @type "mins" | "hours"
         * @example
         * ```ts
         * "mins"
         * ```
         */
        slotIntervalUnit?: "mins" | "hours";
        /**
         * the slot buffer (30)
         *
         * @type number
         * @example
         * ```ts
         * 30
         * ```
         */
        slotBuffer?: number;
        /**
         * the slot buffer unit (mins)
         *
         * @type "mins" | "hours"
         * @example
         * ```ts
         * "mins"
         * ```
         */
        slotBufferUnit?: "mins" | "hours";
        /**
         * the pre buffer (30)
         *
         * @type number
         * @example
         * ```ts
         * 30
         * ```
         */
        preBuffer?: number;
        /**
         * the pre buffer unit (mins)
         *
         * @type "mins" | "hours"
         * @example
         * ```ts
         * "mins"
         * ```
         */
        preBufferUnit?: "mins" | "hours";
        /**
         * the appoinment per slot (1)
         *
         * @type number
         * @example
         * ```ts
         * 1
         * ```
         */
        appoinmentPerSlot?: number;
        /**
         * the appoinment per day (1)
         *
         * @type number
         * @example
         * ```ts
         * 1
         * ```
         */
        appoinmentPerDay?: number;
        /**
         * the allow booking after (1)
         *
         * @type number
         * @example
         * ```ts
         * 1
         * ```
         */
        allowBookingAfter?: number;
        /**
         * the allow booking after unit (hours)
         *
         * @type "hours" | "days" | "weeks" | "months"
         * @example
         * ```ts
         * "hours"
         * ```
         */
        allowBookingAfterUnit?: "hours" | "days" | "weeks" | "months";
        /**
         * the allow booking for (1)
         *
         * @type number
         * @example
         * ```ts
         * 1
         * ```
         */
        allowBookingFor?: number;
        /**
         * the allow booking for unit (days)
         *
         * @type "days" | "weeks" | "months"
         * @example
         * ```ts
         * "days"
         * ```
         */
        allowBookingForUnit?: "days" | "weeks" | "months";
        /**
         * the open hours ([{...}])
         *
         * @type OpenHourDTO[]
         * @example
         * ```ts
         * [{
         *  daysOfTheWeek: [0, 1, 2, 4, 5],
         *  hours: {
         *   openHour: 9,
         *   openMinute: 0,
         *   closeHour: 17,
         *   closeMinute: 0
         *  }
         * }]
         * ```
         */
        openHours?: OpenHourDTO[];
        /**
         * the enable recurring (false)
         *
         * @type boolean
         * @example
         * ```ts
         * false
         * ```
         */
        enableRecurring?: boolean;
        /**
         * the recurring ({...})
         *
         * @type RecurringDTO
         * @example
         * ```ts
         * const recurring = {
         *  freq: "DAILY",
         *  count: 1,
         *  bookingOption: "skip",
         *  bookingOverlapDefaultStatus: "confirmed"
         * }
         * ```
         */
        recurring?: RecurringDTO;
        /**
         * the form id (ocQHyuzHvysMo5N5VsXc)
         *
         * @type string
         * @example
         * ```ts
         * "ocQHyuzHvysMo5N5VsXc"
         * ```
         */
        formId?: string;
        /**
         * the sticky contact (true)
         *
         * @type boolean
         * @example
         * ```ts
         * true
         * ```
         */
        stickyContact?: boolean;
        /**
         * the is live payment mode (true)
         *
         * @type boolean
         * @example
         * ```ts
         * true
         * ```
         */
        isLivePaymentMode?: boolean;
        /**
         * the auto confirm (true)
         *
         * @type boolean
         * @example
         * ```ts
         * true
         * ```
         */
        autoConfirm?: boolean;
        /**
         * the should send alert emails to assigned member (true)
         *
         * @type boolean
         * @example
         * ```ts
         * true
         * ```
         */
        shouldSendAlertEmailsToAssignedMember?: boolean;
        /**
         * the alert email
         *
         * @type string
         * @example
         * ```ts
         * "Alert Email"
         * ```
         */
        alertEmail?: string;
        /**
         * the google invitation emails (false)
         *
         * @type boolean
         * @example
         * ```ts
         * false
         * ```
         */
        googleInvitationEmails?: boolean;
        /**
         * the allow reschedule (true)
         *
         * @type boolean
         * @example
         * ```ts
         * true
         * ```
         */
        allowReschedule?: boolean;
        /**
         * the allow cancellation (true)
         *
         * @type boolean
         * @example
         * ```ts
         * true
         * ```
         */
        allowCancellation?: boolean;
        /**
         * the should assign contact to team member (true)
         *
         * @type boolean
         * @example
         * ```ts
         * true
         * ```
         */
        shouldAssignContactToTeamMember?: boolean;
        /**
         * the should skip assigning contact for existing (true)
         *
         * @type boolean
         * @example
         * ```ts
         * true
         * ```
         */
        shouldSkipAssigningContactForExisting?: boolean;
        /**
         * the notes (Notes)
         *
         * @type string
         * @example
         * ```ts
         * "Notes"
         * ```
         */
        notes?: string;
        /**
         * the pixel id (Pixel Id)
         *
         * @type string
         * @example
         * ```ts
         * "Pixel Id"
         * ```
         */
        pixelId?: string;
        /**
         * the form submit type (ThankYouMessage)
         * defaults to "ThankYouMessage"
         *
         * @type "RedirectURL" | "ThankYouMessage"
         * @example
         * ```ts
         * "ThankYouMessage"
         * ```
         */
        formSubmitType?: "RedirectURL" | "ThankYouMessage";
        /**
         * the form submit redirect url (Form Submit Redirect URL)
         *
         * @type string
         * @example
         * ```ts
         * "https://www.google.com"
         * ```
         */
        formSubmitRedirectURL?: string;
        /**
         * the form submit thanks message (Form Submit Thanks Message)
         *
         * @type string
         * @example
         * ```ts
         * "Form Submit Thanks Message"
         * ```
         */
        formSubmitThanksMessage?: string;
        /**
         * the availability type (0)
         *
         * @type 0 | 1
         * @example
         * ```ts
         * 0
         * ```
         */
        availabilityType?: 0 | 1;
        /**
         * the availabilities ([{...}])
         * this is only to set the custom availability.
         * For standard availability, use the openHours property
         *
         * @type AvailabilityDTO[]
         * @example
         * ```ts
         * [{
         *  date: "2023-09-25T00:00:00.000Z",
         *  hours: {
         *   openHour: 9,
         *   openMinute: 0,
         *   closeHour: 17,
         *   closeMinute: 0
         *  },
         *  deleted: false
         * }]
         * ```
         */
        availabilities?: AvailabilityDTO[];
        /**
         * the guest type (count_only)
         *
         * @type "count_only" | "collect_detail"
         * @example
         * ```ts
         * "count_only"
         * ```
         */
        guestType?: "count_only" | "collect_detail";
        /**
         * the consent label (Consent Label)
         *
         * @type string
         * @example
         * ```ts
         * "Consent Label"
         * ```
         */
        consentLabel?: string;
        /**
         * the calendar cover image (Calendar Cover Image)
         *
         * @type string
         * @example
         * ```ts
         * "Calendar Cover Image"
         * ```
         */
        calendarCoverImage?: string;
        /**
         * the look busy configuration ({...})
         *
         * @type LookBusyConfigurationDTO
         * @example
         * ```ts
         * const lookBusyConfig = {
         *  enabled: true,
         *  LookBusyPercentage: 50
         * }
         * ```
         */
        lookBusyConfig?: LookBusyConfigurationDTO;
    };
    /**
     * The calendar create user assigned type configuration
     *
     * @memberof Calendars
     * @example
     * ```ts
     * const body: Calendars.CreateUserAssignedDTO = {
     *  id: "ocQHyuzHvysMo5N5VsXc",
     *  name: "test calendar",
     *  locationId: "ocQHyuzHvysMo5N5VsXc",
     *  notifications: [{
     *   shouldSendToContact: true,
     *   shouldSendToGuest: true,
     *   shouldSendToUser: true,
     *   shouldSendToSelectedUsers: true,
     *   type: "email"
     *  }],
     *  isActive: true,
     *  groupId: "BqTwX8QFwXzpegMve9EQ",
     *  eventType: "RoundRobin_OptimizeForAvailability",
     *  description: "this is used for testing",
     *  slug: "test1",
     *  widgetSlug: "test1",
     *  widgetType: "classic",
     *  eventTitle: "{{contact.name}}",
     *  eventColor: "#039be5",
     *  slotDuration: 30,
     *  slotDurationUnit: "mins",
     *  slotInterval: 30,
     *  slotIntervalUnit: "mins",
     *  slotBuffer: 30,
     *  slotBufferUnit: "mins",
     *  preBuffer: 30,
     *  preBufferUnit: "mins",
     *  appoinmentPerSlot: 1,
     *  appoinmentPerDay: 1,
     *  allowBookingAfter: 1,
     *  allowBookingAfterUnit: "hours",
     *  allowBookingFor: 1,
     *  allowBookingForUnit: "days",
     *  openHours: [{
     *   daysOfTheWeek: [0, 1, 2, 4, 5],
     *   hours: {
     *     openHour: 9,
     *     openMinute: 0,
     *     closeHour: 17,
     *     closeMinute: 0
     *   }
     *  }],
     *  enableRecurring: false,
     *  recurring: {
     *   freq: "DAILY",
     *   count: 1,
     *   bookingOption: "skip",
     *   bookingOverlapDefaultStatus: "confirmed"
     *  },
     *  formId: "ocQHyuzHvysMo5N5VsXc",
     *  stickyContact: true,
     *  isLivePaymentMode: true,
     *  autoConfirm: true,
     *  shouldSendAlertEmailsToAssignedMember: true,
     *  alertEmail: "name@domain.com",
     *  googleInvitationEmails: false,
     *  allowReschedule: true,
     *  allowCancellation: true,
     *  shouldAssignContactToTeamMember: true,
     *  shouldSkipAssigningContactForExisting: true,
     *  notes: "Notes",
     *  pixelId: "Pixel Id",
     *  formSubmitType: "ThankYouMessage",
     *  formSubmitRedirectURL: "Form Submit Redirect URL",
     *  formSubmitThanksMessage: "Form Submit Thanks Message",
     *  availabilityType: 0,
     *  availabilities: [{
     *   date: "2023-09-25T00:00:00.000Z",
     *   hours: {
     *    openHour: 9,
     *    openMinute: 0,
     *    closeHour: 17,
     *    closeMinute: 0
     *   },
     *   deleted: false
     *  }],
     *  guestType: "count_only",
     *  consentLabel: "Consent Label",
     *  calendarCoverImage: "Calendar Cover Image",
     *  lookBusyConfig: {
     *   enabled: true,
     *   LookBusyPercentage: 50
     *  },
     *  teamMembers: [{
     *    userId: "YlWd2wuCAZQzh2cH1fVZ",
     *    priority: 1,
     *    meetingLocationType: "zoom",
     *    meetingLocation: "https://meet.google.com/yqp-gogr-wve",
     *    isPrimary: true
     *  }],
     *  calendarType: "round_robin"
     * }
     * ```
     */
    export interface CreateUserAssignedDTO extends BaseDTO {
        /**
         * the team members ([{...}])
         *
         * @required
         * @type TeamMembers.DTO[]
         * @example
         * ```ts
         * [{
         *  userId: "YlWd2wuCAZQzh2cH1fVZ",
         *  priority: 1,
         *  meetingLocationType: "zoom",
         *  meetingLocation: "https://meet.google.com/yqp-gogr-wve",
         *  isPrimary: true
         * }]
         * ```
         */
        teamMembers: TeamMembers.DTO[];
        /**
         * the calendar type (round_robin)
         *
         * @required
         * @type UserAssignedType
         * @example
         * ```ts
         * "round_robin"
         * ```
         */
        calendarType: UserAssignedType;
    }
    /**
     * The calendar create non user assigned type configuration
     *
     * @memberof Calendars
     * @example
     * ```ts
     * const body: Calendars.CreateNonUserAssignedDTO = {
     *  id: "ocQHyuzHvysMo5N5VsXc",
     *  name: "test calendar",
     *  locationId: "ocQHyuzHvysMo5N5VsXc",
     *  notifications: [{
     *   shouldSendToContact: true,
     *   shouldSendToGuest: true,
     *   shouldSendToUser: true,
     *   shouldSendToSelectedUsers: true,
     *   type: "email"
     *  }],
     *  isActive: true,
     *  groupId: "BqTwX8QFwXzpegMve9EQ",
     *  eventType: "RoundRobin_OptimizeForAvailability",
     *  description: "this is used for testing",
     *  slug: "test1",
     *  widgetSlug: "test1",
     *  widgetType: "classic",
     *  eventTitle: "{{contact.name}}",
     *  eventColor: "#039be5",
     *  slotDuration: 30,
     *  slotDurationUnit: "mins",
     *  slotInterval: 30,
     *  slotIntervalUnit: "mins",
     *  slotBuffer: 30,
     *  slotBufferUnit: "mins",
     *  preBuffer: 30,
     *  preBufferUnit: "mins",
     *  appoinmentPerSlot: 1,
     *  appoinmentPerDay: 1,
     *  allowBookingAfter: 1,
     *  allowBookingAfterUnit: "hours",
     *  allowBookingFor: 1,
     *  allowBookingForUnit: "days",
     *  openHours: [{
     *   daysOfTheWeek: [0, 1, 2, 4, 5],
     *   hours: {
     *     openHour: 9,
     *     openMinute: 0,
     *     closeHour: 17,
     *     closeMinute: 0
     *   }
     *  }],
     *  enableRecurring: false,
     *  recurring: {
     *   freq: "DAILY",
     *   count: 1,
     *   bookingOption: "skip",
     *   bookingOverlapDefaultStatus: "confirmed"
     *  },
     *  formId: "ocQHyuzHvysMo5N5VsXc",
     *  stickyContact: true,
     *  isLivePaymentMode: true,
     *  autoConfirm: true,
     *  shouldSendAlertEmailsToAssignedMember: true,
     *  alertEmail: "name@domain.com",
     *  googleInvitationEmails: false,
     *  allowReschedule: true,
     *  allowCancellation: true,
     *  shouldAssignContactToTeamMember: true,
     *  shouldSkipAssigningContactForExisting: true,
     *  notes: "Notes",
     *  pixelId: "Pixel Id",
     *  formSubmitType: "ThankYouMessage",
     *  formSubmitRedirectURL: "Form Submit Redirect URL",
     *  formSubmitThanksMessage: "Form Submit Thanks Message",
     *  availabilityType: 0,
     *  availabilities: [{
     *   date: "2023-09-25T00:00:00.000Z",
     *   hours: {
     *    openHour: 9,
     *    openMinute: 0,
     *    closeHour: 17,
     *    closeMinute: 0
     *   },
     *   deleted: false
     *  }],
     *  guestType: "count_only",
     *  consentLabel: "Consent Label",
     *  calendarCoverImage: "Calendar Cover Image",
     *  lookBusyConfig: {
     *   enabled: true,
     *   LookBusyPercentage: 50
     *  },
     *  calendarType: "event",
     *  meetingLocation: "https://meet.google.com/yqp-gogr-wve"
     * }
     * ```
     */
    export interface CreateNonUserAssignedDTO extends BaseDTO {
        /**
         * the calendar type (event)
         *
         * @required
         * @type NonUserAssignedType
         * @example
         * ```ts
         * "event"
         * ```
         */
        calendarType: NonUserAssignedType;
        /**
         * the meeting location (https://meet.google.com/yqp-gogr-wve)
         *
         * @required
         * @type string
         * @example
         * ```ts
         * "https://meet.google.com/yqp-gogr-wve"
         * ```
         */
        meetingLocation: string;
    }
    /**
     * The calendar create type configuration
     *
     * @memberof Calendars
     * @example
     * ```ts
     * const body: Calendars.CreateDTO = {
     *  id: "ocQHyuzHvysMo5N5VsXc",
     *  name: "test calendar",
     *  locationId: "ocQHyuzHvysMo5N5VsXc",
     *  notifications: [{
     *   shouldSendToContact: true,
     *   shouldSendToGuest: true,
     *   shouldSendToUser: true,
     *   shouldSendToSelectedUsers: true,
     *   type: "email"
     *  }],
     *  isActive: true,
     *  groupId: "BqTwX8QFwXzpegMve9EQ",
     *  eventType: "RoundRobin_OptimizeForAvailability",
     *  description: "this is used for testing",
     *  slug: "test1",
     *  widgetSlug: "test1",
     *  widgetType: "classic",
     *  eventTitle: "{{contact.name}}",
     *  eventColor: "#039be5",
     *  slotDuration: 30,
     *  slotDurationUnit: "mins",
     *  slotInterval: 30,
     *  slotIntervalUnit: "mins",
     *  slotBuffer: 30,
     *  slotBufferUnit: "mins",
     *  preBuffer: 30,
     *  preBufferUnit: "mins",
     *  appoinmentPerSlot: 1,
     *  appoinmentPerDay: 1,
     *  allowBookingAfter: 1,
     *  allowBookingAfterUnit: "hours",
     *  allowBookingFor: 1,
     *  allowBookingForUnit: "days",
     *  openHours: [{
     *   daysOfTheWeek: [0, 1, 2, 4, 5],
     *   hours: {
     *     openHour: 9,
     *     openMinute: 0,
     *     closeHour: 17,
     *     closeMinute: 0
     *   }
     *  }],
     *  enableRecurring: false,
     *  recurring: {
     *   freq: "DAILY",
     *   count: 1,
     *   bookingOption: "skip",
     *   bookingOverlapDefaultStatus: "confirmed"
     *  },
     *  formId: "ocQHyuzHvysMo5N5VsXc",
     *  stickyContact: true,
     *  isLivePaymentMode: true,
     *  autoConfirm: true,
     *  shouldSendAlertEmailsToAssignedMember: true,
     *  alertEmail: "name@domain.com",
     *  googleInvitationEmails: false,
     *  allowReschedule: true,
     *  allowCancellation: true,
     *  shouldAssignContactToTeamMember: true,
     *  shouldSkipAssigningContactForExisting: true,
     *  notes: "Notes",
     *  pixelId: "Pixel Id",
     *  formSubmitType: "ThankYouMessage",
     *  formSubmitRedirectURL: "Form Submit Redirect URL",
     *  formSubmitThanksMessage: "Form Submit Thanks Message",
     *  availabilityType: 0,
     *  availabilities: [{
     *   date: "2023-09-25T00:00:00.000Z",
     *   hours: {
     *    openHour: 9,
     *    openMinute: 0,
     *    closeHour: 17,
     *    closeMinute: 0
     *   },
     *   deleted: false
     *  }],
     *  guestType: "count_only",
     *  consentLabel: "Consent Label",
     *  calendarCoverImage: "Calendar Cover Image",
     *  lookBusyConfig: {
     *   enabled: true,
     *   LookBusyPercentage: 50
     *  }
     * }
     * ```
     */
    export type CreateDTO = CreateUserAssignedDTO | CreateNonUserAssignedDTO;
    /**
     * the calendar update type configuration.
     * this is a partial type
     *
     * @memberof Calendars
     * @example
     * ```ts
     * const body: Calendars.UpdateDTO = {
     *  id: "ocQHyuzHvysMo5N5VsXc",
     *  name: "test calendar",
     *  locationId: "ocQHyuzHvysMo5N5VsXc",
     *  notifications: [{
     *   shouldSendToContact: true,
     *   shouldSendToGuest: true,
     *   shouldSendToUser: true,
     *   shouldSendToSelectedUsers: true,
     *   type: "email"
     *  }],
     *  isActive: true,
     *  groupId: "BqTwX8QFwXzpegMve9EQ",
     *  eventType: "RoundRobin_OptimizeForAvailability",
     *  description: "this is used for testing",
     *  slug: "test1",
     *  widgetSlug: "test1",
     *  widgetType: "classic",
     *  eventTitle: "{{contact.name}}",
     *  eventColor: "#039be5",
     *  slotDuration: 30,
     *  slotDurationUnit: "mins",
     *  slotInterval: 30,
     *  slotIntervalUnit: "mins",
     *  slotBuffer: 30,
     *  slotBufferUnit: "mins",
     *  preBuffer: 30,
     *  preBufferUnit: "mins",
     *  appoinmentPerSlot: 1,
     *  appoinmentPerDay: 1,
     *  allowBookingAfter: 1,
     *  allowBookingAfterUnit: "hours",
     *  allowBookingFor: 1,
     *  allowBookingForUnit: "days",
     *  openHours: [{
     *   daysOfTheWeek: [0, 1, 2, 4, 5],
     *   hours: {
     *     openHour: 9,
     *     openMinute: 0,
     *     closeHour: 17,
     *     closeMinute: 0
     *   }
     *  }],
     *  enableRecurring: false,
     *  recurring: {
     *   freq: "DAILY",
     *   count: 1,
     *   bookingOption: "skip",
     *   bookingOverlapDefaultStatus: "confirmed"
     *  },
     *  formId: "ocQHyuzHvysMo5N5VsXc",
     *  stickyContact: true,
     *  isLivePaymentMode: true,
     *  autoConfirm: true,
     *  shouldSendAlertEmailsToAssignedMember: true,
     *  alertEmail: "name@domain.com",
     *  googleInvitationEmails: false,
     *  allowReschedule: true,
     *  allowCancellation: true,
     *  shouldAssignContactToTeamMember: true,
     *  shouldSkipAssigningContactForExisting: true,
     *  notes: "Notes",
     *  pixelId: "Pixel Id",
     *  formSubmitType: "ThankYouMessage",
     *  formSubmitRedirectURL: "Form Submit Redirect URL",
     *  formSubmitThanksMessage: "Form Submit Thanks Message",
     *  availabilityType: 0,
     *  availabilities: [{
     *   date: "2023-09-25T00:00:00.000Z",
     *   hours: {
     *    openHour: 9,
     *    openMinute: 0,
     *    closeHour: 17,
     *    closeMinute: 0
     *   },
     *   deleted: false
     *  }],
     *  guestType: "count_only",
     *  consentLabel: "Consent Label",
     *  calendarCoverImage: "Calendar Cover Image",
     *  lookBusyConfig: {
     *   enabled: true,
     *   LookBusyPercentage: 50
     *  }
     * }
     * ```
     */
    export type UpdateDTO = Partial<CreateUserAssignedDTO> | Partial<CreateNonUserAssignedDTO>;
    /**
     * The calendar update successful response
     *
     * @memberof Calendars
     * @example
     * ```ts
     * const response: Calendars.UpdateSuccessfulResponseDTO = {
     *  calendar: {
     *  id: "ocQHyuzHvysMo5N5VsXc",
     *  name: "test calendar",
     *  locationId: "ocQHyuzHvysMo5N5VsXc",
     *  notifications: [{
     *   shouldSendToContact: true,
     *   shouldSendToGuest: true,
     *   shouldSendToUser: true,
     *   shouldSendToSelectedUsers: true,
     *   type: "email"
     *  }],
     *  isActive: true,
     *  groupId: "BqTwX8QFwXzpegMve9EQ",
     *  eventType: "RoundRobin_OptimizeForAvailability",
     *  description: "this is used for testing",
     *  slug: "test1",
     *  widgetSlug: "test1",
     *  widgetType: "classic",
     *  eventTitle: "{{contact.name}}",
     *  eventColor: "#039be5",
     *  slotDuration: 30,
     *  slotDurationUnit: "mins",
     *  slotInterval: 30,
     *  slotIntervalUnit: "mins",
     *  slotBuffer: 30,
     *  slotBufferUnit: "mins",
     *  preBuffer: 30,
     *  preBufferUnit: "mins",
     *  appoinmentPerSlot: 1,
     *  appoinmentPerDay: 1,
     *  allowBookingAfter: 1,
     *  allowBookingAfterUnit: "hours",
     *  allowBookingFor: 1,
     *  allowBookingForUnit: "days",
     *  openHours: [{
     *   daysOfTheWeek: [0, 1, 2, 4, 5],
     *   hours: {
     *     openHour: 9,
     *     openMinute: 0,
     *     closeHour: 17,
     *     closeMinute: 0
     *   }
     *  }],
     *  enableRecurring: false,
     *  recurring: {
     *   freq: "DAILY",
     *   count: 1,
     *   bookingOption: "skip",
     *   bookingOverlapDefaultStatus: "confirmed"
     *  },
     *  formId: "ocQHyuzHvysMo5N5VsXc",
     *  stickyContact: true,
     *  isLivePaymentMode: true,
     *  autoConfirm: true,
     *  shouldSendAlertEmailsToAssignedMember: true,
     *  alertEmail: "name@domain.com",
     *  googleInvitationEmails: false,
     *  allowReschedule: true,
     *  allowCancellation: true,
     *  shouldAssignContactToTeamMember: true,
     *  shouldSkipAssigningContactForExisting: true,
     *  notes: "Notes",
     *  pixelId: "Pixel Id",
     *  formSubmitType: "ThankYouMessage",
     *  formSubmitRedirectURL: "Form Submit Redirect URL",
     *  formSubmitThanksMessage: "Form Submit Thanks Message",
     *  availabilityType: 0,
     *  availabilities: [{
     *   date: "2023-09-25T00:00:00.000Z",
     *   hours: {
     *    openHour: 9,
     *    openMinute: 0,
     *    closeHour: 17,
     *    closeMinute: 0
     *   },
     *   deleted: false
     *  }],
     *  guestType: "count_only",
     *  consentLabel: "Consent Label",
     *  calendarCoverImage: "Calendar Cover Image",
     *  lookBusyConfig: {
     *   enabled: true,
     *   LookBusyPercentage: 50
     *  }
     * }
     * ```
     */
    export type ByIdSuccessfulResponseDTO = {
        /**
         * the calendar object ({...})
         *
         * @type DTO
         * @example
         * ```ts
         * {
         *  id: "ocQHyuzHvysMo5N5VsXc",
         *  name: "test calendar",
         *  locationId: "ocQHyuzHvysMo5N5VsXc",
         *  notifications: [{
         *   shouldSendToContact: true,
         *   shouldSendToGuest: true,
         *   shouldSendToUser: true,
         *   shouldSendToSelectedUsers: true,
         *   type: "email"
         *  }],
         *  isActive: true,
         *  groupId: "BqTwX8QFwXzpegMve9EQ",
         *  eventType: "RoundRobin_OptimizeForAvailability",
         *  description: "this is used for testing",
         *  slug: "test1",
         *  widgetSlug: "test1",
         *  widgetType: "classic",
         *  eventTitle: "{{contact.name}}",
         *  eventColor: "#039be5",
         *  slotDuration: 30,
         *  slotDurationUnit: "mins",
         *  slotInterval: 30,
         *  slotIntervalUnit: "mins",
         *  slotBuffer: 30,
         *  slotBufferUnit: "mins",
         *  preBuffer: 30,
         *  preBufferUnit: "mins",
         *  appoinmentPerSlot: 1,
         *  appoinmentPerDay: 1,
         *  allowBookingAfter: 1,
         *  allowBookingAfterUnit: "hours",
         *  allowBookingFor: 1,
         *  allowBookingForUnit: "days",
         *  openHours: [{
         *   daysOfTheWeek: [0, 1, 2, 4, 5],
         *   hours: {
         *     openHour: 9,
         *     openMinute: 0,
         *     closeHour: 17,
         *     closeMinute: 0
         *   }
         *  }],
         *  enableRecurring: false,
         *  recurring: {
         *   freq: "DAILY",
         *   count: 1,
         *   bookingOption: "skip",
         *   bookingOverlapDefaultStatus: "confirmed"
         *  },
         *  formId: "ocQHyuzHvysMo5N5VsXc",
         *  stickyContact: true,
         *  isLivePaymentMode: true,
         *  autoConfirm: true,
         *  shouldSendAlertEmailsToAssignedMember: true,
         *  alertEmail: "name@domain.com",
         *  googleInvitationEmails: false,
         *  allowReschedule: true,
         *  allowCancellation: true,
         *  shouldAssignContactToTeamMember: true,
         *  shouldSkipAssigningContactForExisting: true,
         *  notes: "Notes",
         *  pixelId: "Pixel Id",
         *  formSubmitType: "ThankYouMessage",
         *  formSubmitRedirectURL: "Form Submit Redirect URL",
         *  formSubmitThanksMessage: "Form Submit Thanks Message",
         *  availabilityType: 0,
         *  availabilities: [{
         *   date: "2023-09-25T00:00:00.000Z",
         *   hours: {
         *    openHour: 9,
         *    openMinute: 0,
         *    closeHour: 17,
         *    closeMinute: 0
         *   },
         *   deleted: false
         *  }],
         *  guestType: "count_only",
         *  consentLabel: "Consent Label",
         *  calendarCoverImage: "Calendar Cover Image",
         *  lookBusyConfig: {
         *   enabled: true,
         *   LookBusyPercentage: 50
         *  }
         * }
         */
        calendar: DTO;
    };
    /**
     * The calendar update availability configuration
     *
     * @memberof Calendars
     * @example
     * ```ts
     * const body: Calendars.UpdateAvailabilityDTO = {
     *  date: "2023-09-25T00:00:00.000Z",
     *  hours: {
     *    openHour: 9,
     *    openMinute: 0,
     *    closeHour: 17,
     *    closeMinute: 0
     *  },
     *  deleted: false,
     *  id: "ocQHyuzHvysMo5N5VsXc"
     * }
     */
    export type UpdateAvailabilityDTO = {
        /**
         * the date of the availability (<YYYY-MM-DD in local timezone>T00:00:00.000Z)
         *
         * @type string
         * @example
         * ```ts
         * "2023-09-25T00:00:00.000Z"
         * ```
         */
        date: string;
        /** ;
    
        /**
         * the hours of the availability ({...})
         *
         * @type HourDTO
         * @example
         * ```ts
         * {
         *  openHour: 9,
         *  openMinute: 0,
         *  closeHour: 17,
         *  closeMinute: 0
         * }
         * ```
         */
        hours: HourDTO;
        /**
         * the deleted status of the availability (true)
         *
         * @type boolean
         * @example
         * ```ts
         * false
         * ```
         */
        deleted?: boolean;
        /**
         * the ID of the custom availability object.
         * It is required while updating or deleting the existing custom date availability (ocQHyuzHvysMo5N5VsXc)
         *
         * @type string
         * @example
         * ```ts
         * "ocQHyuzHvysMo5N5VsXc"
         * ```
         */
        id?: string;
    };
    export type BlockSlotCreateSchemaDTO = {
        locationId: string /** Location ID (BqTwX8QFwXzpegMve9EQ) */;
        startTime: string /** Start Time (2023-09-25T16:00:00+05:30) */;
        endTime: string /** End Time (2023-09-25T16:00:00+05:30) */;
        calendarId?: string /** Calendar Id (Block Slot can only be created on simple/event calendars) */;
        title?: string /** Title (Block Slot) */;
        assignedUserId?: string /** Assigned User ID (YlWd2wuCAZQzh2cH1fVZ) */;
    };
    export type CreateUpdateBlockedSlotSuccessfulResponseDTO = {
        id: string /** Block Slot ID (0007BWpSzSwfiuSl0tR2) */;
        locationId: string /** Location ID (BqTwX8QFwXzpegMve9EQ) */;
        title: string /** Title (Block Slot) */;
        startTime: string /** Start Time (2023-09-25T16:00:00+05:30) */;
        endTime: string /** End Time (2023-09-25T16:00:00+05:30) */;
        calendarId?: string /** Calendar Id (Block Slot can only be created on simple/event calendars) */;
        assignedUserId?: string /** Assigned User ID (YlWd2wuCAZQzh2cH1fVZ) */;
    };
    export type BlockSlotEditSchemaDTO = {
        calendarId?: string /** Calendar Id (Block Slot can only be created on simple/event calendars) */;
        startTime?: string /** Start Time (2023-09-25T16:00:00+05:30) */;
        endTime?: string /** End Time (2023-09-25T16:00:00+05:30) */;
        title?: string /** Title (Block Slot) */;
        assignedUserId?: string /** Assigned User ID (YlWd2wuCAZQzh2cH1fVZ) */;
    };
    export type GetNoteSchemaDTO = {
        id?: string /** Note Id (ocQHyuzHvysMo5N5VsXc) */;
        body?: string /** Note Body (This is a note) */;
        userId?: string /** User Id (ocQHyuzHvysMo5N5VsXc) */;
        dateAdded?: string /** Date Added (2023-09-25T16:00:00+05:30) */;
        contactId?: string /** Contact Id (ocQHyuzHvysMo5N5VsXc) */;
        createdBy?: {
            name?: string /** Created By Name (John Doe) */;
            profilePhoto?: string /** Created By Profile Photo (https://example.com/profile.jpg) */;
        };
    };
    export type GetNotesDTO = {
        notes?: GetNoteSchemaDTO[] /** the array of notes ([{...}]) */;
        hasMore?: boolean /** has more notes (true) */;
    };
    export type NoteDTO = {
        body: string /** Note Body (This is a note) */;
        userId?: string /** User Id (ocQHyuzHvysMo5N5VsXc) */;
    };
    export type GetCreateUpdateNoteSuccessfulResponseDto = {
        note: GetNoteSchemaDTO /** the note object ({...}) */;
    };
    export type ResourceTypeDTO = "equipments" | "rooms";
    export type ResourceByIdResponseDTO = {
        locationId: string /** Location ID of the resource (ocQHyuzHvysMo5N5VsXc) */;
        name: string /** Name of the resource (yoga room) */;
        resourceType: ResourceTypeDTO /** Resource Type (rooms) */;
        isActive: boolean /** Is Active (true) */;
        calendarIds: string[] /** Calendar IDs (["Jsj0xnlDDjw0SuvX1J13","oCM5feFC86FAAbcO7lJK"]) */;
        description?: string /** Description of the resource */;
        quantity?: number /** Quantity of the resource */;
        outOfService?: number /** Indicates if the resource is out of service */;
        capacity?: number /** Capacity of the resource */;
    };
    export type ResourceDTO = {
        locationId: string /** Location ID of the resource (ocQHyuzHvysMo5N5VsXc) */;
        name: string /** Name of the resource (yoga room) */;
        isActive: boolean /** Is Active (true) */;
        resourceType: ResourceTypeDTO /** Resource Type (rooms) */;
        calendarIds: string[] /** Calendar IDs (["Jsj0xnlDDjw0SuvX1J13","oCM5feFC86FAAbcO7lJK"]) */;
        description?: string /** Description of the resource */;
        quantity?: number /** Quantity of the resource */;
        outOfService?: number /** Indicates if the resource is out of service */;
        capacity?: number /** Capacity of the resource */;
    };
    export type ResourceResponseDTO = {
        locationId: string /** Location ID of the resource (ocQHyuzHvysMo5N5VsXc) */;
        name: string /** Name of the resource (yoga room) */;
        resourceType: ResourceTypeDTO /** Resource Type (rooms) */;
        isActive: boolean /** Is Active (true) */;
        description?: string /** Description of the resource */;
        quantity?: number /** Quantity of the resource */;
        outOfService?: number /** Indicates if the resource is out of service */;
        capacity?: number /** Capacity of the resource */;
    };
    export type CreateResourceDTO = {
        locationId: string /** Location ID of the resource (ocQHyuzHvysMo5N5VsXc) */;
        name: string /** Name of the resource (yoga room) */;
        description: string /** Description of the resource */;
        quantity: number /** Quantity of the resource */;
        outOfService: number /** Indicates if the resource is out of service */;
        capacity: number /** Capacity of the resource */;
        Ids: string[] /** Calendar IDs (["Jsj0xnlDDjw0SuvX1J13","oCM5feFC86FAAbcO7lJK"]) */;
    };
    export {};
}
