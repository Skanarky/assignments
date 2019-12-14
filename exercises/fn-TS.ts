class Employee {
    constructor(public name: string, public salary: number) {}
}

class Department {
    constructor(public employees: Employee[]) {}

    works(employee: Employee): boolean {
        return this.employees.filter(e => e.name === employee.name).length > 0;
    }
}

type Predicate<T> = (val: T) => boolean;

// - - - - - - - -

const empls = [
    new Employee("Jim", 100),
    new Employee("John", 200),
    new Employee("Liz", 120),
    new Employee("Penny", 30),
    new Employee("Penny2", 130),
    new Employee("Penny3", 230)
];

const sales = new Department([empls[1], empls[2], empls[5]]);

const cond = [
    (obj: Employee) => obj.salary > 100,
    (obj: Employee) => obj.name === 'Liz' || obj.name === 'John',
    () => sales !== undefined && sales !== null,
    (obj: Employee) => sales.works(obj)
];

// - - - - - - - -

// very generic fns vvv
function checkCond<T>(predicArr: Predicate<T>[]): Predicate<T> {
    return (e) => predicArr.every(p => p(e));
}

function average(nums: number[]): number {
    return nums.length === 0 ? 0 : nums.reduce((a,b) => a + b, 0) / nums.length;
}
// very generic fns ^^^

// the less generic fns vvv
function emplSalaries(empls: Employee[], conditions: Predicate<Employee>[]): number[] {
    return empls.filter(checkCond(conditions)).map(e => e.salary);

    // OR, with less iterations vvv

    // return empls.map(e => {
    //     if (checkCond(conditions)(e)) {
    //         return e.salary;
    //     }
    // });

}

function averSal(nums: number[], conditions: Predicate<Employee>[]) {
    return average(emplSalaries(empls, cond));
}
// the less generic fns ^^^





// expect(averSal(empls, cond).toEqual(160);