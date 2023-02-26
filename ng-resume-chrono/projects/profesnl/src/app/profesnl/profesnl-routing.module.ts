import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfesnlComponent } from './profesnl.component';

const routes: Routes = [{ path: '', component: ProfesnlComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesnlRoutingModule { }
