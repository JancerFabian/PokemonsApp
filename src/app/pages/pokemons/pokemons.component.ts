import { Component, OnInit } from '@angular/core';
import { Pokemon } from './models/Pokemon';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  pokemons: Pokemon[] = []

  private readonly limit: number = 8;
  offset: number = 0;

  btnNextEnabled: boolean
  btnPrevEnabled: boolean

  constructor(private pokeService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons() {

    this.pokeService.getPokemons(this.limit, this.offset).subscribe(r => {
      this.pokemons = r.results;
      this.btnNextEnabled = r.next ? true : false;
      this.btnPrevEnabled = r.previous ? true : false;
      console.log(this.pokemons)
    }, err => {
      console.error(err)
    });

  }

  onBtnNextClic() {

    this.offset += this.limit
    this.getPokemons();

  }

  onBtnPreviusClic() {

    this.offset -= this.limit
    this.getPokemons();
  }


}
