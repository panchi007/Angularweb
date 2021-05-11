import { TestBed } from '@angular/core/testing';

import { EstadisticacovidService } from './estadisticacovid.service';

describe('EstadisticacovidService', () => {
  let service: EstadisticacovidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadisticacovidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
