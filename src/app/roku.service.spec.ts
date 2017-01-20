/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RokuService } from './roku.service';

describe('RokuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RokuService]
    });
  });

  it('should ...', inject([RokuService], (service: RokuService) => {
    expect(service).toBeTruthy();
  }));
});
