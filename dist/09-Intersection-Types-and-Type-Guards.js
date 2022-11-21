"use strict";
const bigBoss = {
    name: 'Alec',
    privileges: ['create-server'],
    startDate: new Date(),
};
function printEmployeeInfo(emp) {
    if ('privileges' in emp) {
        console.log(`Privileges: ${emp.privileges}`);
    }
    if ('startDate' in emp) {
        console.log(`Start Date: ${emp.startDate}`);
    }
}
printEmployeeInfo({ name: 'Sarah', startDate: new Date() });
class Car {
    drive() {
        console.log('Driving a car!');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck!');
    }
    loadedCargo(amount) {
        console.log('Transporting ' + amount);
    }
}
const Vehicle1 = new Car();
const Vehicle2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadedCargo(1000);
    }
}
useVehicle(Vehicle1);
useVehicle(Vehicle2);
