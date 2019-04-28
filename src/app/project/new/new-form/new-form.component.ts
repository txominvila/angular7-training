import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.sass']
})
export class NewFormComponent implements OnInit {

  @Output() public project = new EventEmitter<string>();
  public header = 'Add new project';
  public name: string;

  constructor() { }

  ngOnInit() {
  }

}
