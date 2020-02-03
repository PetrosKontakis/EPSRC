import { TestBed } from '@angular/core/testing';

import { CsvModelService } from './csv-model.service';

describe('CsvDataModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CsvModelService = TestBed.get(CsvModelService);
    expect(service).toBeTruthy();
  });
});
