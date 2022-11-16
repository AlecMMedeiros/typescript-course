class Department {
  // private name: string; // field of a class. Also you can set a initial value like: name:string = "Accounting". Fields are, in the end just translated to properties of the object.
  protected employees: string[] = []; // set to 'private' to ensure that it can be only used inside the class methods or protected to extended classes;
  static fiscalYear: number = 2022; // static methods or proporties are detached from intances. So you can access it directly from the main class.

  constructor(public readonly name: string) {
    // You also can declare the fields directly at the constructor
  }

  describe(this: Department) {
    //1 - Creating a new method. 2- Using 'this : Department' I'm ensuring that when 'describe' is executed, 'this' will always refer to an instance that's based on department class.
    console.log(`Department: ${this.name}`);
  }

  addEmployees(this: Department, employee: string) {
    this.employees.push(employee);
  }

  printEmployeesInformation(this: Department) {
    console.log("--------Employees Information---------");
    console.log(`${this.name} has ${this.employees.length} employee(s)`);
    console.log(this.employees.join(" , "));
    console.log("--------------------------------------");
  }
}

class ACCDepartment extends Department {
  private reports: string[];
  private lastReport: string;

  get mostRecentReport() { // Besides lastReport to be private, you can access it by using a 'get'
    if (this.lastReport) {
      return `The last report is: ${this.lastReport}`
    }

    throw new Error('No report found!')
  }

  set mostRecentReport(text: string){ // getters & setters can be use as 'properties'
    if (!text) throw new Error('Please pass a valid text')
    this.addReport(text);
  }

  constructor(...reports: string[]) {
    super("Accounting");
    this.reports = reports;
    this.lastReport = reports[0];
  }

  addReport(this: ACCDepartment, report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }

  listReports(this: ACCDepartment) {
    console.log(this.reports);
  }
}

class ITDepartment extends Department {
  private admins: string[];

  constructor(...admins: string[]) {
    super("BackEnd");
    this.admins = admins;
  }

  addEmployees(this: ITDepartment, employee: string) {
    // Overriding Department class property;
    if (employee.length < 3) {
      console.log(
        `IT's employees names must have more than 01 characters length.`
      );
      return;
    }
    this.employees.push(employee);
  }

  addAdmins(this: ITDepartment, ...admins: string[]) {
    this.admins.push(...admins);
  }

  printAdminInformations(this: ITDepartment) {
    console.log("--------Admins Information---------");
    console.log(`${this.name} has ${this.admins.length} admin(s)`);
    console.log(this.admins.join(" , "));
    console.log("-----------------------------------");
  }
}

const accounting = new ACCDepartment();
const backEnd = new ITDepartment();

console.log(Department.fiscalYear)

accounting.describe();
accounting.addEmployees("Jannet");
//console.log(accounting.mostRecent);
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
