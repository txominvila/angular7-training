import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {ProjectModel} from './models/project.model';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  private projects: ProjectModel[] = environment.projects;

  constructor() { }

  public getProjects() {
    return this.projects;
  }

  public addNewProject(name: string) {
    let project: ProjectModel;
    project = this.initializeProject();
    project.name = name;
    this.projects.push(project);
  }

  public getProject(id: number) {
    const filterValue = id;
    return (this.projects.filter(project => project.id === filterValue))[0];
  }

  private initializeProject() {
    const newId = (this.projects.length > 0) ? Math.max.apply(Math, this.projects.map(function(o) { return o.id; })) + 1 : 0;
    return {
      id: newId,
      name: ''
    };
  }
}
