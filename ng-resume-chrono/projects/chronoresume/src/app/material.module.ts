import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import {   MatButtonModule } from '@angular/material/button';

const matModules = [
  MatSidenavModule,
  MatIconModule,
  MatButtonModule
];
@NgModule({
  imports: matModules,
  exports: matModules
})
export class MaterialModule { }
