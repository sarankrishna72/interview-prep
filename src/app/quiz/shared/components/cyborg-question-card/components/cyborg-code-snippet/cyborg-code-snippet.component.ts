import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';
import { CyborgTextComponent } from '../../../cyborg-text/cyborg-text.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cyborg-code-snippet',
  templateUrl: './cyborg-code-snippet.component.html',
  styleUrls: ['./cyborg-code-snippet.component.scss'],
  imports: [CyborgTextComponent, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CyborgCodeSnippetComponent implements OnInit {
  codeSnippet = input.required<string>();
  constructor() { }

  ngOnInit() {
  }

}
