import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { HeaderComponent } from "../../shared/components/header/header.component";
import { EventCardRecentComponent } from "../../shared/components/event-card-recent/event-card-recent.component";
import { EventRecent } from '../../models/EventRecent';
import { CommonModule } from '@angular/common';
import { CardCharacterComponent } from "../../shared/components/card-character/card-character.component";
import { Character } from '../../models/character';
import { CanonComponent } from "../../shared/components/canon/canon.component";
import { Canon } from '../../models/Canon';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, EventCardRecentComponent, CommonModule, CardCharacterComponent, CanonComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  eventsRecents: EventRecent[] = [
    {
      image: 'th (4).jpeg',
      nameEvent: 'Destrucción de shady sants',
      description: 'Durante la serie se revela que la ciudad de shasy sant fue destruida ademas de que la RNC cambio de capital, siendo como la forma de como la ciudad fue nukeada y quien la realizo, siendo que lo único que quedo de la ciudad fue un letrero que decía que Shady Sant fue la capital de la RNC.'
    },
    {
      image: 'th (5).jpeg',
      nameEvent: 'El cambio de poder en el yermo',
      description: 'En los hechos recientes los niveles de influencia de la RNC, el enclave, el instituto y la hermandad del acero además de las corporaciones como Vault Tek que influyo en la destrucción del mundo, siendo que la RNC está casi extinta y organizaciones como la hermandad tomaron más protagonismo.'
    }
  ];

  recentCharacters: Character[] = [
    {
      image: 'th (1).jpeg',
      name: 'Lucy',
      description: 'En la serie de Fallout, Lucy es un personaje central que destaca por su inteligencia y habilidades de supervivencia. Es una joven en un mundo postapocalíptico,enfrentándose a los desafíos ...',
    },
    {
      image: 'th (2).jpeg',
      name: 'Maximus',
      description: 'Maximus es un paladin de la hermandad del acero que durante la serie avanza  diferentes puestos hasta llegar a ser la mano derecha del elder ...',
    }
  ];
  canon: Canon[] = [{
    image: 'falloutboy-removebg-preview.png',
    information: 'Cambiaron diefrentes cosas como la ubicación de diferentes refugios ademas de revelar que la hermandad termino con el instituto, la RNC com tal ya no existe además de que el envclave aun existe en diferentes partes del yermo. El sucso más importante que se revelo fue la participación de vault tek y de dierentes corporaciones el la caída de las bombas.',
    title: '¿Cambio algo en falloutt?'
  }]
}
