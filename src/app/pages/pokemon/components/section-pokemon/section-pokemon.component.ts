import { Component, OnInit } from '@angular/core';
import { PokemonByUrlService } from '../../services/pokemon-by-url.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-pokemon.component.html',
  styleUrl: './section-pokemon.component.css'
})
export class SectionPokemonComponent implements OnInit {  
  name: string = '';
  pokemon: any;
constructor(private pokemonByUrlService:PokemonByUrlService){}
ngOnInit(){
  const storedName = localStorage.getItem('name');
  this.name = storedName ? JSON.parse(storedName) : '';
  this.pokemonByUrlService.getPokemonByUrl(this.name).subscribe(
    pokemon => {
      this.pokemon = pokemon;
      console.log(pokemon);
    }
  )
}


}
