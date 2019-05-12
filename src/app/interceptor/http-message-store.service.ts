import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpMessageStoreService {

  private messages = [];
  private messages$ = new BehaviorSubject<any[]>([]);

  constructor() { }

  public select$ = () => this.messages$.asObservable();

  public dispatchMessage(message) {
    this.messages.push(message);
    this.messages$.next(message);
  }
}
