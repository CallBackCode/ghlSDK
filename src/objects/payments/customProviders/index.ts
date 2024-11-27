import { config } from "./config";
import create from "./create";
import del from "./delete";

export const customProviders = {
  create,
  delete: del,
  config,
};
