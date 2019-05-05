import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../project.service';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass']
})
export class ProjectComponent implements OnInit {

  public header = 'Project list';
  public projects$;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projects$ = this.projectService.projects$();
  }

  public onFilter(filterValue: string) {
    this.projects$ = this.projectService.filterProjects(filterValue);
  }
}
