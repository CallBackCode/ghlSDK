import get from "./get";
import create from "./create";
import update from "./update";
import del from "./delete";

export const records = {
  get,
  update,
  create,
  delete: del,
};
