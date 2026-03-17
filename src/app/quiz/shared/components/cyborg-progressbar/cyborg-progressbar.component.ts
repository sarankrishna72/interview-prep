import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';
import { CyborgTextComponent } from '../cyborg-text/cyborg-text.component';
import { CyborgCardComponent } from '../cyborg-card/cyborg-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cyborg-progressbar',
  templateUrl: './cyborg-progressbar.component.html',
  styleUrls: ['./cyborg-progressbar.component.scss'],
  imports: [
    CyborgTextComponent,
    CyborgCardComponent,
    CommonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CyborgProgressbarComponent implements OnInit {
  progress = input<number>(0);

  constructor() { }

  ngOnInit() {
  }

}
