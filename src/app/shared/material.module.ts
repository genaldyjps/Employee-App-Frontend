import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule, MatListModule, MatCardModule, MatTableModule, MatMenuModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatSelectModule, MatNativeDateModule, MatSnackBarModule, MatPaginatorModule, MatSortModule, MatDialogModule } from '@angular/material';

const exportedMatModules = [
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatCardModule,
  MatTableModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatSelectModule,
  MatNativeDateModule,
  MatSnackBarModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule
]

@NgModule({
  imports: [
    CommonModule,
    ...exportedMatModules
  ],
  exports: [
    ...exportedMatModules
  ],
  declarations: []
})
export class MaterialModule { }
