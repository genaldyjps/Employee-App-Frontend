import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import { Router } from '@angular/router';
import { MatSnackBar, MatPaginator, MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { remove } from 'lodash';
import { EmployeeListingDialogComponent } from '../employee-listing-dialog/employee-listing-dialog.component';

@Component({
  selector: 'app-employee-listing',
  templateUrl: './employee-listing.component.html',
  styleUrls: ['./employee-listing.component.scss']
})
export class EmployeeListingComponent implements OnInit {

  constructor(private employeeService: EmployeeService,
              private router: Router,
              private snackBar: MatSnackBar,
              public dialog: MatDialog) { }

  displayedColumns = [
    'username', 
    // 'firstName', 
    // 'lastName',
    // 'email', 
    'birthDate', 
    'basicSalary', 
    'status', 
    'group', 
    // 'description', 
    'action'
  ];
  // dataSource: Employee[] = [];
  dataSource: MatTableDataSource<Employee>;
  resultsLength = 0;
  // employeeData: Employee;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // ngAfterViewInit() {
  //   // console.log("dataSource paginator", this.dataSource.paginator);
  //   console.log("paginator", this.paginator);
  //   this.dataSource.paginator = this.paginator;
  //   // this.dataSource.sort = this.sort;
  // }
  
  createBtnHandler() {
    this.router.navigate(['dashboard', 'employees', 'new']);
  }

  editBtnHandler(id) {
    this.router.navigate(['dashboard', 'employees', id]);
  }
  
  deleteBtnHandler(id) {
    this.employeeService.deleteEmployee(id)
    .subscribe(data => {
      const removedItems = remove(this.dataSource.data, (item) => {
         return item._id == data._id;
      });
      this.dataSource.data = [...this.dataSource.data];
      this.snackBar.open('Employee deleted!', 'Success', {
        duration: 2000
      });
      console.log(data);
    }, err => {
      console.error(err);
    });
  }

  viewBtnHandler(employeeData) {
    console.log("employee", employeeData);
    let dialogRef = this.dialog.open(EmployeeListingDialogComponent, {
      width: '600px',
      data: employeeData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    this.populateEmployees();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  private populateEmployees() {
    this.employeeService.getEmployees().subscribe(
      data => {
        this.dataSource = new MatTableDataSource<Employee>(data);
        this.resultsLength = data.length;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      err => {
        console.log(err);
      });
  }

}
