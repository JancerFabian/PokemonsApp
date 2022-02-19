import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, pipe } from 'rxjs';
import { FavoritePokemonsService } from '../../favorite-pokemons/services/favorite-pokemons.service';
import { Pokemon } from '../models/Pokemon';
import { PokemonResponse } from '../models/PokemonResponse';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseURL: string = "https://pokeapi.co/api/v2/pokemon";
  private imagBaseURL: string = "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/";

  constructor(private http: HttpClient, private favServ: FavoritePokemonsService) {


  }

  public getPokemons(limit: number, offset: number): Observable<PokemonResponse> {

    let params = new HttpParams()
      .set('limit', limit)
      .set('offset', offset);

    return this.http.get<PokemonResponse>(this.baseURL, { params })
      .pipe(
        map((response) => {

          response.results.forEach(p => {
            let pokemonID: string = p.url.charAt(p.url.length - 2)
            p.id = pokemonID
            p.imageUrl = this.imagBaseURL + p.id + ".svg";
            p.isFavorite = this.favServ.isFavorite(p.name);
          });

          return response;
        }),
        catchError((err) => {
          console.error(err);
          throw err;
        }
        ))
  }



}
