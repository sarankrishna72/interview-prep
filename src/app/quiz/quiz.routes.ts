import { Routes } from '@angular/router';
import { cyborgQuestionResolver } from './core/guards/cyborg-questions-resolve/cyborg-questions-resolve';

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