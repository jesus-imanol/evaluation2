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
  ngOnInit(){
    this.homeService.getPokemons().subscribe(data => {
      this.data = data;
      console.log(this.data)
    })
  }
  receiveCharacter($event: string){
    localStorage.setItem('receiveCharacter', $event)
    this.route.navigate(['/pokemon']);
  }
  
}
