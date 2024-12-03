import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPokemonComponent } from './section-pokemon.component';

describe('SectionPokemonComponent', () => {
  let component: SectionPokemonComponent;
  let fixture: ComponentFixture<SectionPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionPokemonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
