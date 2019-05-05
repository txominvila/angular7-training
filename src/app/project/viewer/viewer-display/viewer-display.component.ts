import {Component, Input, OnInit} from '@angular/core';
import {ProjectService} from '../../project.service';

@Component({
  selector: 'app-viewer-display',
  templateUrl: './viewer-display.component.html',
  styleUrls: ['./viewer-display.component.sass']
})
export class ViewerDisplayComponent implements OnInit {
  @Input() public projectId: number;
  public header = 'Project';
  public project$: any;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.project$ = this.projectService.project$();
    this.projectService.getProject(this.projectId);
  }
}
