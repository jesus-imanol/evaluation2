import { Component, OnInit } from '@angular/core';
import { PokemonByUrlService } from '../../services/pokemon-by-url.service';

@Component({
  selector: 'app-section-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './section-pokemon.component.html',
  styleUrl: './section-pokemon.component.css'
})
export class SectionPokemonComponent implements OnInit {  
  url_pokemon: string = '';
  pokemon: any;
constructor(private pokemonByUrlService:PokemonByUrlService){}
ngOnInit(){
  this.url_pokemon = localStorage.getItem('url_pokemon') || '';
  this.pokemonByUrlService.getPokemonByUrl(this.url_pokemon).subscribe(
    pokemon => {
      this.pokemon = pokemon;
      console.log(pokemon);
      
    }
  )
}
}
