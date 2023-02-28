import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEventDisplayComponent } from './user-event-display.component';

describe('UserEventDisplayComponent', () => {
  let component: UserEventDisplayComponent;
  let fixture: ComponentFixture<UserEventDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEventDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserEventDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
