import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  private api = 'https://api-base.herokuapp.com/api/pub/projects';
  private _project$ = new BehaviorSubject<any>(null);
  private _projects$ = new BehaviorSubject<any[]>([]);

  public projects$ = () => this._projects$.asObservable();
  public project$ = () => this._project$.asObservable();

  constructor(private httpClient: HttpClient) {
    this.getProjects();
  }

  public getProjects() {
    this.httpClient
        .get<any[]>(this.api)
        .subscribe(
            apiResult => {
              this._projects$.next(apiResult);
            }
        );
  }

  public getProject(id: number) {
    this.httpClient
        .get<any[]>(this.api + '/' + id)
        .subscribe(
            apiResult => {
              this._project$.next(apiResult);
            }
        );
  }

  public addNewProject(name: string) {
    const newProject = {
      name: name,
      creator: 't4n'
    };

    this.httpClient
        .post(this.api, newProject)
        .subscribe(
            () => {
              this.getProjects();
            }
        );
  }

  public filterProjects(filterValue: string) {
    return this.projects$().pipe(
        map(projects => projects.filter(project => (project.name ? project.name : '').toLowerCase().includes(filterValue.toLowerCase())))
    );
  }
}
