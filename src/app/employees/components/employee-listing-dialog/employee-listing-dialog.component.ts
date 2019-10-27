import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-listing-dialog',
  templateUrl: './employee-listing-dialog.component.html',
  styleUrls: ['./employee-listing-dialog.component.scss']
})
export class EmployeeListingDialogComponent implements OnInit {

  employeeForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<EmployeeListingDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.employeeForm = this.fb.group({
      username: [{ value: this.data.username, disabled: true }],
      firstName: [{ value: this.data.firstName, disabled: true }],
      lastName: [{ value: this.data.lastName, disabled: true }],
      email: [{ value: this.data.email, disabled: true }],
      birthDate: [{ value: this.data.birthDate, disabled: true }],
      basicSalary: [{ value: this.data.basicSalary, disabled: true }],
      status: [{ value: this.data.status, disabled: true }],
      group: [{ value: this.data.group, disabled: true }],
      description: [{ value: this.data.description, disabled: true }]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
