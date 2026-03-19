import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CyborgTextComponent } from '../../shared/components/cyborg-text/cyborg-text.component';
import { CyborgStatCardComponent } from '../../shared/components/cyborg-stat-card/cyborg-stat-card.component';
import { CyborgButtonComponent } from '../../shared/components/cyborg-button/cyborg-button.component';
import { CyborgQuizStoreService } from '../../shared/services/cyborg-quiz-store/cyborg-quiz-store.service';
import { AiFeedStore } from '../../models/common.model';
import { QuizResult } from '../../models/quiz.models';
import { randomArrayItem } from '../../shared/utility/utility';
import { AI_MESSAGES } from '../../data/ai.data';
import { CyborgSoundService } from '../../shared/services/cyborg-sound/cyborg-sound.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cyborg-question-summary',
  templateUrl: './cyborg-question-summary.component.html',
  styleUrls: ['./cyborg-question-summary.component.scss'],
  imports: [
    CyborgTextComponent,
    CyborgStatCardComponent,
    CyborgButtonComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CyborgQuestionSummaryComponent implements OnInit {
  _cyborgQuizStore = inject(CyborgQuizStoreService);
  _cyborgSoundService = inject(CyborgSoundService);
  _router = inject(Router)
  aiMessage :  any = null;
  questionStat : QuizResult= this._cyborgQuizStore.questionsStat();
  questionSummary: any;
  constructor() { }

  backToHome() {
    this._router.navigate(['/quiz'])
  }

  async getQuizStatus() {
    const wrong =  this.questionStat.totalQuestions - this.questionStat.score;
    const accuracy = Math.round((this.questionStat.score / this.questionStat.totalQuestions) * 100);
    this.questionSummary = {wrong, accuracy}
    if (accuracy >= 80) {
      await this._cyborgSoundService.playWinSound();
      this.aiMessage = {title: "VICTORY PROTOCOL", ...randomArrayItem(AI_MESSAGES.win)}
    } else if (accuracy >= 50) {
      await this._cyborgSoundService.playWinSound();
      this.aiMessage = { title: 'MISSION PARTIALLY COMPLETE', ...randomArrayItem(AI_MESSAGES.average)}
    } else {
      await this._cyborgSoundService.playLoseSound();
      this.aiMessage = {title: 'SYSTEM NEEDS PATCHING', ...randomArrayItem(AI_MESSAGES.lose)}
    }
  }

  async ngOnInit() {
    await this.getQuizStatus();
  }

}
