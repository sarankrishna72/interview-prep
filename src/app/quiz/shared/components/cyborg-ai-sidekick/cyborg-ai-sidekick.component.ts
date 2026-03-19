import { ChangeDetectionStrategy, Component, effect, inject, OnInit, signal } from '@angular/core';
import { CyborgTextComponent } from '../cyborg-text/cyborg-text.component';
import { CyborgQuizStoreService } from '../../services/cyborg-quiz-store/cyborg-quiz-store.service';
import { AiFeedStore } from '../../../models/common.model';

@Component({
  selector: 'cyborg-ai-sidekick',
  templateUrl: './cyborg-ai-sidekick.component.html',
  styleUrls: ['./cyborg-ai-sidekick.component.scss'],
  imports: [CyborgTextComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CyborgAiSidekickComponent implements OnInit {
 

  _cyborgQuizStoreService = inject(CyborgQuizStoreService);
  textMessage = signal('');
  private timeouts: number[] = [];
  constructor() {
    effect(() => {
      let value = JSON.parse(JSON.stringify(this._cyborgQuizStoreService.getAiFeed()));
      this.timeouts.forEach(id => clearTimeout(id));
      this.timeouts = [];
      if (value) {
        this.textMessage.set('');
      } else {
        this.textMessage.set('');
        value = {
          text: "Shall i judge you silently..."
        } as AiFeedStore
      }

       let delay = 0;
        for (const ch of value!.text) {
          const id = setTimeout(() => {
            this.textMessage.set(this.textMessage() + ch);
          }, delay);
          this.timeouts.push(id);
          delay += 50;
        }

    })
  }

  ngOnInit() {
  }

}
