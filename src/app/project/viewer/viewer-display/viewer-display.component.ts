import {Component, Input, OnInit} from '@angular/core';
import {ProjectModel} from '../../models/project.model';
import {ProjectService} from '../../project.service';

@Component({
  selector: 'app-viewer-display',
  templateUrl: './viewer-display.component.html',
  styleUrls: ['./viewer-display.component.sass']
})
export class ViewerDisplayComponent implements OnInit {
  @Input() public projectId: number;
  public header = 'Project';
  public projects: ProjectModel[];
  public project: ProjectModel;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
    const filterValue = this.projectId;
    this.project = (this.projects.filter(project => project.id === filterValue))[0];
  }
}
