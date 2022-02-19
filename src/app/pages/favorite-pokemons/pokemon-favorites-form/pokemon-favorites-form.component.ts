import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonFavorite } from '../models/PokemonFavorite';
import { FavoritePokemonsService } from '../services/favorite-pokemons.service';

@Component({
  selector: 'app-pokemon-favorites-form',
  templateUrl: './pokemon-favorites-form.component.html',
  styleUrls: ['./pokemon-favorites-form.component.scss']
})
export class PokemonFavoritesFormComponent implements OnInit {

  Formulario: FormGroup;
  submitted = false;

  pokemon: PokemonFavorite;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private favServ: FavoritePokemonsService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.CreateForm();
    let name: string = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.getPokemon(name);
    }

  }


  private CreateForm() {

    this.Formulario = this.formBuilder.group({
      alias: [null, [Validators.required]],
    });
  }


  get f() { return this.Formulario.controls; } // acceder a los controles del formulario para no escribir tanto codigo en el html

  getPokemon(name: string) {

    this.pokemon = this.favServ.getOne(name);
    this.f.alias.setValue(this.pokemon.alias)

  }

  onSubmit() {

    this.submitted = true;
    if (this.Formulario.invalid) {
      return;
    }
    this.guardar();
  }


  guardar() {
    this.favServ.editAlias(this.pokemon.name, this.f.alias.value)
    this.router.navigateByUrl('/favorites-pokemons');

  }







}
