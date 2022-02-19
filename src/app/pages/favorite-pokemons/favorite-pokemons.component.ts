import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemons/models/Pokemon';
import { PokemonService } from '../pokemons/services/pokemon.service';
import { PokemonFavorite } from './models/PokemonFavorite';
import { FavoritePokemonsService } from './services/favorite-pokemons.service';

@Component({
  selector: 'app-favorite-pokemons',
  templateUrl: './favorite-pokemons.component.html',
  styleUrls: ['./favorite-pokemons.component.scss']
})
export class FavoritePokemonsComponent implements OnInit {

  pokemons: PokemonFavorite[] = []

  constructor(private favServ: FavoritePokemonsService) { }

  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons() {

    this.pokemons = this.favServ.getFavorites();

    // this.pokeService.getPokemons(this.limit, this.offset).subscribe(r => {
    //   this.pokemons = r.results;
    //   this.btnNextEnabled = r.next ? true : false;
    //   this.btnPrevEnabled = r.previous ? true : false;
    //   console.log(this.pokemons)
    // }, err => {
    //   console.error(err)
    // });

  }

  onDeleteFavorite(event: string) {
    console.log(`Pokemon ${event} ha sido eliminado de favoritos`)
    this.getPokemons();
  }


}
