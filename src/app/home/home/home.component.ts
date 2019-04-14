import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public header = 'Projects';
  public projects = environment.projects;
  public projectCount = 0;
  public counterClass = 'badge badge-danger';

  constructor() { }

  ngOnInit() {
    this.projectCount = this.projects.length;
  }

}
