import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesnlRoutingModule } from './profesnl-routing.module';
import { ProfesnlComponent } from './profesnl.component';


@NgModule({
  declarations: [
    ProfesnlComponent
  ],
  imports: [
    CommonModule,
    ProfesnlRoutingModule
  ]
})
export class ProfesnlModule { }
