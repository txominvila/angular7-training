import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../environments/environment';
import { HttpMessageStoreService } from '../../../interceptor/http-message-store.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  public copyright = environment.appName;
  public httpMessages$;

  constructor(private messagesStore: HttpMessageStoreService) { }

  ngOnInit() {
    this.httpMessages$ = this.messagesStore.select$();
    this.copyright = '© Copyright ' + (new Date()).getFullYear() + ' ' + this.copyright;
  }
}
