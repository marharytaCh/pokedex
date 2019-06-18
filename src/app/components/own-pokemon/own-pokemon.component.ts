import { Component, OnInit } from '@angular/core';
// import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { IPokemon } from '../../model';
import { PokemonsDataService } from '../../services/pokemons-data.service';


@Component({
  selector: 'app-own-pokemon',
  templateUrl: './own-pokemon.component.html',
  styleUrls: ['./own-pokemon.component.scss']
})
export class OwnPokemonComponent implements OnInit {

  pokemon: IPokemon;

  constructor(//private location: Location,
              private router: Router,
              private pokemonsDataService: PokemonsDataService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    let pokemonId = this.activeRoute.snapshot.params.id;
    this.pokemon = this.pokemonsDataService.getPokemon(+pokemonId);
  }

  goBackLink(): void {
    // this.location.back();
    this.router.navigate([''])
  }

}
