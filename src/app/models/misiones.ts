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
  main_image?: string;
  servants_image?: string;
  servants_description?: string;
  servants_message?: string;
}
