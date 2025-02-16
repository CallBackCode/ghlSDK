import { prices } from "./prices";
import get from "./get";
import list from "./list";
import search from "./search";
import create from "./create";
import update from "./update";
import del from "./delete";

export const products = {
  get,
  list,
  search,
  create,
  update,
  delete: del,
  prices,
};
