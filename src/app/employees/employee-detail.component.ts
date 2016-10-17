import { Component, OnInit, AfterViewChecked} from '@angular/core';
import { Location } from '@angular/common';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';

import { Employee, EmployeeService } from './employee.service';
import { ValidationService } from './validation.service';

import { Subscription } from 'rxjs/Subscription';

declare var componentHandler:any;

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})


export class EmployeeDetailComponent implements OnInit, AfterViewChecked  {
  employeeForm: FormGroup;
  employee: Employee;

  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private service: EmployeeService,
    private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
       let id = +params['id']; // (+) converts string 'id' to a number
       this.service.getEmployee(id).then(employee => this.employee = employee);

       /*this.service.getEmployee(id).then(employee => {
          this.employee = employee;
          this.employeeForm = this.formBuilder.group({
            'name': [employee.name, Validators.required],
            'email': [employee.email, [Validators.required, ValidationService.emailValidator]],
            'phone': [employee.phone, [Validators.required, Validators.minLength(10)]]
          });
        });*/

      });
    }

    ngAfterViewChecked(){
        componentHandler.upgradeAllRegistered();
    }

    ngOnDestroy() {
      this.sub.unsubscribe();
    }

    canDeactivate(): Promise<boolean> | boolean {
      // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
      //console.log(this.employeeForm.hasChanges());
      /*if (!this.employee) {
        return true;
      }*/
      //if(this.employeeForm.dirty) {
        //return this.dialogService.confirm('Discard changes?');;
        /*this.dialogService.activate("Discard changes?")
           .then(res => console.log(`Confirmed: ${res}`));*/
      //}
      return true;
    }

    goToEmployees() { 
      //this.router.navigate(['/employees']);
      this.location.back();
    }
}