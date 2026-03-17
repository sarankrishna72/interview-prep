import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CyborgQuizService } from '../../../shared/services/cyborg-quiz/cyborg-quiz.service';
import { CyborgQuizStoreService } from '../../../shared/services/cyborg-quiz-store/cyborg-quiz-store.service';
import { of } from 'rxjs';


export const userResolver: ResolveFn<any> = (route, state) => {
    const _cyborgQuizService = inject(CyborgQuizService);
    const _cyborgQuizStoreService = inject(CyborgQuizStoreService)
    if (_cyborgQuizStoreService.selectedSetup()) {
        return _cyborgQuizService.getCategoryQuestions(_cyborgQuizStoreService.selectedSetup()!.category); // Returns an Observable or Promise
    } else {
        return of([])
    }
    
};