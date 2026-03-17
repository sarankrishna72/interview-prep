import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CyborgCardComponent } from "../cyborg-card/cyborg-card.component";
import { CyborgTextComponent } from '../cyborg-text/cyborg-text.component';
import { CyborgCodeSnippetComponent } from './components/cyborg-code-snippet/cyborg-code-snippet.component';
import { CyborgQuestionOptionComponent } from './components/cyborg-question-option/cyborg-question-option.component';

@Component({
  selector: 'cyborg-question-card',
  templateUrl: './cyborg-question-card.component.html',
  styleUrls: ['./cyborg-question-card.component.scss'],
  imports: [
    CyborgCardComponent, CyborgTextComponent, 
    CyborgCodeSnippetComponent, CyborgQuestionOptionComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CyborgQuestionCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
