import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePokemonCardComponent } from './favorite-pokemon-card.component';

describe('FavoritePokemonCardComponent', () => {
  let component: FavoritePokemonCardComponent;
  let fixture: ComponentFixture<FavoritePokemonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritePokemonCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritePokemonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
