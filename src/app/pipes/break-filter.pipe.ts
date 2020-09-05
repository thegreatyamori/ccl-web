import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'breakFilter',
})
export class BreakFilterPipe implements PipeTransform {
  transform(value: String, ...args: unknown[]): String {
    if (value !== undefined) return value.replace(/\r\n/g, '<br />');
  }
}
