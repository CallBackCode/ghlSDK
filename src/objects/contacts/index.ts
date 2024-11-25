import { campaigns } from "../campaigns";
import { appointments } from "./appointments";
import { business } from "./business";
import { followers } from "./followers";
import { notes } from "./notes";
import { tags } from "./tags";
import { tasks } from "./tasks";
import { workflows } from "./workflows";
import get from "./get";
import search from "./search";
import findDuplicates from "./findDuplicates";
import create from "./create";
import update from "./update";
import upsert from "./upsert";
import del from "./delete";

export const contacts = {
  get,
  search,
  findDuplicates,
  create,
  update,
  upsert,
  delete: del,
  business,
  tasks,
  appointments,
  tags,
  notes,
  campaigns,
  workflows,
  followers,
};
