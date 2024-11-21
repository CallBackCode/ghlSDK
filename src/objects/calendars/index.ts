import create from "./create";
import { CalendarAppointments as appointments } from "./appointments";
import { CalendarBlocks as blocks } from "./blocks";
import { CalendarGroups as groups } from "./groups";
import { CalendarAppointmentNotes as notes } from "./notes";
import { CalendarResources as resources } from "./resources";
import { CalendarSlots as freeSlots } from "./freeSlots";
import get from "./get";
import search from "./search";
import update from "./update";
import del from "./delete";

export const calendars = {
  get,
  search,
  create,
  update,
  delete: del,
  freeSlots,
  groups,
  appointments,
  notes,
  blocks,
  resources,
};
