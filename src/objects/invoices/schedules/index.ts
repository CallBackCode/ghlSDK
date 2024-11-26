import get from "./get";
import search from "./search";
import create from "./create";
import update from "./update";
import del from "./delete";

export const schedules = {
  get,
  search,
  create,
  update,
  delete: del,
  startSchedule: () => {},
  manageAutoPay: () => {},
  cancelScheduled: () => {},
};
