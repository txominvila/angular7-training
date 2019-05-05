import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../project/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public header = 'Projects';
  public projectCount = 0;
  public counterClass = 'badge badge-danger';
  public projects$;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projects$ = this.projectService.projects$();
  }
}
