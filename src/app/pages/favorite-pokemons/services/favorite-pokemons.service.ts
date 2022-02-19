import { Injectable } from '@angular/core';
import { Pokemon } from '../../pokemons/models/Pokemon';
import { PokemonFavorite } from '../models/PokemonFavorite';

@Injectable({
  providedIn: 'root'
})
export class FavoritePokemonsService {

  private readonly STORAGE_KEY: string = "favs"
  private favorites: PokemonFavorite[] = []

  constructor() { }

  addToFavorites(pokemon: Pokemon): void {

    let favorite: PokemonFavorite = {
      name: pokemon.name,
      imageUrl: pokemon.imageUrl,
      alias: "",
      createdAt: new Date()
    }

    this.favorites.push(favorite);
    this.saveChanges();
  }

  removeFromFavorites(name: string): void {
    this.favorites = this.favorites.filter(p => p.name != name);
    this.saveChanges()
  }

  isFavorite(name: string): boolean {
    return this.favorites.some(p => p.name === name);
  }

  getFavorites(): PokemonFavorite[] {

    this.favorites = JSON.parse(sessionStorage.getItem(this.STORAGE_KEY));
    return this.favorites;
  }

  saveChanges(): void {
    sessionStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.favorites));
    console.log(this.favorites)
  }

  editAlias(name: string, alias: string) {
    let pokemon = this.favorites.find(p => p.name === name);
    pokemon.alias = alias;

    this.saveChanges()
  }

  getOne(name: string): PokemonFavorite {
    return this.favorites.find(p => p.name === name)
  }


}
