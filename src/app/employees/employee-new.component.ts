import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';

import { Employee, EmployeeService } from './employee.service';
import { ValidationService } from './validation.service';

import { ConfirmService } from "./confirm/confirm.service";
import { Subscription } from 'rxjs/Subscription';

declare var componentHandler:any;

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})


export class EmployeeNewComponent implements OnInit  {
  employeeForm: FormGroup;
  employee: Employee;

  submitted = false;

  active = true;

  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private service: EmployeeService,
    private formBuilder: FormBuilder, 
    private confirmService: ConfirmService
    ) { }

    ngOnInit() {
    	this.employeeForm = new FormGroup({
	        name: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
	        email: new FormControl('', [<any>Validators.required, ValidationService.emailValidator]),
	        phone: new FormControl('', [<any>Validators.required, <any>Validators.minLength(10)])
	    });
      /*this.employeeForm = this.formBuilder.group({
        'name': ['', Validators.required],
        'email': ['', [Validators.required, ValidationService.emailValidator]],
        'phone': ['', [Validators.required, Validators.minLength(10)]]
      });*/
    }

    ngAfterViewChecked(){
        componentHandler.upgradeAllRegistered();
        console.log('AfterViewChecked');
    }

    /*ngOnDestroy() {
      this.sub.unsubscribe();
    }*/

    canDeactivate(): Promise<boolean> | boolean {
      // Allow synchronous navigation (`true`) if no employeeForm is unchanged

      if(this.employeeForm.dirty) {
        return this.confirmService.activate('Discard changes?');
      }
      return true;
    }

    newEmployee() {
    	this.ngOnInit();
    	this.active = true;
    	this.submitted = false;
    	setTimeout(() => this.active = true, 0);
    }

    goToEmployees() { 
      //this.router.navigate(['/employees/']);
      this.location.back();
    }

    onSubmit(values: any[]) {
    	if (this.employeeForm.dirty && this.employeeForm.valid) {
	        this.submitted = true;
	        this.service.addEmployee(values);
	        this.ngOnInit(); //Reset the form this doesn't run the canDeactivate promise
	        this.goToEmployees();
	    }
    }
}
