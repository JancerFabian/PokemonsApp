import { Routes } from '@angular/router';
import { PokemonsComponent } from 'src/app/pages/pokemons/pokemons.component';
import { FavoritePokemonsComponent } from 'src/app/pages/favorite-pokemons/favorite-pokemons.component';
import { TablesComponent } from 'src/app/pages/tables/tables.component';

export const AdminLayoutRoutes: Routes = [
    // { path: 'dashboard', component: DashboardComponent },
    { path: 'pokemons', component: PokemonsComponent },
    { path: 'favorites-pokemons', component: FavoritePokemonsComponent },
    // { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables', component: TablesComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent }
];
