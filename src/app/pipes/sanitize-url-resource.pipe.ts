import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeUrlResource',
})
export class SanitizeUrlResourcePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(v: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(v);
  }
}
