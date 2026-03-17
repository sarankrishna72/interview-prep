import { ChangeDetectionStrategy, Component, computed, input, OnChanges, OnInit } from '@angular/core';
import { Category } from '../../../../models/quiz.models';
import { CyborgTextComponent } from '../../../../shared/components/cyborg-text/cyborg-text.component';
import { CyborgButtonComponent } from '../../../../shared/components/cyborg-button/cyborg-button.component';
import { CyborgDifficultyLevelComponent } from '../../../../shared/components/cyborg-difficulty-level/cyborg-difficulty-level.component';

@Component({
  selector: 'cyborg-quiz-setup',
  templateUrl: './cyborg-quiz-setup.component.html',
  styleUrls: ['./cyborg-quiz-setup.component.scss'],
  standalone: true,
  imports:[
    CyborgTextComponent,
    CyborgButtonComponent,
    CyborgDifficultyLevelComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CyborgQuizSetupComponent  {
  categories = input<Category[]>([]);
  categoryGroups = computed(() => {
    return ['All', ...new Set(this.categories().map(c => c.group))] 
  });
  constructor() { }



}
