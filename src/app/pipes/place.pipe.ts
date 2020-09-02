import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'place',
})
export class PlacePipe implements PipeTransform {
  transform(value: string): any {
    value.toLocaleLowerCase();
    return value.split('_').join(' ').toLowerCase();
  }
}
