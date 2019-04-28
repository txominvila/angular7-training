import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.sass']
})
export class ViewerComponent implements OnInit {
  public projectId: number;


  constructor(activateRoute: ActivatedRoute) {
    this.projectId = parseInt(activateRoute.snapshot.params['id'], 10);
  }

  ngOnInit() { }
}

