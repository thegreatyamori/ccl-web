/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (22-ago-2020)
 * ---------------------------------------
 */

export interface RootObject {
  general: View;
  transculturales: View;
  locales: View;
  campos_blancos: View;
}

export interface View {
  title: string;
  text: string;
  buttons?: Button[];
  default: string;
  bg: string;
}

interface Button {
  text: string;
  color: string;
  link: string;
}
