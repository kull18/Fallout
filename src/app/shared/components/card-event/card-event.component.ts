import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Event } from '../../../models/Event';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-card-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-event.component.html',
  styleUrl: './card-event.component.scss'
})
export class CardEventComponent {
  expandir: boolean = false; 

  toggleExpandir(): void {
    this.expandir = !this.expandir;
  }


  @Input() event: Event = {
    image: '',
    name: '',
    description: '',
    extraDescription: ''
  }
}
