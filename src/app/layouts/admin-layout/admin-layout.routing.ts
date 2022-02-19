import { Routes } from '@angular/router';
import { PokemonsComponent } from 'src/app/pages/pokemons/pokemons.component';
import { FavoritePokemonsComponent } from 'src/app/pages/favorite-pokemons/favorite-pokemons.component';
import { PokemonFavoritesFormComponent } from 'src/app/pages/favorite-pokemons/pokemon-favorites-form/pokemon-favorites-form.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'pokemons', component: PokemonsComponent },
    { path: 'favorites-pokemons', component: FavoritePokemonsComponent },
    { path: 'favorites-pokemons/:name', component: PokemonFavoritesFormComponent },
];
