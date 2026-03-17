import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cyborg-stat-card',
  templateUrl: './cyborg-stat-card.component.html',
  styleUrls: ['./cyborg-stat-card.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CyborgStatCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
