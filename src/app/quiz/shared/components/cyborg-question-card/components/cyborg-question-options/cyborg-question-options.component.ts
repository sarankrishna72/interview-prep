import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, effect, inject, input, OnChanges, OnInit, output, SimpleChanges } from '@angular/core';
import { CyborgQuestionOptionComponent } from '../cyborg-question-option/cyborg-question-option.component';
import { CommonModule } from '@angular/common';
import { Question } from '../../../../../models/quiz.models';
import { CyborgButtonComponent } from '../../../cyborg-button/cyborg-button.component';
import { CyborgTextComponent } from '../../../cyborg-text/cyborg-text.component';
import { CyborgQuizStoreService } from '../../../../services/cyborg-quiz-store/cyborg-quiz-store.service';
import { arraysEqual } from '../../../../utility/utility';
import { CyborgSoundService } from '../../../../services/cyborg-sound/cyborg-sound.service';

@Component({
  selector: 'cyborg-question-options',
  templateUrl: './cyborg-question-options.component.html',
  styleUrls: ['./cyborg-question-options.component.scss'],
  imports: [CyborgQuestionOptionComponent, CommonModule, CyborgButtonComponent, CyborgTextComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CyborgQuestionOptionsComponent  {
  _cyborgStoreService = inject(CyborgQuizStoreService);
  _cyborgSoundServive = inject(CyborgSoundService)
  _cdr = inject(ChangeDetectorRef)
  question = input.required<Question>();
  selectedOpts: any[] = [];
  correctOptsIndex: any[] = [];
  onQuestionCompleted = output<any>();
  
  constructor() {
    effect(() => {
      if (this._cyborgStoreService.getCounter().counter == 0) {
        this.onQuestionSubmission();
      }
    })
    effect(() => {
      if(this.question()) {
        this.selectedOpts = [];
        this.correctOptsIndex = [];
      }
    });
  }

  onOptSelect(event: any) {
    if (this.question().question_type === 'multi-answer') {
      this.selectedOpts.push(event);
      this.selectedOpts = [...new Set(this.selectedOpts)];
      return;
    }
    this.selectedOpts = [event];
    this.onQuestionSubmission();
  }

  async onQuestionSubmission() {
    if (this._cyborgStoreService.getCounter().status != 'completed') {
      this.correctOptsIndex = this.question().correctIndex!;
      if (this._cyborgStoreService.getCounter().counter > 0) {
        this._cyborgStoreService.setCounter({status: 'completed'})
      }

      this._cyborgSoundServive.initAudio().then(()=> {
        if (arraysEqual(this.selectedOpts, this.correctOptsIndex)){
          this._cyborgSoundServive.playCorrectSound();
          this._cyborgStoreService.setQuestionsStat({score: (this._cyborgStoreService.questionsStat()?.score || 0) + 1})
        } else {
          this._cyborgSoundServive.playWrongSound();
        }
      })
      this.onQuestionCompleted.emit('completed')
      this._cdr.detectChanges();
    }
  }

 

  ngOnInit(): void {
    
    
  }

}
