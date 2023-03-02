import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEventDisplayComponentComponent } from './admin-event-display-component.component';

describe('AdminEventDisplayComponentComponent', () => {
  let component: AdminEventDisplayComponentComponent;
  let fixture: ComponentFixture<AdminEventDisplayComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEventDisplayComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEventDisplayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
