import { NgModule } from '@angular/core';

import { SanitizeHtmlPipe } from 'src/app/pipes/sanitize-html.pipe';
import { SanitizeUrlPipe } from 'src/app/pipes/sanitize-url.pipe';
import { SanitizeUrlResourcePipe } from 'src/app/pipes/sanitize-url-resource.pipe';
import { PhonePipe } from 'src/app/pipes/phone.pipe';
import { PlacePipe } from 'src/app/pipes/place.pipe';
import { SearchFilterPipe } from 'src/app/pipes/search-filter.pipe';
import { MapFilterPipe } from 'src/app/pipes/map-filter.pipe';

@NgModule({
  declarations: [
    SearchFilterPipe,
    MapFilterPipe,
    SanitizeHtmlPipe,
    PhonePipe,
    PlacePipe,
    SanitizeUrlPipe,
    SanitizeUrlResourcePipe,
  ],
  exports: [
    SearchFilterPipe,
    MapFilterPipe,
    SanitizeHtmlPipe,
    PhonePipe,
    PlacePipe,
    SanitizeUrlPipe,
    SanitizeUrlResourcePipe,
  ],
})
export class PipeModule {}
