import { ChangeDetectionStrategy, Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { CyborgAiSidekickComponent } from '../../shared/components/cyborg-ai-sidekick/cyborg-ai-sidekick.component';
import { CyborgButtonComponent } from '../../shared/components/cyborg-button/cyborg-button.component';
import { CyborgCardComponent } from '../../shared/components/cyborg-card/cyborg-card.component';
import { CyborgProgressbarComponent } from '../../shared/components/cyborg-progressbar/cyborg-progressbar.component';
import { CyborgQuestionCardComponent } from '../../shared/components/cyborg-question-card/cyborg-question-card.component';
import { CyborgStatCardComponent } from '../../shared/components/cyborg-stat-card/cyborg-stat-card.component';
import { CyborgTextComponent } from '../../shared/components/cyborg-text/cyborg-text.component';
import { CyborgTimerComponent } from '../../shared/components/cyborg-timer/cyborg-timer.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Question, QuizResult, StatCardKeys } from '../../models/quiz.models';
import { CyborgQuizStoreService } from '../../shared/services/cyborg-quiz-store/cyborg-quiz-store.service';

type StatCard = {
  label: string;
  id: StatCardKeys;
}


@Component({
  selector: 'cyborg-question',
  templateUrl: './cyborg-question.component.html',
  styleUrls: ['./cyborg-question.component.scss'],
  imports: [
    CyborgCardComponent,
    CyborgButtonComponent,
    CyborgTextComponent,
    CyborgStatCardComponent,
    CyborgProgressbarComponent,
    CyborgQuestionCardComponent,
    CyborgTimerComponent,
    CyborgAiSidekickComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CyborgQuestionComponent implements OnInit {
  _activateRoute = inject(ActivatedRoute);
  _router = inject(Router);
  _cyborgQuizStoreService = inject(CyborgQuizStoreService)
  questions: Question[] = [];
  statCards: StatCard[] = [
    { label: 'Score', id: 'score' },
    { label: 'Question', id: 'question' },
    { label: 'Category', id: 'category' },
    { label: 'Status', id: 'status' }
  ];
  

  questionsSummary: QuizResult | null = null;
  progressPercentage: number = 0; 
  currentQuestionIndex = signal<number>(0);
  currentQuestion!: Question;
  currentQuestionStatus : 'inprogress' | 'completed' = 'inprogress';
  constructor() {
    effect(() => {
      if ((this.currentQuestionIndex() + 1) > 0) {
        this.setProgressAndCurrentQuestionPercentage();
      }
    })

  }

  backToHome() {
    this._router.navigate(["../"])
  }

  onClickNextCTA() {
    if (this.questions.length > this.currentQuestionIndex()) {
      this.currentQuestionIndex.update((prev) => ((prev || 0) + 1));
    }
  }

  onQuestionCompleted(event: any) {
    this.currentQuestionStatus = event;
  }

  setProgressAndCurrentQuestionPercentage() {
    this.progressPercentage = Math.round(((this.currentQuestionIndex() + 1) / this.questions.length) * 100);
    this.currentQuestion = this.questions[this.currentQuestionIndex()];
    this._cyborgQuizStoreService.setCounter({counter: 20, status: 'reset'});
    this._cyborgQuizStoreService.setQuestionsStat({question: `${this.currentQuestionIndex() + 1} of ${this.questions.length}`})
  }
 

  ngOnInit() {
    this.questions =  this._activateRoute.snapshot.data['questions'];
  }

}
