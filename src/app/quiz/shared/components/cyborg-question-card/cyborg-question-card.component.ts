import { Component, input, output} from '@angular/core';
import { CyborgCardComponent } from "../cyborg-card/cyborg-card.component";
import { CyborgTextComponent } from '../cyborg-text/cyborg-text.component';
import { CyborgCodeSnippetComponent } from './components/cyborg-code-snippet/cyborg-code-snippet.component';
import { Question } from '../../../models/quiz.models';
import { CyborgQuestionOptionsComponent } from './components/cyborg-question-options/cyborg-question-options.component';

@Component({
  selector: 'cyborg-question-card',
  templateUrl: './cyborg-question-card.component.html',
  styleUrls: ['./cyborg-question-card.component.scss'],
  imports: [
    CyborgCardComponent, CyborgTextComponent, 
    CyborgCodeSnippetComponent, CyborgQuestionOptionsComponent
  ],
})
export class CyborgQuestionCardComponent {
  question = input.required<Question>();
  onQuestionCompleted = output<any>();
  constructor() { }

  onQuestionValidated(event: any) {
    this.onQuestionCompleted.emit('completed')
  }

}
