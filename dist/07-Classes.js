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
Department.fiscalYear = 2022;
class ACCDepartment extends Department {
    constructor(...reports) {
        super("Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return `The last report is: ${this.lastReport}`;
        }
        throw new Error('No report found!');
    }
    set mostRecentReport(text) {
        if (!text)
            throw new Error('Please pass a valid text');
        this.addReport(text);
    }
    addReport(report) {
        this.reports.push(report);
        this.lastReport = report;
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
console.log(Department.fiscalYear);
accounting.describe();
accounting.addEmployees("Jannet");
accounting.printEmployeesInformation();
accounting.addReport(`We're going to brake!`);
accounting.mostRecentReport = `We're going to brake2!`;
console.log(accounting.mostRecentReport);
accounting.listReports();
console.log("-----------------Inherintance----------------");
backEnd.describe();
backEnd.addEmployees("S");
backEnd.addEmployees("Sarah");
backEnd.addAdmins("Josef", "Cris");
backEnd.printEmployeesInformation();
backEnd.printAdminInformations();
