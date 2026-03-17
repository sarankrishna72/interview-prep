import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, OnInit, SimpleChanges } from '@angular/core';
import { CyborgTextProps } from '../../../models/text.model';

@Component({
  selector: 'cyborg-text',
  templateUrl: './cyborg-text.component.html',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./cyborg-text.component.scss']
})
export class CyborgTextComponent implements OnInit {
  textConfig = input<CyborgTextProps | null>( null);
  textStyle = input<{ [key: string]: string }>({});
  textClass = input<string>('');
  textClasses = '';
  constructor() { }

  generateTextConfigClass() {
    if (this.textConfig()) {
      const classes = []; 
      for (const [key, value] of Object.entries(this.textConfig()!)) {
        if (value) {
          classes.push(`cyborg-text-${key}-${value}`);
        }
      }
      return classes.join(' ');
    }
    return '';
   
  }

  generateTextClass() {
    this.textClasses = this.generateTextConfigClass();
    if (this.textClass()) {
      this.textClasses += ` ${this.textClass()}`;
    }
  }


  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (changes['textConfig'] || changes['textTheme'] || changes['textClass']) {
      this.generateTextClass();
    }
  }

  ngOnInit() {
  }

}
