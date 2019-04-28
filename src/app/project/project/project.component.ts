import { Component, OnInit } from '@angular/core';
import {ProjectModel} from '../models/project.model';
import {ProjectService} from '../project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass']
})
export class ProjectComponent implements OnInit {

  public header = 'Project list';
  public projects: ProjectModel[];
  public projectsFilteredByName: ProjectModel[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
    this.projectsFilteredByName = this.projects;
  }

  public onFilter(filterValue: string) {
    this.projectsFilteredByName = this.projects.filter(project => project.name.toLowerCase().includes(filterValue.toLowerCase()));
  }
}
