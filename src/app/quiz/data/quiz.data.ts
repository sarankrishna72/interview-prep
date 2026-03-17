import { Category } from '../models/quiz.models';

export const CATEGORIES: Category[] = [
  {
    id: 'html',
    name: 'HTML',
    group: 'Frontend',
    icon: '🌐',
    description: 'Markup and page structure',
    questions: [
      {
        question: 'Which HTML tag is used to create a hyperlink?',
        options: ['<a>', '<link>', '<href>', '<url>'],
        answer: '<a>',
        hint: 'This tag uses the href attribute.'
      },
      {
        question: 'Which tag is used for the largest heading in HTML?',
        options: ['<h6>', '<heading>', '<h1>', '<head>'],
        answer: '<h1>',
        hint: 'Heading tags go from h1 to h6.'
      },
      {
        question: 'Which HTML element is used to display an image?',
        options: ['<img>', '<picture>', '<src>', '<image>'],
        answer: '<img>',
        hint: 'It is a self-closing tag.'
      },
      {
        question: 'Which tag is used to create a paragraph?',
        options: ['<text>', '<para>', '<p>', '<pg>'],
        answer: '<p>',
        hint: 'Very common content tag.'
      },
      {
        question: 'Which section usually contains metadata and page title?',
        options: ['<body>', '<main>', '<head>', '<meta>'],
        answer: '<head>',
        hint: 'Not shown directly as page content.'
      }
    ]
  },
  {
    id: 'css',
    name: 'CSS',
    group: 'Frontend',
    icon: '🎨',
    description: 'Styling and layouts',
    questions: [
      {
        question: 'Which CSS property changes text color?',
        options: ['font-color', 'text-color', 'color', 'foreground'],
        answer: 'color',
        hint: 'Very short property name.'
      },
      {
        question: 'Which property is used to set background color?',
        options: ['color', 'bg-color', 'background-color', 'fill'],
        answer: 'background-color',
        hint: 'Contains both words explicitly.'
      },
      {
        question: 'Which CSS property controls the text size?',
        options: ['font-weight', 'text-size', 'font-size', 'size'],
        answer: 'font-size',
        hint: 'Starts with font-.'
      },
      {
        question: 'Which display value makes items appear in a row or column easily?',
        options: ['block', 'inline', 'flex', 'none'],
        answer: 'flex',
        hint: 'Common for modern layouts.'
      },
      {
        question: 'Which property adds space inside an element?',
        options: ['margin', 'padding', 'gap', 'spacing'],
        answer: 'padding',
        hint: 'Inside, not outside.'
      }
    ]
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    group: 'Frontend',
    icon: '⚡',
    description: 'Logic and interactivity',
    questions: [
      {
        question: 'Which keyword is used to declare a constant in JavaScript?',
        options: ['let', 'const', 'var', 'static'],
        answer: 'const',
        hint: 'Used when value should not be reassigned.'
      },
      {
        question: 'Which method converts JSON text into a JavaScript object?',
        options: ['JSON.convert()', 'JSON.parse()', 'JSON.stringify()', 'parse.JSON()'],
        answer: 'JSON.parse()',
        hint: 'Reading JSON text into usable data.'
      },
      {
        question: 'Which symbol is used for strict equality?',
        options: ['==', '===', '!=', '='],
        answer: '===',
        hint: 'Checks value and type.'
      },
      {
        question: 'Which function is used to print output in the browser console?',
        options: ['print()', 'echo()', 'console.log()', 'log.console()'],
        answer: 'console.log()',
        hint: 'Uses the console object.'
      },
      {
        question: 'Which keyword defines a function?',
        options: ['method', 'define', 'function', 'func'],
        answer: 'function',
        hint: 'Classic JavaScript syntax.'
      }
    ]
  }
];