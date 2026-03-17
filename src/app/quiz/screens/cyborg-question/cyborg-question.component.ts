import { Component, OnInit } from '@angular/core';
import { CyborgAiSidekickComponent } from '../../shared/components/cyborg-ai-sidekick/cyborg-ai-sidekick.component';
import { CyborgButtonComponent } from '../../shared/components/cyborg-button/cyborg-button.component';
import { CyborgCardComponent } from '../../shared/components/cyborg-card/cyborg-card.component';
import { CyborgProgressbarComponent } from '../../shared/components/cyborg-progressbar/cyborg-progressbar.component';
import { CyborgQuestionCardComponent } from '../../shared/components/cyborg-question-card/cyborg-question-card.component';
import { CyborgStatCardComponent } from '../../shared/components/cyborg-stat-card/cyborg-stat-card.component';
import { CyborgTextComponent } from '../../shared/components/cyborg-text/cyborg-text.component';
import { CyborgTimerComponent } from '../../shared/components/cyborg-timer/cyborg-timer.component';
interface StatCard {
  label: string;
  id: string;
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
  ]
})
export class CyborgQuestionComponent implements OnInit {
  statCards: StatCard[] = [
    { label: 'Score', id: 'score' },
    { label: 'Question', id: 'question' },
    { label: 'Category', id: 'category' },
    { label: 'Status', id: 'status' }
  ];

  questionStatsSummary: any = {
    question: "2/5",
    score: "1",
    category: "JavaScript",
    status: "Incorrect"
  }

  constructor() { }

  ngOnInit() {
  }

}
