import { Pipe, PipeTransform } from "@angular/core";
import { HDB } from "src/app/models/hdb";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    if (arg === "" || arg.length < 3) return <HDB>{};
    const resultHDB = [];
    for (const hdb of value) {
      if (
        hdb.typeHDB.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
        hdb.day.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
        hdb.reference.toLowerCase().indexOf(arg.toLowerCase()) > -1
      ) {
        resultHDB.push(hdb);
      }
    }
    return resultHDB;
  }
}
