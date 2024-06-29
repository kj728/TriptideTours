import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenDescription',
  standalone: true
})
export class ShortenDescriptionPipe implements PipeTransform {

  transform(value: string, limit: number): string {
    if (!value) {
      return '';
    }
    if (value.length > limit) {
      return value.substr(0, limit) + '...';
    }
    return value;
  }

}
