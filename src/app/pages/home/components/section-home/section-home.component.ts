import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { ICharacter } from '../../models/icharacter';
import { CommonModule } from '@angular/common';
import { CardCharacterComponent } from '../card-character/card-character.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-section-home',
  standalone: true,
  imports: [CommonModule, CardCharacterComponent],
  templateUrl: './section-home.component.html',
  styleUrl: './section-home.component.css'
})
export class SectionHomeComponent {
  constructor(private homeService:HomeService, private route: Router){}
  data : ICharacter[] = []
  images : any[] = []
  ngOnInit(){
    this.homeService.getPokemons().subscribe(data => {
      this.data = data;
      this.getImages()
    })
  }
  receiveCharacter($event: string){
    localStorage.setItem('name', $event)
    this.route.navigate(['/pokemon']);
  }
  getImages() {
    const urls = this.data.map(character => character.url);
    this.homeService.getImagesPokemons(urls).subscribe(
      responses => {
        this.data.forEach((element, index) => {
          element.images = responses[index]?.sprites?.front_default || ''; 
        });
      },
      error => {
        console.error('Error fetching images:', error);
      }
    );
  }
  
  
}
