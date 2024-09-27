import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForImportantCharactersComponent } from './ng-for-important-characters.component';

describe('NgForImportantCharactersComponent', () => {
  let component: NgForImportantCharactersComponent;
  let fixture: ComponentFixture<NgForImportantCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgForImportantCharactersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgForImportantCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
