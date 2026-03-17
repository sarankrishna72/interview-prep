import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CyborgTextComponent } from "../../../cyborg-text/cyborg-text.component";

@Component({
  selector: 'cyborg-question-option',
  templateUrl: './cyborg-question-option.component.html',
  styleUrls: ['./cyborg-question-option.component.scss'],
  imports: [CyborgTextComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CyborgQuestionOptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
