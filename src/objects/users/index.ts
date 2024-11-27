import get from "./get";
import search from "./search";
import listByLocation from "./listByLocation";
import create from "./create";
import update from "./update";
import del from "./delete";

export const users = {
  get,
  search,
  listByLocation,
  create,
  update,
  delete: del,
};
