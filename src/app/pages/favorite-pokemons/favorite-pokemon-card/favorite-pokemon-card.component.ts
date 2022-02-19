import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonFavorite } from '../models/PokemonFavorite';
import { FavoritePokemonsService } from '../services/favorite-pokemons.service';

@Component({
  selector: 'app-favorite-pokemon-card',
  templateUrl: './favorite-pokemon-card.component.html',
  styleUrls: ['./favorite-pokemon-card.component.scss']
})
export class FavoritePokemonCardComponent implements OnInit {

  showDefaultImage: boolean = false;
  readonly defaultImageURL: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0gkPyd5dtgGJ0MAZE4cVqG0kKnFy_qEHSYw&usqp=CAU"

  @Input() pokemon: PokemonFavorite;
  @Output() deleted: EventEmitter<string> = new EventEmitter<string>();


  constructor(private favSer: FavoritePokemonsService) { }

  ngOnInit(): void {
  }

  removeFromFavorites() {
    this.favSer.removeFromFavorites(this.pokemon.name)
    this.deleted.emit(this.pokemon.name)
  }

  onImageError() {
    this.showDefaultImage = true;
  }

}
