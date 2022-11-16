abstract class Department2 { //Abstract classes cannot be instantiated themselves
  protected employees: string[] = [];
  static fiscalYear: number = 2022;

  constructor(public readonly name: string) {}

  abstract describe(this: Department2): void; //
  // Now we can say that every instance must have a method called describe. But, they are free to implement it in different ways.
  addEmployees(this: Department2, employee: string) {
    this.employees.push(employee);
  }

  printEmployeesInformation(this: Department2) {
    console.log("--------Employees Information---------");
    console.log(`${this.name} has ${this.employees.length} employee(s)`);
    console.log(this.employees.join(" , "));
    console.log("--------------------------------------");
  }
}

class ACCDepartment2 extends Department2 {
  private reports: string[];
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return `The last report is: ${this.lastReport}`;
    }

    throw new Error("No report found!");
  }

  describe(this: Department2) {
    console.log(`Department: ${this.name}`);
  }

  set mostRecentReport(text: string) {
    if (!text) throw new Error("Please pass a valid text");
    this.addReport(text);
  }

  constructor(...reports: string[]) {
    super("Accounting");
    this.reports = reports;
    this.lastReport = reports[0];
  }

  addReport(this: ACCDepartment2, report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }

  listReports(this: ACCDepartment2) {
    console.log(this.reports);
  }
}

class ITDepartment2 extends Department2 {
  private admins: string[];
  private email: string = "contact@mail.com";

  constructor(...admins: string[]) {
    super("BackEnd");
    this.admins = admins;
  }

  describe(this: ITDepartment2) {
    console.log(`Department: ${this.name} - E-mail ${this.email}`);
  }

  addEmployees(this: ITDepartment2, employee: string) {
    // Overriding Department class property;
    if (employee.length < 3) {
      console.log(
        `IT's employees names must have more than 01 characters length.`
      );
      return;
    }
    this.employees.push(employee);
  }

  addAdmins(this: ITDepartment2, ...admins: string[]) {
    this.admins.push(...admins);
  }

  printAdminInformations(this: ITDepartment2) {
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
