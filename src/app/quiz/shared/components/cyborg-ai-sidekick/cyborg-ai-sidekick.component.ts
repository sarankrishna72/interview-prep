import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CyborgTextComponent } from '../cyborg-text/cyborg-text.component';

@Component({
  selector: 'cyborg-ai-sidekick',
  templateUrl: './cyborg-ai-sidekick.component.html',
  styleUrls: ['./cyborg-ai-sidekick.component.scss'],
  imports: [CyborgTextComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CyborgAiSidekickComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
