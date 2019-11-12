/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 * 
 * ---------------------------------------
 * - Creation (9-nov-2019)
 * - Modified RootObject, Tab & Deleted Principio (11-nov-2019)
 * ---------------------------------------
 */

export interface RootObject {
  status: boolean;
  res: Tab[];
}

export interface Tab {
  id: number;
  title: string;
  paragraph: string;
}