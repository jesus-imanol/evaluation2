import { Component } from '@angular/core';
import { SectionPokemonComponent } from './components/section-pokemon/section-pokemon.component';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [SectionPokemonComponent],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {

}
