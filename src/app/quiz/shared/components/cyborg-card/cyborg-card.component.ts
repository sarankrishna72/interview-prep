import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';
import { CardType } from '../../../models/common.model';
import { CyborgTextComponent } from '../cyborg-text/cyborg-text.component';

@Component({
  selector: 'cyborg-card',
  templateUrl: './cyborg-card.component.html',
  styleUrls: ['./cyborg-card.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, CyborgTextComponent]
})
export class CyborgCardComponent implements OnInit {
  isAnimation = input<boolean>(false);
  cardClass = input<string>('');
  cardType = input<CardType>('primary');
  cardTitle = input<string>('');
  constructor() { }

  ngOnInit() {
  }

}
