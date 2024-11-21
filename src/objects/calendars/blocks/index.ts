import search from "./search";
import create from "./create";
import update from "./update";
import del from "../appointments/delete";

export const CalendarBlocks = {
  search,
  create,
  update,
  delete: del,
};
