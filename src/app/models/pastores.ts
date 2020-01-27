/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (26-ene-2020)
 * ---------------------------------------
 */

export interface RootObject {
  status: boolean;
  res: Pastor[];
}

export interface Pastor {
  id: number;
  title: string;
  position: string;
  description: string;
  image: string;
}
