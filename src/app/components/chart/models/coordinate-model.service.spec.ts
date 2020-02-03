import { TestBed } from '@angular/core/testing';

import { CoordinateModel } from './coordinate-model.service';

describe('CoordinateModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoordinateModel = TestBed.get(CoordinateModel);
    expect(service).toBeTruthy();
  });
});
