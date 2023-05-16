class Department{
    // private name: string;
    private employees: string[] = [];

    // constructor(n: string){
    //     this.name = n;
    // }
    constructor(private readonly id: string, public name: string){
        // this.id = id;
        // this.name = n;
    }

    describe(this:Department){
        console.log('Department: ' + this.name);
    }

    addEmployee(employee: string){
        this.employees.push(employee);
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees)
    }
}

class ItDepartment extends Department {
    admins: string;
    constructor(id: string, admins: string){
        super(id, "ItDepartment");
        this.admins = admins;
    }
}

const itDep = new ItDepartment('iTd', 'ITDepartment');

itDep.addEmployee('Anna')
itDep.addEmployee('Max')
itDep.addEmployee('Linda')
// accounting.name = 'NewName';
console.log(itDep);
itDep.printEmployeeInformation();


const accounting = new Department('d1', 'Accounting');
// accounting.employees [2] = 'Anna'
accounting.addEmployee('Anna')
accounting.addEmployee('Max')
accounting.addEmployee('Linda')
// accounting.name = 'NewName';
console.log(accounting);
accounting.printEmployeeInformation();
