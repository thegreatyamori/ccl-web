/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (14-dec-2019)
 * - Updated main_image => mission_image (9-jul-2020)
 * ---------------------------------------
 */

export interface Misiones {
  status: boolean;
  res: Mision[];
}

export interface Mision {
  id: number;
  name: string;
  sector: string;
  address?: string;
  schedules?: string;
  type: string;
  subtype?: string;
  image?: Images;
  description?: string;
  message?: string;
}

interface Images {
  mission: string;
  servant: string;
}
