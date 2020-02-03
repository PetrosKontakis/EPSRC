import { TestBed } from '@angular/core/testing';

import { CsvEntityModelService } from './csv-entity-model.service';

describe('CsvEntityModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CsvEntityModelService = TestBed.get(CsvEntityModelService);
    expect(service).toBeTruthy();
  });
});
