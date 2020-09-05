import { NgModule } from '@angular/core';

import { PhonePipe } from 'src/app/pipes/phone.pipe';
import { PlacePipe } from 'src/app/pipes/place.pipe';
import { MapFilterPipe } from 'src/app/pipes/map-filter.pipe';
import { BreakFilterPipe } from 'src/app/pipes/break-filter.pipe';
import { SanitizeUrlPipe } from 'src/app/pipes/sanitize-url.pipe';
import { SanitizeHtmlPipe } from 'src/app/pipes/sanitize-html.pipe';
import { SearchFilterPipe } from 'src/app/pipes/search-filter.pipe';
import { SanitizeUrlResourcePipe } from 'src/app/pipes/sanitize-url-resource.pipe';

@NgModule({
  declarations: [
    PhonePipe,
    PlacePipe,
    MapFilterPipe,
    BreakFilterPipe,
    SanitizeUrlPipe,
    SearchFilterPipe,
    SanitizeHtmlPipe,
    SanitizeUrlResourcePipe,
  ],
  exports: [
    PhonePipe,
    PlacePipe,
    MapFilterPipe,
    BreakFilterPipe,
    SanitizeUrlPipe,
    SanitizeHtmlPipe,
    SearchFilterPipe,
    SanitizeUrlResourcePipe,
  ],
})
export class PipeModule {}
