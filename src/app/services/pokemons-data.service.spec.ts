import { TestBed } from '@angular/core/testing';

import { PokemonsDataService } from './pokemons-data.service';

describe('PokemonsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemonsDataService = TestBed.get(PokemonsDataService);
    expect(service).toBeTruthy();
  });
});
