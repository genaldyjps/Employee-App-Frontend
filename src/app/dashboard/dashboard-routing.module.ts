import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { EmployeeListingComponent } from '../employees/components/employee-listing/employee-listing.component';
import { ContractorListingComponent } from '../contractors/components/contractor-listing/contractor-listing.component';
import { EmployeeFormComponent } from '../employees/components/employee-form/employee-form.component';
import { AuthGuardService } from '../core/services/auth-guard.service';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  canActivate: [AuthGuardService],
  children:[
    {
      path: 'employees',
      component: EmployeeListingComponent,
      canActivateChild: [AuthGuardService]
    },
    {
      path: 'employees/new',
      component: EmployeeFormComponent,
      canActivateChild: [AuthGuardService]
    },
    {
      path: 'employees/:id',
      component: EmployeeFormComponent,
      canActivateChild: [AuthGuardService]
    },
    {
      path: 'contractors',
      component: ContractorListingComponent,
      canActivateChild: [AuthGuardService]
    },
    {
      path: '**',
      redirectTo: 'employees',
      canActivateChild: [AuthGuardService]
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
