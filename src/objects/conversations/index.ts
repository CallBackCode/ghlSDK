import { emails } from "./emails";
import { messages } from "./messages";
import get from "./get";
import search from "./search";
import create from "./create";
import update from "./update";
import del from "./delete";

export const conversations = {
  get,
  search,
  create,
  update,
  delete: del,
  emails,
  messages,
};
