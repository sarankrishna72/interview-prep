import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

type Question = {
  question: string;
  options: string[];
  answer: string;
  hint: string;
};

type Category = {
  id: string;
  name: string;
  group: string;
  icon: string;
  description: string;
  questions: Question[];
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, OnDestroy {
  readonly totalTime = 15;

  questionBank: Record<string, Question[]> = {
    html: [
      { question: 'Which HTML tag is used to create a hyperlink?', options: ['<a>', '<link>', '<href>', '<url>'], answer: '<a>', hint: 'This tag uses the href attribute.' },
      { question: 'Which tag is used for the largest heading in HTML?', options: ['<h6>', '<heading>', '<h1>', '<head>'], answer: '<h1>', hint: 'Heading tags go from h1 to h6.' },
      { question: 'Which HTML element is used to display an image?', options: ['<img>', '<picture>', '<src>', '<image>'], answer: '<img>', hint: 'It is a self-closing tag.' },
      { question: 'Which tag is used to create a paragraph?', options: ['<text>', '<para>', '<p>', '<pg>'], answer: '<p>', hint: 'Very common content tag.' },
      { question: 'Which section usually contains metadata and page title?', options: ['<body>', '<main>', '<head>', '<meta>'], answer: '<head>', hint: 'Not shown directly as page content.' }
    ],
    css: [
      { question: 'Which CSS property changes text color?', options: ['font-color', 'text-color', 'color', 'foreground'], answer: 'color', hint: 'Very short property name.' },
      { question: 'Which property is used to set background color?', options: ['color', 'bg-color', 'background-color', 'fill'], answer: 'background-color', hint: 'Contains both words explicitly.' },
      { question: 'Which CSS property controls the text size?', options: ['font-weight', 'text-size', 'font-size', 'size'], answer: 'font-size', hint: 'Starts with font-.' },
      { question: 'Which display value makes items appear in a row or column easily?', options: ['block', 'inline', 'flex', 'none'], answer: 'flex', hint: 'Common for modern layouts.' },
      { question: 'Which property adds space inside an element?', options: ['margin', 'padding', 'gap', 'spacing'], answer: 'padding', hint: 'Inside, not outside.' }
    ],
    javascript: [
      { question: 'Which keyword is used to declare a constant in JavaScript?', options: ['let', 'const', 'var', 'static'], answer: 'const', hint: 'Used when value should not be reassigned.' },
      { question: 'Which method converts JSON text into a JavaScript object?', options: ['JSON.convert()', 'JSON.parse()', 'JSON.stringify()', 'parse.JSON()'], answer: 'JSON.parse()', hint: 'Reading JSON text into usable data.' },
      { question: 'Which symbol is used for strict equality?', options: ['==', '===', '!=', '='], answer: '===', hint: 'Checks value and type.' },
      { question: 'Which function is used to print output in the browser console?', options: ['print()', 'echo()', 'console.log()', 'log.console()'], answer: 'console.log()', hint: 'Uses the console object.' },
      { question: 'Which keyword defines a function?', options: ['method', 'define', 'function', 'func'], answer: 'function', hint: 'Classic JavaScript syntax.' }
    ],
    angular: [
      { question: 'Which decorator is used to define an Angular component?', options: ['@Module', '@Injectable', '@Component', '@DirectiveHost'], answer: '@Component', hint: 'Includes selector, template, and styles.' },
      { question: 'Which syntax is used for property binding?', options: ['{{value}}', '[value]', '(value)', '*value'], answer: '[value]', hint: 'Square brackets.' },
      { question: 'Which syntax is used for event binding?', options: ['{click}', '(click)', '[click]', '*click'], answer: '(click)', hint: 'Round brackets.' },
      { question: 'Which directive is commonly used for looping in templates?', options: ['*ngShow', '*ngIf', '*ngFor', '*ngLoop'], answer: '*ngFor', hint: 'Repeats elements over a collection.' },
      { question: 'Which file typically contains the component template?', options: ['component.ts', 'component.css', 'component.html', 'angular.json'], answer: 'component.html', hint: 'Contains markup.' }
    ],
    react: [
      { question: 'Which hook is used to manage state in a functional component?', options: ['useRef', 'useState', 'useMemo', 'useEffect'], answer: 'useState', hint: 'Returns value and setter.' },
      { question: 'Which hook runs side effects after rendering?', options: ['useMemo', 'useCallback', 'useEffect', 'useContext'], answer: 'useEffect', hint: 'Think effects, API calls, subscriptions.' },
      { question: 'What prop helps React identify list items uniquely?', options: ['id', 'name', 'index', 'key'], answer: 'key', hint: 'Without it, React warns in lists.' },
      { question: 'JSX is primarily compiled into what?', options: ['HTML', 'React.createElement calls', 'CSS', 'SQL'], answer: 'React.createElement calls', hint: 'JSX is syntax sugar.' },
      { question: 'Which hook stores a mutable value without causing re-renders?', options: ['useRef', 'useState', 'useReducer', 'useLayoutEffect'], answer: 'useRef', hint: 'Also used for DOM refs.' }
    ],
    python: [
      { question: 'Which keyword defines a function in Python?', options: ['func', 'def', 'function', 'lambda'], answer: 'def', hint: 'Short keyword.' },
      { question: 'Which data type is ordered and mutable?', options: ['tuple', 'set', 'list', 'dict-key'], answer: 'list', hint: 'Uses square brackets.' },
      { question: 'Which symbol starts a comment in Python?', options: ['//', '#', '--', '/*'], answer: '#', hint: 'Single-character prefix.' },
      { question: 'Which function prints output?', options: ['echo()', 'console.log()', 'print()', 'write()'], answer: 'print()', hint: 'Common beginner function.' },
      { question: 'Which keyword is used for conditional branching?', options: ['switch', 'case', 'if', 'when'], answer: 'if', hint: 'Starts conditions.' }
    ]
  };

  categories: Category[] = [
    { id: 'html', name: 'HTML', group: 'Frontend', icon: '🌐', description: 'Markup and page structure', questions: this.questionBank['html'] },
    { id: 'css', name: 'CSS', group: 'Frontend', icon: '🎨', description: 'Styling and layouts', questions: this.questionBank['css'] },
    { id: 'javascript', name: 'JavaScript', group: 'Frontend', icon: '⚡', description: 'Logic and interactivity', questions: this.questionBank['javascript'] },
    { id: 'angular', name: 'Angular', group: 'Frontend', icon: '🅰️', description: 'Templates and bindings', questions: this.questionBank['angular'] },
    { id: 'react', name: 'React', group: 'Frontend', icon: '⚛️', description: 'Components and hooks', questions: this.questionBank['react'] },
    { id: 'python', name: 'Python', group: 'Programming', icon: '🐍', description: 'Syntax and functions', questions: this.questionBank['python'] },
    { id: 'sql', name: 'SQL', group: 'Database', icon: '️', description: 'Database queries', questions: this.questionBank['sql'] }
  ];

  screen: 'home' | 'quiz' | 'result' = 'home';

  playerName = '';
  categorySearch = '';
  questionCount = 5;
  activeGroup = 'All';
  selectedCategoryId = 'html';

  currentQuiz: Question[] = [];
  currentQuestionIndex = 0;
  score = 0;
  hintsUsed = 0;
  timeLeft = this.totalTime;
  selectedAnswer: string | null = null;

  hintOpen = false;
  hintFunnyText = '';
  assistantAvatar = '🤖';
  assistantMessage = '';
  typingDisplay = '';
  speechEnabled = true;
  voiceState: 'standby' | 'active' | 'muted' = 'standby';

  particles = Array.from({ length: 100 }, (_, i) => i);

  private timerId: ReturnType<typeof setInterval> | null = null;
  private typingId: ReturnType<typeof setTimeout> | null = null;

  readonly funnyHintLines = [
    'Emergency brain support activated. Please remain dramatically calm.',
    'Tiny cyber owl says: you totally knew this... probably.',
    'Hint unlocked. Pride temporarily disabled.',
    'Strategic assistance deployed. Definitely not cheating. Mostly.',
    'AI whisper mode enabled: let us pretend this was always your plan.'
  ];

  readonly funnyCorrectLines = [
    { avatar: '😎', text: 'Direct hit. The servers are impressed.' },
    { avatar: '🤖', text: 'Correct. I will allow this display of intelligence.' },
    { avatar: '⚡', text: 'Boom. That answer had main-character energy.' },
    { avatar: '🛸', text: 'Target acquired. You are suspiciously good at this.' }
  ];

  readonly funnyWrongLines = [
    { avatar: '🙃', text: 'That was... creative. Sadly, creativity was not the answer.' },
    { avatar: '🤕', text: 'Oof. Even my circuits felt that one.' },
    { avatar: '🫠', text: 'Mission wobble detected. Pretend that was a warm-up.' },
    { avatar: '👀', text: 'Interesting choice. The correct answer disagrees.' }
  ];

  ngOnInit(): void {
    this.setAssistantMessage('Systems online. Search, select, and launch your next quiz mission.', '🤖', false);
  }

  ngOnDestroy(): void {
    this.clearTimer();
    this.clearTyping();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }

  get groups(): string[] {
    return ['All', ...new Set(this.categories.map(c => c.group))];
  }

  get filteredCategories(): Category[] {
    const search = this.categorySearch.trim().toLowerCase();
    return this.categories.filter(cat => {
      const groupOk = this.activeGroup === 'All' || cat.group === this.activeGroup;
      const searchOk =
        !search ||
        cat.name.toLowerCase().includes(search) ||
        cat.description.toLowerCase().includes(search) ||
        cat.group.toLowerCase().includes(search);
      return groupOk && searchOk;
    });
  }

  get currentQuestion(): Question | null {
    return this.currentQuiz[this.currentQuestionIndex] ?? null;
  }

  get progressPercent(): number {
    if (!this.currentQuiz.length) return 0;
    return Math.round(((this.currentQuestionIndex + 1) / this.currentQuiz.length) * 100);
  }

  get accuracy(): number {
    if (!this.currentQuiz.length) return 0;
    return Math.round((this.score / this.currentQuiz.length) * 100);
  }

  get wrongCount(): number {
    return this.currentQuiz.length - this.score;
  }

  get selectedCategory(): Category | undefined {
    return this.categories.find(c => c.id === this.selectedCategoryId);
  }

  setGroup(group: string): void {
    this.activeGroup = group;
    if (!this.filteredCategories.some(c => c.id === this.selectedCategoryId) && this.filteredCategories.length) {
      this.selectedCategoryId = this.filteredCategories[0].id;
    }
  }

  selectCategory(id: string): void {
    this.selectedCategoryId = id;
  }

  resetConfig(): void {
    this.playerName = '';
    this.categorySearch = '';
    this.questionCount = 5;
    this.activeGroup = 'All';
    this.selectedCategoryId = 'html';
  }

  startQuiz(): void {
    const category = this.selectedCategory ?? this.categories[0];
    const shuffled = this.shuffle([...category.questions]);
    this.currentQuiz = shuffled.slice(0, Math.min(this.questionCount, category.questions.length));
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.hintsUsed = 0;
    this.selectedAnswer = null;
    this.screen = 'quiz';
    this.loadQuestion();
    this.setAssistantMessage('Systems online. Try not to defeat me with pure guessing.', '🤖');
  }

  loadQuestion(): void {
    this.clearTimer();
    this.selectedAnswer = null;
    this.timeLeft = this.totalTime;
    this.startTimer();
  }

  startTimer(): void {
    this.timerId = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft <= 0) {
        this.timeLeft = 0;
        this.clearTimer();
        this.revealCorrectAnswer();
      }
    }, 1000);
  }

  clearTimer(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  selectOption(option: string): void {
    if (!this.currentQuestion || this.selectedAnswer) return;

    this.selectedAnswer = option;
    this.clearTimer();

    if (option === this.currentQuestion.answer) {
      this.score++;
      const reaction = this.random(this.funnyCorrectLines);
      this.setAssistantMessage(reaction.text, reaction.avatar);
    } else {
      const reaction = this.random(this.funnyWrongLines);
      this.setAssistantMessage(reaction.text, reaction.avatar);
    }
  }

  revealCorrectAnswer(): void {
    this.setAssistantMessage('Time over. Even the clock got impatient.', '⏳');
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex < this.currentQuiz.length - 1) {
      this.currentQuestionIndex++;
      this.loadQuestion();
    } else {
      this.showResult();
    }
  }

  showResult(): void {
    this.screen = 'result';
    if (this.accuracy >= 80) {
      this.setAssistantMessage('Victory protocol confirmed. That performance was dangerously impressive.', '🏆');
    } else if (this.accuracy >= 50) {
      this.setAssistantMessage('Partial mission success. Respectable. Chaotic, but respectable.', '😅');
    } else {
      this.setAssistantMessage('System needs patching. Fortunately, retries are cheaper than shame.', '💥');
    }
  }

  restartQuiz(): void {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.hintsUsed = 0;
    this.selectedAnswer = null;
    this.screen = 'quiz';
    this.loadQuestion();
    this.setAssistantMessage('System rebooted. Let us pretend the previous attempt was classified.', '🤖');
  }

  goHome(): void {
    this.clearTimer();
    this.hintOpen = false;
    this.screen = 'home';
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    this.voiceState = this.speechEnabled ? 'standby' : 'muted';
  }

  openHint(): void {
    if (!this.currentQuestion || this.selectedAnswer) return;
    this.hintsUsed++;
    this.hintFunnyText = this.random(this.funnyHintLines);
    this.hintOpen = true;
    this.setAssistantMessage('Hint deployed. Your dignity is still mostly intact.', '🧠');
  }

  closeHint(): void {
    this.hintOpen = false;
  }

  toggleVoice(): void {
    this.speechEnabled = !this.speechEnabled;
    if (!this.speechEnabled) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      this.voiceState = 'muted';
      this.setAssistantMessage('Voice reactions disabled. I shall judge you silently.', '🔇', false);
    } else {
      this.voiceState = 'standby';
      this.setAssistantMessage('Voice reactions enabled. I have regained my dramatic presence.', '🔊', true);
    }
  }

  optionState(option: string): 'default' | 'correct' | 'wrong' | 'selected' {
    if (!this.currentQuestion) return 'default';
    if (!this.selectedAnswer && this.timeLeft > 0) return 'default';
    if (option === this.currentQuestion.answer) return 'correct';
    if (this.selectedAnswer === option && option !== this.currentQuestion.answer) return 'wrong';
    if (this.selectedAnswer === option) return 'selected';
    return 'default';
  }

  private setAssistantMessage(text: string, avatar = '🤖', withVoice = true): void {
    this.assistantAvatar = avatar;
    this.assistantMessage = text;
    this.typingDisplay = '';
    this.clearTyping();

    let i = 0;
    const type = () => {
      this.typingDisplay = text.slice(0, i);
      i++;
      if (i <= text.length) {
        this.typingId = setTimeout(type, 18);
      } else if (withVoice) {
        this.speak(text);
      }
    };
    type();
  }

  private clearTyping(): void {
    if (this.typingId) {
      clearTimeout(this.typingId);
      this.typingId = null;
    }
  }

  private speak(text: string): void {
    if (!this.speechEnabled || !('speechSynthesis' in window)) {
      this.voiceState = 'muted';
      return;
    }

    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.02;
      utterance.pitch = 1.1;
      utterance.volume = 0.85;

      utterance.onstart = () => {
        this.voiceState = 'active';
      };
      utterance.onend = () => {
        this.voiceState = this.speechEnabled ? 'standby' : 'muted';
      };
      utterance.onerror = () => {
        this.voiceState = this.speechEnabled ? 'standby' : 'muted';
      };

      window.speechSynthesis.speak(utterance);
    } catch {
      this.voiceState = 'standby';
    }
  }

  private shuffle<T>(arr: T[]): T[] {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  private random<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
  }
}