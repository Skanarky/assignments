var employees = [];

// Name
// Job title
// Salary
// Status

var Employee = function (name, jobTitle, salary) {
    this.constrName = name;
    this.constrJobT = jobTitle;
    this.constrSalary = salary;
    this.constrStatus = "Full Time";
    this.constrPrintEmplInfo = function () {
        console.log("Employee's name: " + this.constrName + "\nJob Title: " + this.constrJobT + "\nSalary: $" + this.constrSalary + "\nJob Status: " + this.constrStatus);
    }
}

Employee.prototype.constrPrintSalaryName = function () {
    console.log(this.constrName + "\n$" + this.constrSalary);
}

var johnM = new Employee("John Malkovich", "Accountant", 60000);
var bobH = new Employee("Bob Harsh", "CTO", 100000);
bobH.constrSalary = 5;
var kennR = new Employee("Kenn Rockwell", "Sales-man", 80000);
kennR.constrStatus = "Part Time";

johnM.constrPrintEmplInfo();
kennR.constrPrintEmplInfo();
bobH.constrPrintEmplInfo();

// johnM.constrPrintSalaryName();

employees.unshift(kennR);
employees.push(johnM);
employees.unshift(bobH);

// console.log(employees);