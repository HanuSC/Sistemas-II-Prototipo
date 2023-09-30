import DB from "../db.js";
import EventAssign from "./EventAssign.js";
import TableContentClients from "./TableContentClients.js";
import TableFormClients from "./TableFormClients.js";
import TablePagination from "./TablePagination.js";

function ClientsTable() {
    this.element = document.getElementById("clients-table");
    this.DBTable = "clients";
    this.filters = {}
    this.managementForm = null;
    this.contentManager = null;
    this.pagination = null;
    
    this.ini();
}

ClientsTable.prototype.ini = function() {
    document.querySelectorAll("#content-header-form input, #content-header-form select").forEach(ele => {
        this.filters[ele.name.replaceAll(/\-/g, "_")] = ele;
    });
    this.assignEvents();
    this.contentManager = new TableContentClients({ tableObject: this, formComponent: TableFormClients });
    this.pagination = new TablePagination(this);
}
ClientsTable.prototype.assignEvents = function() {
    EventAssign.add({
        eventType: "click",
        target: "#delete-all-rows, #delete-all-rows > *",
        callback: (event) => {
            this.deleteRows([ ...this.element.querySelectorAll(`.btn-select-row[data-selected="1"]`) ]);
        }
    });
    EventAssign.add({
        eventType: "click",
        target: "#create-row, #create-row > *",
        callback: (event) => {
            this.managementForm = new TableFormClients({ formMode: "create", tableObject: this });
            this.managementForm.open();
        }
    });

    Object.values(this.filters).forEach(ele => {
        if (ele.tagName.toLowerCase() == "input") {
            EventAssign.add({
                eventType: "keypress",
                origin: ele,
                callback: (event) => {
                    if (event.key !== "Enter")
                        return;
                    
                    this.contentManager.update();
                    this.pagination.update();
                }
            });
            return;
        }
        EventAssign.add({
            eventType: "change",
            origin: ele,
            callback: (event) => {
                this.contentManager.update();
                this.pagination.update();
            }
        });
    });
}
ClientsTable.prototype.deleteRows = function(elements) {
    const findRowId = (target) => { 
        let parent = target;
        do parent = parent.parentElement; while (parent.tagName != "TR")
        return parent.dataset.rowId;
    };
    elements.forEach(ele => {
        const [ client_rif  ] = findRowId(ele).split("+");
        const condition = { client_rif };
        DB.delete({ table: this.DBTable, condition });
    });
    
    this.contentManager.update();
    this.pagination.update();
}

export default ClientsTable;