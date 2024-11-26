import { templates } from "./templates";
import { schedules } from "./schedules";
import { text2pay } from "./text2pay";
import get from "./get";
import search from "./search";
import create from "./create";
import update from "./update";
import del from "./delete";
import send from "./send";
import voidInvoice from "./void";
import recordPayment from "./recordPayment";
import generateInvoiceNumber from "./generateInvoiceNumber";

export const invoices = {
  get,
  search,
  create,
  update,
  delete: del,
  send,
  void: voidInvoice,
  recordPayment,
  generateInvoiceNumber,
  templates,
  schedules,
  text2pay,
};
