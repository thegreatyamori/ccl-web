import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SharedComponent } from './shared.component';
import { StreamComponent } from './stream/stream.component';
import { MiniComponent } from './mini/mini.component';
import { FullPlayerDirective } from 'src/app/directives/full-player.directive';

@NgModule({
  declarations: [
    SharedComponent,
    StreamComponent,
    MiniComponent,
    FullPlayerDirective
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [SharedComponent]
})
export class SharedModule {}
