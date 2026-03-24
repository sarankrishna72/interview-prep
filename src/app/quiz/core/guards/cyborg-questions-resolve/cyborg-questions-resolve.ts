import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CyborgQuizService } from '../../../shared/services/cyborg-quiz/cyborg-quiz.service';
import { CyborgQuizStoreService } from '../../../shared/services/cyborg-quiz-store/cyborg-quiz-store.service';
import { map, of } from 'rxjs';
import { Question } from '../../../models/quiz.models';
import { shuffleArray } from '../../../shared/utility/utility';


export const cyborgQuestionResolver: ResolveFn<any> = (route, state) => {
    const _cyborgQuizService = inject(CyborgQuizService);
    const _cyborgQuizStoreService = inject(CyborgQuizStoreService)
    const config = _cyborgQuizStoreService.selectedSetup();
    const questionCategory = route.paramMap.get('category')!;
    _cyborgQuizStoreService.setQuestionsStat({category: questionCategory})
    return _cyborgQuizService.getCategoryQuestions({category: questionCategory, limit: config?.noOfQuestions || 10, difficulty: config?.difficulty || 'easy'  });
};