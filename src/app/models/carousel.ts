/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (14-dec-2019)
 * ---------------------------------------
 */

export interface Carousel {
  loop: boolean;
  mouseDrag: boolean;
  touchDrag: boolean;
  pullDrag: boolean;
  dots: boolean;
  navSpeed: number;
  navText: string[];
  autoplayTimeout?: number;
  autoplaySpeed?: number;
  autoplay?: boolean;
  responsive?: Responsive;
  nav: boolean;
}

interface Responsive {
  '0': _0;
  '576'?: _0;
  '850'?: _0;
  '1200'?: _0;
}

interface _0 {
  items: number;
}
