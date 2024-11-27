import search from "./search";
import create from "./create";
import update from "./update";
import del from "./delete";

export const redirects = {
  search,
  create,
  update,
  delete: del,
};