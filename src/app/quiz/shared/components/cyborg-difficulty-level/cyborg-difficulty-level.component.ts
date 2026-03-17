import { ChangeDetectionStrategy, Component, effect, input, OnInit, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Difficulty } from '../../../models/common.model';

@Component({
  selector: 'cyborg-difficulty-level',
  templateUrl: './cyborg-difficulty-level.component.html',
  styleUrls: ['./cyborg-difficulty-level.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule
  ]
})
export class CyborgDifficultyLevelComponent implements OnInit {
  difficulty  = input<Difficulty>('easy');
  selectedDifficulty = 'easy';
  onDifficultyChange = output<Difficulty>()
  difficulties = ['easy', 'medium', 'hard'];
  constructor() {
    effect(() => {
      this.selectedDifficulty = this.difficulty();
    });
  }

  onChange(difficulty: any) {
    this.onDifficultyChange.emit(difficulty);
  }

  ngOnInit() {
  }

}
