import { Component, ViewChild, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Employee, EmployeeService } from './employee.service';

import { SearchBoxComponent } from './search-box/search-box.component'; //Added By Me

import { ConfirmService } from "./confirm/confirm.service";

declare var componentHandler:any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  term: any;

  @ViewChild(SearchBoxComponent) search_box:SearchBoxComponent;

  constructor(
    private router: Router,
    public employeeService: EmployeeService,
    public confirmService: ConfirmService) { }

    ngOnInit() { 
      this.employeeService.getEmployees().then(employees => this.employees = employees);
      componentHandler.upgradeDom();
    }

    /* OnSelect: Not In Use*/
    /*onSelect(employee: Employee) {
      this.router.navigate(['/employee', employee.id]);
    }*/

    deleteEmployee(employee: Employee){
      this.confirmService.activate("Are you sure?")
           .then(res => {
                if(res) {
                    this.employeeService.deleteEmployee(employee, res);
                    //this.search_box.update.emit('mag');
                    this.term = '';
                  }
              });
    }

    addNewEmployee() { this.router.navigate(['/employees/new']); }

}

/*
Ref Confirm Dialog : http://koscielniak.me/post/2016/03/angular2-confirm-dialog-component/
*/