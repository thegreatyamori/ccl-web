/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author gauravsoni119
 * @link https://github.com/gauravsoni119/ng2-tel-input
 *
 * ---------------------------------------
 * - Creation (04-sep-2020)
 * ---------------------------------------
 */

import { Directive, OnInit, Output, EventEmitter, ElementRef, PLATFORM_ID, Inject, HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as intlTelInput from 'intl-tel-input';

@Directive({
  selector: '[internationalPhone]',
})
export class InternationalPhoneInputDirective implements OnInit {
  @Output('numberData') numberData: EventEmitter<any> = new EventEmitter();
  @Output('valid') valid: EventEmitter<any> = new EventEmitter();
  // TODO: Change library if not working on future
  private defaultUtilScript = 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/js/utils.js';

  ngTelInput: any;

  constructor(private el: ElementRef, @Inject(PLATFORM_ID) private platformId: string) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.ngTelInput = intlTelInput(this.el.nativeElement, {
        initialCountry: 'ec',
        utilsScript: this.defaultUtilScript,
      });
    }
  }

  @HostListener('keyup') onKeyUp() {
    this.valid.emit(this.ngTelInput.isValidNumber());
  }

  @HostListener('blur') onBlur() {
    // https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
    let { name, iso2 }: { name: String; iso2: String } = this.ngTelInput.getSelectedCountryData();
    let isValid: boolean = this.ngTelInput.isValidNumber();
    let number: String = this.ngTelInput.getNumber();

    this.numberData.emit({
      isValid,
      number,
      name,
      iso2,
    });
  }
}
