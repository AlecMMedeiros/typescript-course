"use strict";
class Department2 {
    constructor(name) {
        this.name = name;
        this.employees = [];
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
Department2.fiscalYear = 2022;
class ACCDepartment2 extends Department2 {
    constructor(...reports) {
        super("Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return `The last report is: ${this.lastReport}`;
        }
        throw new Error("No report found!");
    }
    describe() {
        console.log(`Department: ${this.name}`);
    }
    set mostRecentReport(text) {
        if (!text)
            throw new Error("Please pass a valid text");
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
class ITDepartment2 extends Department2 {
    constructor(...admins) {
        super("BackEnd");
        this.email = "contact@mail.com";
        this.admins = admins;
    }
    describe() {
        console.log(`Department: ${this.name} - E-mail ${this.email}`);
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
const accounting2 = new ACCDepartment2();
const backEnd2 = new ITDepartment2();
console.log(Department2.fiscalYear);
accounting2.describe();
backEnd2.describe();
