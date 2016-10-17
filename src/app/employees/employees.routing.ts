import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeListComponent }   from './employee-list.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeNewComponent }  from './employee-new.component';

import { CanDeactivateGuardService }    from './can-deactivate-guard.service';

const employeesRoutes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employee/:id', component: EmployeeDetailComponent },
  { path: 'employees/new', component: EmployeeNewComponent, canDeactivate: [CanDeactivateGuardService] }
];

export const employeesRouting: ModuleWithProviders = RouterModule.forChild(employeesRoutes);