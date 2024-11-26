import search from "./search";
import create from "./create";
import update from "./update";
import del from "./delete";

export const triggerLinks = {
  search,
  create,
  update,
  delete: del,
};
