"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OpportunityStatus;
(function (OpportunityStatus) {
    OpportunityStatus["Open"] = "open";
    OpportunityStatus["Won"] = "won";
    OpportunityStatus["Lost"] = "lost";
    OpportunityStatus["Abandoned"] = "abandoned";
})(OpportunityStatus || (OpportunityStatus = {}));
var ContactDndStatus;
(function (ContactDndStatus) {
    ContactDndStatus["Active"] = "active";
    ContactDndStatus["Inactive"] = "inactive";
    ContactDndStatus["Permanent"] = "permanent";
})(ContactDndStatus || (ContactDndStatus = {}));
var SearchFilterOpporators;
(function (SearchFilterOpporators) {
    SearchFilterOpporators["eq"] = "eq";
    SearchFilterOpporators["not_eq"] = "not_eq";
    SearchFilterOpporators["contains"] = "contains";
    SearchFilterOpporators["not_contains"] = "not_contains";
    SearchFilterOpporators["exists"] = "exists";
    SearchFilterOpporators["not_exists"] = "not_exists";
    SearchFilterOpporators["range"] = "range";
})(SearchFilterOpporators || (SearchFilterOpporators = {}));
//# sourceMappingURL=contacts.js.map