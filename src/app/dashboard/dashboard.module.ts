import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from '../shared/material.module';
import { EmployeesModule } from '../employees/employees.module';
import { ContractorsModule } from '../contractors/contractors.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    EmployeesModule,
    ContractorsModule,
    MaterialModule
  ],
  declarations: [DashboardComponent, SideNavComponent, ToolbarComponent]
})
export class DashboardModule { }
