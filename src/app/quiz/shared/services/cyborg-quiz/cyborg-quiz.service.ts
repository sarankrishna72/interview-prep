import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category, Question } from '../../../models/quiz.models';
import { API_URI } from '../../../core/api.uri';

@Injectable({
  providedIn: 'root'
})
export class CyborgQuizService {
  _httpClient = inject(HttpClient);
  constructor() { }

  getQuizCategories() {
    return this._httpClient.get<{ categories: Category[] }>('/assets/json/categories.json');
  }

  getCategoryQuestions(params: any) {
    return this._httpClient.get<Question[]>(`${API_URI.getQuestions}`, {params: params});
  }

}
