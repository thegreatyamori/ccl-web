/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (11-nov-2019)
 * ---------------------------------------
 */

import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import { DomSanitizer } from '@angular/platform-browser';

describe('SanitizeHtmlPipe', () => {
  it('create an instance', () => {
    const pipe = new SanitizeHtmlPipe(sanitizer: DomSanitizer);
    expect(pipe).toBeTruthy();
  });
});
