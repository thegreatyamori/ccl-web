import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "phone"
})
export class PhonePipe implements PipeTransform {
  transform(value: number, args: string): any {
    let phone = value.toString();

    if (args === "movil") {
      phone = `0${phone.substring(0, 2)} ${phone.substring(
        2,
        5
      )} ${phone.substring(5)}`;
    }
    else if (args === "convencional") {
      phone = `07 ${phone.substring(0, 3)}-${phone.substring(3)}`;
    }

    return phone;
  }
}
