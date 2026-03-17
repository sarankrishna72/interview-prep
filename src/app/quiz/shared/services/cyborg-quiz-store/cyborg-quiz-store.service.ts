import { Injectable, signal } from '@angular/core';
import { Difficulty } from '../../../models/common.model';
import { SelectedSetup } from '../../../models/quiz.models';

@Injectable({
  providedIn: 'root'
})
export class CyborgQuizStoreService {
  private _selectedSetup = signal< SelectedSetup | null>(null);
  public readonly selectedSetup = this._selectedSetup;

  setSelectedSetup(val: SelectedSetup) {
    this._selectedSetup.set(val);
  }


  constructor() { }

}
