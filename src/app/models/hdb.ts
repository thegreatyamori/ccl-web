/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (14-dec-2019)
 * ---------------------------------------
 */

export interface RootObject {
  status: boolean;
  res: HDB[];
}
export interface HDB {
  id: number;
  typeHDB: string;
  day: string;
  hour: string;
  place: string;
  reference: string;
  posX: number;
  posY: number;
  firstName: string;
  surName: string;
  telephone: number;
  alternative: number;
  image: string;
  isActive: number;
}

export interface LightHDB {
  typeHDB: string;
  day: string;
  hour: string;
  place: string;
  reference: string;
  posX: number;
  posY: number;
  name: string;
  telephone: number;
  alternative: number;
  image: string;
  color: string;
}
