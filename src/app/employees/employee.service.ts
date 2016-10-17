import { Injectable } from '@angular/core';

export class Employee {
	constructor(public id: number, public emp_id: string, public name: string, public phone: string, public email: string) { } ;
}

let EMPLOYEES = [
    new Employee(1, 'EMP01', 'Mr. Nice', '7458932311', 'm.nice@mail.com'),
    new Employee(2, 'EMP02', 'Narco', '7458932312', 'narco@mail.com'),
    new Employee(3, 'EMP03', 'Bombasto', '7458932313', 'bombasto@mail.com'),
    new Employee(4, 'EMP04', 'Celeritas', '7458932314', 'celeritas@mail.com'),
    new Employee(5, 'EMP05', 'Magneta', '7458932315', 'magneta@mail.com'),
    new Employee(6, 'EMP06', 'RubberMan', '7458932316', 'rubberman@mail.com')
];
let employeesPromise = Promise.resolve(EMPLOYEES);

@Injectable()
export class EmployeeService {

  constructor() { }

  /*employees: Employee[] = [
  	new Employee(1, 'EMP1', 'Mr. Nice', '7458932311', 'm.nice@mail.com'),
    new Employee(2, 'EMP2', 'Narco', '7458932312', 'narco@mail.com'),
    new Employee(3, 'EMP3', 'Bombasto', '7458932313', 'bombasto@mail.com'),
    new Employee(4, 'EMP4', 'Celeritas', '7458932314', 'celeritas@mail.com'),
    new Employee(5, 'EMP5', 'Magneta', '7458932315', 'magneta@mail.com'),
    new Employee(6, 'EMP6', 'RubberMan', '7458932316', 'rubberman@mail.com')
  ];*/

  getEmployees() {
  	//return this.employees;
    return employeesPromise; 
  }

  getEmployee(id: number | string) {
    return employeesPromise
      .then(employees => employees.find(employee => employee.id === +id));
  }
  
  addEmployee(values) {
    //this.employees = [...this.employees,employee]; //Push method when you have an array not promise
    employeesPromise.then(employees => {
      var emp_inc_cnt = employees.length + 1;
      var increment_id = emp_inc_cnt;
      var emp_id = 'EMP'+emp_inc_cnt;
      
      //console.log(emp_inc_cnt);
      var employee = new Employee(increment_id, emp_id, values.name, values.phone, values.email);
      employees.push(employee);
    });
  }

  deleteEmployee(employee: Employee, res: boolean) {
      return employeesPromise.then(employees => (res)?employees.splice(employees.indexOf(employee), 1):'');
  }
}
