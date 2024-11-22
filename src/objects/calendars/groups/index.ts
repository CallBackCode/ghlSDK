import search from "./search";
import create from "./create";
import update from "./update";
import del from "./delete";
import disable from "./disable";
import validateSlug from "./validateSlug";

export const CalendarGroups = {
  search,
  create,
  update,
  delete: del,
  disable,
  validateSlug,
};
