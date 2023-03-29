import { TestBed } from '@angular/core/testing';

import { ServicioreservacionService } from './servicioreservacion.service';

describe('ServicioreservacionService', () => {
  let service: ServicioreservacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioreservacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
