import { ChangeDetectionStrategy, Component, computed, input, OnInit, output } from '@angular/core';
import { CyborgTextComponent } from "../../../cyborg-text/cyborg-text.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cyborg-question-option',
  templateUrl: './cyborg-question-option.component.html',
  styleUrls: ['./cyborg-question-option.component.scss'],
  imports: [
    CyborgTextComponent,
    CommonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CyborgQuestionOptionComponent implements OnInit {
  optIndex = input.required<number>();
  option = input.required<string>();
  selectedOpts = input<any[]>([]);
  correctOptsIndex = input<any[]>([]);
  onOptSelect = output<any>();
  optionCode = computed(() => String.fromCharCode(65 + this.optIndex()))
  constructor() { }

  onOptClick() {
    this.onOptSelect.emit(this.optIndex())
  }


  ngOnInit() {
  }

}
