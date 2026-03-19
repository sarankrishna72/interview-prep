import { ChangeDetectionStrategy, Component, input, Input, OnInit, output } from '@angular/core';
import { ButtonType } from '../../../models/button.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cyborg-button',
  templateUrl: './cyborg-button.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./cyborg-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CyborgButtonComponent implements OnInit {
  btnType = input<ButtonType>('');
  btnLabel = input<string>('');
  disabled = input<boolean>(false);
  onClick = output<any>();
  constructor() { }

  onButtonClick() {
    this.onClick.emit(true)
  }
  
  ngOnInit() {
  }

}
