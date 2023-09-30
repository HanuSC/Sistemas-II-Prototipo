import DB from "../db.js";
import BaseTableForm from "./base/BaseTableForm.js";
import FloatingMessage from "./FloatingMessage.js";

function TableFormClients({ formMode, rowId, tableObject } = {}) {
    this.super({
        formMode,
        rowId,
        tableObject,
        condition: [ "client_rif" ],
        upperFields: [ "client_rif" ],
        uncheckFields: [ ]
    });
    this.regExp = {};

    this.ini();
}

TableFormClients.prototype = new BaseTableForm();
TableFormClients.prototype.constructor = TableFormClients;
TableFormClients.prototype.super = BaseTableForm;

TableFormClients.prototype.ini = function() {
    this.regExp = {
        client_rif: value => /^[a-zA-Z]\-\d+$/.test(value),
        client_name: value => /^[a-zA-Z&\sáéíóúñÁÉÍÓÚÑ\.\,\-]+$/.test(value),
        state: value => /^\d+$/.test(value),
    }
}
TableFormClients.prototype.send = function() {
    const dataElements = [ ...this.entries.inputs, ...this.entries.selects ];

    if (!this.checkData(dataElements))
        return false;

    if (this.formMode == "edit") {
        const data = this.compoundedData()
        const dataForTable = { table: this.table.DBTable, condition: this.rowIdCondition, data };
        const differentPrimaryKey = Object.entries(this.rowIdCondition).map(([key, value]) => data[key] != value).some(i => i);
        let result = null;

        // Validamos si se busca cambiar el primary key
        if (differentPrimaryKey) {
            // Validamos que no exista un primary key igual
            const condition = {};
            let index = null;
            
            Object.keys(this.rowIdCondition).forEach(cond => condition[cond] = data[cond]);
            index = DB.getIndex({ table: this.table.DBTable, condition });
            
            if (index !== -1) {
                FloatingMessage.say("No fue posible editar el registro", "error");
                return;
            }
        }

        result = DB.post(dataForTable);
        if (result) {
            this.table.contentManager.update();
            this.table.pagination.update();

            FloatingMessage.say("Registro editado satisfactoriamente", "success");
            this.close();
            
            return;
        }

        FloatingMessage.say("No fue posible editar el registro", "error");
    } else if (this.formMode == "create") {
        const result = DB.put({ table: this.table.DBTable, data: this.compoundedData() });

        if (!result) {
            FloatingMessage.say("No pudo crearse el registro", "error");
            return;
        }

        this.table.contentManager.update();
        this.table.pagination.update();
        FloatingMessage.say("Registro creado satisfactoriamente", "success");
        this.close();
    }
}

export default TableFormClients;