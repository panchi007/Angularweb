import { TestBed } from '@angular/core/testing';

import { PortaldenoticiaService } from './portaldenoticia.service';

describe('PortaldenoticiaService', () => {
  let service: PortaldenoticiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortaldenoticiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
