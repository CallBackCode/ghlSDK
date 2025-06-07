import get from "./get";
import getId from "./getId";
import getKeyName from "./getKeyName";
import getObjectKey from "./getObjectKey";
import create from "./create";
import update from "./update";
import del from "./delete";
import { relations } from "./relations";

export const associations = {
  relations,
  get,
  getId,
  getKeyName,
  getObjectKey,
  update,
  create,
  delete: del,
};
