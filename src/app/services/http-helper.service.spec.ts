import { TestBed } from '@angular/core/testing';

import { HttpHelper } from './http-helper.service';

describe('HttpHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpHelper = TestBed.get(HttpHelper);
    expect(service).toBeTruthy();
  });
});
