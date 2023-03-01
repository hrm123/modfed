import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './material.module';
import { MyResumeComponent } from './my-resume/my-resume.component';

const routes: Routes =  [
  {
    path: '',
    component: MyResumeComponent,
    pathMatch: 'full'
  },
  {
    path: 'academix',
    loadChildren: () => import('academix/Module').then(m => {
      console.log('academix module', m);
      return m.AcademixModule;
    } )
  },
  {
    path: 'profesnl',
    loadChildren: () => import('profesnl/Module').then(m => m.ProfesnlModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MaterialModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
