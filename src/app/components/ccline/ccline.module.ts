import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CclineRoutingModule } from './ccline-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CclineComponent } from './ccline.component';
import { TermsComponent } from './terms/terms.component';
import { RegisterFormComponent } from './register-form/register-form.component';

@NgModule({
  declarations: [CclineComponent, RegisterFormComponent, TermsComponent],
  imports: [NgbModule, CommonModule, NgxSpinnerModule, FontAwesomeModule, CclineRoutingModule, ReactiveFormsModule],
})
export class CclineModule {}
