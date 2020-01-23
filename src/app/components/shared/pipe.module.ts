import { NgModule } from "@angular/core";

import { FilterPipe } from "src/app/pipes/filter.pipe";
import { SanitizeHtmlPipe } from "src/app/pipes/sanitize-html.pipe";
import { PhonePipe } from "src/app/pipes/phone.pipe";
import { PlacePipe } from "src/app/pipes/place.pipe";

@NgModule({
  declarations: [
    FilterPipe,
    SanitizeHtmlPipe,
    PhonePipe,
    PlacePipe,
  ],
  exports: [
    FilterPipe,
    SanitizeHtmlPipe,
    PhonePipe,
    PlacePipe,
  ]
})
export class PipeModule {}
