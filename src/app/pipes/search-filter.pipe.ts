import { Pipe, PipeTransform } from "@angular/core";
import { LightHDB } from "../models/hdb";

@Pipe({
  name: "searchFilter"
})
export class SearchFilterPipe implements PipeTransform {
  transform(value: LightHDB[], search: string): LightHDB[] {
    let resultHDB = [];

    // Retorna un HDB vacio si no existe la busqueda o es menor a 3 caracteres
    if (search === "" || search.length < 3) return [];

    // Busca coincidencias por tipo, dia o referencia
    for (const hdb of value) {
      if (
        hdb.typeHDB.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
        hdb.day.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
        hdb.reference.toLowerCase().indexOf(search.toLowerCase()) > -1
      ) {
        resultHDB.push(hdb);
      }
    }

    return resultHDB;
  }
}
