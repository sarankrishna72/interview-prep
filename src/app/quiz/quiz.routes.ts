import { Routes } from '@angular/router';
import { cyborgQuestionResolver } from './core/guards/cyborg-questions-resolve/cyborg-questions-resolve';
import { summaryActivate } from './core/guards/cyborg-summary-canactivate/cyborg-summary-canactivate';

export const QUIZ_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./quiz.component').then(m => m.QuizComponent),
    children: [
        {
            path: 'setup',
            loadComponent: () =>
            import('./screens/home-screen/home-screen.component').then(m => m.HomeScreenComponent)
        },
        {
            path: ':category/questions',
            loadComponent: () =>
            import('./screens/cyborg-question/cyborg-question.component').then(m => m.CyborgQuestionComponent),
            resolve: {
                questions: cyborgQuestionResolver
            },
            pathMatch: 'full'
        },
        {
            path: 'summary',
            loadComponent: () =>
            import('./screens/cyborg-question-summary/cyborg-question-summary.component').then(m => m.CyborgQuestionSummaryComponent),
            canActivate: [summaryActivate]
        },
        {
            path: '',
            redirectTo: 'setup',
            pathMatch: 'full'
        },
        {
            path: '**',
            redirectTo: 'setup',
        }
    ]
  }
];