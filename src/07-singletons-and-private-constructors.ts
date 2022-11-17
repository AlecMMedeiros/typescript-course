class Departments {
  protected employees: string[] = [];
  static fiscalYear: number = 2022;

  constructor(public readonly name: string) {}

  describe(this: Departments) {
    console.log(`Department: ${this.name}`);
  }

  addEmployees(this: Departments, employee: string) {
    this.employees.push(employee);
  }

  printEmployeesInformation(this: Departments) {
    console.log("--------Employees Information---------");
    console.log(`${this.name} has ${this.employees.length} employee(s)`);
    console.log(this.employees.join(" , "));
    console.log("--------------------------------------");
  }
}

class Accounting extends Departments {
  private reports: string[];
  private lastReport: string;
  private static instance: Accounting; // Now you have a static property that can be only accessed from inside the class, and this property stores a instance of Accounting.

  private constructor(...reports: string[]) {
    // by adding 'private' you're ensuring that constructor isn't accessible from outside the class.
    super("Accounting");
    this.reports = reports;
    this.lastReport = reports[0];
  }

  static getInstance() {
    // Here you're creating an static method that checks if an instance of Accountig already exists. Ensuring that only one instance will exist.
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

  set mostRecentReport(text: string) {
    if (!text) throw new Error("Please pass a valid text");
    this.addReport(text);
  }

  addReport(this: Accounting, report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }

  listReports(this: Accounting) {
    console.log(this.reports);
  }
}

const accountingDepartment = Accounting.getInstance(); // Here you create a new instance using the static method.
const accountingDepartment2 = Accounting.getInstance(); // If you try to create another instance. the return will be the same instance create at the previous step.

console.log(accountingDepartment, accountingDepartment2); // accountingDepartment and accountingDepartment2 are the same instance of Accounting.
