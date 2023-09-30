import DB from "./db.js";
import Session from "./session.js"
import AdvancedSelect from "./modules/AdvancedSelect.js";
import ClientsTable from "./modules/ClientsTable.js";

document.addEventListener("DOMContentLoaded", function() {
    Session.pageAccess();

    document.querySelectorAll("select").forEach((element) => {
        // Llenado de datos de los select en base a DB.
        const selectName = element.name.replace("filter-", "").replaceAll("-", "_");
        if (Object.keys(DB.get({ table: "relations" })).includes(selectName)) {
            const options = [
                element.name.includes("filter") ? `<option value="none">Sin especificar</option>` : "",
                ...DB.get({ table: "relations" })[selectName].map((string, index) => `<option value="${index}">${string}</option>`)
            ];
            element.innerHTML = options.join("");
        } else if (selectName == "state") {
            const options = [
                element.name.includes("filter") ? `<option value="none">Sin especificar</option>` : "",
                ...DB.get({ table: "states" }).map(({ id, state_name }) => `<option value="${id}">${state_name}</option>`)
            ];
            element.innerHTML = options.join("");
        }

        Session.local.advancedSelects[element.getAttribute("name").replaceAll("-", "_")] = new AdvancedSelect({
            objectId: element.dataset.objectId,
            elementName: element.getAttribute("name")
        });        
    });
    document.getElementById("content-header-form").addEventListener("submit", function() {
        event.preventDefault();
    });

    new ClientsTable();
});