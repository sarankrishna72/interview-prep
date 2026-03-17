/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { CyborgQuizStoreService } from './cyborg-quiz-store.service';

describe('Service: CyborgQuizStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CyborgQuizStoreService]
    });
  });

  it('should ...', inject([CyborgQuizStoreService], (service: CyborgQuizStoreService) => {
    expect(service).toBeTruthy();
  }));
});
