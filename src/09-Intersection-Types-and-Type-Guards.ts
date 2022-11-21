type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee; // Creates an intersection between the 2 types. You can also use intersection with interfaces.

const bigBoss: ElevatedEmployee = {
  name: 'Alec',
  privileges: ['create-server'],
  startDate: new Date(),
}

type UnknownEmployee = Admin | Employee

function printEmployeeInfo(emp: UnknownEmployee){ // Using Type Guards to control the flow.
  if ('privileges' in emp){
    console.log(`Privileges: ${emp.privileges}`)
  }
  if ('startDate' in emp){
    console.log(`Start Date: ${emp.startDate}`)
  }  
}

printEmployeeInfo({name: 'Sarah', startDate: new Date()})

class Car {
  drive() {
    console.log('Driving a car!')
  }
}

class Truck {
  drive() {
    console.log('Driving a truck!')
  }
  loadedCargo(amount: number){
    console.log('Transporting '+amount)
  }
}

type Vehicle= Car | Truck;

const Vehicle1 = new Car();
const Vehicle2 = new Truck();

function useVehicle(vehicle: Vehicle){
  vehicle.drive()
  if (vehicle instanceof Truck){ // With classes you can use 'instanceof' to act as a Type Guard.
    vehicle.loadedCargo(1000)
  }
}

useVehicle(Vehicle1);
useVehicle(Vehicle2);

