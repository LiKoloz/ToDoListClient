import { TestBed } from '@angular/core/testing';

import { RegistrarionService } from './registrarion.service';

describe('RegistrarionService', () => {
  let service: RegistrarionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrarionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
