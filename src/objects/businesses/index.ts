import create from "./create";
import get from "./get";
import listByLocation from "./listByLocation";
import update from "./update";
import del from "./delete";

export const businesses = {
  get,
  listByLocation,
  create,
  update,
  delete: del,
};
