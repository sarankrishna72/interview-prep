import { AfterViewInit, ChangeDetectionStrategy, Component, computed, input, OnInit, signal } from '@angular/core';
import { CyborgTextComponent } from '../cyborg-text/cyborg-text.component';

@Component({
  selector: 'cyborg-timer',
  templateUrl: './cyborg-timer.component.html',
  styleUrls: ['./cyborg-timer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CyborgTextComponent]
})
export class CyborgTimerComponent implements AfterViewInit {
  currentTimer = input<number>(25);
  counter = signal<number>(this.currentTimer());
  timerProgress = computed(() => (this.counter() / this.currentTimer()) * 100);

  constructor() { }

  ngAfterViewInit(): void {
    const timerInterval = setInterval(() => {
      if (this.counter() > 0) {
          this.counter.update((prev: number) => prev - 1);
      } else {
        clearInterval(timerInterval);
      }
    }, 1000);
   
  }

}
