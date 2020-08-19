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
  mission_name: string;
  mission_sector: string;
  mission_address?: string;
  mission_schedules?: string;
  mission_type: string;
  mission_locale?: string;
  mission_support?: string;
  mission_image?: string;
  servants_image?: string;
  servants_description?: string;
  servants_message?: string;
}
