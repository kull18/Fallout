import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/components/header/header.component";
import { HeaderHomeComponent } from "./shared/components/header-home/header-home.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { Character } from './models/character';
import { CardCharacterComponent } from "./shared/components/card-character/card-character.component";
import { NgFor } from '@angular/common';
import { Event } from './models/Event';
import { CardEventComponent } from "./shared/components/card-event/card-event.component";
import { VideViewComponent } from "./shared/components/vide-view/vide-view.component";
import { FalloutComponent } from "./shared/components/fallout/fallout.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeaderHomeComponent, FooterComponent, CardCharacterComponent, NgFor, CardEventComponent, VideViewComponent, FalloutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'LandingPage';
}
