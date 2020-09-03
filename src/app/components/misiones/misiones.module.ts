import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PipeModule } from '../shared/pipe.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { FooterModule } from '../shared/footer/footer.module';
import { DirectivesModule } from '../shared/directives.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MisionesRoutingModule } from './misiones-routing.module';
import { MisionesComponent } from './misiones.component';
import { ModalComponent } from './modal/modal.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [MisionesComponent, ModalComponent, DetailComponent],
  imports: [
    NgbModule,
    PipeModule,
    CommonModule,
    FooterModule,
    DirectivesModule,
    NgxSpinnerModule,
    FontAwesomeModule,
    LazyLoadImageModule,
    MisionesRoutingModule,
  ],
})
export class MisionesModule {}
