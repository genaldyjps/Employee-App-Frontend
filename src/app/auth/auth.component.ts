import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { DataService } from '../core/services/data.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authForm: FormGroup;
  constructor(private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private dataService: DataService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.authForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.authService.login(this.authForm.value)
      .subscribe(data => {
        console.log(data);
        if(data && data['success'] == true ) {
          this.dataService.setData(data);
          this.router.navigate(['/dashboard']);
        } else if(data && data['err']) {
          this.snackBar.open(data['err'], 'Error', {
            duration: 5000
          });
        } else {
          this.snackBar.open('Login failed', 'Error', {
            duration: 5000
          });
        }
      }, err => {
        if(err.error) {
          if(err.error.details && err.error.details.length > 0) {
            this.snackBar.open(err.error.details[0].message, 'Error', {
              duration: 5000
            });
          } else {
            this.snackBar.open(err.error['err'], 'Error', {
              duration: 5000
            });
          } 
        }
      })

    // if (this.authForm.get('email').value == "admin" && this.authForm.get('password').value == "admin") {
    //   this.router.navigate(['/dashboard']);
    // } else {
    //   alert("Invalid credentials");
    // }
  }

}
