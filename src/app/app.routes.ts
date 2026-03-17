import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'quiz',
        children: [
            {
                path: 'setup',
                loadComponent: () => import('./quiz/screens/home-screen/home-screen.component').then(m => m.HomeScreenComponent),
                data: {
                    title: 'CYBORG QUIZ CONTROL CENTER',
                    description: 'Search and select from many quiz categories, configure question count, and launch a futuristic MCQ experience with hints, floating cyber particles, AI sidekick speech bubble, voice reactions, and matrix scan effects.'
                }
            },{
                path: 'questions',
                loadComponent: () => import('./quiz/screens/cyborg-question/cyborg-question.component').then(m => m.CyborgQuestionComponent),
            },
            {
                path: '**',
                redirectTo: 'setup',
            }
        ]
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
