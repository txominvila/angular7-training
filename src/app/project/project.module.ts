import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project/project.component';
import { ViewerComponent } from './viewer/viewer.component';
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [ProjectComponent, ViewerComponent, NewComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
