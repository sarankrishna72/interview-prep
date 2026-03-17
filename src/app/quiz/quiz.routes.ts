import { Routes } from '@angular/router';

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
            path: 'questions',
            loadComponent: () =>
            import('./screens/cyborg-question/cyborg-question.component').then(m => m.CyborgQuestionComponent)
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