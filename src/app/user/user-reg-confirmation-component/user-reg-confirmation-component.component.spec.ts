import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegConfirmationComponentComponent } from './user-reg-confirmation-component.component';

describe('UserRegConfirmationComponentComponent', () => {
  let component: UserRegConfirmationComponentComponent;
  let fixture: ComponentFixture<UserRegConfirmationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegConfirmationComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRegConfirmationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
