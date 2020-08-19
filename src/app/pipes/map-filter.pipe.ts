import { Pipe, PipeTransform } from "@angular/core";
import { LightHDB } from "../models/hdb";

@Pipe({
  name: "mapFilter"
})
export class MapFilterPipe implements PipeTransform {
  transform(value: LightHDB[], place: string, filterBy: string): LightHDB[] {
    if (!value.length) return [];

    if (filterBy === "filtrar") {
      // Filtra segun el sector
      return value.filter(item => item.place === place);
    } else {
      // Filtra segun el sector y el tipo de filtro: type o day
      return value
        .filter(item => item.place === place)
        .filter(item => item.typeHDB === filterBy || item.day === filterBy);
      // .filter(item => item.day === filterBy);
    }
  }
}
