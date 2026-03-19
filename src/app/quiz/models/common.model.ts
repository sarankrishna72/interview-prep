export type CardType = 'primary' | 'secondary';
export type Difficulty = 'easy' | 'medium' | 'hard' | '';
export type CounterStore = {counter: number, status: 'completed' | 'inprogress' | 'not started' | 'reset'}
export type AiFeedStore = { type: 'funny' | 'hint' | 'wrong', message: string, avatar ?: any }