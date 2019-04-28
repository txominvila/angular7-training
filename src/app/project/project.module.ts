import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project/project.component';
import { ViewerComponent } from './viewer/viewer.component';
import { NewComponent } from './new/new.component';
import { DisplayComponent } from './project/display/display.component';
import { FilterComponent } from './project/filter/filter.component';
import { ViewerDisplayComponent } from './viewer/viewer-display/viewer-display.component';
import { NewFormComponent } from './new/new-form/new-form.component';

@NgModule({
  declarations: [ProjectComponent, ViewerComponent, NewComponent, DisplayComponent, FilterComponent, ViewerDisplayComponent, NewFormComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
