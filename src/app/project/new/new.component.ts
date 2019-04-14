import { Component, OnInit } from '@angular/core';
import {ProjectModel} from '../models/project.model';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.sass']
})
export class NewComponent implements OnInit {

  public header = 'Add new project';
  public projects: ProjectModel[] = environment.projects;
  public project: ProjectModel;

  constructor() { }

  ngOnInit() {
    this.project = this.initializeProject();
  }

  public addNewProject() {
    this.projects.push(this.project);
    this.project = this.initializeProject();
  }

  private initializeProject() {
    const newId = (this.projects.length > 0) ? Math.max.apply(Math, this.projects.map(function(o) { return o.id; })) + 1 : 0;
    return {
      id: newId,
      name: ''
    };
  }

}
