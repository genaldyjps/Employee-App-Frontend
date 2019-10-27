import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractorListingComponent } from './components/contractor-listing/contractor-listing.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [ContractorListingComponent],
  exports: [ContractorListingComponent]
})
export class ContractorsModule { }
