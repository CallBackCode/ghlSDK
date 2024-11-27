"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.payments = void 0;
const integrations_1 = require("./integrations");
const orders_1 = require("./orders");
const transactions_1 = require("./transactions");
const subscriptions_1 = require("./subscriptions");
const customProviders_1 = require("./customProviders");
exports.payments = {
    integrations: integrations_1.integrations,
    orders: orders_1.orders,
    transactions: transactions_1.transactions,
    subscriptions: subscriptions_1.subscriptions,
    customProviders: customProviders_1.customProviders,
};
//# sourceMappingURL=index.js.map