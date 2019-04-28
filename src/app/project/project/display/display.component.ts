import { Component, OnInit, Input } from '@angular/core';
import {ProjectModel} from '../../models/project.model';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.sass']
})
export class DisplayComponent implements OnInit {

  @Input() public projects: ProjectModel[];

  constructor() { }

  ngOnInit() {
  }

}
