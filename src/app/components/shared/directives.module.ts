import { NgModule } from '@angular/core';
import { ParallaxDirective } from 'src/app/directives/parallax.directive';
// import { LazyImgDirective } from 'src/app/directives/lazy-img.directive';

@NgModule({
  declarations: [
    ParallaxDirective,
    // LazyImgDirective
  ],
  exports: [ParallaxDirective],
})
export class DirectivesModule {}
