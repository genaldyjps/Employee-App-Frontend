import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListingComponent } from './components/employee-listing/employee-listing.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './services/employee.service';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeListingDialogComponent } from './components/employee-listing-dialog/employee-listing-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [EmployeeListingComponent, EmployeeFormComponent, EmployeeListingDialogComponent],
  exports: [EmployeeListingComponent, EmployeeFormComponent, EmployeeListingDialogComponent],
  providers: [EmployeeService],
  entryComponents: [EmployeeListingDialogComponent]
})
export class EmployeesModule { }
