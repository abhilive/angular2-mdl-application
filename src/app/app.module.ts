import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { MaterialDesignLiteUpgradeElementDirective } from './material-design-lite-upgrade-element.directive';

import { EmployeeModule } from './employees/employee.module';

@NgModule({
  declarations: [
    AppComponent,
    MaterialDesignLiteUpgradeElementDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    EmployeeModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
