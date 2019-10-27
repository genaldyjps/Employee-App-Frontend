import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  maxDate = new Date();
  employeeForm: FormGroup;
  private employee: Employee;

  constructor(private fb: FormBuilder,
              private employeeService: EmployeeService,
              private router: Router,
              private snackBar: MatSnackBar,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.createForm();
    this.setEmployeeToForm();
  }

  onSubmit() {
    if(this.employee) {
      this.employeeService.updateEmployee(this.employee._id, this.employeeForm.value)
      .subscribe(data => {
        this.snackBar.open('Employee updated', 'Success', {
          duration: 2000
        })
        this.router.navigate(['dashboard', 'employees']);
      }, err => {
        console.error(err);
      })
    } else {
      this.employeeService.createEmployee(this.employeeForm.value)
      .subscribe(data => {
        this.snackBar.open('Employee created!', 'Success', {
          duration: 2000
        });
        this.employeeForm.reset();
        this.router.navigate(['dashboard', 'employees']);
      },
      err => {
        console.error(err);
      });
    }
  }

  listBtnHandler() {
    this.router.navigate(['dashboard', 'employees']);
  }

  setEmployeeToForm() {
    this.route.params
    .subscribe(params => {
      let id = params['id'];
      if(!id) {
        return;
      }
      this.employeeService.getEmployee(id)
      .subscribe(employee => {
        this.employee = employee;
        this.employeeForm.patchValue(this.employee);
      }, err => {

      })
    });
  }

  createForm() {
    this.employeeForm = this.fb.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      birthDate: ['', Validators.required],
      basicSalary: ['', Validators.required],
      status: ['', Validators.required],
      group: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

}
