/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CyborgQuizService } from './cyborg-quiz.service';

describe('Service: CyborgQuiz', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CyborgQuizService]
    });
  });

  it('should ...', inject([CyborgQuizService], (service: CyborgQuizService) => {
    expect(service).toBeTruthy();
  }));
});
