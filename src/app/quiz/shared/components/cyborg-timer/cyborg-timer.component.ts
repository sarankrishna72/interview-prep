import { AfterViewInit, ChangeDetectionStrategy, Component, computed, effect, inject, input, OnInit, signal } from '@angular/core';
import { CyborgTextComponent } from '../cyborg-text/cyborg-text.component';
import { CyborgQuizStoreService } from '../../services/cyborg-quiz-store/cyborg-quiz-store.service';

@Component({
  selector: 'cyborg-timer',
  templateUrl: './cyborg-timer.component.html',
  styleUrls: ['./cyborg-timer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CyborgTextComponent]
})
export class CyborgTimerComponent {
  _cyborgStoreService = inject(CyborgQuizStoreService)
  initialTimerVal: number | null = null;
  timerInterval: any;
  timerProgress = computed(() => (this._cyborgStoreService.getCounter().counter / this.initialTimerVal!) * 100);
  constructor() {
   effect(() => {
    const counterState = this._cyborgStoreService.getCounter();
   
    if (counterState &&( !this.initialTimerVal || counterState.status == 'reset')) {
      clearInterval(this.timerInterval);
      this.initialTimerVal = counterState.counter;
      this.runTimer();
    }
   })
  }

  runTimer() {
    this.timerInterval = setInterval(() => {
      const counterVal = this._cyborgStoreService.getCounter();
      if (counterVal?.counter > 0 && counterVal.status != 'completed') {
        this._cyborgStoreService.setCounter({counter: counterVal.counter - 1, status: 'inprogress'});
      } else {
        this._cyborgStoreService.setCounter({counter: (counterVal.status == 'completed' && counterVal.counter > 0) ? counterVal.counter : 0, status: 'completed'});
        clearInterval(this.timerInterval);
      }
    }, 1000);
  }

}
