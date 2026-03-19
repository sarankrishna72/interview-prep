import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CyborgQuizStoreService } from '../../../shared/services/cyborg-quiz-store/cyborg-quiz-store.service';

export const summaryActivate: CanActivateFn = (route, state) => {
  const _cyborgQuizStore = inject(CyborgQuizStoreService);
  const router = inject(Router);

  if (_cyborgQuizStore.questionsStat()?.totalQuestions != 0) {
    return true; // Allow navigation
  } else {
    return router.createUrlTree(['/quiz']); 
  }
};