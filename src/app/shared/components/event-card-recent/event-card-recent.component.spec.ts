import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCardRecentComponent } from './event-card-recent.component';

describe('EventCardRecentComponent', () => {
  let component: EventCardRecentComponent;
  let fixture: ComponentFixture<EventCardRecentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventCardRecentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventCardRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
