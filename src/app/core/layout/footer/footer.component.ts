import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  copyright = environment.appName;

  constructor() { }

  ngOnInit() {
    this.copyright = '© Copyright ' + (new Date()).getFullYear() + ' ' + this.copyright;
  }

}
