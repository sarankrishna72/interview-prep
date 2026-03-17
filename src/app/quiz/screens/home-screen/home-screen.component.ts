import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CyborgQuizSetupComponent } from './components/cyborg-quiz-setup/cyborg-quiz-setup.component';
import { Category } from '../../models/quiz.models';
import { CyborgCardComponent } from '../../shared/components/cyborg-card/cyborg-card.component';
import { CyborgStatCardComponent } from '../../shared/components/cyborg-stat-card/cyborg-stat-card.component';
import { CyborgTextComponent } from '../../shared/components/cyborg-text/cyborg-text.component';

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [
    CommonModule, FormsModule, 
    CyborgQuizSetupComponent, CyborgTextComponent, 
    CyborgCardComponent, CyborgStatCardComponent
  ],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeScreenComponent implements OnInit {
  categories: Category[] = [
    { id: 'html', name: 'HTML', group: 'Frontend', icon: '🌐', description: 'Markup and page structure', questions: [] },
    { id: 'css', name: 'CSS', group: 'Frontend', icon: '🎨', description: 'Styling and layouts', questions: [] },
    { id: 'javascript', name: 'JavaScript', group: 'Frontend', icon: '⚡', description: 'Logic and interactivity', questions: [] },
    { id: 'angular', name: 'Angular', group: 'Frontend', icon: '🅰️', description: 'Templates and bindings', questions: [] },
    { id: 'react', name: 'React', group: 'Frontend', icon: '⚛️', description: 'Components and hooks', questions: [] },
    { id: 'python', name: 'Python', group: 'Programming', icon: '🐍', description: 'Syntax and functions', questions: [] },
    { id: 'sql', name: 'SQL', group: 'Database', icon: '🐬', description: 'Queries, filtering, sorting, joins', questions: [] }
  ];
  ngOnInit(): void {
  }
}