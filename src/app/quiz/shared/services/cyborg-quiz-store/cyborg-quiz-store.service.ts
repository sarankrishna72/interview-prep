import { Injectable, signal } from '@angular/core';
import { AiFeedStore, CounterStore } from '../../../models/common.model';
import { QuizResult, SelectedSetup } from '../../../models/quiz.models';

@Injectable({
  providedIn: 'root'
})
export class CyborgQuizStoreService {
  private _selectedSetup = signal< SelectedSetup | null>(null);
  private _counter = signal<CounterStore>({counter: 0, status: 'not started'});
  private _aiFeed = signal<AiFeedStore | null>(null)
  private _questionsStat = signal<QuizResult>({
    question: "",
    score: 0,
    category: "",
    status: "Active"
  })
  public readonly selectedSetup = this._selectedSetup;
  public readonly questionsStat = this._questionsStat;
  public readonly getCounter = this._counter;
  public readonly getAiFeed = this._aiFeed;

  setSelectedSetup(val: SelectedSetup) {
    this._selectedSetup.set(val);
  }

  setQuestionsStat(val: Partial<QuizResult>) {
    this._questionsStat.update(prev => ({...prev, ...val} as QuizResult));
  }

  setCounter(val: Partial<CounterStore>) {
    this._counter.update( prev => ({...prev, ...val}) as CounterStore);
  }

  setAiFeed(val : Partial<AiFeedStore>) {
    this._aiFeed.update(prev => ({...prev, ...val} as AiFeedStore));
  }


  constructor() { }

}
