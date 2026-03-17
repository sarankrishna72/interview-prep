import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category, Question } from '../../../models/quiz.models';

@Injectable({
  providedIn: 'root'
})
export class CyborgQuizService {
  _httpClient = inject(HttpClient);
  constructor() { }

  getQuizCategories() {
    return this._httpClient.get<{ categories: Category[] }>('/assets/json/categories.json');
  }

  getCategoryQuestions(category: string) {
    return this._httpClient.get<Question[]>(`/assets/json/${category}.json`);
  }

}
