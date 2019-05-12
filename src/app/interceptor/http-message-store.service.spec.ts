import { TestBed } from '@angular/core/testing';

import { HttpMessageStoreService } from './http-message-store.service';

describe('HttpMessageStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpMessageStoreService = TestBed.get(HttpMessageStoreService);
    expect(service).toBeTruthy();
  });
});
