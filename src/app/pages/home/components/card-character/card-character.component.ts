import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-card-character',
  standalone: true,
  imports: [],
  templateUrl: './card-character.component.html',
  styleUrl: './card-character.component.css'
})
export class CardCharacterComponent {
  @Input() character= {
    name: '',
    url: '',
  };
  @Output() viewCharacterEvent = new EventEmitter<string>();
  viewCharacter() {
    this.viewCharacterEvent.emit(this.character.url);
  }

}
