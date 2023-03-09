import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRegModalComponent } from './event-reg-modal.component';

describe('EventRegModalComponent', () => {
  let component: EventRegModalComponent;
  let fixture: ComponentFixture<EventRegModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventRegModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventRegModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
