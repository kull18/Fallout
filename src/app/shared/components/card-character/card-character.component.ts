import { Component, Input } from '@angular/core';
import { Character } from '../../../models/character';
import { CommonModule, NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-card-character',
  standalone: true,
  imports: [NgClass, NgIf, CommonModule],
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.scss'] 
})
export class CardCharacterComponent {
  expandido: boolean = false; 

  @Input() character: Character = {
    image: '',
    name: '',
    description: ''
  };
  //toggleExpandir
  toggleExpandir() {
    this.expandido = !this.expandido; 
  }
}
