import { Component } from '@angular/core';
import { Character } from '../../../models/character';
import { Input } from '@angular/core';
import { EventRecent } from '../../../models/EventRecent';
@Component({
  selector: 'app-event-card-recent',
  standalone: true,
  imports: [],
  templateUrl: './event-card-recent.component.html',
  styleUrl: './event-card-recent.component.scss'
})
export class EventCardRecentComponent {
  @Input() eventRecent: EventRecent = {
    image: '',
    nameEvent: '',
    description: '',
  }
}
