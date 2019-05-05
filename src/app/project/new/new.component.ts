import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../project.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.sass']
})
export class NewComponent implements OnInit {

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() { }

  public onProjectCreate(project: string) {
    this.projectService.addNewProject(project);
    return this.router.navigate(['projects']);
  }
}
