import { customFields } from "./customFields";
import { customValues } from "./customValues";
// import { snippets } from "./snippets";
import { tags } from "./tags";
import { tasks } from "./tasks";
import { timezones } from "./timezones";
import get from "./get";
import search from "./search";
import create from "./create";
import update from "./update";
import del from "./delete";

export const locations = {
  get,
  search,
  create,
  update,
  delete: del,
  customFields,
  customValues,
  // snippets,
  tags,
  tasks,
  timezones,
};
