import DB from "../db.js";
import Config from "../config.js";
import EventAssign from "./EventAssign.js";

function Statistics() {
	this.resumeElement = null;
	this.tableElement = null;
	this.data = [];

	this.ini();
}

Statistics.prototype.ini = function() {
	this.resumeElement = document.getElementById("resume");
	this.tableElement = document.getElementById("resume-table");

	this.prepareData();
	this.fill();
	this.assignEvents();
}
Statistics.prototype.assignEvents = function() {}
Statistics.prototype.prepareData = function() {
	const getDebts = (user_id, employee) => {
		let totalDebts, paidDebts, pendingDebts, canceledDebts;
		let result = {};

		if (user_id == undefined) {
			totalDebts = DB.get({ table: "collection_tables" }).length;
		    paidDebts = DB.get({ table: "collection_tables", condition: { debt_status: 0 }, all: true }).length;
		    pendingDebts = DB.get({ table: "collection_tables", condition: { debt_status: 1 }, all: true }).length;
		    canceledDebts = DB.get({ table: "collection_tables", condition: { debt_status: 2 }, all: true }).length;
		} else {
			totalDebts = DB.get({ table: "collection_tables", condition: { user_id }, all: true }).length;
		    paidDebts = DB.get({ table: "collection_tables", condition: { user_id, debt_status: 0 }, all: true }).length;
		    pendingDebts = DB.get({ table: "collection_tables", condition: { user_id, debt_status: 1 }, all: true }).length;
		    canceledDebts = DB.get({ table: "collection_tables", condition: { user_id, debt_status: 2 }, all: true }).length;
	    	result.employee = employee;
		}

		result.totalDebts = totalDebts;
		result.paidDebts = paidDebts;
		result.pendingDebts = pendingDebts;
		result.canceledDebts = canceledDebts;

		return result;
	};
   	const users = DB.get({ table: "employees", condition: { position: 1 }, all: true });
   	let generalData, usersData;

    generalData = getDebts();
    usersData = users.map(row => getDebts(row.user_id, row));

    this.data = { ...generalData, usersData  };
}
Statistics.prototype.fill = function() {
	let resume = "", table = "";

	resume = `
        <div class="resume-item flex-wrap">
            <div class="icon-wrapper flex-wrap"><i class="fa-solid fa-file-invoice-dollar"></i></div>
            <div class="text-wrapper">
                <p class="resume-item-name">Deudas generadas</p>
                <p class="resume-item-value">${this.data.totalDebts}</p>
            </div>
        </div>
        <div class="resume-item flex-wrap">
            <div class="icon-wrapper flex-wrap"><i class="fa-solid fa-file-invoice-dollar"></i></div>
            <div class="text-wrapper">
                <p class="resume-item-name">Deudas cobradas</p>
                <p class="resume-item-value">${this.data.paidDebts} (${parseFloat(this.data.paidDebts / this.data.totalDebts * 100).toFixed(2)}%)</p>
            </div>
        </div>
        <div class="resume-item flex-wrap">
            <div class="icon-wrapper flex-wrap"><i class="fa-solid fa-file-invoice-dollar"></i></div>
            <div class="text-wrapper">
                <p class="resume-item-name">Deudas pendientes</p>
                <p class="resume-item-value">${this.data.pendingDebts} (${parseFloat(this.data.pendingDebts / this.data.totalDebts * 100).toFixed(2)}%)</p>
            </div>
        </div>
        <div class="resume-item flex-wrap">
            <div class="icon-wrapper flex-wrap"><i class="fa-solid fa-file-invoice-dollar"></i></div>
            <div class="text-wrapper">
                <p class="resume-item-name">Deudas anuladas</p>
                <p class="resume-item-value">${this.data.canceledDebts} (${parseFloat(this.data.canceledDebts / this.data.totalDebts * 100).toFixed(2)}%)</p>
            </div>
        </div>
	`;

	[ ...this.data.usersData ].sort((a, b) => b.totalDebts - a.totalDebts).forEach(data => {
		table += `
            <tr>
                <td>${data.employee.name + " " + data.employee.surname[0] + "."}</td>
                <td>${data.employee.user_id}</td>
                <td>${data.totalDebts}</td>
                <td>${data.paidDebts} (${parseFloat(data.paidDebts / data.totalDebts * 100).toFixed(2)}%)</td>
                <td>${data.pendingDebts} (${parseFloat(data.pendingDebts / data.totalDebts * 100).toFixed(2)}%)</td>
                <td>${data.canceledDebts} (${parseFloat(data.canceledDebts / data.totalDebts * 100).toFixed(2)}%)</td>
            </tr>
		`;
	});

	this.resumeElement.innerHTML = resume;
	this.tableElement.querySelector("tbody").innerHTML = table;
}

export default Statistics;
