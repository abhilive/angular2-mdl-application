import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmployeeListComponent } from './employee-list.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeNewComponent } from './employee-new.component';

import { employeesRouting } from './employees.routing';

import { EmployeeFilterPipe } from './employee-filter.pipe';
import { EmployeeService } from './employee.service';

import { SearchBoxComponent } from './search-box/search-box.component';
import { ControlMessagesComponent } from './control-messages.component';
import { ValidationService } from './validation.service';

import { ConfirmService } from "./confirm/confirm.service";
import { ConfirmComponent } from './confirm/confirm.component';

import { CanDeactivateGuardService }    from './can-deactivate-guard.service';

import { MaterialDesignLiteUpgradeElementDirective } from './material-design-lite-upgrade-element.directive';

@NgModule({
  imports: [
  	BrowserModule,
  	CommonModule,
  	ReactiveFormsModule,
  	FormsModule,
    employeesRouting
  ],
  declarations: [MaterialDesignLiteUpgradeElementDirective, EmployeeListComponent, EmployeeDetailComponent, ControlMessagesComponent, EmployeeFilterPipe, SearchBoxComponent, ConfirmComponent, EmployeeNewComponent],
  providers: [EmployeeService, ValidationService, ConfirmService, CanDeactivateGuardService]
})

export class EmployeeModule { }