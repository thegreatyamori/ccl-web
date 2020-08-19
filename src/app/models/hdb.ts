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

export interface StateHDB {
  id: string;
  state: boolean;
}

export interface MapState {
  isActive: boolean;
  place: string;
}

export interface FilterState {
  title: string;
  type: boolean;
  day: boolean;
}

export interface ColorState {
  classMap: string;
  classStroke: string;
  classBg: string;
}

export interface SVGTag {
  type: string;
  attributes: any;
  children?: any;
}
