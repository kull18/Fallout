import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideViewComponent } from './vide-view.component';

describe('VideViewComponent', () => {
  let component: VideViewComponent;
  let fixture: ComponentFixture<VideViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
