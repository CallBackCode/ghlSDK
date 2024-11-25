import { campaigns } from "../campaigns";
import { appointments } from "./appointments";
import { business } from "./business";
import { followers } from "./followers";
import { notes } from "./notes";
import { tags } from "./tags";
import { tasks } from "./tasks";
import { workflows } from "./workflows";

export const contacts = {
  get: () => {},
  search: () => {},
  findDuplicates: () => {},
  create: () => {},
  update: () => {},
  upsert: () => {},
  delete: () => {},
  business,
  tasks,
  appointments,
  tags,
  notes,
  campaigns,
  workflows,
  followers,
};
