"use strict";
const employee1 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};
function addCombinable(a, b) {
    if (typeof a === 'string' || typeof b === 'string') { //Now this here is called a type guard
        return a.toString() + b.toString();
    }
    return a + b;
}
const resultCombinable = addCombinable('Max', 'Schwarz');
resultCombinable.split(' ');
const fetchUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: "CEO", description: "My own company" }
};
console.log(fetchUserData === null || fetchUserData === void 0 ? void 0 : fetchUserData.job.title);
// //----------------------------------------------------------------
// type UnknownEmployee = Employee | Admin;
// function printEmployeeInformation(employee: UnknownEmployee) {
//     console.log('Name: ' + employee.name);
//     if('privileges' in employee){
//     console.log('Privileges: ' + employee.privileges);
//     }
//     if('startDate' in employee){
//         console.log('Privileges: ' + employee.startDate);
//         }
// }
// printEmployeeInformation(employee1);
// //----------------------------------------------------------------
// class Car{
//     drive(){
//         console.log('Driving Car...');
//     }
// }
// class Truck{
//     drive(){
//         console.log('Driving Truck...');
//     }
//     loadCargo(amount:number){
//         console.log('Loading cargo...' + amount);
//     }
// }
// type Vehicle = Car | Truck;
// const v1 = new Car();
// const v2 = new Truck();
// function useVehicle(vehicle:Vehicle){
//     vehicle.drive();
//     // //1
//     // if ('loadCargo' in vehicle){
//     // vehicle.loadCargo(1000);
//     // }
//     //2
//     if (vehicle instanceof Truck){
//         vehicle.loadCargo(1000);
//         }
// }
// useVehicle(v1);
// useVehicle(v2);
// //----------------------------------------------------------------
// interface Bird {
//     type: 'bird';
//     flyingSpeed:number;
// }
// interface Horse{
//     type: 'horse'; // discriminated unions
//     runningSpeed:number;
// }
// type Animal = Bird | Horse;
// function moveAnimal(animal: Animal) {
//     let speed;
//     switch(animal.type){
//         case "bird":
//             speed = animal.flyingSpeed;
//             break;
//         case "horse":
//             speed = animal.runningSpeed;
//     }
//     console.log('Moving speed: ' + speed);
// }
// moveAnimal({type: 'bird', flyingSpeed: 10})
// //________________________________________________________________ Type Casting
// // const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
// userInputElement.value = 'Hi there';
