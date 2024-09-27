import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Character } from '../../models/character';

@Directive({
  selector: '[appCharacterDirective]',
  standalone: true
})
export class CharacterDirectiveDirective {
  
  constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

  @Input() set appCharacterDirective(characters: Character[]) {
    this.viewContainer.clear(); 
    //directive for Character cards
    characters.forEach((character) => {
      this.viewContainer.createEmbeddedView(this.template, {
        $implicit: character
      });
    });
  }
}
