import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-card-character',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-character.component.html',
  styleUrl: './card-character.component.css'
})
export class CardCharacterComponent {
  @Input() character= {
    name: '',
    url: '',
    images: '',
  };
  @Output() viewCharacterEvent = new EventEmitter<string>();
  viewCharacter() {
    this.viewCharacterEvent.emit(this.character.name);
  }

}
