import { TestBed } from '@angular/core/testing';

import { PokemonByUrlService } from './pokemon-by-url.service';

describe('PokemonByUrlService', () => {
  let service: PokemonByUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonByUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
