import { TestBed } from '@angular/core/testing';

import { SeriesModel } from './series-model.service';

describe('SeriesModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeriesModel = TestBed.get(SeriesModel);
    expect(service).toBeTruthy();
  });
});
