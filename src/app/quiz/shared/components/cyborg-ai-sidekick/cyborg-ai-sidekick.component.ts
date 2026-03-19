import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CyborgTextComponent } from '../cyborg-text/cyborg-text.component';
import { CyborgQuizStoreService } from '../../services/cyborg-quiz-store/cyborg-quiz-store.service';

@Component({
  selector: 'cyborg-ai-sidekick',
  templateUrl: './cyborg-ai-sidekick.component.html',
  styleUrls: ['./cyborg-ai-sidekick.component.scss'],
  imports: [CyborgTextComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CyborgAiSidekickComponent implements OnInit {
  funnyHintLines = [
    "Emergency brain support activated. Please remain dramatically calm.",
    "Tiny cyber owl says: you totally knew this... probably.",
    "Hint unlocked. Pride temporarily disabled.",
    "Strategic assistance deployed. Definitely not cheating. Mostly.",
    "AI whisper mode enabled: let us pretend this was always your plan."
  ];
  funnyCorrectLines = [
    { avatar: "😎", text: "Direct hit. The servers are impressed." },
    { avatar: "🤖", text: "Correct. I will allow this display of intelligence." },
    { avatar: "⚡", text: "Boom. That answer had main-character energy." },
    { avatar: "🛸", text: "Target acquired. You are suspiciously good at this." }
  ];

  funnyWrongLines = [
    { avatar: "🙃", text: "That was... creative. Sadly, creativity was not the answer." },
    { avatar: "🤕", text: "Oof. Even my circuits felt that one." },
    { avatar: "🫠", text: "Mission wobble detected. Pretend that was a warm-up." },
    { avatar: "👀", text: "Interesting choice. The correct answer disagrees." }
  ];

  _cyborgQuizStoreService = inject(CyborgQuizStoreService);
  
  constructor() { }

  ngOnInit() {
  }

}
