import { NgModule } from '@angular/core';
import { ParallaxDirective } from 'src/app/directives/parallax.directive';
// import { LazyImgDirective } from 'src/app/directives/lazy-img.directive';
import { InternationalPhoneInputDirective } from 'src/app/directives/international-phone-input.directive';

@NgModule({
  declarations: [
    ParallaxDirective,
    // LazyImgDirective,
    InternationalPhoneInputDirective,
  ],
  exports: [ParallaxDirective, InternationalPhoneInputDirective],
})
export class DirectivesModule {}
