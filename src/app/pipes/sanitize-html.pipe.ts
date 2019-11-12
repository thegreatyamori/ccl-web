/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (11-nov-2019)
 * ---------------------------------------
 */

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeHtml'
})
export class SanitizeHtmlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(v:string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(v);
  }

}
