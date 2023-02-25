import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'prof', loadChildren: () => import('./professional/professional.module').then(m => m.ProfessionalModule) }, { path: 'acad', loadChildren: () => import('./academics/academics.module').then(m => m.AcademicsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
