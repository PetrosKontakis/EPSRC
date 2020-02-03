import { TestBed } from '@angular/core/testing';

import { AxisModel } from './axis-model.service';

describe('AxisModel', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AxisModel = TestBed.get(AxisModel);
    expect(service).toBeTruthy();
  });
});
