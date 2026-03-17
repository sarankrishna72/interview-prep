import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject,  OnInit  } from '@angular/core';
import { CyborgQuizSetupComponent } from './components/cyborg-quiz-setup/cyborg-quiz-setup.component';
import { Category } from '../../models/quiz.models';
import { CyborgCardComponent } from '../../shared/components/cyborg-card/cyborg-card.component';
import { CyborgStatCardComponent } from '../../shared/components/cyborg-stat-card/cyborg-stat-card.component';
import { CyborgTextComponent } from '../../shared/components/cyborg-text/cyborg-text.component';
import { CyborgQuizService } from '../../shared/services/cyborg-quiz/cyborg-quiz.service';

@Component({
  selector: 'home-screen',
  standalone: true,
  imports: [
    CommonModule,
    CyborgQuizSetupComponent, CyborgTextComponent, 
    CyborgCardComponent, CyborgStatCardComponent,
  ],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeScreenComponent implements OnInit {
  //     { "id": "python", "name": "Python", "group": "Programming", "icon": "🐍", "description": "Syntax and functions", "questions": [] },
  categories: Category[] = [];
  _quizService = inject(CyborgQuizService);
  _changeDetectorRef = inject(ChangeDetectorRef);
  getQuizCategories() : void {
    this._quizService.getQuizCategories().subscribe(data => {
      this.categories = data.categories;
      this._changeDetectorRef.markForCheck();
    });
  }

  ngOnInit(): void {
    this.getQuizCategories();
  }
}