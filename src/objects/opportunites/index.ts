import { followers } from "./followers";
import get from "./get";
import search from "./search";
import create from "./create";
import update from "./update";
import updateStatus from "./updateStatus";
import upsert from "./upsert";
import del from "./delete";

export const opportunities = {
  get,
  search,
  create,
  update,
  updateStatus,
  upsert,
  delete: del,
  followers,
};
