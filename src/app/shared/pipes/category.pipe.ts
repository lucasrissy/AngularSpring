import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})

export class CategoryPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    switch (value) {
      case 'Front-end':
        return 'code';
      case 'Cloud':
        return 'cloud';
      case 'Back-End':
        return 'data_object';
      case 'Test':
        return 'bug_report';
    }
    return 'code';
  }

}
