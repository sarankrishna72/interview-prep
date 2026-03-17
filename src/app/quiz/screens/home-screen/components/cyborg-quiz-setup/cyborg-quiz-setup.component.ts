import { ChangeDetectionStrategy, Component, computed, inject, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Category } from '../../../../models/quiz.models';
import { CyborgTextComponent } from '../../../../shared/components/cyborg-text/cyborg-text.component';
import { CyborgButtonComponent } from '../../../../shared/components/cyborg-button/cyborg-button.component';
import { CyborgDifficultyLevelComponent } from '../../../../shared/components/cyborg-difficulty-level/cyborg-difficulty-level.component';
import { QuizSearchPipe } from '../../../../shared/pipe/quiz-search/quiz-search.pipe';
import { FormsModule } from '@angular/forms';
import { CyborgQuizStoreService } from '../../../../shared/services/cyborg-quiz-store/cyborg-quiz-store.service';
import { Difficulty } from '../../../../models/common.model';

@Component({
  selector: 'cyborg-quiz-setup',
  templateUrl: './cyborg-quiz-setup.component.html',
  styleUrls: ['./cyborg-quiz-setup.component.scss'],
  standalone: true,
  imports:[
    CyborgTextComponent,
    CyborgButtonComponent,
    CyborgDifficultyLevelComponent,
    QuizSearchPipe,
    FormsModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CyborgQuizSetupComponent implements OnChanges {
  categories = input<Category[]>([]);
  searchText: string = '';
  categoryGroups = computed(() => {
    return ['All', ...new Set(this.categories().map(c => c.group))] 
  });
  selectedCategory: any = null;
  noOfQuestions: any = 10;
  selectedDifficulty: Difficulty = 'easy';
  _cyborgQuizStoreService = inject(CyborgQuizStoreService)

  constructor() { }

  onCategorySelect(categoryId: any) {
    this.selectedCategory = categoryId;
  }

  onDifficultyChange(difficulty: any) {
    this.selectedDifficulty = difficulty;
  }

  setDefualtCategory() {
    this.selectedCategory = this.categories()?.[0]?.id;
  }

  onReset() {
    this.selectedCategory = this.categories()?.[0]?.id;
    this.selectedDifficulty = 'easy';
    this.noOfQuestions = 10;
  }

  onSubmit() {
    this._cyborgQuizStoreService
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['categories'] && this.categories()) {
      this.setDefualtCategory();
    }
  }

}
