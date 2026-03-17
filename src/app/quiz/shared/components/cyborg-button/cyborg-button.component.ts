import { ChangeDetectionStrategy, Component, input, Input, OnInit } from '@angular/core';
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
  constructor() { }
  ngOnInit() {
  }

}
