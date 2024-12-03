import { Component } from '@angular/core';
import { SectionPokemonComponent } from './components/section-pokemon/section-pokemon.component';
import { LoginComponent } from '../login/login.component';
import { HeaderComponent } from "../../header/header.component";
@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [SectionPokemonComponent, HeaderComponent],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {

}
