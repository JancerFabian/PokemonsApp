import { Component, Input, OnInit } from '@angular/core';
import { FavoritePokemonsService } from '../../favorite-pokemons/services/favorite-pokemons.service';
import { Pokemon } from '../models/Pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  showDefaultImage: boolean = false;
  readonly defaultImageURL: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0gkPyd5dtgGJ0MAZE4cVqG0kKnFy_qEHSYw&usqp=CAU"

  @Input() pokemon: Pokemon;
  constructor(private favSer: FavoritePokemonsService) { }

  ngOnInit(): void {
  }

  onBtnFavorite() {
    this.pokemon.isFavorite ? this.removeFromFavorites() : this.addToFavorites();
  }

  addToFavorites() {
    this.pokemon.isFavorite = true;
    this.favSer.addToFavorites(this.pokemon)
  }

  removeFromFavorites() {
    this.pokemon.isFavorite = false;
    this.favSer.removeFromFavorites(this.pokemon.name)
  }

  onImageError() {
    this.showDefaultImage = true;
  } 

}
