"use strict";
class Departments {
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
Departments.fiscalYear = 2022;
class Accounting extends Departments {
    constructor(...reports) {
        super("Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new Accounting();
        return Accounting.instance;
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return `The last report is: ${this.lastReport}`;
        }
        throw new Error("No report found!");
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
const accountingDepartment = Accounting.getInstance();
const accountingDepartment2 = Accounting.getInstance();
console.log(accountingDepartment, accountingDepartment2);
