import DB from "./db.js";
import Session from "./session.js"
import FormLogin from "./modules/FormLogin.js";
DB.ini();

document.addEventListener("DOMContentLoaded", function() {
    if (Session.manageLogin())
        window.location = "statistics.html";

    new FormLogin();
});