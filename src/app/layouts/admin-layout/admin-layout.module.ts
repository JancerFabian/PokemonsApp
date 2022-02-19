import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FavoritePokemonsComponent } from 'src/app/pages/favorite-pokemons/favorite-pokemons.component';
import { PokemonFavoritesFormComponent } from 'src/app/pages/favorite-pokemons/pokemon-favorites-form/pokemon-favorites-form.component';
import { PokemonCardComponent } from 'src/app/pages/pokemons/pokemon-card/pokemon-card.component';
import { PokemonsComponent } from 'src/app/pages/pokemons/pokemons.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    PokemonsComponent,
    FavoritePokemonsComponent,
    PokemonCardComponent,
    PokemonFavoritesFormComponent
  ]
})

export class AdminLayoutModule { }
