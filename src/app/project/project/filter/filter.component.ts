import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent implements OnInit {

  @Output() public filter = new EventEmitter<string>();
  public filterValue: string;

  constructor() { }

  ngOnInit() {
  }

}
