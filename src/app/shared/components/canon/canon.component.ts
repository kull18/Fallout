import { Component } from '@angular/core';
import { Canon } from '../../../models/Canon';
import { Input } from '@angular/core';
@Component({
  selector: 'app-canon',
  standalone: true,
  imports: [],
  templateUrl: './canon.component.html',
  styleUrl: './canon.component.scss'
})
export class CanonComponent {
  @Input() canon: Canon = {
    image: '',
    information: '',
    title: ''
  }
}
