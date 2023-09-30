import BaseInbox from "./base/BaseInbox.js";

function InboxAdmin() {}

InboxAdmin.prototype = new BaseInbox;
InboxAdmin.prototype.constructor = InboxAdmin;
InboxAdmin.prototype.super = BaseInbox;

export default InboxAdmin;