import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademixRoutingModule } from './academix-routing.module';
import { AcademixComponent } from './academix.component';


@NgModule({
  declarations: [
    AcademixComponent
  ],
  imports: [
    CommonModule,
    AcademixRoutingModule
  ]
})
export class AcademixModule { }
