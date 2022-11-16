"use strict";
class Department {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department: ${this.name}`);
    }
    addEmployees(employee) {
        this.employees.push(employee);
    }
    printEmployeesInformation() {
        console.log("--------Employees Information---------");
        console.log(`${this.name} has ${this.employees.length} employee(s)`);
        console.log(this.employees.join(" , "));
        console.log("--------------------------------------");
    }
}
class ACCDepartment extends Department {
    constructor(...reports) {
        super("Accounting");
        this.reports = reports;
    }
    addReport(report) {
        this.reports.push(report);
    }
    listReports() {
        console.log(this.reports);
    }
}
class ITDepartment extends Department {
    constructor(...admins) {
        super("BackEnd");
        this.admins = admins;
    }
    addEmployees(employee) {
        if (employee.length < 3) {
            console.log(`IT's employees names must have more than 01 characters length.`);
            return;
        }
        this.employees.push(employee);
    }
    addAdmins(...admins) {
        this.admins.push(...admins);
    }
    printAdminInformations() {
        console.log("--------Admins Information---------");
        console.log(`${this.name} has ${this.admins.length} admin(s)`);
        console.log(this.admins.join(" , "));
        console.log("-----------------------------------");
    }
}
const accounting = new ACCDepartment();
const backEnd = new ITDepartment();
accounting.describe();
accounting.addEmployees("Jannet");
accounting.printEmployeesInformation();
accounting.addReport(`We're going to brake!`);
accounting.listReports();
console.log("-----------------Inherintance----------------");
backEnd.describe();
backEnd.addEmployees("S");
backEnd.addEmployees("Sarah");
backEnd.addAdmins("Josef", "Cris");
backEnd.printEmployeesInformation();
backEnd.printAdminInformations();
