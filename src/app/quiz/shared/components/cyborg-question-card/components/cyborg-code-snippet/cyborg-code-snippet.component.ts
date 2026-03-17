import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
  codeSnippet =`<span class="kw">function</span> <span class="fn">calculateSquares</span>(<span class="var">numbers</span>) {
  <span class="kw">if</span> (!Array.isArray(<span class="var">numbers</span>)) {
    console.log(<span class="str">"Input must be an array"</span>);
    <span class="kw">return</span>;
  }

  <span class="kw">const</span> <span class="var">squares</span> = [];

  <span class="kw">for</span> (<span class="kw">let</span> <span class="var">i</span> = <span class="num">0</span>; <span class="var">i</span> &lt; <span class="var">numbers</span>.length; <span class="var">i</span><span class="op">++</span>) {
    <span class="var">squares</span>.push(<span class="var">numbers</span>[<span class="var">i</span>] <span class="op">*</span> <span class="var">numbers</span>[<span class="var">i</span>]);
  }

  <span class="kw">return</span> <span class="var">squares</span>;
}

<span class="kw">const</span> <span class="var">nums</span> = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>];
<span class="kw">const</span> <span class="var">result</span> = <span class="fn">calculateSquares</span>(<span class="var">nums</span>);
console.log(<span class="var">result</span>);`
  constructor() { }

  ngOnInit() {
  }

}
