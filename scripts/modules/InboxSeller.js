import BaseInbox from "./base/BaseInbox.js";

function InboxSeller() {}

InboxSeller.prototype = new BaseInbox;
InboxSeller.prototype.constructor = InboxSeller;
InboxSeller.prototype.super = BaseInbox;

export default InboxSeller;