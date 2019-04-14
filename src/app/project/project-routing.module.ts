import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProjectComponent } from './project/project.component';
import { NewComponent } from './new/new.component';
import { ViewerComponent } from './viewer/viewer.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent
  },
  {
    path: 'new',
    component: NewComponent
  },
  {
    path: ':id',
    component: ViewerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, FormsModule]
})
export class ProjectRoutingModule { }
