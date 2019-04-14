import { Component, OnInit } from '@angular/core';
import {ProjectModel} from '../models/project.model';
import {environment} from '../../../environments/environment';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.sass']
})
export class ViewerComponent implements OnInit {

  public header = 'Project';
  public projects: ProjectModel[] = environment.projects;
  public project: ProjectModel;
  public projectId: number;


  constructor(activateRoute: ActivatedRoute) {
    this.projectId = parseInt(activateRoute.snapshot.params['id'], 10);
  }

  ngOnInit() {
    const filterValue = this.projectId;
    this.project = (this.projects.filter(project => project.id === filterValue))[0];
  }
}

