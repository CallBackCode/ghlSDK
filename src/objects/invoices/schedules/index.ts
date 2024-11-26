import get from "./get";
import search from "./search";
import create from "./create";
import update from "./update";
import del from "./delete";
import startSchedule from "./startSchedule";
import manageAutoPay from "./manageAutoPay";
import cancelScheduled from "./cancelScheduled";

export const schedules = {
  get,
  search,
  create,
  update,
  delete: del,
  startSchedule,
  manageAutoPay,
  cancelScheduled,
};
