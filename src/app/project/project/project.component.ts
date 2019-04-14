import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {ProjectModel} from '../models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass']
})
export class ProjectComponent implements OnInit {

  public header = 'Project list';
  public projects: ProjectModel[] = environment.projects;

  constructor() { }

  ngOnInit() {
  }
}
