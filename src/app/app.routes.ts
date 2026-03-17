import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'quiz',
        loadChildren: () => import('./quiz/quiz.routes').then(m => m.QUIZ_ROUTES)
    },
    {
        path: '',
        redirectTo: 'quiz',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'quiz',
    }
];
