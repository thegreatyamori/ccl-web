import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'place'
})
export class PlacePipe implements PipeTransform {

  transform(value: string): any {
    value.toLocaleLowerCase();
    // separamos la cadena en un array
    let place = value.split('_');

    // unimos el resultado
    let join = place.join(" ");

    // retornamos un lowercase
    return join.toLowerCase();
  }
}
