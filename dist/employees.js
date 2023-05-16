"use strict";
class Department {
    // constructor(n: string){
    //     this.name = n;
    // }
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private name: string;
        this.employees = [];
        // this.id = id;
        // this.name = n;
    }
    describe() {
        console.log('Department: ' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ItDepartment extends Department {
    constructor(id, admins) {
        super(id, "ItDepartment");
        this.admins = admins;
    }
}
const itDep = new ItDepartment('iTd', 'ITDepartment');
itDep.addEmployee('Anna');
itDep.addEmployee('Max');
itDep.addEmployee('Linda');
// accounting.name = 'NewName';
console.log(itDep);
itDep.printEmployeeInformation();
const accounting = new Department('d1', 'Accounting');
// accounting.employees [2] = 'Anna'
accounting.addEmployee('Anna');
accounting.addEmployee('Max');
accounting.addEmployee('Linda');
// accounting.name = 'NewName';
console.log(accounting);
accounting.printEmployeeInformation();
