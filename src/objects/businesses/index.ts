import create from "./create";
import get from "./get";
import listByLocation from "../objects/associations/get";
import update from "./update";
import del from "./delete";

export const businesses = {
  get,
  listByLocation,
  create,
  update,
  delete: del,
};
