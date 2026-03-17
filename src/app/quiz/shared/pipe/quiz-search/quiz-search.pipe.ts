import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quizSearch',
  pure: true
})
export class QuizSearchPipe implements PipeTransform {
 transform(items: any[], searchText: string, keys: string[]): any[] {

    if (!items || !searchText) {
      return items;
    }

    const term = searchText.toLowerCase();

    return items.filter(item =>
      keys.some(key =>
        item[key]?.toString().toLowerCase().includes(term)
      )
    );
  }
}
