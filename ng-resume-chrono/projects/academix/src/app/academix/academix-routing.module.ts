import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademixComponent } from './academix.component';

const routes: Routes = [{ path: '', component: AcademixComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademixRoutingModule { }
