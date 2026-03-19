/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CyborgSoundService } from './cyborg-sound.service';

describe('Service: CyborgSound', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CyborgSoundService]
    });
  });

  it('should ...', inject([CyborgSoundService], (service: CyborgSoundService) => {
    expect(service).toBeTruthy();
  }));
});
