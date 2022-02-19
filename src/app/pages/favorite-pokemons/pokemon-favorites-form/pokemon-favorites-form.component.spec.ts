import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFavoritesFormComponent } from './pokemon-favorites-form.component';

describe('PokemonFavoritesFormComponent', () => {
  let component: PokemonFavoritesFormComponent;
  let fixture: ComponentFixture<PokemonFavoritesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonFavoritesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonFavoritesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
