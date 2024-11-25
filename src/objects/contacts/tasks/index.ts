import get from "./get";
import search from "./search";
import create from "./create";
import update from "./update";
import updateStatus from "./updateStatus";
import del from "./delete";

export const tasks = {
  get,
  search,
  create,
  update,
  updateStatus,
  delete: del,
};
