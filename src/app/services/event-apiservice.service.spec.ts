import { TestBed } from '@angular/core/testing';

import { EventAPIService } from './event-api.service';

describe('EventAPIServiceService', () => {
  let service: EventAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
