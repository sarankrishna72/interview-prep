import { Component, inject, OnInit } from '@angular/core';
import { CyborgTextComponent } from '../../shared/components/cyborg-text/cyborg-text.component';
import { CyborgStatCardComponent } from '../../shared/components/cyborg-stat-card/cyborg-stat-card.component';
import { CyborgButtonComponent } from '../../shared/components/cyborg-button/cyborg-button.component';
import { CyborgQuizStoreService } from '../../shared/services/cyborg-quiz-store/cyborg-quiz-store.service';

@Component({
  selector: 'cyborg-question-summary',
  templateUrl: './cyborg-question-summary.component.html',
  styleUrls: ['./cyborg-question-summary.component.scss'],
  imports: [
    CyborgTextComponent,
    CyborgStatCardComponent,
    CyborgButtonComponent
  ]
})
export class CyborgQuestionSummaryComponent implements OnInit {
  _cyborgQuizStore = inject(CyborgQuizStoreService)
  constructor() { }

  ngOnInit() {
  }

}
