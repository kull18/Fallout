import { Component } from '@angular/core';
import { HeaderHomeComponent } from "../../shared/components/header-home/header-home.component";
import { VideViewComponent } from '../../shared/components/vide-view/vide-view.component';
import { FalloutComponent } from '../../shared/components/fallout/fallout.component';
import { CardCharacterComponent } from '../../shared/components/card-character/card-character.component';
import { CardEventComponent } from '../../shared/components/card-event/card-event.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { Character } from '../../models/character';
import { Event } from '../../models/Event';
import { NgFor, NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderHomeComponent, NgClass, NgIf,  VideViewComponent, FalloutComponent, CardCharacterComponent, CardEventComponent, FooterComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  characters: Character[] = [
    {
      image: '1de9e131775c48e32f555afcee00855d1fbf10e1r1-500-372_hq.gif',
      name: 'El morador del refugio 13',
      description: 'Protagonista del primer juego, un sobreviviente que emerge de una bóveda para buscar agua potable y termina convirtiéndose en un héroe o villano, según las decisiones del jugador y que hacen que el universo fallout cobre coherencia a lo largo que el jugador avanza, siendo que fallout empezo siendo unproyecto de bajo costo y hoy es lo que es',
    },
    {
      image: 'FO01_NPC_Tandi_N.webp',
      name: 'Tandy',
      description: 'Tandy es un personaje clave en Fallout 2, conocida por ser la líder de Arroyo y la hija del protagonista del primer juego. Con una personalidad carismática y decidida a cambiar las cosas para suc omunidad de forma pacifica',
    },
    {
      image: 'gm-6456fffb-9d42-4d66-b289-58a0ba0c9177-house.jpg',
      name: 'Sr.House',
      description: 'El Sr. House es un personaje central en Fallout: New Vegas. Es el enigmático y carismático propietario de la famosa Casinò Lucky 38, y es conocido',
    }
  ];
  events: Event[] = [
    {
      image: 'maxresdefault.jpg',
      name: 'La batalla de la presa hoover',
      description: 'La Batalla de la Presa Hoover, que tuvo lugar en 2281, es un enfrentamiento crucial en el universo de Fallout. Durante esta batalla, los miembros de la Legión de César, que intento la toma de la presa para avanzar sobre las posiciones de RNC hacia el este',
    },
    {
      image: '1720972-ncr_flag.png',
      name: 'La creación de la RNC',
      description: 'La República Nueva de California (RNC) se formó en el año 2186 como respuesta a la creciente anarquía y la falta de orden en la postguerra de la Costa Oeste. Su creación fue impulsada desde 2200 hasta despues, logrando un gran desarrollo en poco tiempo y derrotando a facciones como la hermandad del acero',
    },
    {
      image: 'fallout76_nuke.webp',
      name: 'La caída de las bombas',
      description: 'La caída de las bombas en Fallout ocurrió el 23 de octubre de 2077, un evento catastrófico que resultó en la destrucción masiva de la civilización y el inicio del universo de fallout tal como lo conocemos, siendo que todo el muno quedo irradeado y haciendo imposible su recuperación a corto plazo',
    }
  ];

}
