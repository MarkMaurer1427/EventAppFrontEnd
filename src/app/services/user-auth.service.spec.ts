import { TestBed } from '@angular/core/testing';

import { UserAuthSevice } from './user-auth.service';

describe('UserAuthSevice', () => {
  let service: UserAuthSevice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAuthSevice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
